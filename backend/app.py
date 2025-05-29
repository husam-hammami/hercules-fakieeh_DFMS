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
    'storage': 0,
    'transfer': 0,
    'recipe': 0
}

def next_id(prefix: str) -> str:
    counters[prefix] += 1
    return f"{prefix.upper()}-{counters[prefix]:03d}"


def get_item(collection, item_id):
    for item in collection:
        if item['id'] == item_id:
            return item
    return None


def delete_item(collection, item_id):
    for idx, item in enumerate(collection):
        if item['id'] == item_id:
            collection.pop(idx)
            return True
    return False

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


@app.get('/api/materials/<material_id>')
def get_material(material_id):
    material = get_item(materials, material_id)
    if material:
        return jsonify(material)
    return jsonify({'error': 'not found'}), 404


@app.put('/api/materials/<material_id>')
def update_material(material_id):
    material = get_item(materials, material_id)
    if not material:
        return jsonify({'error': 'not found'}), 404
    data = request.get_json(force=True)
    material.update({
        'name': data.get('name', material['name']),
        'code': data.get('code', material['code']),
        'type': data.get('type', material['type']),
        'uom': data.get('uom', material['uom']),
        'stock': data.get('stock', material['stock']),
        'status': data.get('status', material['status'])
    })
    return jsonify(material)


@app.delete('/api/materials/<material_id>')
def delete_material(material_id):
    if delete_item(materials, material_id):
        return '', 204
    return jsonify({'error': 'not found'}), 404

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


@app.get('/api/orders/<order_id>')
def get_order(order_id):
    order = get_item(orders, order_id)
    if order:
        return jsonify(order)
    return jsonify({'error': 'not found'}), 404


@app.put('/api/orders/<order_id>')
def update_order(order_id):
    order = get_item(orders, order_id)
    if not order:
        return jsonify({'error': 'not found'}), 404
    data = request.get_json(force=True)
    order.update({
        'customerName': data.get('customerName', order.get('customerName', '')),
        'items': data.get('items', order.get('items', [])),
        'status': data.get('status', order.get('status', 'pending')),
        'priority': data.get('priority', order.get('priority', 'low')),
        'estimatedCompletion': data.get('estimatedCompletion', order.get('estimatedCompletion'))
    })
    return jsonify(order)


@app.delete('/api/orders/<order_id>')
def delete_order(order_id):
    if delete_item(orders, order_id):
        return '', 204
    return jsonify({'error': 'not found'}), 404

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


@app.get('/api/inventory/<item_id>')
def get_inventory_item(item_id):
    item = get_item(inventory, item_id)
    if item:
        return jsonify(item)
    return jsonify({'error': 'not found'}), 404


@app.put('/api/inventory/<item_id>')
def update_inventory_item(item_id):
    item = get_item(inventory, item_id)
    if not item:
        return jsonify({'error': 'not found'}), 404
    data = request.get_json(force=True)
    item.update({
        'name': data.get('name', item['name']),
        'category': data.get('category', item['category']),
        'quantity': data.get('quantity', item['quantity']),
        'location': data.get('location', item['location']),
        'rfidTags': data.get('rfidTags', item.get('rfidTags', [])),
        'status': data.get('status', item['status']),
        'lastUpdated': datetime.utcnow().isoformat(),
    })
    return jsonify(item)


@app.delete('/api/inventory/<item_id>')
def delete_inventory_item(item_id):
    if delete_item(inventory, item_id):
        return '', 204
    return jsonify({'error': 'not found'}), 404

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


@app.get('/api/rfid-tags/<tag_id>')
def get_rfid_tag(tag_id):
    tag = get_item(rfid_tags, tag_id)
    if tag:
        return jsonify(tag)
    return jsonify({'error': 'not found'}), 404


