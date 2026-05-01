---
description: Step by step instructions to install this resource
---

# ⚙️ Installation Guide

{% stepper %}
{% step %}
<figure><img src="../../.gitbook/assets/FiveM_cl2_GTAProcess_H9ICb9eaDR (1).gif" alt=""><figcaption></figcaption></figure>

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
### Install cDev\_Axethrowing and create a new subfolder or extract folder to server's root

### Install resource from [Portal](https://portal.cfx.re/assets/granted-assets)

**After installing, you should get a zip file with the name shown below.**

* <mark style="color:yellow;">cdev\_axethrowing.pack.zip</mark>

{% hint style="info" %}
Create a new subfolder optional step, but is _highly recommended_.
{% endhint %}

**If you haven’t already, create a new subfolder named `[cdev]` in your server’s root resources directory. Unzip (**_**extract**_**) this script into the newly created `[cdev]` subfolder.**

<div align="left"><figure><img src="../../.gitbook/assets/explorer_rJJW0oyeuZ.gif" alt=""><figcaption></figcaption></figure></div>
{% endstep %}

{% step %}
### Add ACE permission

Open your `server.cfg` and add the following ACE permission:

```
add_ace group.admin cdev_axethrowing.admin allow
```

**or**

```
add_ace identifier.license:xxxxxxxxxxxx cdev_axethrowing.admin allow
```

{% hint style="danger" %}
<mark style="color:$warning;">**Important:**</mark>**&#x20;If you are on the Qbox framework, the recommended place to paste the above permission is inside the `permissions.cfg` file instead of `server.cfg`.**
{% endhint %}
{% endstep %}

{% step %}
### Update server.cfg & perform a full restart

Once all other steps are completed, open your `server.cfg` & add `ensure cdev_axethrowing` to the very **bottom** of your resource start list (after oxmysql, your framework, inventory, and target if used). Finally, perform a full server restart. Failure to perform a full restart after installation will cause errors.

<div align="left"><figure><img src="../../.gitbook/assets/image (21).png" alt=""><figcaption></figcaption></figure></div>

{% hint style="success" %}
**Note: Once completed, use the command `/axethrowing place` in-game to place the target, or use the axethrowing target item to place a target and play!**
{% endhint %}
{% endstep %}

{% step %}
### Add the inventory items (target + hatchet)

{% hint style="danger" %}
&#x20;Item **names** must match `AxeThrowingConfig.Item.Target.name` and `AxeThrowingConfig.Item.Hatchet.name` in `public/shared/config.lua` (defaults: `axe_throwing_target` and `axe_throwing_hatchet`). If you rename them in config, rename the items here too.
{% endhint %}

{% tabs %}
{% tab title="Ox Inventory" %}
**Location:** `ox_inventory` → `data` → `items.lua`

1. Open `resources/[ox]/ox_inventory/data/items.lua`
2. Add **both** items inside the return table:

```lua
['axe_throwing_target'] = {
    label = 'Axe Throwing Target',
    weight = 5000,
    stack = false,
    close = true,
    consume = 0,
    description = 'Place on a wall to open an axe throwing lane. Pick up with your pickup key when allowed.',
    server = {
        export = 'cdev_axethrowing.useAxeThrowingTarget',
    },
},
['axe_throwing_hatchet'] = {
    label = 'Throwing Hatchet',
    weight = 1200,
    stack = false,
    close = true,
    consume = 0,
    description = 'Required to throw when the server configures hatchet checks.',
    server = {
        export = 'cdev_axethrowing.useAxeThrowingHatchet',
    },
},
```

3. Add images `axe_throwing_target.png` and `axe_throwing_hatchet.png` to your inventory images folder (e.g. `ox_inventory/web/images/`).
4. Save and **full restart** the server.

{% hint style="warning" %}
Ox uses **server exports** `cdev_axethrowing.useAxeThrowingTarget` and `cdev_axethrowing.useAxeThrowingHatchet` — these are registered by this resource (`server/classes/itemuse.lua`).
{% endhint %}
{% endtab %}

