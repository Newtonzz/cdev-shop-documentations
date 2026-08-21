---
icon: gear-complex
---

# Installation Guide

{% stepper %}
{% step %}
### Install (or update) dependencies and optional

{% hint style="danger" %}
**Verify all dependencies below are started&#x20;**_**before**_**&#x20;this script in your** **`server.cfg`.Required**
{% endhint %}

| Resource      | Purpose                                                                                                                                  |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| **oxmysql**   | Database driver for player data, ranking, and match history. [Download oxmysql](https://github.com/CommunityOx/oxmysql/releases/latest)​ |
| **Framework** | One of: qb-core, qbx\_core (QBox), es\_extended (ESX Legacy)                                                                             |
| **Inventory** | One of: ox\_inventory, qb-inventory, qs-inventory                                                                                        |

**Optional**

| Resource                        | Purpose                                                                                            |
| ------------------------------- | -------------------------------------------------------------------------------------------------- |
| **ox\_lib**                     | Enhanced notifications. [Download ox\_lib](https://github.com/CommunityOx/ox_lib/releases/latest)​ |
| **ox\_target** or **qb-target** | Target-based board interaction (alternative to DrawText)                                           |
{% endstep %}

{% step %}
### Install cdev\_ludus and create a new subfolder or extract folder to server's root

#### nstall resource from [Portal](https://portal.cfx.re/assets/granted-assets)

**After installing, you should get a zip file with the name shown below.**

* <mark style="color:yellow;">cdev\_ludus.pack.zip</mark>

{% hint style="info" %}
Create a new subfolder optional step, but is _highly recommended_.
{% endhint %}

**If you haven’t already, create a new subfolder named `[cdev]` in your server’s root resources directory. Unzip (**_**extract**_**) this script into the newly created `[cdev]` subfolder.**
{% endstep %}

{% step %}
### Add ACE permission

Open your `server.cfg` and add the following ACE permission:

```
add_ace group.admin cdev_ludus.admin allow
```

**or**

```
add_ace identifier.license:xxxxxxxxxxxx cdev_ludus.admin allow
```

{% hint style="danger" %}
<mark style="color:$warning;">**Important:**</mark>**&#x20;If you are on the Qbox framework, the recommended place to paste the above permission is inside the `permissions.cfg` file instead of `server.cfg`.**
{% endhint %}
{% endstep %}

{% step %}
### Update server.cfg & perform a full restart

Once all other steps are completed, open your `server.cfg` & add `ensure cdev_ludus` to the very **bottom** of your resource start list (after oxmysql, your framework, inventory, and target if used). Finally, perform a full server restart. Failure to perform a full restart after installation will cause errors.

{% hint style="success" %}
**Note: Once completed, use `/ludusgaming` in-game to open the hub, or use the Ludus board item to place a table and play!**
{% endhint %}

{% hint style="info" %}
**Database:** tables are created automatically on first start (`cdev_ludus_players`, `cdev_ludus_match_history`, `cdev_ludus_player_history`). No manual SQL import is required.
{% endhint %}

<div align="left"><figure><img src="../../.gitbook/assets/image (22).png" alt=""><figcaption></figcaption></figure></div>
{% endstep %}

{% step %}
### Add the Ludus board item

{% hint style="warning" %}
The item name must match `LudusConfig.Item.name` (default: `ludus_board`). Follow the guide for your inventory:
{% endhint %}

{% tabs %}
{% tab title="Ox Inventory" %}
**Location:** `ox_inventory` → `data` → `items.lua`

1. Open `resources/[ox]/ox_inventory/data/items.lua`
2. Add the item inside the return table (with other items):

```lua
['ludus_board'] = {
    label = 'Ludus Board',
    weight = 500,
    stack = true,
    close = true,
    consume = 0,
    description = 'Use to place a Ludus table. Aim, rotate, then press E to confirm.',
    server = {
        export = 'cdev_ludus.useLudusBoard'
    }
},
```

{% hint style="danger" %}
**Important:** keep `consume = 0`. The resource removes the item when placement **starts** and returns it if you cancel. Do **not** set `consume = 1`.
{% endhint %}

3. Add the image `ludus_board.png` to your inventory's images folder (e.g. `ox_inventory/web/images/`).
4. Save the file and perform a full server restart.
{% endtab %}

{% tab title="Qb Inventory" %}
**Location:** `qb-core` → `shared` → `items.lua`

1. Open `resources/[qb]/qb-core/shared/items.lua`
2. Add the item inside the `QBCore.Shared.Items` table:

```lua
['ludo_board'] = {
    name = 'ludo_board',
    label = 'Ludo Board',
    weight = 500,
    type = 'item',
    image = 'ludo_board.png',
    unique = false,
    useable = true,
    shouldClose = true,
    description = 'Use to place a Ludo table. Aim, rotate, then press E to confirm.',
},
```

3. Add the image `ludo_board.png` to your inventory's images folder (e.g. `qb-inventory/html/images/`).
4. Save the file and perform a full server restart.
{% endtab %}

{% tab title="QS Inventory" %}
**Location:** depends on your framework:

* **QBCore:** `qb-core` → `shared` → `items.lua`
* **ESX:** `qs-inventory` → `shared` → `items.lua`

1. Open the items file for your framework.
2. Add the Ludo board item in the same format as your other items. Example:

```lua
['ludo_board'] = {
    name = 'ludo_board',
    label = 'Ludo Board',
    weight = 500,
    type = 'item',
    image = 'ludo_board.png',
    unique = false,
    useable = true,
    shouldClose = true,
    description = 'Use to place a Ludo table. Aim, rotate, then press E to confirm.',
},
```

3. Add `ludo_board.png` to your inventory's images folder.
4. Save the file and perform a full server restart.
{% endtab %}
{% endtabs %}

{% hint style="danger" %}
**If you have a&#x20;**<mark style="color:yellow;">**custom framework, custom notify, custom inventory, and custom target**</mark>**, please read our configuration documentation so you can understand how to adapt it by clicking the link below.**
{% endhint %}
{% endstep %}

{% step %}
### Stream models checklist

Ensure the resource includes the `stream/` folder with the Ludus models and `cdev_board_game.ytyp`.

Default models:

| Prop  | Model name                                      |
| ----- | ----------------------------------------------- |
| Board | `cdev_board`                                    |
| Dice  | `cdev_player_dice`                              |
| Pawns | `cdev_player_red` / `blue` / `green` / `yellow` |

{% hint style="danger" %}
Furniture uses native GTA props (`prop_table_02`, `prop_chair_02`). Stake chips use Diamond Casino props (`vw_prop_chip_*`) with a cash-pile fallback.
{% endhint %}

{% hint style="warning" %}
Do **not rename** stream files unless you also update `LudusConfig.Props` in `public/shared/config.lua`.
{% endhint %}


{% endstep %}
{% endstepper %}