@app.put('/api/rfid-tags/<tag_id>')
def update_rfid_tag(tag_id):
    tag = get_item(rfid_tags, tag_id)
    if not tag:
        return jsonify({'error': 'not found'}), 404
    data = request.get_json(force=True)
    tag.update({
        'location': data.get('location', tag['location']),
        'status': data.get('status', tag['status']),
        'associatedOrder': data.get('associatedOrder', tag.get('associatedOrder')),
        'batteryLevel': data.get('batteryLevel', tag.get('batteryLevel', 100)),
        'lastSeen': datetime.utcnow().isoformat(),
    })
    return jsonify(tag)


@app.delete('/api/rfid-tags/<tag_id>')
def delete_rfid_tag(tag_id):
    if delete_item(rfid_tags, tag_id):
        return '', 204
    return jsonify({'error': 'not found'}), 404

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


@app.get('/api/trucks/<truck_id>')
def get_truck(truck_id):
    truck = get_item(trucks, truck_id)
    if truck:
        return jsonify(truck)
    return jsonify({'error': 'not found'}), 404

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


@app.put('/api/trucks/<truck_id>')
def update_truck(truck_id):
    truck = get_item(trucks, truck_id)
    if not truck:
        return jsonify({'error': 'not found'}), 404
    data = request.get_json(force=True)
    truck.update({
        'truckNumber': data.get('truckNumber', truck['truckNumber']),
        'driverName': data.get('driverName', truck['driverName']),
        'company': data.get('company', truck['company']),
        'bayNumber': data.get('bayNumber', truck.get('bayNumber')),
        'associatedOrders': data.get('associatedOrders', truck.get('associatedOrders', []))
    })
    return jsonify(truck)


@app.delete('/api/trucks/<truck_id>')
def delete_truck(truck_id):
    if delete_item(trucks, truck_id):
        return '', 204
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


@app.get('/api/alarms/<alarm_id>')
def get_alarm(alarm_id):
    alarm = get_item(alarms, alarm_id)
    if alarm:
        return jsonify(alarm)
    return jsonify({'error': 'not found'}), 404

@app.put('/api/alarms/<alarm_id>/status')
def update_alarm_status(alarm_id):
    data = request.get_json(force=True)
    for alarm in alarms:
        if alarm['id'] == alarm_id:
            alarm['status'] = data.get('status', alarm['status'])
            alarm['operator'] = data.get('operator', alarm.get('operator'))
            return jsonify(alarm)
    return jsonify({'error': 'not found'}), 404


@app.delete('/api/alarms/<alarm_id>')
def delete_alarm(alarm_id):
    if delete_item(alarms, alarm_id):
        return '', 204
    return jsonify({'error': 'not found'}), 404


# Storage bins endpoints
@app.get('/api/storage-bins')
def get_storage_bins():
    return jsonify(storage_bins)


@app.post('/api/storage-bins')
def create_storage_bin():
    data = request.get_json(force=True)
    bin_item = {
        'id': next_id('storage'),
        'name': data.get('name', ''),
        'materialCode': data.get('materialCode', ''),
        'materialName': data.get('materialName', ''),
        'currentLevel': data.get('currentLevel', 0),
        'maxCapacity': data.get('maxCapacity', 0),
        'status': data.get('status', 'available'),
        'highLevelFlag': data.get('highLevelFlag', False),
        'lockLevelFlag': data.get('lockLevelFlag', False),
        'lastUpdated': datetime.utcnow().isoformat()
    }
    storage_bins.append(bin_item)
    return jsonify(bin_item), 201


@app.put('/api/storage-bins/<bin_id>')
def update_storage_bin(bin_id):
    bin_item = get_item(storage_bins, bin_id)
    if not bin_item:
        return jsonify({'error': 'not found'}), 404
    data = request.get_json(force=True)
    bin_item.update({
        'name': data.get('name', bin_item['name']),
        'materialCode': data.get('materialCode', bin_item.get('materialCode', '')),
        'materialName': data.get('materialName', bin_item.get('materialName', '')),
        'currentLevel': data.get('currentLevel', bin_item.get('currentLevel', 0)),
        'maxCapacity': data.get('maxCapacity', bin_item.get('maxCapacity', 0)),
        'status': data.get('status', bin_item.get('status', 'available')),
        'highLevelFlag': data.get('highLevelFlag', bin_item.get('highLevelFlag', False)),
        'lockLevelFlag': data.get('lockLevelFlag', bin_item.get('lockLevelFlag', False)),
        'lastUpdated': datetime.utcnow().isoformat()
    })
    return jsonify(bin_item)