{% tab title="QBCore / QBox (qb-inventory)" %}
**Location (typical):** `qb-core` → `shared` → `items.lua` (or your inventory’s item list if your fork moved it)

* Open `qb-core/shared/items.lua` (or the file where `QBCore.Shared.Items` is defined).
* Add **both** items in the same format as your other useable items:

```lua
['axe_throwing_target'] = {
    name = 'axe_throwing_target',
    label = 'Axe Throwing Target',
    weight = 5000,
    type = 'item',
    image = 'axe_throwing_target.png',
    unique = false,
    useable = true,
    shouldClose = true,
    description = 'Place on a wall to open an axe throwing lane.',
},
['axe_throwing_hatchet'] = {
    name = 'axe_throwing_hatchet',
    label = 'Throwing Hatchet',
    weight = 1200,
    type = 'item',
    image = 'axe_throwing_hatchet.png',
    unique = false,
    useable = true,
    shouldClose = true,
    description = 'Required to throw when the server configures hatchet checks.',
},
```

3. Copy the PNGs into your inventory UI images folder (e.g. `qb-inventory/html/images/` depending on your inventory build).
4. **Do not** add `server.export` lines for QB — **cdev\_axethrowing** registers useable items at runtime via `QBCore.Functions.CreateUseableItem` when **qb-core** or **qbx\_core** is running (`server/classes/itemuse.lua`).
5. Save and **full restart** the server.
{% endtab %}

{% tab title="QS Inventory" %}
QS setups differ by framework:

* **QBCore + QS:** item definitions are usually still in **`qb-core/shared/items.lua`** (same block as the QBCore tab above). The resource registers useables through **qb-core** the same way — **no** `server.export` in the item row.
* **ESX + QS:** items are often under **`qs-inventory/shared/items.lua`** (or your pack’s documented path). Use the same **name / label / image / useable** fields your file expects. **cdev\_axethrowing** registers **`ESX.RegisterUsableItem`** for both names when **es\_extended** is started.

Example shape (adjust field names to match your `items.lua`):

```lua
['axe_throwing_target'] = {
    name = 'axe_throwing_target',
    label = 'Axe Throwing Target',
    weight = 5000,
    type = 'item',
    image = 'axe_throwing_target.png',
    unique = false,
    useable = true,
    shouldClose = true,
    description = 'Place on a wall to open an axe throwing lane.',
},
['axe_throwing_hatchet'] = {
    name = 'axe_throwing_hatchet',
    label = 'Throwing Hatchet',
    weight = 1200,
    type = 'item',
    image = 'axe_throwing_hatchet.png',
    unique = false,
    useable = true,
    shouldClose = true,
    description = 'Required to throw when the server configures hatchet checks.',
},
```

Add both PNGs to your QS images folder, save, and **full restart**.

{% hint style="danger" %}
If items do nothing on use: confirm names match config, **`AxeThrowingConfig.Item.enabled = true`**, framework/inventory start **before** `cdev_axethrowing`, and check **F8** with **`AxeThrowingConfig.Debug = true`**.
{% endhint %}
{% endtab %}
{% endtabs %}

{% hint style="danger" %}
If you run a **custom framework, inventory, notify, or target**, read Configurations and Integrations to align `Bridge` settings and optional bridge files under `public/bridge/`.
{% endhint %}
{% endstep %}

{% step %}
### ⭐ In-Game Preview

{% tabs %}
{% tab title="Player One (Owner of Target)" %}
#### Using the Axe Target from Inventory

<figure><img src="../../.gitbook/assets/FiveM_cl2_GTAProcess_Msz8Nycrv4.gif" alt=""><figcaption></figcaption></figure>

#### PickUP Target

<figure><img src="../../.gitbook/assets/FiveM_cl2_GTAProcess_H9ICb9eaDR.gif" alt=""><figcaption></figcaption></figure>

#### Creating tournaments (Only for the target owner)

<figure><img src="../../.gitbook/assets/FiveM_cl2_GTAProcess_ZckfRFDIFS.gif" alt=""><figcaption></figcaption></figure>

#### Oberserver (Judge mode)

