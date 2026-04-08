---
icon: head-side-gear
---

# Integrations

CDEV Horse Shop (**RedM / VORP**) is built with a flexible **bridge** layer for framework, inventory, interaction, notifications, and **horse delivery** after purchase.\
**Auto-detection** is enabled by default when you set bridge options to `"auto"` in `public/shared/config.lua`.

***

#### 🌐 Supported integrations

> ⚠️ If a resource is not listed below, it is **not** officially supported out of the box.\
> Custom stacks can be wired in by editing the bridge files under `public/bridge/` (see Configurations).

***

### 🧩 Frameworks

| Framework                   | Status             | Notes                                                                                                                      |
| --------------------------- | ------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| **VORP Core (`vorp_core`)** | ✅ Fully supported  | Character id (`charIdentifier`), cash/gold, `Core.NotifyRightTip` on server. Auto-detected when the resource is `started`. |
| **Custom framework**        | ⚠️ Bridge required | Implement in `public/bridge/framework/server.lua` and set `Bridge.Framework` to your resource name (must match exactly).   |

***

### 🎒 Inventories

| Inventory                             | Status             | Notes                                                                                                           |
| ------------------------------------- | ------------------ | --------------------------------------------------------------------------------------------------------------- |
| **VORP Inventory (`vorp_inventory`)** | ✅ Fully supported  | `canCarryItem`, `addItem`, `subItem`, `getItemCount` for restock and related flows. Auto-detected when started. |
| **Custom inventory**                  | ⚠️ Bridge required | Implement via `public/bridge/inventory/server.lua`.                                                             |

***

### 🎯 Interaction systems

| System            | Status             | Notes                                                                                                                                               |
| ----------------- | ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **ox\_target**    | ✅ Fully supported  | Sphere zones at shop desk, management, vault, delivery (and clerk NPC targets when enabled). Icon/label from `InteractionOptions.Target` in config. |
| **DrawText**      | ✅ Built-in         | Proximity UI + key (default **R** on RedM). No external target resource required.                                                                   |
| **Custom target** | ⚠️ Bridge required | `public/bridge/target/client.lua` is written for **ox\_target**; adapt zones for other target resources.                                            |

`Bridge.Interaction = "auto"` uses **ox\_target** when that resource is running, otherwise **DrawText**.

***

### 🔔 Notifications

| System     | Status             | Notes                                                                                                                                                                                           |
| ---------- | ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **VORP**   | ✅ Primary          | **Client:** `vorp:NotifyLeft` (`public/bridge/notify/client.lua`). **Server:** `Framework.Notify` → `Core.NotifyRightTip` (`public/bridge/framework/server.lua`) when `vorp_core` is available. |
| **Native** | ✅ Fallback         | RedM native feed if `vorp_core` is not running (client notify path).                                                                                                                            |
| **Custom** | ⚠️ Bridge required | Edit `notify/client.lua` and `framework/server.lua` — `Bridge.Notify` in config is reserved for alignment with other CDEV products and does not switch behavior by itself today.                |

***

### 🐎 Horse delivery (stables)

| System                                    | Status             | Notes                                                                                                          |
| ----------------------------------------- | ------------------ | -------------------------------------------------------------------------------------------------------------- |
| **VORP Stables (`vorp_stables`)**         | ✅ Fully supported  | Detected first in auto order when the resource is present.                                                     |
| **VORP Core path (`vorp_core`)**          | ✅ Supported        | Inserts into MySQL `stables` (VORP-compatible) when stables resource detection falls through but core is used. |
| **Custom export (`HorseDeliveryExport`)** | ✅ Supported        | `"resource:exportName"` in config; runs **before** built-in VORP delivery. Return `true` on success.           |
| **Fully custom**                          | ⚠️ Bridge required | Extend `public/bridge/horse_delivery/server.lua` or rely on a successful export-only flow.                     |

***

### 🗄️ Database

| System                            | Status     | Notes                                                                               |
| --------------------------------- | ---------- | ----------------------------------------------------------------------------------- |
| **MySQL (oxmysql / mysql-async)** | ✅ Required | Shops, employees, vault, stock, sales, catalog table `cdev_horseshop_catalog`, etc. |

***

### ⚙️ Bridge configuration

Override auto-detection in `public/shared/config.lua`:

```lua
Bridge = {
    Framework = "auto",       -- "vorp_core" (resource name must match)
    Inventory = "auto",       -- "vorp_inventory"
    Notify = "auto",          -- reserved; customize bridge files for other notify UIs
    Interaction = "drawtext", -- "drawtext" | "target" | "auto"
    HorseDelivery = "auto",   -- "auto" | "vorp_stables" | "vorp_core" | "none"
},
```

Detection order for `"auto"` is defined in `utils/helpers/bridgeloader.lua`.

