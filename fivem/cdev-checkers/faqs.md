---
icon: messages-question
---

# FAQs

<details>

<summary>🔴 <strong>The checkers board item does nothing when I use it</strong></summary>

Ensure the item name in your inventory matches **`CheckersConfig.Item.name`** (default: checkers`_board`).

**ox\_inventory users:**

```lua
server.export = 'cdev_checkers.useCheckersBoard'
```

Make sure:

* `cdev_checkers` starts **after** your framework and inventory
* Check the **F8 console** for errors
* Enable **CheckersConfig.Debug = true** for extra logs

</details>

<details>

<summary><strong>🗄️ Database tables are not created</strong></summary>

* Ensure **oxmysql** is running
* Verify your MySQL connection in **server.cfg**

The resource automatically creates:

* `cdev_checkers_players`
* `cdev_checkers_match_history`

on the first start.

</details>

<details>

<summary><strong>👀 I placed a board but other players cannot see "Play Checkers"</strong></summary>

**If using Target mode:**

* Ensure **ox\_target** or **qb-target** is installed
* They must start **before** `cdev_checkers`

**If using DrawText:**

* Players must be within **InteractionDistance** (default: 2.5m)

**Note:**\
Players who join after placement may need a few seconds to sync.\
Rescan interval: **TargetRescanMs** (default: 8 seconds).

</details>

<details>

<summary><strong>🧩 The board model or pieces do not load</strong></summary>

Ensure the resource contains:

* `stream/` folder
* `.ytyp` file

Default models:

* Board: `cdev_checkersboard`
* Pieces: `cdev_checkers_*`

⚠️ Do **not rename** stream files unless you update **`CheckersConfig.Props`**.

</details>

<details>

<summary><strong>📤 I cannot pick up the board after a game</strong></summary>

Only the **white player (board owner)** or an **admin** can pick up the table.

Use **"Pickup Table"** in the match UI.

</details>

<details>

<summary><strong>🔐 Admin commands do not work</strong></summary>

Add this ACE permission to your **server.cfg**:

```cfg
add_ace group.admin cdev_checkers.admin allow
```

Restart the server after making changes.

</details>

<details>

<summary><strong>🚫 I cannot delete a board — it says "game in progress"</strong></summary>

Boards with an active game cannot be deleted.

* Wait for the match to finish
* Or ask players to resign

Players can use **"Leave"** in the match UI.

</details>
