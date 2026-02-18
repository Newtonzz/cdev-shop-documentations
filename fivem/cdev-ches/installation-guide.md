---
description: Step by step instructions to install this resource
---

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
### Create a new subfolder or extract folder to server's root

{% hint style="info" %}
Create a new subfolder optional step, but is _highly recommended_.
{% endhint %}

**If you haven’t already, create a new subfolder named `[cdev]` in your server’s root resources directory. Unzip (**_**extract**_**) this script into the newly created `[cdev]` subfolder.**

<div align="left"><figure><img src="../../.gitbook/assets/explorer_8OlcrVO8O0.gif" alt=""><figcaption></figcaption></figure></div>
{% endstep %}

{% step %}
### Add ACE permission

Open your `server.cfg` and add the following ACE permission:

```
add_ace group.admin cdev_chess.admin allow
```

**or**

```
add_ace identifier.license:xxxxxxxxxxxx cdev_chess.admin allow
```

{% hint style="danger" %}
<mark style="color:$warning;">**Important:**</mark>**&#x20;If you are on the Qbox framework, the recommended place to paste the above permission is inside the `permissions.cfg` file instead of `server.cfg`.**
{% endhint %}
{% endstep %}

{% step %}
### Update server.cfg & perform a full restart

Once all other steps are completed, open your `server.cfg` & add `ensure cdev_chess` to the very **bottom** of your resource start list (after oxmysql, your framework, inventory, and target if used). Finally, perform a full server restart. Failure to perform a full restart after installation will cause errors.

<div align="left"><figure><img src="../../.gitbook/assets/image.png" alt=""><figcaption></figcaption></figure></div>

{% hint style="success" %}
**Note: Once completed, use the command `/chessranking` in-game to open the leaderboard, or use the chess board item to place a board and play!**
{% endhint %}
{% endstep %}

{% step %}
### Add the chess board item

{% hint style="warning" %}
The item name must match `ChessConfig.Item.name` (default: `chess_board`). Follow the guide for your inventory:
{% endhint %}

{% tabs %}
{% tab title="Ox Inventory" %}
**Location:** `ox_inventory` → `data` → `items.lua`

1. Open `resources/[ox]/ox_inventory/data/items.lua`
2. Add the item inside the return table (with other items):

```lua
['chess_board'] = {
    label = 'Chess Board',
    weight = 500,
    stack = false,
    close = true,
    description = 'A portable chess board to play with friends.',
    server = {
        export = 'cdev_chess.useChessBoard',
    },
},
```

3. &#x20;Add the image `chess_board.png` to your inventory's images folder (e.g. `ox_inventory/web/images/`.
4. Save the file and perform a full server restart. Failure to perform a full restart after installation will cause errors.
{% endtab %}

{% tab title="Qb Inventory" %}
**Location:** `qb-core` → `shared` → `items.lua`

1. Open `resources/[qb]/qb-core/shared/items.lua`
2. Add the item inside the `QBCore.Shared.Items` table:

```lua
['chess_board'] = {
    name = 'chess_board',
    label = 'Chess Board',
    weight = 500,
    type = 'item',
    image = 'chess_board.png',
    unique = false,
    useable = true,
    shouldClose = true,
    description = 'A portable chess board to play with friends.',
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
['chess_board'] = {
    name = 'chess_board',
    label = 'Chess Board',
    weight = 500,
    type = 'item',
    image = 'chess_board.png',
    unique = false,
    useable = true,
    shouldClose = true,
    description = 'A portable chess board to play with friends.',
},
```

3. Add `chess_board.png` to your inventory's images folder.
4. Save the file and perform a full server restart. Failure to perform a full restart after installation will cause errors.
{% endtab %}
{% endtabs %}
{% endstep %}

{% step %}
###


{% endstep %}
{% endstepper %}

{% tabs %}
{% tab title="Ox Inventory" %}


{% stepper %}
{% step %}
### Install resource from [Portal](https://portal.cfx.re/assets/granted-assets)

**After installing, you should get a zip file with the name shown below.**

* <mark style="color:yellow;">cdev\_cOne.pack.zip</mark>
{% endstep %}

{% step %}
### Create the folder and extract the zip inside it.

➤ Step 1: Create the <kbd><mark style="color:red;">cdev\_cOne<mark style="color:red;"></kbd> folder.

➤ Step 2: Extract the contents of <mark style="color:yellow;">cdev\_cOne.pack.zip</mark> into the <kbd><mark style="color:red;">cdev\_cOne<mark style="color:red;"></kbd> folder.

{% hint style="danger" %}
**It is extremely essential that the folder has the exact same name as above, otherwise the resource will not work properly.**
{% endhint %}
{% endstep %}

{% step %}
### Server.cfg Configuration

This resource must always be started **after your&#x20;**<mark style="color:yellow;">**framework**</mark>**&#x20;and any&#x20;**<mark style="color:yellow;">**other**</mark>**&#x20;required resources**.

It is essential to follow the correct startup order to ensure proper functionality and avoid conflicts.

**Below is an example screenshot showing the recommended startup order:**

<div align="left"><figure><img src="../../.gitbook/assets/image (14).png" alt=""><figcaption></figcaption></figure></div>
{% endstep %}

{% step %}
### Cdev\_cOne Configuration

🚩 <mark style="color:red;">**To work correctly, cdev\_cOne requires the proper configuration of the inventory in the**</mark>**&#x20;`config.lua`&#x20;**<mark style="color:red;">**file located in the**</mark>**&#x20;`cdev_cOne > public > shared`&#x20;**<mark style="color:red;">**folder. Below is how the file should be configured to ensure everything functions properly.**</mark>

<figure><img src="../../.gitbook/assets/image (15).png" alt=""><figcaption></figcaption></figure>

{% hint style="danger" %}
<mark style="color:yellow;">**Attention:**</mark>**&#x20;the Language configuration is set to&#x20;**<mark style="color:yellow;">**EN**</mark>**&#x20;by default because we don’t have other translation files. If you change it to another language without creating the file in the folder&#x20;**<kbd><mark style="color:yellow;">**cdev\_cOne > data > languages**<mark style="color:yellow;"></kbd>**, it will not work.**
{% endhint %}
{% endstep %}

{% step %}
### Setup Item and Images inside Ox Inventory

**Step One**

Add images to `ox_inventory/web/images` Images are available in the `cdev_cOne > images` folder of this resource.

**Step Two**

Add item to `ox_inventory/data/items.lua` like listed bellow.

```lua
["conedeck"] = {
	label = "cOne Deck",
	weight = 100,
	consume = 1,
	stack = true,
	close = true,
	client = {
		image = "conedeck.png",
		export = "cdev_cOne.createTableOXItem",
	}
},
```
{% endstep %}

{% step %}
###


{% endstep %}

{% step %}
### Using the card cOne Deck in-game

<figure><img src="../../.gitbook/assets/Give Ox.gif" alt=""><figcaption></figcaption></figure>
{% endstep %}
{% endstepper %}
{% endtab %}

{% tab title="Qb Inventory" %}

{% endtab %}
{% endtabs %}
