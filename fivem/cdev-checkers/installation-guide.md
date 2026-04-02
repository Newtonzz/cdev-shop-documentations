# ⚙️ Installation Guide

{% stepper %}
{% step %}
### Install (or update) dependencies and optional

{% hint style="danger" %}
<mark style="color:yellow;">**Verify all dependencies below are started**</mark><mark style="color:yellow;">**&#x20;**</mark>_<mark style="color:yellow;">**before**</mark>_<mark style="color:yellow;">**&#x20;**</mark><mark style="color:yellow;">**this script in your**</mark>**&#x20;`server.cfg`**<mark style="color:yellow;">**.**</mark>
{% endhint %}

#### Required

| Resource      | Purpose                                                                                                                                 |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| **oxmysql**   | Database driver for player data, ranking, and match history. [Download oxmysql](https://github.com/CommunityOx/oxmysql/releases/latest) |
| **Framework** | One of: qb-core, qbx\_core (QBox), es\_extended (ESX Legacy)                                                                            |
| **Inventory** | One of: ox\_inventory, qb-inventory, qs-inventory                                                                                       |

#### Optional

| Resource                        | Purpose                                                                                           |
| ------------------------------- | ------------------------------------------------------------------------------------------------- |
| **ox\_lib**                     | Enhanced notifications. [Download ox\_lib](https://github.com/CommunityOx/ox_lib/releases/latest) |
| **ox\_target** or **qb-target** | Target-based board interaction (alternative to DrawText)                                          |
{% endstep %}

{% step %}
### Install cDev\_Checkers and create a new subfolder or extract folder to server's root

### Install resource from [Portal](https://portal.cfx.re/assets/granted-assets)

**After installing, you should get a zip file with the name shown below.**

* <mark style="color:yellow;">cdev\_checkers.pack.zip</mark>

{% hint style="info" %}
Create a new subfolder optional step, but is _highly recommended_.
{% endhint %}

**If you haven’t already, create a new subfolder named `[cdev]` in your server’s root resources directory. Unzip (**_**extract**_**) this script into the newly created `[cdev]` subfolder.**

<figure><img src="../../.gitbook/assets/explorer_4ahDhXK26X.gif" alt=""><figcaption></figcaption></figure>
{% endstep %}

{% step %}
### Add ACE permission

Open your `server.cfg` and add the following ACE permission:

```
add_ace group.admin cdev_checkers.admin allow
```

**or**

```
add_ace identifier.license:xxxxxxxxxxxx cdev_checkers.admin allow
```

{% hint style="danger" %}
<mark style="color:$warning;">**Important:**</mark>**&#x20;If you are on the Qbox framework, the recommended place to paste the above permission is inside the `permissions.cfg` file instead of `server.cfg`.**
{% endhint %}
{% endstep %}

{% step %}
### Update server.cfg & perform a full restart

Once all other steps are completed, open your `server.cfg` & add `ensure cdev_checkers` to the very **bottom** of your resource start list (after oxmysql, your framework, inventory, and target if used). Finally, perform a full server restart. Failure to perform a full restart after installation will cause errors.

<div align="left"><figure><img src="../../.gitbook/assets/image (3).png" alt=""><figcaption></figcaption></figure></div>

{% hint style="success" %}
**Note: Once completed, use the command `/checkersranking` in-game to open the leaderboard, or use the checkers board item to place a board and play!**
{% endhint %}
{% endstep %}

{% step %}
### Add the checkers board item

{% hint style="warning" %}
The item name must match `CheckersConfig.Item.name` (default: checkers`_board`). Follow the guide for your inventory:
{% endhint %}

{% tabs %}
{% tab title="Ox Inventory" %}
**Location:** `ox_inventory` → `data` → `items.lua`

1. Open `resources/[ox]/ox_inventory/data/items.lua`
2. Add the item inside the return table (with other items):

```lua
['checkers_board'] = {
    label = 'Checkers Board',
    weight = 500,
    stack = false,
    close = true,
    consume = 0,
    description = 'Use to play checkers with a nearby player. Place it, then use E to open and choose side.',
    server = {
        export = 'cdev_checkers.useCheckersBoard'
    }
},
```

3. &#x20;Add the image `checkers_board.png` to your inventory's images folder (e.g. `ox_inventory/web/images/`.
4. Save the file and perform a full server restart. Failure to perform a full restart after installation will cause errors.
{% endtab %}

{% tab title="Qb Inventory" %}
**Location:** `qb-core` → `shared` → `items.lua`

1. Open `resources/[qb]/qb-core/shared/items.lua`
2. Add the item inside the `QBCore.Shared.Items` table:

```lua
['checkers_board'] = {
    name = 'checkers_board',
    label = 'Checkers Board',
    weight = 500,
    type = 'item',
    image = 'checkers_board.png',
    unique = false,
    useable = true,
    shouldClose = true,
    description = 'Use to play checkers with a nearby player. Place it, then use E to open and choose side.',
},
```

3. Add the image `chess_board.png` to your inventory's images folder (e.g. `qb-inventory/html/images/`&#x20;
4. Save the file and perform a full server restart. Failure to perform a full restart after installation will cause errors.
{% endtab %}

{% tab title="QS Inventory" %}
**Location:** depends on your framework:

* **QBCore:** `qb-core` → `shared` → `items.lua`
* **ESX:** `qs-inventory` → `shared` → `items.lua`

1. Open the items file for your framework.
2. Add the chess board item in the same format as your other items. Example (adjust to match your file structure):

```lua
['checkers_board'] = {
    name = 'checkers_board',
    label = 'Checkers Board',
    weight = 500,
    type = 'item',
    image = 'checkers_board.png',
    unique = false,
    useable = true,
    shouldClose = true,
    description = 'Use to play checkers with a nearby player. Place it, then use E to open and choose side.',
},
```

3. Add `checkers_board.png` to your inventory's images folder.
4. Save the file and perform a full server restart. Failure to perform a full restart after installation will cause errors.
{% endtab %}
{% endtabs %}

{% hint style="danger" %}
**If you have a&#x20;**<mark style="color:yellow;">**custom framework, custom notify, custom inventory, and custom target**</mark>**, please read our configuration documentation so you can understand how to adapt it by clicking the link below.**
{% endhint %}

{% content-ref url="configurations.md" %}
[configurations.md](configurations.md)
{% endcontent-ref %}
{% endstep %}

{% step %}
### ⭐ In-Game Preview

{% tabs %}
{% tab title="Player One (Owner Board / Red Piece)" %}
#### Using the Checekrs Board from Inventory

<figure><img src="../../.gitbook/assets/FiveM_GTAProcess_OQgXpEzSdp.gif" alt=""><figcaption></figcaption></figure>

#### Matching Settings (Only For White Piece Player)

<figure><img src="../../.gitbook/assets/FiveM_GTAProcess_h4YhnjH0ax.gif" alt=""><figcaption></figcaption></figure>

#### Starting a Checkers Match

<figure><img src="../../.gitbook/assets/FiveM_cl2_GTAProcess_QFUeP5a6n0.gif" alt=""><figcaption></figcaption></figure>
{% endtab %}

{% tab title="Player Two (Member / Black Piece )" %}
#### Joining as Opponent

<figure><img src="../../.gitbook/assets/FiveM_cl2_GTAProcess_OLNBtmsGkt.gif" alt=""><figcaption></figcaption></figure>

#### Player Two Turn

<figure><img src="../../.gitbook/assets/FiveM_cl2_GTAProcess_ywrvAgs7Bi.gif" alt=""><figcaption></figcaption></figure>
{% endtab %}

{% tab title="Admin Commands" %}
#### Chckers admin

```
/checkersadmin
```

<figure><img src="../../.gitbook/assets/FiveM_cl2_GTAProcess_3ZI4lYhhWe.gif" alt=""><figcaption></figcaption></figure>

#### Chckers place

```
/checkers place
```

<figure><img src="../../.gitbook/assets/FiveM_cl2_GTAProcess_SmF2X0ppgo.gif" alt=""><figcaption></figcaption></figure>

#### Checkers Delete

```
/checkers delete
```

<figure><img src="../../.gitbook/assets/FiveM_cl2_GTAProcess_QFbMz4N7k4.gif" alt=""><figcaption></figcaption></figure>
{% endtab %}

{% tab title="Features" %}
#### Game Leaderboard

<figure><img src="../../.gitbook/assets/FiveM_cl2_GTAProcess_GMHd31JE5N.gif" alt=""><figcaption></figcaption></figure>

#### Match History

<figure><img src="../../.gitbook/assets/FiveM_cl2_GTAProcess_0eQMwrMqvh.gif" alt=""><figcaption></figcaption></figure>

#### User Profile Settings

<figure><img src="../../.gitbook/assets/FiveM_cl2_GTAProcess_vAxarcTdjr.gif" alt=""><figcaption></figcaption></figure>
{% endtab %}
{% endtabs %}
{% endstep %}
{% endstepper %}
