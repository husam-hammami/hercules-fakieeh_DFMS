from flask import Flask, jsonify, request
from flask_cors import CORS
from datetime import datetime

app = Flask(__name__)
CORS(app)

# In-memory storage for demo purposes
materials = []
orders = []
inventory = []
rfid_tags = []
trucks = []
alarms = []
storage_bins = []
bulk_transfers = []
recipes = []

# Simple ID counters
counters = {
    'material': 0,
    'order': 0,
    'inventory': 0,
    'rfid': 0,
    'truck': 0,
    'alarm': 0,
    'storage_bin': 0,
    'bulk_transfer': 0,
    'recipe': 0
}

def next_id(prefix: str) -> str:
    counters[prefix] += 1
    return f"{prefix.upper()}-{counters[prefix]:03d}"

@app.get('/api/materials')
def get_materials():
    return jsonify(materials)

@app.post('/api/materials')
def create_material():
    data = request.get_json(force=True)
    material = {
        'id': next_id('material'),
        'name': data.get('name', ''),
        'code': data.get('code', ''),
        'type': data.get('type', ''),
        'uom': data.get('uom', ''),
        'stock': data.get('stock', 0),
        'status': data.get('status', 'active')
    }
    materials.append(material)
    return jsonify(material), 201

@app.get('/api/orders')
def get_orders():
    return jsonify(orders)

@app.post('/api/orders')
def create_order():
    data = request.get_json(force=True)
    order = {
        'id': next_id('order'),
        'customerName': data.get('customerName', ''),
        'items': data.get('items', []),
        'status': data.get('status', 'pending'),
        'priority': data.get('priority', 'low'),
        'createdAt': datetime.utcnow().isoformat(),
        'estimatedCompletion': data.get('estimatedCompletion')
    }
    orders.append(order)
    return jsonify(order), 201

@app.get('/api/inventory')
def get_inventory():
    return jsonify(inventory)

@app.post('/api/inventory')
def create_inventory_item():
    data = request.get_json(force=True)
    item = {
        'id': next_id('inventory'),
        'name': data.get('name', ''),
        'category': data.get('category', ''),
        'quantity': data.get('quantity', 0),
        'location': data.get('location', ''),
        'rfidTags': data.get('rfidTags', []),
        'lastUpdated': datetime.utcnow().isoformat(),
        'status': data.get('status', 'in_stock')
    }
    inventory.append(item)
    return jsonify(item), 201

@app.get('/api/rfid-tags')
def get_rfid_tags():
    return jsonify(rfid_tags)

@app.post('/api/rfid-tags')
def create_rfid_tag():
    data = request.get_json(force=True)
    tag = {
        'id': next_id('rfid'),
        'location': data.get('location', ''),
        'status': data.get('status', 'active'),
        'lastSeen': datetime.utcnow().isoformat(),
        'associatedOrder': data.get('associatedOrder'),
        'batteryLevel': data.get('batteryLevel', 100)
    }
    rfid_tags.append(tag)
    return jsonify(tag), 201

@app.get('/api/trucks')
def get_trucks():
    return jsonify(trucks)

@app.post('/api/trucks')
def register_truck():
    data = request.get_json(force=True)
    truck = {
        'id': next_id('truck'),
        'truckNumber': data.get('truckNumber', ''),
        'driverName': data.get('driverName', ''),
        'company': data.get('company', ''),
        'arrivalTime': datetime.utcnow().isoformat(),
        'status': data.get('status', 'arrived'),
        'associatedOrders': data.get('associatedOrders', []),
        'bayNumber': data.get('bayNumber')
    }
    trucks.append(truck)
    return jsonify(truck), 201

@app.put('/api/trucks/<truck_id>/status')
def update_truck_status(truck_id):
    data = request.get_json(force=True)
    for truck in trucks:
        if truck['id'] == truck_id:
            truck['status'] = data.get('status', truck['status'])
            if truck['status'] == 'departed':
                truck['departureTime'] = datetime.utcnow().isoformat()
            return jsonify(truck)
    return jsonify({'error': 'not found'}), 404

@app.get('/api/alarms')
def get_alarms():
    return jsonify(alarms)

@app.post('/api/alarms')
def create_alarm():
    data = request.get_json(force=True)
    alarm = {
        'id': next_id('alarm'),
        'type': data.get('type', 'info'),
        'message': data.get('message', ''),
        'source': data.get('source', ''),
        'timestamp': datetime.utcnow().isoformat(),
        'status': data.get('status', 'active'),
        'operator': data.get('operator')
    }
    alarms.append(alarm)
    return jsonify(alarm), 201

@app.put('/api/alarms/<alarm_id>/status')
def update_alarm_status(alarm_id):
    data = request.get_json(force=True)
    for alarm in alarms:
        if alarm['id'] == alarm_id:
            alarm['status'] = data.get('status', alarm['status'])
            alarm['operator'] = data.get('operator', alarm.get('operator'))
            return jsonify(alarm)
    return jsonify({'error': 'not found'}), 404

@app.get('/api/storage-bins')
def get_storage_bins():
    return jsonify(storage_bins)

@app.post('/api/storage-bins')
def create_storage_bin():
    data = request.get_json(force=True)
    bin = {
        'id': next_id('storage_bin'),
        'name': data.get('name', ''),
        'capacity': data.get('capacity', 0),
        'currentLevel': data.get('currentLevel', 0),
        'location': data.get('location', ''),
        'status': data.get('status', 'available')
    }
    storage_bins.append(bin)
    return jsonify(bin), 201

@app.get('/api/bulk-transfers')
def get_bulk_transfers():
    return jsonify(bulk_transfers)

@app.post('/api/bulk-transfers')
def create_bulk_transfer():
    data = request.get_json(force=True)
    transfer = {
        'id': next_id('bulk_transfer'),
        'sourceBin': data.get('sourceBin', ''),
        'destinationBin': data.get('destinationBin', ''),
        'materialId': data.get('materialId', ''),
        'quantity': data.get('quantity', 0),
        'status': data.get('status', 'pending'),
        'timestamp': datetime.utcnow().isoformat()
    }
    bulk_transfers.append(transfer)
    return jsonify(transfer), 201

@app.get('/api/recipes')
def get_recipes():
    return jsonify(recipes)

@app.post('/api/recipes')
def create_recipe():
    data = request.get_json(force=True)
    recipe = {
        'id': next_id('recipe'),
        'name': data.get('name', ''),
        'description': data.get('description', ''),
        'ingredients': data.get('ingredients', []),
        'instructions': data.get('instructions', ''),
        'status': data.get('status', 'draft')
    }
    recipes.append(recipe)
    return jsonify(recipe), 201

@app.route('/')
def index():
    return jsonify({'message': 'Hercules backend running'})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
