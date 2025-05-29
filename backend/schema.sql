-- Database initialization script for Hercules Digital Factory
-- Run with: psql -U <user> -f schema.sql

-- Create database (run as a superuser)
CREATE DATABASE hercules;
\connect hercules;

-- Custom enumerated types
CREATE TYPE material_status AS ENUM ('active', 'inactive');
CREATE TYPE order_status AS ENUM ('pending', 'in-progress', 'completed', 'failed');
CREATE TYPE inventory_status AS ENUM ('in_stock', 'low_stock', 'out_of_stock');
CREATE TYPE rfid_status AS ENUM ('active', 'inactive', 'in_transit');
CREATE TYPE truck_status AS ENUM ('arrived', 'loading', 'weighing', 'departed');
CREATE TYPE alarm_type AS ENUM ('critical', 'warning', 'info');
CREATE TYPE alarm_status AS ENUM ('active', 'acknowledged', 'resolved');
CREATE TYPE bulk_transfer_status AS ENUM ('pending', 'in-progress', 'completed', 'failed');
CREATE TYPE storage_status AS ENUM ('available', 'full', 'locked', 'maintenance');
CREATE TYPE recipe_status AS ENUM ('pending', 'in-progress', 'completed', 'failed');

-- Materials
CREATE TABLE materials (
    id SERIAL PRIMARY KEY,
    code TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    type TEXT NOT NULL,
    uom TEXT NOT NULL,
    stock INTEGER DEFAULT 0,
    status material_status DEFAULT 'active'
);

-- Trucks
CREATE TABLE trucks (
    id SERIAL PRIMARY KEY,
    truck_number TEXT UNIQUE NOT NULL,
    driver_name TEXT NOT NULL,
    company TEXT NOT NULL,
    arrival_time TIMESTAMPTZ DEFAULT NOW(),
    departure_time TIMESTAMPTZ,
    status truck_status DEFAULT 'arrived',
    bay_number TEXT
);

-- RFID tags
CREATE TABLE rfid_tags (
    id SERIAL PRIMARY KEY,
    tag_code TEXT UNIQUE NOT NULL,
    location TEXT,
    status rfid_status DEFAULT 'active',
    last_seen TIMESTAMPTZ DEFAULT NOW(),
    associated_order_code TEXT,
    battery_level INTEGER DEFAULT 100
);

-- Orders
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    order_code TEXT UNIQUE NOT NULL,
    type TEXT NOT NULL,
    customer_name TEXT,
    truck_id INTEGER REFERENCES trucks(id),
    material_id INTEGER REFERENCES materials(id),
    quantity INTEGER NOT NULL,
    status order_status DEFAULT 'pending',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    estimated_completion TIMESTAMPTZ,
    rfid_tag_code TEXT
);

-- Inventory items
CREATE TABLE inventory_items (
    id SERIAL PRIMARY KEY,
    item_code TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    category TEXT NOT NULL,
    quantity INTEGER DEFAULT 0,
    location TEXT,
    last_updated TIMESTAMPTZ DEFAULT NOW(),
    status inventory_status DEFAULT 'in_stock'
);

CREATE TABLE inventory_rfid_tags (
    inventory_item_id INTEGER REFERENCES inventory_items(id),
    rfid_tag_id INTEGER REFERENCES rfid_tags(id),
    PRIMARY KEY (inventory_item_id, rfid_tag_id)
);

-- Bulk transfers
CREATE TABLE bulk_transfers (
    id SERIAL PRIMARY KEY,
    transfer_code TEXT UNIQUE NOT NULL,
    source_silo TEXT NOT NULL,
    destination_silo TEXT NOT NULL,
    quantity INTEGER NOT NULL,
    status bulk_transfer_status DEFAULT 'pending',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Storage bins / silos
CREATE TABLE storage_bins (
    id SERIAL PRIMARY KEY,
    bin_code TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    material_code TEXT,
    material_name TEXT,
    current_level INTEGER DEFAULT 0,
    max_capacity INTEGER NOT NULL,
    status storage_status DEFAULT 'available',
    high_level_flag BOOLEAN DEFAULT FALSE,
    lock_level_flag BOOLEAN DEFAULT FALSE,
    last_updated TIMESTAMPTZ DEFAULT NOW()
);

-- Production batch recipes
CREATE TABLE batch_recipes (
    id SERIAL PRIMARY KEY,
    recipe_id TEXT UNIQUE NOT NULL,
    batch_no TEXT NOT NULL,
    ingredients JSONB,
    target_quantity NUMERIC,
    actual_quantity NUMERIC,
    status recipe_status DEFAULT 'pending',
    start_time TIMESTAMPTZ DEFAULT NOW(),
    end_time TIMESTAMPTZ
);

-- Alarms
CREATE TABLE alarms (
    id SERIAL PRIMARY KEY,
    alarm_code TEXT UNIQUE NOT NULL,
    type alarm_type NOT NULL,
    message TEXT NOT NULL,
    source TEXT NOT NULL,
    timestamp TIMESTAMPTZ DEFAULT NOW(),
    status alarm_status DEFAULT 'active',
    operator TEXT
);


