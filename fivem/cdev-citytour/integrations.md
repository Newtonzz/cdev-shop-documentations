---
icon: lightbulb-gear
---

# Integrations

Cdev City Tour is built with a flexible bridge system that supports multiple frameworks, inventories, and interaction resources.\
Auto-detection is enabled by default for seamless setup.

***

#### 🌐 Supported Integrations

> ⚠️ If a resource is not listed below, it is not officially supported.\
> Custom integrations can be implemented through the bridge system.

***

### 🧩 Frameworks

| Framework                     | Status             | Notes                                          |
| ----------------------------- | ------------------ | ---------------------------------------------- |
| **QBox (qbx\_core)**          | ✅ Fully Supported  | Uses qb-core compatibility layer.              |
| **QBCore**                    | ✅ Fully Supported  | Native integration.                            |
| **ESX Legacy (es\_extended)** | ✅ Fully Supported  | Uses persistent identifier for player linking. |
| **Custom Framework**          | ⚠️ Bridge Required | Manual implementation via bridge system.       |

***

### 🎒 Inventories

| Inventory            | Status             | Notes                                                                         |
| -------------------- | ------------------ | ----------------------------------------------------------------------------- |
| **ox\_inventory**    | ✅ Fully Supported  | Use `server.export = 'cdev_citytour.useCityTourBoard'` and **`consume = 0`**. |
| **qb-inventory**     | ✅ Fully Supported  | Useable item registered automatically.                                        |
| **qs-inventory**     | ✅ Fully Supported  | Useable item registered automatically.                                        |
| **Custom Inventory** | ⚠️ Bridge Required | Implement via `public/bridge/inventory/`.                                     |

***

### 🎯 Interaction Systems

| System            | Status             | Notes                                                 |
| ----------------- | ------------------ | ----------------------------------------------------- |
| **ox\_target**    | ✅ Fully Supported  | Supports Font Awesome icons (e.g. `fas fa-building`). |
| **qb-target**     | ✅ Fully Supported  | Native target integration.                            |
| **DrawText**      | ✅ Built-in         | No external resource required.                        |
| **Custom Target** | ⚠️ Bridge Required | Implement via `public/bridge/target/`.                |

***

### 🔔 Notifications

| System      | Status      | Notes                                          |
| ----------- | ----------- | ---------------------------------------------- |
| **ox\_lib** | ✅ Preferred | Used automatically when available (e.g. QBox). |
| **QBCore**  | ✅ Supported | Uses `QBCore:Notify`.                          |
| **ESX**     | ✅ Supported | Framework / ESX notify path.                   |
| **Native**  | ✅ Fallback  | Used if no supported system is detected.       |

***

### 💎 VIP / extra currency

| Integration                        | Status             | Notes                                                   |
| ---------------------------------- | ------------------ | ------------------------------------------------------- |
| **Qbox / QB `crypto`**             | ✅ Default          | `public/bridge/vip/server.lua` → `Mode = "qbox_crypto"` |
| **Custom export / custom economy** | ⚠️ Bridge Required | Set `Mode = "export"` or `"custom"` in the VIP file     |

Used when Real mode account is `"vip"`.

***

### 🗄 Database

| Requirement | Status     |
| ----------- | ---------- |
| **oxmysql** | ✅ Required |

Tables auto-created on boot:

* `cdev_citytour_players`
* `cdev_citytour_match_history`
* `cdev_citytour_player_history`

Optional manual file: `sql/citytour.sql`.

***

### ⚙️ Bridge Configuration

You can override auto-detection in `config.lua`:

```lua
Bridge = {
    Framework = "auto",      -- "qb-core" | "qbx_core" | "es_extended"
    Inventory = "auto",      -- "ox_inventory" | "qb-inventory" | "qs-inventory"
    Interaction = "target",  -- "drawtext" | "target"
    Target = "auto",         -- "ox_target" | "qb-target"
    Notify = "auto",         -- "ox_lib" | "qbcore" | "esx" | "native"
},
```
