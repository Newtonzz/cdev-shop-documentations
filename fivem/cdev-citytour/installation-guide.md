---
icon: gear-complex
---

# Installation Guide

{% stepper %}
{% step %}
#### Install (or update) dependencies and optional

{% hint style="danger" %}
<mark style="color:yellow;">**Verify all dependencies below are started**</mark><mark style="color:yellow;">**&#x20;**</mark>_<mark style="color:yellow;">**before**</mark>_<mark style="color:yellow;">**&#x20;**</mark><mark style="color:yellow;">**this script in your**</mark> **`server.cfg`**<mark style="color:yellow;">**.**</mark>
{% endhint %}

**Required**

| Resource      | Purpose                                                                                                                                 |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| **oxmysql**   | Database driver for player data, ranking, and match history. [Download oxmysql](https://github.com/CommunityOx/oxmysql/releases/latest) |
| **Framework** | One of: qb-core, qbx\_core (QBox), es\_extended (ESX Legacy)                                                                            |
| **Inventory** | One of: ox\_inventory, qb-inventory, qs-inventory                                                                                       |

**Optional**

| Resource                        | Purpose                                                                                           |
| ------------------------------- | ------------------------------------------------------------------------------------------------- |
| **ox\_lib**                     | Enhanced notifications. [Download ox\_lib](https://github.com/CommunityOx/ox_lib/releases/latest) |
| **ox\_target** or **qb-target** | Target-based board interaction (alternative to DrawText)                                          |
{% endstep %}

{% step %}
#### Install cdev\_citytour and create a new subfolder or extract folder to server's root

#### Install resource from [Portal](https://portal.cfx.re/assets/granted-assets)

**After installing, you should get a zip file with the name shown below.**

* <mark style="color:yellow;">cdev\_citytour.pack.zip</mark>

{% hint style="info" %}
Create a new subfolder optional step, but is _highly recommended_.
{% endhint %}

**If you haven’t already, create a new subfolder named `[cdev]` in your server’s root resources directory. Unzip (**_**extract**_**) this script into the newly created `[cdev]` subfolder.**
{% endstep %}

{% step %}
#### Add ACE permission

Open your `server.cfg` and add the following ACE permission:

```
add_ace group.admin cdev_citytour.admin allow
```

**or**

```
add_ace identifier.license:xxxxxxxxxxxx cdev_citytour.admin allow
```

{% hint style="danger" %}
<mark style="color:$warning;">**Important:**</mark>**&#x20;If you are on the Qbox framework, the recommended place to paste the above permission is inside the `permissions.cfg` file instead of `server.cfg`.**
{% endhint %}
{% endstep %}

{% step %}
#### Update server.cfg & perform a full restart

Once all other steps are completed, open your `server.cfg` & add `ensure cdev_citytour` to the very **bottom** of your resource start list (after oxmysql, your framework, inventory, and target if used). Finally, perform a full server restart. Failure to perform a full restart after installation will cause errors.

{% hint style="success" %}
**Note: Once completed, use `/citytourgaming` in-game to open the hub, or use the City Tour board item to place a table and play!**
{% endhint %}

{% hint style="info" %}
**Database:** tables are created automatically on first start (`cdev_citytour_players`, `cdev_citytour_match_history`, `cdev_citytour_player_history`). No manual SQL import is required. `sql/citytour.sql` is included if you prefer to create the tables yourself.
{% endhint %}
{% endstep %}

{% step %}
#### Add the City Tour board item

{% hint style="warning" %}
The item name must match `CityTourConfig.Item.name` (default: `citytour_board`). Follow the guide for your inventory:
{% endhint %}

{% tabs %}
{% tab title="Ox Inventory" %}
**Location:** `ox_inventory` → `data` → `items.lua`

1. Open `resources/[ox]/ox_inventory/data/items.lua`
2. Add the item inside the return table (with other items):

```lua
['citytour_board'] = {
    label = 'City Tour Board',
    weight = 500,
    stack = false,
    close = true,
    consume = 0,
    description = 'Place a City Tour table in the world',
    server = {
        export = 'cdev_citytour.useCityTourBoard',
    },
},
```

{% hint style="danger" %}
**Important:** keep `consume = 0`. The resource removes the item when placement **starts** and returns it if you cancel. Do **not** set `consume = 1`.
{% endhint %}

3. Add the image `citytour_board.png` you can find inside the folder `cdev_citytour /image` to your inventory's images folder (e.g. `ox_inventory/web/images/`).
4. Save the file and perform a full server restart.
{% endtab %}

{% tab title="Qb Inventory" %}
**Location:** `qb-core` → `shared` → `items.lua`

1. Open `resources/[qb]/qb-core/shared/items.lua`
2. Add the item inside the `QBCore.Shared.Items` table:

```lua
['citytour_board'] = {
    name = 'citytour_board',
    label = 'City Tour Board',
    weight = 500,
    type = 'item',
    image = 'citytour_board.png',
    unique = true,
    useable = true,
    shouldClose = true,
    description = 'Place a City Tour table in the world',
},
```

3. Add the image `citytour_board.png` you can find inside the folder `cdev_citytour /image` to your inventory's images folder (e.g. `qb-inventory/html/images/`).
4. Save the file and perform a full server restart.
{% endtab %}

{% tab title="QS Inventory" %}
**Location:** depends on your framework:

* **QBCore:** `qb-core` → `shared` → `items.lua`
* **ESX:** `qs-inventory` → `shared` → `items.lua`

1. Open the items file for your framework.
2. Add the City Tour board item in the same format as your other items. Example:

```lua
['citytour_board'] = {
    name = 'citytour_board',
    label = 'City Tour Board',
    weight = 500,
    type = 'item',
    image = 'citytour_board.png',
    unique = true,
    useable = true,
    shouldClose = true,
    description = 'Place a City Tour table in the world',
},
```

3. Add `citytour_board.png`  you can find inside the folder `cdev_citytour /image` to your inventory's images folder.
4. Save the file and perform a full server restart.
{% endtab %}
{% endtabs %}

{% hint style="info" %}
A pack image is included at `cdev_citytour/image/citytour_board.png` — copy it into your inventory images folder and rename if needed.
{% endhint %}

{% hint style="danger" %}
**If you have a&#x20;**<mark style="color:yellow;">**custom framework, custom notify, custom inventory, and custom target**</mark>**, please read our configuration documentation so you can understand how to adapt it by clicking the link below.**
{% endhint %}
{% endstep %}

{% step %}
#### Stream models checklist

Ensure the resource includes the `stream/` folder with the City Tour models and `cdev_citygame.ytyp`.

Default models:

| Prop            | Model name                                               |
| --------------- | -------------------------------------------------------- |
| Board           | `cdev_citygame_board`                                    |
| Dice            | `cdev_citygame_player_dice_small`                        |
| Pawns           | `cdev_citygame_player_red` / `blue` / `green` / `yellow` |
| City houses 1–3 | `cdev_citygame_regular_house` / `_2` / `_3`              |
| Hotel           | `cdev_citygame_hotel`                                    |
| Beach house     | `cdev_citygame_beach_house`                              |

Furniture uses native GTA props (`prop_table_02`, `prop_chair_02`). Cash stacks use `prop_cash_pile_02`.

{% hint style="warning" %}
Do **not rename** stream files unless you also update `CityTourConfig.Props` in `public/shared/config.lua`. The ytyp **must** list every custom archetype (same names as the `.ydr` basenames).
{% endhint %}
{% endstep %}

{% step %}
#### VIP currency (optional)

Real mode can charge **`vip`** as an entry account. Wire it in `public/bridge/vip/server.lua`:

* Default: Qbox / QB `crypto` inside `players.money`
* Or set `VIP_CFG.Mode = "export"` and point at your VIP resource

If you do not use VIP, leave Real accounts as `cash` / `bank` only (`Modes.Real.Accounts` in config).
{% endstep %}

{% step %}
#### ⭐ In-Game Preview

{% content-ref url="features-preview.md" %}
[features-preview.md](features-preview.md)
{% endcontent-ref %}
{% endstep %}
{% endstepper %}
