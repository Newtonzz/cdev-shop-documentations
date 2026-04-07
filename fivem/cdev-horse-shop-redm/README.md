---
hidden: true
---

# 🐴 cDev Horse Shop (RedM)

<figure><img src="../../.gitbook/assets/RedM cowboy and horse shop scene.png" alt=""><figcaption></figcaption></figure>

## Introduction

{% hint style="info" %}
**Cdev Hrose Shop**\
\
**multi-framework support for RedM**: player horse shops with **catalog**, **company vault** (cash + gold), **employees**, **stock**, **showroom floor horses**, **supplier restock** (optional physical crates), and **management NUI**. Data is stored in **MySQL** via **oxmysql, auto configs , VORP , OX Target**.
{% endhint %}

## Purchase the Script

## Showcase

**Video Soon**

## **Features**

<details>

<summary>Features List</summary>

* 🐴 Full horse commerce for RedM — Shop desk, company vault, stock, showroom floor horses, staff roles, and admin workflows in one resource built for VORP.
* 🏪 Shop & economy\
  Multi-branch shops from the database: catalog and prices in MySQL, configurable default shops, per-shop vault (cash / gold depending on bridge), optional “buy from vault” for customer purchases, and supplier restock with optional physical crate delivery to the shop’s delivery point.
* 👔 Management NUI\
  Bosses and permitted staff open a management interface for the branch: overview, employees (hire / fire / promote against configurable roles & permission flags), vault deposit/withdraw, stock and sale prices, pending deliveries, sales history, and per-shop business settings (e.g. 3D labels and map blip toggles).
* 🌍 World integration\
  Shop clerk NPCs (optional) at main coordinates with outfit/heading support; showroom horses spawned from DB placements inside a configurable radius; stock display placement flow for floor horses; drawtext / NUI proximity hints or ox\_target for desk, management, vault, and delivery — with configurable labels, icons, distances, and interaction mode (`drawtext`, `target`, or `auto`).
* 📡 Sync & performance\
  Settings sync radius so clients only pull shop settings and updates when relevant; staggered polling (near / mid / far) to reduce idle CPU; optional periodic shop list resync for map blips when branches change off-screen; staff branch cache for who sees staff-only prompts.
* 🎨 Themes & locales\
  JSON themes for the NUI and locale files so server owners can ship their own language and branding without editing core logic.
* 🔌 VORP-first, bridge-friendly\
  Designed around vorp\_core + oxmysql; bridges for inventory and notifications (with auto / explicit resource names); horse delivery hooks toward vorp\_stables or vorp\_core when stables aren’t used; optional ox\_target as a drop-in interaction layer.
* 🛠 Creator & admin\
  Creator command to place shops in the world; “my shops” style command for owners/employees; admin manager command (ACE-gated) to list shops, revenue, and delete branches with DB cleanup — aligned with how you document permissions on your other products.
* ⚙️ Config surface\
  Single shared config for bridges, interaction options, showroom, clerk NPC, sync radii, drawtext vs target tuning, crate delivery, vault currency defaults, role matrix, and creator camera/placement keys — similar spirit to your “Fully configurable…” blocks on Chess.

</details>

## Installation Guide & Others





***

### Table of contents

1. Dependencies
2. Installation
3. ACE permissions
4. Commands
5. Configuration reference
6. Database
7. Architecture overview
8. Server callbacks
9. Server events
10. Client events
11. Lua APIs (bridges & globals)
12. Database module (`DB`)
13. Custom bridges
14. Locales & themes
15. Troubleshooting

***

### Dependencies

#### Required

| Resource       | Purpose                                                                                                                                                                                                                                  |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **oxmysql**    | MySQL driver. Uses `MySQL.query.await`, `MySQL.insert.await`, `MySQL.single.await`, `MySQL.scalar.await`, and **`MySQL.update.await`** for atomic stock/vault updates. Use a **recent oxmysql** build that exposes `MySQL.update.await`. |
| **vorp\_core** | Framework: character id, money/gold, notifications (server + client integration).                                                                                                                                                        |

#### Optional

| Resource            | Purpose                                                                                                                                                  |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **vorp\_inventory** | Server-side item checks (`canCarryItem`, etc.) when restock/supplier flows need inventory validation.                                                    |
| **vorp\_stables**   | Preferred path for horse delivery when present; otherwise the script can insert into the `stables` table via **vorp\_core** (see horse delivery bridge). |
| **ox\_target**      | Third-eye interaction zones. If not started, the resource falls back to **DrawText** + key (`R`) from `client/core.lua`.                                 |