<figure><img src="../../.gitbook/assets/FiveM_cl2_GTAProcess_YWXguhSr2g.gif" alt=""><figcaption></figcaption></figure>

#### Adjusting the price pool

<figure><img src="../../.gitbook/assets/FiveM_cl2_GTAProcess_wOJimoR3ze.gif" alt=""><figcaption></figcaption></figure>

#### Deleting the Tournament

<figure><img src="../../.gitbook/assets/FiveM_cl2_GTAProcess_gOgsx4RFKP.gif" alt=""><figcaption></figcaption></figure>

#### Starting the Tournament

<figure><img src="../../.gitbook/assets/FiveM_cl2_GTAProcess_scS5uy2o9i.gif" alt=""><figcaption></figcaption></figure>

#### Ending the tournament before it finishes

<figure><img src="../../.gitbook/assets/FiveM_cl2_GTAProcess_ylN6h8cJ9o.gif" alt=""><figcaption></figcaption></figure>
{% endtab %}

{% tab title="Player Two (Member)" %}
#### Joining in Tournament

<figure><img src="../../.gitbook/assets/FiveM_GTAProcess_G43piu4M3g.gif" alt=""><figcaption></figcaption></figure>

#### Leaving from tournament

<figure><img src="../../.gitbook/assets/FiveM_GTAProcess_KrJLRdNXZO.gif" alt=""><figcaption></figcaption></figure>

#### Playing

<figure><img src="../../.gitbook/assets/FiveM_GTAProcess_7oawsCh5Jk.gif" alt=""><figcaption></figcaption></figure>

#### Killshoot Play

<figure><img src="../../.gitbook/assets/FiveM_GTAProcess_YOMDMQYP67.gif" alt=""><figcaption></figcaption></figure>

#### Surrender from Torunament (F7)

<figure><img src="../../.gitbook/assets/FiveM_GTAProcess_FBVVDIsttE.gif" alt=""><figcaption></figcaption></figure>

<div align="left"><figure><img src="../../.gitbook/assets/image (24).png" alt=""><figcaption></figcaption></figure></div>
{% endtab %}

{% tab title="Admin Features" %}
#### &#x20;`/axethrowing admin`

<figure><img src="../../.gitbook/assets/FiveM_cl2_GTAProcess_sh3njDTzR5.gif" alt=""><figcaption></figcaption></figure>
{% endtab %}

{% tab title="Features" %}
#### Practice Match

<figure><img src="../../.gitbook/assets/FiveM_cl2_GTAProcess_ZiZYklkF4W.gif" alt=""><figcaption></figcaption></figure>

#### Tournament tiebreaker by random draw (automatic)

<figure><img src="../../.gitbook/assets/FiveM_GTAProcess_vqyLWI7Uqy.gif" alt=""><figcaption></figcaption></figure>

#### Drag UI Windows

<figure><img src="../../.gitbook/assets/FiveM_GTAProcess_20BjH4LGTg.gif" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/FiveM_GTAProcess_472ZkUgyHC.gif" alt=""><figcaption></figcaption></figure>

#### Find a Tournament `/axethrowing tournament`

<figure><img src="../../.gitbook/assets/FiveM_GTAProcess_jEmovf1O3a.gif" alt=""><figcaption></figcaption></figure>

#### Leaderboard UI `/axethrowing leaderboard`

<figure><img src="../../.gitbook/assets/FiveM_cl2_GTAProcess_2VtHbpEce3.gif" alt=""><figcaption></figcaption></figure>

#### How To Play UI

<div align="left"><figure><img src="../../.gitbook/assets/FiveM_GTAProcess_BSHiN8s6q5.gif" alt=""><figcaption></figcaption></figure></div>

#### Profile Edit

<div align="left"><figure><img src="../../.gitbook/assets/image (25).png" alt=""><figcaption></figcaption></figure></div>

#### End Torunament UI

<div align="left"><figure><img src="../../.gitbook/assets/image (23).png" alt=""><figcaption></figcaption></figure></div>
{% endtab %}
{% endtabs %}
{% endstep %}
{% endstepper %}
