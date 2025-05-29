# Unified Namespace (UNS)

This document outlines a proposed Unified Namespace (UNS) for the **Hercules Digital Factory Management System** frontend. The hierarchy is intended to help the backend team organise API routes, message topics or database collections in a consistent way.

All paths are lowercase and use `/` to separate segments. Values shown in angle brackets (`< >`) are placeholders for dynamic parts of the path.

## Root

```
factory/hercules
```

## Top Level Categories

The main sections of the application translate to the following root topics:

```
factory/hercules/dashboard
factory/hercules/material
factory/hercules/production
factory/hercules/orders
factory/hercules/storage
factory/hercules/rfid
factory/hercules/inventory
factory/hercules/weighbridge
factory/hercules/alarms
factory/hercules/reports
factory/hercules/maintenance
factory/hercules/admin
```

## Sub Topics

Below is a suggested breakdown of sub topics for each category based on the components in the frontend.

### Material
```
factory/hercules/material/items            # list or CRUD for materials
factory/hercules/material/stock            # current stock levels
factory/hercules/material/types            # material types and UoM
```

### Production
```
factory/hercules/production/batches        # active and historical batches
factory/hercules/production/recipes        # recipe definitions
factory/hercules/production/status         # overall production status
```

### Orders
```
factory/hercules/orders/intake             # intake order events
factory/hercules/orders/outloading         # outloading order events
factory/hercules/orders/bulk-transfer      # silo/bulk transfers
factory/hercules/orders/all                # combined order history
```

### Storage
```
factory/hercules/storage/bins              # silo and bin level information
factory/hercules/storage/alerts            # high level or lock level alerts
```

### RFID
```
factory/hercules/rfid/tags                 # tag information and status
factory/hercules/rfid/location             # last seen locations
```

### Inventory
```
factory/hercules/inventory/items           # current inventory records
factory/hercules/inventory/summary         # totals and statistics
```

### Weighbridge
```
factory/hercules/weighbridge/trucks        # truck log entries
factory/hercules/weighbridge/status        # weighing operations
```

### Alarms
```
factory/hercules/alarms/events             # system alerts and notifications
```

### Reports
```
factory/hercules/reports/analytics         # generated reports and KPIs
```

### Maintenance
```
factory/hercules/maintenance/equipment     # equipment info and schedules
factory/hercules/maintenance/workorders    # planned work orders
```

### Admin
```
factory/hercules/admin/users               # user management
factory/hercules/admin/settings            # global configuration
```

## Example Usage

A message about a new intake order might be published under:

```
factory/hercules/orders/intake/<orderId>
```

Storage bin level updates could appear under:

```
factory/hercules/storage/bins/<binId>
```

This structure can be expanded as new features are added, ensuring that data remains discoverable under a single, predictable namespace.