#### Game

* **RedM** (`game 'rdr3'`), **Lua 5.4** (`lua54 'yes'`).

***

### Installation

1. Copy the `cdev_horseshop` folder into your `resources` directory.
2. Ensure **oxmysql** is configured and the database user can create/use tables.
3. In `server.cfg` (order matters for VORP):

```cfg
ensure oxmysql
ensure vorp_core
ensure vorp_inventory   # optional
ensure vorp_stables     # optional
ensure ox_target        # optional
ensure cdev_horseshop
```

4. Start the server once so **`CREATE TABLE IF NOT EXISTS`** runs (see Database).
5. Grant **ACE** for shop creators (see ACE permissions).
6. Edit `public/shared/config.lua` (locale, interaction mode, economy flags).

> **GitBook tip:** Duplicate this block as a **“Prerequisites”** page and link here.

***

### ACE permissions

| Permission                   | Effect                                                                                                                                                                                       |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`cdev_horseshop.creator`** | Allows opening the **in-game shop creator** (`requestOpenCreator` → NUI) and **creating** a new branch via `creatorCreateShop`. Default config key: `HorseShopConfig.Creator.AcePermission`. |

**Example `server.cfg`:**

```cfg
add_ace group.admin cdev_horseshop.creator allow
# or per identifier:
# add_ace identifier.fivem:123456 cdev_horseshop.creator allow
```

> Staff roles (**Boss** / **Employee**) are **database-driven** (`cdev_horseshop_employees`), not ACE-based.

***

### Commands

Configured under `HorseShopConfig.Creator` (change in `public/shared/config.lua`):

| Config key               | Default           | Description                                                             |
| ------------------------ | ----------------- | ----------------------------------------------------------------------- |
| `Creator.Command`        | `horseshopcreate` | Opens the creator **if** the player has ACE `cdev_horseshop.creator`.   |
| `Creator.MyShopsCommand` | `myshops`         | Lists shops where the character is an employee; opens **My Shops** NUI. |

***

### Configuration reference

All keys live in **`public/shared/config.lua`** on the global table **`HorseShopConfig`**.

#### General

| Key      | Type      | Description                                                                                         |
| -------- | --------- | --------------------------------------------------------------------------------------------------- |
| `Debug`  | `boolean` | Enables verbose logs, sync traces, and server startup **bridge banner**. Use `false` in production. |
| `Locale` | `string`  | Language file: `public/shared/locales/<Locale>.json` (e.g. `en`, `pt`).                             |
| `Theme`  | `string`  | NUI theme id from `public/shared/themes.json`.                                                      |

#### `HorseShopConfig.Bridge`

