---
icon: messages-question
---

# FAQs

<details>

<summary>🔴 <strong>The Ludus board item does nothing when I use it</strong></summary>

Ensure the item name in your inventory matches **`LudusConfig.Item.name`** (default: `ludus_board`).

**ox\_inventory users:**

```lua
consume = 0,
server = {
    export = 'cdev_ludus.useLudusBoard'
}
```

Make sure:

* `cdev_ludus` starts **after** your framework and inventory
* Check the **F8 console** for errors
* Enable **`LudusConfig.Debug = true`** for extra logs

</details>

<details>

<summary><strong>🗄️ Database tables are not created</strong></summary>

* Ensure **oxmysql** is running
* Verify your MySQL connection in **server.cfg**

The resource automatically creates:

* `cdev_ludus_players`
* `cdev_ludus_match_history`
* `cdev_ludus_player_history`

on the first start. No manual SQL file is required.

</details>

<details>

<summary><strong>👀 I placed a board but other players cannot interact</strong></summary>

**If using Target mode:**

* Ensure **ox\_target** or **qb-target** is installed
* They must start **before** `cdev_ludus`

**If using DrawText:**

* Players must be within **`Distances.InteractionDistance`** (default: 3.5m)
* On-screen hints: **`[E]`** play / interact · **`[G]`** pick up board (configurable in `InteractionOptions.DrawText`)

**Sync note:**\
Nearby spectators only receive live FX within **`Sync.interestRadius`** (default: 6.0m).

</details>

<details>

<summary><strong>🧩 The board model, pawns, or dice do not load</strong></summary>

Ensure the resource contains:

* `stream/` folder
* `cdev_board_game.ytyp` (and matching `.ydr` models)

Default models:

* Board: `cdev_board`
* Dice: `cdev_player_dice`
* Pawns: `cdev_player_red` / `blue` / `green` / `yellow`

⚠️ Do **not rename** stream files unless you update **`LudusConfig.Props`**.

</details>

<details>

<summary><strong>📤 I cannot pick up the board</strong></summary>

Only the **board owner** or an **admin** can pick up an **idle** table.

* **DrawText:** press **`G`** (default `pickupControlId = 47`) while near the board
* **Target:** use the “Pick up board” option
* Or `/luduspickup` (optional keybind in GTA settings)

Boards in **lobby** or **playing** cannot be picked up until the session ends / is closed.

</details>

<details>

<summary><strong>🔐 Admin commands do not work</strong></summary>

Add this ACE permission to your **server.cfg** (or Qbox `permissions.cfg`):

```cfg
add_ace group.admin cdev_ludus.admin allow
```

Restart the server after making changes.

</details>

<details>

<summary><strong>🚫 I cannot delete a board game in progress</strong></summary>

Boards with an active match cannot be deleted.

* Wait for the match to finish
* Or ask players to leave / forfeit

Admins can manage idle boards via `/ludusadmin` or `/ludusdelete`.

</details>

<details>

<summary><strong>💰 Stake error / “outside the allowed range”</strong></summary>

Wagers must be between **`Betting.MinStake`** and **`Betting.MaxStake`** (defaults: `100` – `100000`).

The lobby UI shows an in-menu error banner. Adjust stakes or raise `MaxStake` in `config.lua`.

</details>

<details>

<summary><strong>🃏 Chip stacks look wrong or missing</strong></summary>

* Chip stacks only appear when wager is enabled (unless `Props.Chips.showWithoutWager = true`)
* Casino chip models (`vw_prop_chip_*`) require the Diamond Casino DLC assets; otherwise the **fallback** cash pile is used
* Recalibrate height with `/ludusbalance` if chips float or clip

</details>

<details>

<summary><strong>📐 Pawns / dice are misaligned on the board</strong></summary>

Use **`/ludusbalance`** (admin) near a placed board to calibrate layout layers, then save.\
Overrides are written to `public/shared/layout_override.json`.

</details>

<details>

<summary><strong>♻️ Boards disappear after server restart</strong></summary>

Placed boards are **in-memory only** (not saved to the database).\
After a restart, players/admins must place boards again (`ludus_board` item or `/ludusplace`).

Player ranking, history, and profiles **are** persisted in MySQL.

</details>

​[PreviousIntegrations](https://app.gitbook.com/o/eOeRCRH5NcDQh45QRfQG/s/PhIA9eCA4bwgx77hxx4i/~/edit/~/changes/382/fivem/cdev-ludo/integrations)[Next - FiveM ResourcescDev Chess](https://app.gitbook.com/o/eOeRCRH5NcDQh45QRfQG/s/PhIA9eCA4bwgx77hxx4i/~/edit/~/changes/382/fivem/cdev-chess)![Cdev hq](https://lh3.googleusercontent.com/a/ACg8ocJa6aMMw4NQGqt2b7MPZ_on22iY3LMnApCtDQKXNEzmgugm_xc=s96-c)Last modified 22d ago
