---
icon: head-side-gear
---

# Integrations

#### Supported integrations

> If a resource is not listed below, it is not officially supported out of the box. Custom stacks can be adapted via files under **`public/bridge/`**.

***

### Frameworks

| Framework                     | Status          | Notes                                                              |
| ----------------------------- | --------------- | ------------------------------------------------------------------ |
| **QBox (qbx\_core)**          | Supported       | Uses qb-core compatibility layer for shared APIs where applicable. |
| **QBCore**                    | Supported       | Native item registration and money helpers.                        |
| **ESX Legacy (es\_extended)** | Supported       | `identifier`-based persistence for DB rows.                        |
| **Custom**                    | Bridge required | Implement or extend `public/bridge/framework/`.                    |

***

### Inventories

| Inventory         | Status          | Notes                                                                                                            |
| ----------------- | --------------- | ---------------------------------------------------------------------------------------------------------------- |
| **ox\_inventory** | Supported       | Item **`server.export`** → `cdev_axethrowing.useAxeThrowingTarget` / `useAxeThrowingHatchet`.                    |
| **qb-inventory**  | Supported       | Useable items in shared items; resource registers useables at start — **no** export string in item row.          |
| **qs-inventory**  | Supported       | Same as your framework’s item table (QB shared items or QS/ESX items file); ESX useables registered by resource. |
| **Custom**        | Bridge required | Implement `public/bridge/inventory/server.lua` patterns.                                                         |

***

### Interaction systems

| System         | Status          | Notes                                                                                                |
| -------------- | --------------- | ---------------------------------------------------------------------------------------------------- |
| **ox\_target** | Supported       | Font Awesome icons (e.g. `fas fa-bullseye`).                                                         |
| **qb-target**  | Supported       | Native entity target API.                                                                            |
| **DrawText**   | Built-in        | No external target resource required.                                                                |
| **Custom**     | Bridge required | Implement `TargetBridgeCustom` in `public/bridge/target/client.lua` when `Bridge.Target = "custom"`. |

***

### Notifications

| System      | Status                   | Notes                                           |
| ----------- | ------------------------ | ----------------------------------------------- |
| **ox\_lib** | Preferred when available | Often chosen automatically on QBox / ox stacks. |
| **QBCore**  | Supported                | `QBCore:Notify` style.                          |
| **ESX**     | Supported                | `showNotification` path via bridge.             |
| **Native**  | Fallback                 | Basic notify when nothing else matches.         |

***

### Bridge configuration reference

Override auto-detection in **`public/shared/config.lua`**:

```lua
Bridge = {
    Framework = "auto",      -- "qb-core" | "qbx_core" | "es_extended"
    Inventory = "auto",      -- "ox_inventory" | "qb-inventory" | "qs-inventory"
    Interaction = "target",  -- "drawtext" | "target"
    Target = "auto",         -- "ox_target" | "qb-target" | "custom"
    Notify = "auto",         -- "ox_lib" | "qbcore" | "esx" | "native"
},
```

Restart **`cdev_axethrowing`** after changes.
