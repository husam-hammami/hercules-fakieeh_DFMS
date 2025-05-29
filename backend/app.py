import os
from datetime import datetime
from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
CORS(app)

# Database configuration
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get(
    'DATABASE_URL',
    'postgresql://hercules:hercules@localhost:5432/hercules'
)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)


def to_dict(model):
    """Convert SQLAlchemy model instance to dictionary."""
    result = {}
    for column in model.__table__.columns:
        result[column.name] = getattr(model, column.name)
    return result


class Material(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120))
    code = db.Column(db.String(120), unique=True)
    type = db.Column(db.String(120))
    uom = db.Column(db.String(40))
    stock = db.Column(db.Float, default=0)
    status = db.Column(db.String(20), default='active')


class Order(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    order_id = db.Column(db.String(40), unique=True, nullable=False)
    customer_name = db.Column(db.String(120))
    truck_id = db.Column(db.String(40))
    material_code = db.Column(db.String(120))
    quantity = db.Column(db.Float, default=0)
    status = db.Column(db.String(20), default='pending')
    priority = db.Column(db.String(20), default='low')
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    estimated_completion = db.Column(db.DateTime)


class InventoryItem(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120))
    category = db.Column(db.String(120))
    quantity = db.Column(db.Float, default=0)
    location = db.Column(db.String(120))
    rfid_tags = db.Column(db.Text)  # comma separated IDs
    last_updated = db.Column(db.DateTime, default=datetime.utcnow)
    status = db.Column(db.String(20), default='in_stock')


class RFIDTag(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    tag_id = db.Column(db.String(40), unique=True, nullable=False)
    location = db.Column(db.String(120))
    status = db.Column(db.String(20), default='active')
    last_seen = db.Column(db.DateTime, default=datetime.utcnow)
    associated_order = db.Column(db.String(40))
    battery_level = db.Column(db.Integer, default=100)


class Truck(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    truck_number = db.Column(db.String(40), unique=True)
    driver_name = db.Column(db.String(120))
    company = db.Column(db.String(120))
    arrival_time = db.Column(db.DateTime, default=datetime.utcnow)
    status = db.Column(db.String(20), default='arrived')
    departure_time = db.Column(db.DateTime)
    associated_orders = db.Column(db.Text)
    bay_number = db.Column(db.String(20))


class Alarm(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    alarm_id = db.Column(db.String(40), unique=True, nullable=False)
    type = db.Column(db.String(20), default='info')
    message = db.Column(db.Text)
    source = db.Column(db.String(120))
    timestamp = db.Column(db.DateTime, default=datetime.utcnow)
    status = db.Column(db.String(20), default='active')
    operator = db.Column(db.String(120))

# Simple ID counters
counters = {
    'material': 0,
    'order': 0,
    'inventory': 0,
    'rfid': 0,
    'truck': 0,
    'alarm': 0
}

def next_id(prefix: str) -> str:
    counters[prefix] += 1
    return f"{prefix.upper()}-{counters[prefix]:03d}"

@app.get('/api/materials')
def get_materials():
    items = Material.query.all()
    return jsonify([to_dict(m) for m in items])

@app.post('/api/materials')
def create_material():
    data = request.get_json(force=True)
    m = Material(
        name=data.get('name', ''),
        code=data.get('code', ''),
        type=data.get('type', ''),
        uom=data.get('uom', ''),
        stock=data.get('stock', 0),
        status=data.get('status', 'active')
    )
    db.session.add(m)
    db.session.commit()
    return jsonify(to_dict(m)), 201

@app.get('/api/orders')
def get_orders():
    items = Order.query.all()
    return jsonify([to_dict(o) for o in items])

@app.post('/api/orders')
def create_order():
    data = request.get_json(force=True)
    o = Order(
        order_id=next_id('order'),
        customer_name=data.get('customerName'),
        truck_id=data.get('truckId'),
        material_code=data.get('materialCode'),
        quantity=data.get('quantity', 0),
        status=data.get('status', 'pending'),
        priority=data.get('priority', 'low'),
        estimated_completion=data.get('estimatedCompletion')
    )
    db.session.add(o)
    db.session.commit()
    return jsonify(to_dict(o)), 201

@app.get('/api/inventory')
def get_inventory():
    items = InventoryItem.query.all()
    return jsonify([to_dict(i) for i in items])

@app.post('/api/inventory')
def create_inventory_item():
    data = request.get_json(force=True)
    i = InventoryItem(
        name=data.get('name', ''),
        category=data.get('category', ''),
        quantity=data.get('quantity', 0),
        location=data.get('location', ''),
        rfid_tags=','.join(data.get('rfidTags', [])),
        status=data.get('status', 'in_stock')
    )
    db.session.add(i)
    db.session.commit()
    return jsonify(to_dict(i)), 201

@app.get('/api/rfid-tags')
def get_rfid_tags():
    tags = RFIDTag.query.all()
    return jsonify([to_dict(t) for t in tags])

@app.post('/api/rfid-tags')
def create_rfid_tag():
    data = request.get_json(force=True)
    t = RFIDTag(
        tag_id=next_id('rfid'),
        location=data.get('location', ''),
        status=data.get('status', 'active'),
        associated_order=data.get('associatedOrder'),
        battery_level=data.get('batteryLevel', 100)
    )
    db.session.add(t)
    db.session.commit()
    return jsonify(to_dict(t)), 201

@app.get('/api/trucks')
def get_trucks():
    items = Truck.query.all()
    return jsonify([to_dict(t) for t in items])

@app.post('/api/trucks')
def register_truck():
    data = request.get_json(force=True)
    t = Truck(
        truck_number=data.get('truckNumber', ''),
        driver_name=data.get('driverName', ''),
        company=data.get('company', ''),
        status=data.get('status', 'arrived'),
        associated_orders=','.join(data.get('associatedOrders', [])),
        bay_number=data.get('bayNumber')
    )
    db.session.add(t)
    db.session.commit()
    return jsonify(to_dict(t)), 201

@app.put('/api/trucks/<truck_id>/status')
def update_truck_status(truck_id):
    data = request.get_json(force=True)
    truck = Truck.query.filter_by(id=truck_id).first()
    if not truck:
        return jsonify({'error': 'not found'}), 404
    truck.status = data.get('status', truck.status)
    if truck.status == 'departed':
        truck.departure_time = datetime.utcnow()
    db.session.commit()
    return jsonify(to_dict(truck))

@app.get('/api/alarms')
def get_alarms():
    items = Alarm.query.all()
    return jsonify([to_dict(a) for a in items])

@app.post('/api/alarms')
def create_alarm():
    data = request.get_json(force=True)
    a = Alarm(
        alarm_id=next_id('alarm'),
        type=data.get('type', 'info'),
        message=data.get('message', ''),
        source=data.get('source', ''),
        status=data.get('status', 'active'),
        operator=data.get('operator')
    )
    db.session.add(a)
    db.session.commit()
    return jsonify(to_dict(a)), 201

@app.put('/api/alarms/<alarm_id>/status')
def update_alarm_status(alarm_id):
    data = request.get_json(force=True)
    alarm = Alarm.query.filter_by(id=alarm_id).first()
    if not alarm:
        return jsonify({'error': 'not found'}), 404
    alarm.status = data.get('status', alarm.status)
    alarm.operator = data.get('operator', alarm.operator)
    db.session.commit()
    return jsonify(to_dict(alarm))

@app.route('/')
def index():
    return jsonify({'message': 'Hercules backend running'})

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(host='0.0.0.0', port=5000, debug=True)
