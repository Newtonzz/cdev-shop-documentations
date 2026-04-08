---
icon: wrench
---

# Configurations

{% hint style="warning" %}
**Warning:** All main configuration lives in `public/shared/config.lua`. After changing values, **restart the resource** (`ensure cdev_horseshop` or server restart) for changes to apply.
{% endhint %}

***

### General

| Option                      | Type    | Default     | Description                                                                                                                                                                          |
| --------------------------- | ------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `Debug`                     | boolean | `false`     | Enables extra client/server logs, debug HUD, and sync traces (F8). Set `false` in production.                                                                                        |
| `Locale`                    | string  | `"en"`      | Language code. A file must exist at `public/shared/locales/<Locale>.json` (e.g. `en`, `pt`).                                                                                         |
| `Theme`                     | string  | `"default"` | Theme id in `public/shared/themes.json` (e.g. `default`, `cdev`, `custom`).                                                                                                          |
| `ShopsListResyncIntervalMs` | number  | `0`         | Client: interval (ms) to refetch the shop list from the server (map blips). Useful if you delete a branch and distant players never entered that shop’s sync radius. `0` = disabled. |

***

### Bridge (external integrations)

{% hint style="warning" %}
Horse Shop uses a **bridge system**: you can force a resource by its **exact** RedM resource name, or use `"auto"` for automatic detection in the order defined in `utils/helpers/bridgeloader.lua`.
{% endhint %}

| Option                 | Type   | Typical values                                            | Description                                                                                                                                 |
| ---------------------- | ------ | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `Bridge.Framework`     | string | `"auto"` \| `"vorp_core"`                                 | Core framework (character money, character id, some server-side notifications).                                                             |
| `Bridge.Inventory`     | string | `"auto"` \| `"vorp_inventory"`                            | Inventory (weight checks on restock, items, etc.).                                                                                          |
| `Bridge.Notify`        | string | `"auto"`                                                  | Reserved / consistency with other CDEV products. The client currently uses `public/bridge/notify/client.lua` (see **Notifications** below). |
| `Bridge.Interaction`   | string | `"drawtext"` \| `"target"` \| `"auto"`                    | How players open the shop / management: 3D text + key or **ox\_target**.                                                                    |
| `Bridge.HorseDelivery` | string | `"auto"` \| `"vorp_stables"` \| `"vorp_core"` \| `"none"` | Where a purchased horse is registered (customer delivery).                                                                                  |

#### Framework (`Bridge.Framework`)

* **`"auto"`** — Tries in order: `vorp_core` (if that resource is `started`).
* **Explicit value** — e.g. `Framework = "vorp_core"`. The string must **match the resource name** and the resource must be running; otherwise the loader may not pick what you expect.

**Custom framework**

1. Edit `public/bridge/framework/server.lua` (and `client.lua` if there is client-side logic).
2. Either add your resource to the detection order **or** set `Bridge.Framework = "your_resource_name"`.
3. Implement at least: `GetCitizenId`, `GetCharacter` / money (`GetMoney`, `RemoveMoney`, `AddMoney`), `GetPlayer`, server `Notify`, following the comments in that file.

***

#### Inventory (`Bridge.Inventory`)

* **`"auto"`** — Uses `vorp_inventory` if it is started.
* **`"vorp_inventory"`** — Forces VORP Inventory.

**Custom inventory**

Edit `public/bridge/inventory/server.lua` and replace `exports.vorp_inventory:...` calls with your system’s API, keeping these functions:

* `Inventory.CanCarryItem(source, itemName, amount)`
* `Inventory.AddItem(source, itemName, amount, metadata)`
* `Inventory.RemoveItem(source, itemName, amount)`
* `Inventory.GetItemCount(source, itemName)`

***

#### Notifications (`Bridge.Notify` + actual files)

* On the **server**, many messages go through `Framework.Notify` in `public/bridge/framework/server.lua` (VORP: `Core.NotifyRightTip`).
* On the **client**, local notifications are in `public/bridge/notify/client.lua` (VORP: `vorp:NotifyLeft` event; otherwise native game feed).

The `Bridge.Notify = "auto"` field in `config.lua` exists for consistency; **to change look/behavior**, edit directly:

`public/bridge/notify/client.lua` — example custom branch:

```lua
local function send(msg, _type)
    if not msg or msg == '' then return end
    if GetResourceState('my_notify') == 'started' then
        exports.my_notify:Alert(msg, _type)
        return
    end
    -- VORP / native fallback...
end
```

On the server, adjust `Framework.Notify` in `public/bridge/framework/server.lua` for your notification system.

***