@app.delete('/api/storage-bins/<bin_id>')
def delete_storage_bin(bin_id):
    if delete_item(storage_bins, bin_id):
        return '', 204
    return jsonify({'error': 'not found'}), 404


# Bulk transfer endpoints
@app.get('/api/bulk-transfers')
def get_transfers():
    return jsonify(bulk_transfers)


@app.post('/api/bulk-transfers')
def create_transfer():
    data = request.get_json(force=True)
    transfer = {
        'id': next_id('transfer'),
        'sourceSilo': data.get('sourceSilo', ''),
        'destinationSilo': data.get('destinationSilo', ''),
        'quantity': data.get('quantity', 0),
        'status': data.get('status', 'pending'),
        'createdAt': datetime.utcnow().isoformat()
    }
    bulk_transfers.append(transfer)
    return jsonify(transfer), 201


@app.put('/api/bulk-transfers/<transfer_id>')
def update_transfer(transfer_id):
    transfer = get_item(bulk_transfers, transfer_id)
    if not transfer:
        return jsonify({'error': 'not found'}), 404
    data = request.get_json(force=True)
    transfer.update({
        'sourceSilo': data.get('sourceSilo', transfer['sourceSilo']),
        'destinationSilo': data.get('destinationSilo', transfer['destinationSilo']),
        'quantity': data.get('quantity', transfer['quantity']),
        'status': data.get('status', transfer['status'])
    })
    return jsonify(transfer)


@app.delete('/api/bulk-transfers/<transfer_id>')
def delete_transfer(transfer_id):
    if delete_item(bulk_transfers, transfer_id):
        return '', 204
    return jsonify({'error': 'not found'}), 404


# Production recipe endpoints
@app.get('/api/recipes')
def get_recipes():
    return jsonify(recipes)


@app.post('/api/recipes')
def create_recipe():
    data = request.get_json(force=True)
    recipe = {
        'id': next_id('recipe'),
        'recipeId': data.get('recipeId', ''),
        'batchNo': data.get('batchNo', ''),
        'ingredients': data.get('ingredients', []),
        'targetQuantity': data.get('targetQuantity', 0),
        'actualQuantity': data.get('actualQuantity', 0),
        'status': data.get('status', 'pending'),
        'startTime': datetime.utcnow().isoformat(),
        'endTime': data.get('endTime')
    }
    recipes.append(recipe)
    return jsonify(recipe), 201


@app.put('/api/recipes/<recipe_id>')
def update_recipe(recipe_id):
    recipe = get_item(recipes, recipe_id)
    if not recipe:
        return jsonify({'error': 'not found'}), 404
    data = request.get_json(force=True)
    recipe.update({
        'ingredients': data.get('ingredients', recipe.get('ingredients', [])),
        'targetQuantity': data.get('targetQuantity', recipe.get('targetQuantity', 0)),
        'actualQuantity': data.get('actualQuantity', recipe.get('actualQuantity', 0)),
        'status': data.get('status', recipe.get('status', 'pending')),
        'endTime': data.get('endTime', recipe.get('endTime'))
    })
    return jsonify(recipe)


@app.delete('/api/recipes/<recipe_id>')
def delete_recipe(recipe_id):
    if delete_item(recipes, recipe_id):
        return '', 204
    return jsonify({'error': 'not found'}), 404

@app.route('/')
def index():
    return jsonify({'message': 'Hercules backend running'})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