| Key             | Values                                                    | Description                                                                                                                                                 |
| --------------- | --------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Framework`     | `"auto"` or resource name                                 | `"auto"` picks **`vorp_core`** if started. Or set explicit resource name.                                                                                   |
| `Inventory`     | `"auto"` or resource name                                 | `"auto"` picks **`vorp_inventory`** if started.                                                                                                             |
| `Notify`        | `"auto"` or resource name                                 | Detection order: `vorp_core`, `ox_lib` (see `utils/helpers/bridgeloader.lua`). Client notify implementation is mainly in `public/bridge/notify/client.lua`. |
| `Interaction`   | `"auto"` \| `"target"` \| `"drawtext"`                    | `"target"` / `"auto"` with **ox\_target** started → ox\_target zones. Otherwise built-in DrawText + key.                                                    |
| `HorseDelivery` | `"auto"` \| `"vorp_stables"` \| `"vorp_core"` \| `"none"` | How customer-bought horses are persisted (see `public/bridge/horse_delivery/server.lua`).                                                                   |

#### `HorseShopConfig.HorseDeliveryExport`

| Key                   | Type              | Description                                                                                                                                                                     |
| --------------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `HorseDeliveryExport` | `string` or `nil` | Format **`"resource:exportName"`**. Server export: `function(source, rideName, rideModel, rideType)` → return **`true`** on success. Checked **before** built-in VORP delivery. |

#### Economy

| Key             | Type       | Description                                                                                                     |
| --------------- | ---------- | --------------------------------------------------------------------------------------------------------------- |
| `VaultCurrency` | `0` \| `1` | Default wallet currency when framework remove/add is called without explicit currency (`0` = cash, `1` = gold). |

#### Interaction (DrawText + ox\_target)

| Key                                                     | Description                                              |
| ------------------------------------------------------- | -------------------------------------------------------- |
| `InteractionOptions.DrawText.keyDisplay`                | Label shown in proximity UI (e.g. `R`).                  |
| `InteractionOptions.DrawText.controlId` / `controlHash` | RedM control hash for the interact key.                  |
| `InteractionOptions.Target.label`                       | ox\_target option label for opening the shop.            |
| `InteractionOptions.Target.icon`                        | ox\_target icon string (e.g. `horse`).                   |
| `InteractionDistance`                                   | Metres: desk, management, vault, delivery prompts.       |
| `DrawtextIdlePollMs`                                    | Sleep when far from all points.                          |
| `DrawtextApproachPollMs`                                | Poll when approaching interaction range.                 |
| `DrawtextApproachRadiusMult`                            | Multiplier on `InteractionDistance` for “approach” band. |

#### Staff markers (debug-style world labels)

| Key                           | Description                                                   |
| ----------------------------- | ------------------------------------------------------------- |
| `StaffMarkerDrawDistance`     | Metres for optional on-screen labels (when enabled per shop). |
| `StaffMarkerRedrawIntervalMs` | Throttle for redraw (`0` = every frame when active).          |

#### Roles (`HorseShopConfig.Roles`)

Array of roles with:

| Field                | Description                                                                                            |
| -------------------- | ------------------------------------------------------------------------------------------------------ |
| `id`, `label`        | Role id (used when promoting) and display label.                                                       |
| `level`              | Numeric seniority (higher = more power). **Boss** is typically `100`.                                  |
| `canOpenManagement`  | Can open management NUI.                                                                               |
| `canManageEmployees` | Hire / fire / promote.                                                                                 |
| `canManageVault`     | Vault + **supplier purchase** (`addStock` uses vault).                                                 |
| `canManageStash`     | **Stock**, sale prices, showroom placements, pending deliveries list (name is legacy; no world stash). |
| `canManageSettings`  | Per-shop 3D labels + map blip toggles.                                                                 |

> **Hiring:** new hires are always stored as **`employee` / grade 0** on the server regardless of NUI payload. Use **promote** to assign roles from config.

#### Supplier / crates

| Key                                        | Description                                                                                              |
| ------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
| `UseCrateDelivery`                         | `true` = pay vault → spawn crate → stock on collect. `false` = stock immediately.                        |
| `DeliveryCrateModel`                       | Prop model name for crates.                                                                              |
| `CrateSpawnSpacing` / `CrateMinSeparation` | Spacing along delivery row.                                                                              |
| `CrateInteractionDistance`                 | Used for crate prompts; also feeds **max claim distance** logic with multipliers.                        |
| `BuyFromVault`                             | If `true`, **customer** horse purchase is charged to the **company vault** instead of the player wallet. |

#### Default shops

| Key            | Description                                                                                                                          |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `DefaultShops` | Array of shop definitions inserted **only when the shops table is empty**. Usually left `{}` and shops are created with the creator. |

#### World / NPC / showroom

| Key                                               | Description                                                                                  |
| ------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `ShopClerkNPC`                                    | `enabled`, `model`, `zOffset`, `syncRadius` — clerk ped at shop desk (client).               |
| `StockDisplayMaxDistance`                         | Max distance from shop centre to save a floor display horse.                                 |
| `Showroom`                                        | `enabled`, `radius`, `disableCollision`, `hotPollMs`, `idlePollMs` — client showroom horses. |
| `SettingsSyncRadius`                              | Bubble for syncing per-shop settings (drawtext/blip flags).                                  |
| `SettingsSyncPollNearMs` / `MidMs` / `FarMs`      | Client poll intervals.                                                                       |
| `SettingsSyncFarFactor` / `SettingsSyncMidFactor` | Distance multipliers for Near/Mid/Far tiers.                                                 |

#### Creator (`HorseShopConfig.Creator`)

| Key                                                                                    | Description                                                          |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `Command` / `MyShopsCommand`                                                           | RegisterCommand names.                                               |
| `AcePermission`                                                                        | ACE string for creator access.                                       |
| `Placement`                                                                            | Key labels and speeds for placement / preview (creator NUI + world). |
| `PreviewCamDistance`, `PreviewCamHeight`, `PreviewCamTargetZOffset`, `PreviewCamPitch` | Scripted camera defaults.                                            |
| `PreviewOrbit*`                                                                        | Orbit camera tuning.                                                 |
| `PreviewCamFov`                                                                        | Default FOV for preview.                                             |

***

### Database

On first run, the resource creates (if missing) these **InnoDB / utf8mb4** tables:

| Table                               | Purpose                                                                |
| ----------------------------------- | ---------------------------------------------------------------------- |
| `cdev_horseshop_shops`              | Branch, world coordinates, preview camera, NPC, blip, `settings_json`. |
| `cdev_horseshop_employees`          | `shop_branch`, `char_identifier`, `role`, `grade`.                     |
| `cdev_horseshop_vaults`             | `balance`, `gold_balance` per branch.                                  |
| `cdev_horseshop_pending_deliveries` | Crate / delivery rows (customer + restock).                            |
| `cdev_horseshop_sales`              | Sale history.                                                          |
| `cdev_horseshop_stock`              | Per-branch stock, prices, showroom positions.                          |
| `cdev_horseshop_catalog`            | Global catalog (seeded if empty).                                      |

**Catalog** images and prices are edited in **`cdev_horseshop_catalog`** (not in `config.lua`).

> Schema is defined only in **`CREATE TABLE`** in `server/classes/db.lua`. There are **no runtime `ALTER` migrations**. For a clean first deploy, use an empty database or drop old `cdev_horseshop_*` tables before starting.

***

### Architecture overview

```
cdev_horseshop/
├── fxmanifest.lua
├── public/shared/config.lua          # HorseShopConfig
├── public/shared/locales/*.json
├── public/shared/themes.json
├── public/bridge/                    # Framework, inventory, notify, target, horse_delivery
├── utils/                            # callbacks, bridgeloader, debug, placement, drawtext
├── server/
│   ├── core.lua                      # Creator net events, syncPendingCrates, bridge banner
│   ├── api.lua                       # api.getCitizenId, notify, getPlayerName
│   ├── locale.lua
│   └── classes/
│       ├── db.lua                    # All MySQL access
│       └── callbacks.lua             # RegisterCallback entries
├── client/
│   ├── core.lua                      # DrawText loop, settings sync, blips
│   ├── api.lua                       # NUI focus, open UIs
│   └── classes/                      # creator, showroom, crates, npcs, ui handler, etc.
├── html/                             # Built NUI (run `npm run build` in ui/)
└── ui/                               # Svelte source
```

***

### Server callbacks

Registered with **`RegisterCallback`** (`utils/helpers/callback.lua`). Client uses **`TriggerServerCallbackAwait`**. Convention: **`return true, payload`** or **`return false, errorCodeOrTable`**.

| Callback name                              | Args (client → server)                               | Notes                                                                                           |
| ------------------------------------------ | ---------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `cdev_horseshop:getShops`                  | —                                                    | All shops (full coords).                                                                        |
| `cdev_horseshop:getMyShops`                | —                                                    | Shops where character is employee.                                                              |
| `cdev_horseshop:getCatalog`                | —                                                    | Global enabled catalog.                                                                         |
| `cdev_horseshop:getShopSaleCatalog`        | `shopBranch`                                         | Horses for sale; **employee or near desk**.                                                     |
| `cdev_horseshop:getShopData`               | `shopBranch`                                         | **Full** shop if employee or near desk; else **public subset** (no vault/mgmt/delivery coords). |
| `cdev_horseshop:getMyMoney`                | —                                                    | Player cash + gold.                                                                             |
| `cdev_horseshop:buyHorse`                  | `shopBranch`, `horseModel`, `currency`               | Near desk; atomic stock; vault or wallet.                                                       |
| `cdev_horseshop:isEmployee`                | `shopBranch`                                         |                                                                                                 |
| `cdev_horseshop:getEmployees`              | `shopBranch`                                         | Needs `canManageEmployees`.                                                                     |
| `cdev_horseshop:getEmployeeRoles`          | `shopBranch`                                         |                                                                                                 |
| `cdev_horseshop:hireEmployee`              | `shopBranch`, `targetCharId`, `role` (ignored)       | Always hires as employee grade 0.                                                               |
| `cdev_horseshop:fireEmployee`              | `shopBranch`, `targetCharId`                         |                                                                                                 |
| `cdev_horseshop:promoteEmployee`           | `shopBranch`, `targetCharId`, `roleId`               | Grade rules enforced server-side.                                                               |
| `cdev_horseshop:getVaultBalance`           | `shopBranch`                                         |                                                                                                 |
| `cdev_horseshop:vaultDeposit`              | `shopBranch`, `amount`, `currency`                   |                                                                                                 |
| `cdev_horseshop:vaultWithdraw`             | `shopBranch`, `amount`, `currency`                   |                                                                                                 |
| `cdev_horseshop:canOpenManagement`         | `shopBranch`                                         |                                                                                                 |
| `cdev_horseshop:claimDelivery`             | `deliveryId`                                         | Proximity + permission; reasons: `not_found`, `forbidden`, `too_far`.                           |
| `cdev_horseshop:getPendingDeliveries`      | `shopBranch`                                         |                                                                                                 |
| `cdev_horseshop:getSalesHistory`           | `shopBranch`, `limit`, `offset`                      |                                                                                                 |
| `cdev_horseshop:getStock`                  | `shopBranch`                                         |                                                                                                 |
| `cdev_horseshop:getStockStats`             | `shopBranch`                                         |                                                                                                 |
| `cdev_horseshop:getManagementOverview`     | `shopBranch`                                         |                                                                                                 |
| `cdev_horseshop:getShopSettings`           | `shopBranch`                                         | Employee or inside settings sync bubble.                                                        |
| `cdev_horseshop:updateShopDrawTextSetting` | `shopBranch`, `enabled`                              | Boss settings.                                                                                  |
| `cdev_horseshop:updateShopMapBlipSetting`  | `shopBranch`, `enabled`                              |                                                                                                 |
| `cdev_horseshop:addStock`                  | `shopBranch`, `horseModel`, `horseLabel`, `quantity` | Atomic vault debit.                                                                             |
| `cdev_horseshop:updateStockSalePrices`     | `shopBranch`, `horseModel`, `priceCash`, `priceGold` |                                                                                                 |
| `cdev_horseshop:setStockDisplayPosition`   | `shopBranch`, `horseModel`, `x`, `y`, `z`, `heading` |                                                                                                 |
| `cdev_horseshop:clearStockDisplayPosition` | `shopBranch`, `horseModel`                           |                                                                                                 |
| `cdev_horseshop:getShowroomPlacements`     | `shopBranch`                                         | Staff **or** inside showroom radius.                                                            |
| `cdev_horseshop:removeStock`               | `shopBranch`, `horseModel`, `amount`                 |                                                                                                 |

**Convar:** `cdev_horseshop:callbackTimeout` (default **15000** ms) — client wait for callback response.

***

### Server events

| Event                               | Direction       | Description                                                    |
| ----------------------------------- | --------------- | -------------------------------------------------------------- |
| `cdev_horseshop:requestOpenCreator` | Client → Server | ACE check; opens creator NUI.                                  |
| `cdev_horseshop:creatorCreateShop`  | Client → Server | ACE; creates shop + hires creator as boss.                     |
| `cdev_horseshop:syncPendingCrates`  | Client → Server | Sends **filtered** pending deliveries for this character only. |

Internal **`RegisterNetEvent`** also exists for the **callback transport** (`__cdev_cb_*` pattern) — do not trigger manually.

***

### Client events

| Event                                                           | Description                                                  |
| --------------------------------------------------------------- | ------------------------------------------------------------ |
| `cdev_horseshop:openCreator`                                    | Opens creator NUI (from server after ACE).                   |
| `cdev_horseshop:shopsUpdated`                                   | Refresh shop list / blips / target zones.                    |
| `cdev_horseshop:shopSettingsSync`                               | `shopBranch`, settings — per-shop drawtext/blip flags.       |
| `cdev_horseshop:horsePurchased`                                 | Feedback after purchase.                                     |
| `cdev_horseshop:requestStableReload`                            | Triggers `stables:loadRuntime` if `vorp_stables` is started. |
| `cdev_horseshop:spawnCrate` / `spawnCratesBulk` / `removeCrate` | Crate props (delivery system).                               |
| `cdev_horseshop:showroomReload`                                 | Refresh floor horses for a branch.                           |
| `cdev_horseshop:client:placeStockHorse`                         | Stock placement flow from management.                        |

***

### Lua APIs (bridges & globals)

#### `_G.CdevHorseshopBridges`

Populated at runtime (strings like `"vorp_core"`, `"ox_target"`, `"none"`):

* `Framework`
* `Inventory`
* `HorseDelivery`
* (Client also sets interaction helper via `CdevHorseshopInteraction` = `"target"` or `"drawtext"`.)

#### `_G.CdevHorseshopNotifyShopsNearCoords`

Server function: **`CdevHorseshopNotifyShopsNearCoords(center, alwaysIncludeSource)`** — triggers `cdev_horseshop:shopsUpdated` for players near `center` (used after creator creates a shop). `alwaysIncludeSource` is an optional player id to always notify.

#### `Framework` (server) — `public/bridge/framework/server.lua`

| Function                                          | Description                  |
| ------------------------------------------------- | ---------------------------- |
| `Framework.GetFrameworkName()`                    | Detected framework id.       |
| `Framework.Notify(source, message, notifyType)`   | Right-tip notify (VORP).     |
| `Framework.GetPlayer(source)`                     | VORP user object.            |
| `Framework.GetCitizenId(source)`                  | Character id string.         |
| `Framework.GetCharacter(source)`                  | Character table (money API). |
| `Framework.GetMoney(source, currency)`            | `0` cash, `1` gold.          |
| `Framework.RemoveMoney(source, amount, currency)` |                              |
| `Framework.AddMoney(source, amount, currency)`    |                              |
| `Framework.GetPlayerName(source)`                 | Display name.                |

#### `Framework` (client) — `public/bridge/framework/client.lua`

| Function                       | Description                            |
| ------------------------------ | -------------------------------------- |
| `Framework.GetFrameworkName()` |                                        |
| `Framework.GetPlayerData()`    | Placeholder for client data if needed. |

#### `Inventory` (server) — `public/bridge/inventory/server.lua`

| Function                                                | Description |
| ------------------------------------------------------- | ----------- |
| `Inventory.CanCarryItem(source, itemName, amount)`      |             |
| `Inventory.AddItem(source, itemName, amount, metadata)` |             |
| `Inventory.RemoveItem(source, itemName, amount)`        |             |
| `Inventory.GetItemCount(source, itemName)`              |             |

#### `HorseDelivery` (server) — `public/bridge/horse_delivery/server.lua`

| Function                                                            | Description                                 |
| ------------------------------------------------------------------- | ------------------------------------------- |
| `HorseDelivery.DeliverHorse(source, rideName, rideModel, rideType)` | Returns **`true`** if horse was registered. |
| `HorseDelivery.GetUsedSystem()`                                     | Resolved bridge id.                         |

#### `Notify` (client) — `public/bridge/notify/client.lua`

`Notify.Error`, `Notify.Info`, `Notify.Success` — local player messages.

#### `Utils` — `utils/main.lua`

| Function                      | Description                                           |
| ----------------------------- | ----------------------------------------------------- |
| `Utils.TableToVector3(t)`     |                                                       |
| `Utils.SafeJsonDecode(str)`   |                                                       |
| `Utils.GetRoleByLevel(level)` | Picks best matching row from `HorseShopConfig.Roles`. |

#### `Debug` — `utils/debug.lua`

`Debug.Log` (gated by `HorseShopConfig.Debug`), `Debug.Warn`, `Debug.Error`, `Debug.Table`.

***

### Database module (`DB`)

All in **`server/classes/db.lua`**. Highlights:

* **Shops:** `GetAllShops`, `GetShopByBranch`, `CreateShop`, `FilterShopForPublicCustomer`
* **Employees:** `GetEmployees`, `IsEmployee`, `GetEmployeeRole`, `HireEmployee`, `FireEmployee`, `UpdateEmployeeRole`, `GetShopsForCharacter`
* **Vault:** `GetVaultBalance`, `GetVaultGoldBalance`, `SetVaultBalance`, `AddVaultBalance`, `TrySubtractVaultCash`, `TrySubtractVaultGold`, gold setters/adders
* **Stock:** `GetStock`, `GetStockQuantity`, `AddStock`, `RemoveStock`, `TryConsumeOneStockUnit`, `GetStockSaleRow`, `GetShopSaleCatalog`, `UpdateStockSalePrices`, `SetStockDisplayPosition`, `ClearStockDisplayPosition`, `GetShowroomPlacements`, `GetStockStats`
* **Deliveries:** `CreatePendingDelivery`, `GetPendingDeliveriesForShop`, `GetPendingDeliveryByCoords`, `ClaimPendingDelivery`, `GetAllPendingDeliveriesForRehydrate`, `FilterPendingDeliveriesForPlayer`, `NextCrateSpawnCoords`
* **Sales:** `RecordSale`, `GetSalesHistory`, `GetSalesHistoryDaily`
* **Catalog:** `GetCatalog`, `GetCatalogHorseForPurchase`, `GetCatalogRowForModel`
* **Settings:** `GetShopSettings`, `SetShopDrawTextEnabled`, `SetShopMapBlipEnabled`
* **Overview:** `GetManagementOverviewStats`

***

### Custom bridges

#### 1) Framework (replace VORP core)

**File:** `public/bridge/framework/server.lua` (+ optional client mirror).

* Implement the same **`Framework.*`** functions your callbacks use (`GetCitizenId`, `GetMoney`, `RemoveMoney`, `AddMoney`, `Notify`, `GetPlayerName`, `GetCharacter`).
* Either:
  * Add your resource name to **`BridgeLoader.FrameworkOrder`** in `utils/helpers/bridgeloader.lua`, **or**
  * Set `HorseShopConfig.Bridge.Framework = "your_resource"` and ensure `GetResourceState("your_resource") == "started"` (loader treats explicit name as the chosen system).

#### 2) Inventory

**File:** `public/bridge/inventory/server.lua`.

* Implement **`Inventory.CanCarryItem`**, **`AddItem`**, **`RemoveItem`**, **`GetItemCount`** using your inventory exports.
* Set `HorseShopConfig.Bridge.Inventory = "auto"` and start your resource **after** adding it to **`BridgeLoader.InventoryOrder`**, or set the config to your resource name if the loader is extended to detect it.

#### 3) Interaction / target

**File:** `public/bridge/target/client.lua`.

* **ox\_target** is implemented via `exports.ox_target:addSphereZone`.
* For **qb-target**, **qtarget**, etc.: replace zone registration with the equivalent API but keep the same **actions** (open shop, management, vault, delivery).
* Set `HorseShopConfig.Bridge.Interaction = "drawtext"` to **disable** ox\_target and use **`client/core.lua`** DrawText + `InteractionOptions.DrawText`.

#### 4) Notifications (client)

**File:** `public/bridge/notify/client.lua`.

* Replace `TriggerEvent('vorp:NotifyLeft', ...)` with your UI (`ox_lib`, custom, etc.).

#### 5) Horse delivery

**Options:**

1. **`HorseShopConfig.HorseDeliveryExport = "my_resource:MyExport"`**\
   Server export: `exports("MyExport", function(source, rideName, rideModel, rideType) return true end)`.
2. **`HorseShopConfig.Bridge.HorseDelivery = "none"`** and rely only on the export.
3. Edit **`public/bridge/horse_delivery/server.lua`** and add a branch for `usedSystem == "your_tag"` (and extend `BridgeLoader.HorseDeliveryOrder` if you use auto-detect).

***

### Locales & themes

* **Locales:** `public/shared/locales/en.json`, `pt.json`, … — copy keys from `en` when adding a language.
* **Themes:** `public/shared/themes.json` — referenced by `HorseShopConfig.Theme`.

***

### Building the NUI

From the `ui` folder:

```bash
npm install
npm run build
```

Output goes to **`html/`** (see `ui/vite.config.js`).

***

### Troubleshooting

| Issue                          | Check                                                                |
| ------------------------------ | -------------------------------------------------------------------- |
| Stock / vault race errors      | **oxmysql** must support **`MySQL.update.await`**.                   |
| No ox\_target prompts          | Start **ox\_target** or set `Bridge.Interaction = "drawtext"`.       |
| Creator does not open          | ACE **`cdev_horseshop.creator`**.                                    |
| Horse not added after purchase | `vorp_stables` / DB table **`stables`** / **`HorseDeliveryExport`**. |
| Callback timeout               | Increase convar **`cdev_horseshop:callbackTimeout`**.                |
| Wrong language                 | `HorseShopConfig.Locale` + matching JSON file.                       |

***

### License & credits

* Resource **author** field in `fxmanifest.lua`: **CDEV**.
* Replace this section with **your** commercial license, support policy, and version changelog when publishing.

***

_End of document — suitable for paste into GitBook as a single page or split by headings into child pages._