#### Interaction (`Bridge.Interaction`)

* **`"drawtext"`** — Proximity UI (INTERACTION box) and key from `InteractionOptions.DrawText` (RedM default is **R** to avoid clashing with mount/interact on **E**).
* **`"target"`** — **ox\_target** only: sphere zones at shop and management; no drawtext overlay from this resource.
* **`"auto"`** — If `ox_target` is started, uses target; otherwise drawtext.

**Extra options (drawtext)** — `InteractionOptions.DrawText`:

| Option                      | Type   | Default      | Description                                                                              |
| --------------------------- | ------ | ------------ | ---------------------------------------------------------------------------------------- |
| `keyDisplay`                | string | `"R"`        | Key shown in the help text.                                                              |
| `controlId` / `controlHash` | number | `0xE30CD707` | RedM control hash (physical key). See header comments in `config.lua` and control lists. |

**Extra options (ox\_target)** — `InteractionOptions.Target`:

| Option  | Type   | Default             | Description        |
| ------- | ------ | ------------------- | ------------------ |
| `label` | string | `"Open horse shop"` | Shop option label. |
| `icon`  | string | `"horse"`           | Icon (ox\_target). |

**Distance and performance (drawtext)**

| Option                       | Default | Description                                                 |
| ---------------------------- | ------- | ----------------------------------------------------------- |
| `InteractionDistance`        | `2.0`   | Meters: shop, desk, management, vault, delivery, etc.       |
| `DrawtextIdlePollMs`         | `500`   | Sleep when far from any shop point.                         |
| `DrawtextApproachPollMs`     | `45`    | Faster polling as you approach.                             |
| `DrawtextApproachRadiusMult` | `4.0`   | Multiplier × `InteractionDistance` for the “approach” band. |

**Custom target (not ox\_target)**

`public/bridge/target/client.lua` is built around **ox\_target**. For qb-target or others, adapt `addSphereZone` / zone removal with the same idea (two zones per shop: shop + management).

***

#### Horse delivery (`Bridge.HorseDelivery`)

Controls **how a customer’s purchased horse** is registered in the stables system (not the same as staff **restock crates** — that is `UseCrateDelivery`).

| Value            | Description                                                                                                                                                                                                                                                                                                                                                       |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"auto"`         | Order: `vorp_stables` → `vorp_core` → effectively none if no matching resource (see loader).                                                                                                                                                                                                                                                                      |
| `"vorp_stables"` | Path tied to the VORP Stables ecosystem.                                                                                                                                                                                                                                                                                                                          |
| `"vorp_core"`    | Inserts into the MySQL `stables` table (VORP-compatible) and registers horse inventory when applicable.                                                                                                                                                                                                                                                           |
| `"none"`         | In theory “no system”; with **`auto`**, the loader walks `vorp_stables` → `vorp_core` and only skips built-in delivery if **neither** resource is started. **Important:** if you set `HorseDelivery = "none"`, the loader does **not** treat `"none"` as a resource name — it falls back to auto-detection; with VORP running, the VORP fallback can still apply. |

**Custom export (`HorseDeliveryExport`)**

In `config.lua`:

```lua
HorseDeliveryExport = "my_script:RegisterHorse"
```

In your resource (server):

```lua
exports("RegisterHorse", function(source, rideName, rideModel, rideType)
    -- rideType is usually "horse"
    -- Return true only if the horse was saved successfully
    return true
end)
```

* Required format: `"resource_name:exportName"`.
* If the export returns `true`, Horse Shop treats delivery as done and **does not** run the VORP insert for that purchase.
* If the export fails (`false` or error), the script may still deliver via VORP when `usedSystem` is `vorp_stables` or `vorp_core`. To **never** use the VORP path, make sure the export always succeeds when it should, or edit `public/bridge/horse_delivery/server.lua`.
* For a fully custom integration, extend `public/bridge/horse_delivery/server.lua` with a branch `usedSystem == "your_resource"` (and that resource running).

Reference file: `public/bridge/horse_delivery/server.lua`.

***

### Economy / company vault

| Option          | Type   | Default | Description                                                                                                 |
| --------------- | ------ | ------- | ----------------------------------------------------------------------------------------------------------- |
| `VaultCurrency` | number | `0`     | Default currency when debiting wallet without an explicit value in the VORP bridge: `0` = cash, `1` = gold. |

| Option             | Type    | Default | Description                                                                                                                                                                      |
| ------------------ | ------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `UseCrateDelivery` | boolean | `true`  | Staff: after buying stock from the supplier, a physical crate spawns at the delivery point; stock is applied only when someone collects it. `false` = immediate stock in the DB. |
| `BuyFromVault`     | boolean | `false` | Customer: `true` = price is charged from the company vault; `false` = customer pays from their own wallet.                                                                       |

Crate model/spacing: `DeliveryCrateModel`, `CrateSpawnSpacing`, `CrateMinSeparation`, `CrateInteractionDistance`.

***

### Roles (staff)

`Roles` — list of ranks with numeric `level` (not VORP `jobgrade`; internal to this script). Flags: `canOpenManagement`, `canManageEmployees`, `canManageVault`, `canManageStash`, `canManageSettings`.

The DB keys staff by `char_identifier` from `Framework.GetCitizenId` — see `config.lua` Roles section comments.

***

### World (NPC, showroom, sync)

Common keys:

| Section / option                                                        | Description                                                                                                                    |
| ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `ShopClerkNPC`                                                          | Desk NPC (`enabled`, `model`, `syncRadius`, …). With NPC + target, the target may attach to the NPC (see `target/client.lua`). |
| `Showroom`                                                              | Floor horses: `radius`, `hotPollMs` / `idlePollMs`, `disableCollision`.                                                        |
| `StockDisplayMaxDistance`                                               | Max radius to save a display horse position.                                                                                   |
| `SettingsSyncRadius`                                                    | Inside this radius the client receives that branch’s options (blip, 3D labels, etc.).                                          |
| `SettingsSyncPoll*` / `SettingsSyncMidFactor` / `SettingsSyncFarFactor` | Fine-tuning for settings polling performance.                                                                                  |
| `StaffMarkerDrawDistance`                                               | Distance for staff 3D labels (if enabled for that branch in management).                                                       |

***

### Shop creator (`Creator`)

Commands: `Creator.Command` (e.g. `horseshopcreate`), `MyShopsCommand`, `AdminManagerCommand`, `AcePermission`.

`Creator.Placement` — keys and labels for confirm/cancel/rotation and catalog preview zoom.

`PreviewCam*` / `PreviewOrbit*` — preview camera (orbit, FOV, distances).

> Catalog entries, prices, and preview images live in MySQL `cdev_horseshop_catalog`, **not** in `config.lua`.

***

### Themes (`public/shared/themes.json`)

`Theme` in `config.lua` selects a top-level key in the JSON.

| Theme     | Description                                                                                                           |
| --------- | --------------------------------------------------------------------------------------------------------------------- |
| `default` | Western / warm sepia look (dark panels, cream accents).                                                               |
| `cdev`    | CDEV brand palette (background #161619, accent #7289DA, success #0abc5c).                                             |
| `custom`  | Template with **per-variable comments**; replace `"-- ..."` placeholder values with real colors (hex or `rgba(...)`). |

#### How to create / use a custom theme

**Option A — use `custom`**

1. In `config.lua`: `Theme = "custom"`.
2. In `themes.json`, under the `custom` object, replace each placeholder with a color (e.g. `"#1a1a1a"` or `"rgba(255,255,255,0.08)"`).
3. Restart the resource.

**Option B — new theme in JSON**

1. Copy the `default` or `cdev` block.
2. Paste at the same level with a new id, e.g. `"my_server"`.
3. Set `Theme = "my_server"` in `config.lua`.
4. Restart the resource.

Main variables (there are `--rdr-*` and `--horseshop-*` aliases): panel backgrounds, cards, borders, primary/secondary text, success/error/warning, scrollbars, compact HUD, etc. — use the JSON key names to map each token.

***

### Locales (`public/shared/locales/`)

| File      | Purpose                    |
| --------- | -------------------------- |
| `en.json` | English (typical default). |
| `pt.json` | Portuguese.                |

1. Set the code in `config.lua`: `Locale = "pt"` or `Locale = "en"`.
2. For a **new language**: copy `en.json` to `xx.json` (ISO code or your choice), translate the **values** (keep JSON **keys** identical).
3. Restart the resource.

NUI strings and many in-game messages use these keys (e.g. `shop.bought_horse`, management errors, creator, etc.).

***

### Bridge files (quick reference)

| Integration             | Path                                      |
| ----------------------- | ----------------------------------------- |
| Framework (server)      | `public/bridge/framework/server.lua`      |
| Inventory (server)      | `public/bridge/inventory/server.lua`      |
| Notifications (client)  | `public/bridge/notify/client.lua`         |
| Target (client)         | `public/bridge/target/client.lua`         |
| Horse delivery (server) | `public/bridge/horse_delivery/server.lua` |
| `auto` detection order  | `utils/helpers/bridgeloader.lua`          |
