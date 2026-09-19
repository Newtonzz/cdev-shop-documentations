---
icon: messages-question
---

# FAQs

<details>

<summary>🔴 <strong>The City Tour board item does nothing when I use it</strong></summary>

Ensure the item name in your inventory matches **`CityTourConfig.Item.name`** (default: `citytour_board`).

**ox\_inventory users:**

```lua
consume = 0,
server = {
    export = 'cdev_citytour.useCityTourBoard'
}
```

Make sure:

* `cdev_citytour` starts **after** your framework and inventory
* Check the **F8 console** for errors
* Enable **`CityTourConfig.Debug = true`** for extra logs

</details>

<details>

<summary><strong>🗄️ Database tables are not created</strong></summary>

* Ensure **oxmysql** is running
* Verify your MySQL connection in **server.cfg**

The resource automatically creates:

* `cdev_citytour_players`
* `cdev_citytour_match_history`
* `cdev_citytour_player_history`

on the first start. No manual SQL file is required. You can also run `sql/citytour.sql`.

</details>

<details>

<summary><strong>👀 I placed a board but other players cannot interact</strong></summary>

**If using Target mode:**

* Ensure **ox\_target** or **qb-target** is installed
* They must start **before** `cdev_citytour`
* Default `Bridge.Interaction` is **`"target"`**

**If using DrawText:**

* Set `Bridge.Interaction = "drawtext"`
* Players must be within **`Distances.InteractionDistance`** (default: 3.5m)
* On-screen hints: **`[E]`** play / interact · **`[G]`** pick up board (configurable in `InteractionOptions.DrawText`)

**Sync note:**\
Nearby spectators only receive live FX within **`Sync.interestRadius`** (default: 6.0m).

</details>

<details>

<summary><strong>🧩 The board, pawns, dice, or houses do not load</strong></summary>

Ensure the resource contains:

* `stream/` folder
* `cdev_citygame.ytyp` (and matching `.ydr` models)

Default models:

* Board: `cdev_citygame_board`
* Dice: `cdev_citygame_player_dice_small`
* Pawns: `cdev_citygame_player_red` / `blue` / `green` / `yellow`
* Houses / hotel / beach: `cdev_citygame_regular_house*`, `cdev_citygame_hotel`, `cdev_citygame_beach_house`

⚠️ Do **not rename** stream files unless you update **`CityTourConfig.Props`**.

The ytyp must list every custom archetype (same names as the `.ydr` basenames). Then **restart the full resource** (`ensure cdev_citytour`).

</details>

<details>

<summary><strong>📤 I cannot pick up the board</strong></summary>

Only the **board owner** or an **admin** can pick up an **idle** table.

* **DrawText:** press **`G`** (default `pickupControlId = 47`) while near the board
* **Target:** use the pick-up option
* Or `/citytourpickup` (optional keybind in GTA settings)

Boards in **lobby** or **playing** cannot be picked up until the session ends / is closed.

</details>

<details>

<summary><strong>🔐 Admin commands do not work</strong></summary>

Add this ACE permission to your **server.cfg** (or Qbox `permissions.cfg`):

```cfg
add_ace group.admin cdev_citytour.admin allow
```

Restart the server after making changes.

</details>

<details>

<summary><strong>🚫 I cannot delete a board — game in progress</strong></summary>

Boards with an active match cannot be deleted.

* Wait for the match to finish
* Or ask players to leave / forfeit

Admins can manage idle boards via `/citytouradmin` or `/citytourdelete`.

</details>

<details>

<summary><strong>💰 Real entry error / “outside the allowed range”</strong></summary>

Real entries must be between **`Modes.Real.MinEntry`** and **`Modes.Real.MaxEntry`** (defaults: `100` – `100000`).

The lobby UI shows an in-menu error banner. Adjust the entry or raise `MaxEntry` in `config.lua`.

If the account is **`vip`**, wire `public/bridge/vip/server.lua` or the charge will fail.

</details>

<details>

<summary><strong>💎 VIP / crypto balance is always 0</strong></summary>

Edit **`public/bridge/vip/server.lua`**:

* Default `Mode = "qbox_crypto"` reads QB/Qbox `players.money` JSON (`crypto` by default)
* Change `Qbox.currencyKey` if your server uses another money key
* Or switch to `Mode = "export"` and set your resource export names

Real mode must include `"vip"` in `Modes.Real.Accounts` for the lobby to offer it.

</details>

<details>

<summary><strong>💵 Cash stacks look wrong or missing</strong></summary>

* Cash piles use `Props.CashStacks` (`prop_cash_pile_02`) and in-match capital tiers
* Recalibrate height with `/citytourbalance` if piles float or clip
* Disable with `Props.CashStacks.enabled = false`

</details>

<details>

<summary><strong>📐 Pawns / dice / houses are misaligned on the board</strong></summary>

Use **`/citytourbalance`** (admin) near a placed board to calibrate layout layers, then save.\
Overrides are written to `public/shared/layout_override.json`.

Prices and rent are **not** in the balancer — edit `public/shared/property_economy.lua`.

</details>

<details>

<summary><strong>🏝️ Using Freed from Lost Island still lets me roll, even with “roll after bail” off</strong></summary>

That is intended. The lobby toggle only applies to **paying bail**. Playing **Freed from Lost Island** frees you and lets you roll **this turn**. The card text and the hub Rules tab say the same thing.

Keeping the card in hand does nothing until you **play** it.

</details>

<details>

<summary><strong>🏖️ I cannot repurchase a beach / hotel city</strong></summary>

Intended. After paying rent you can only repurchase a **city** that is not a hotel. Paradise beaches cannot be taken this way.

</details>

<details>

<summary><strong>🤖 Singleplayer / AI does not start</strong></summary>

* `Modes.Singleplayer.enabled` and `Npc.enabled` must not be `false`
* Singleplayer forces `Npc.playerCount` seats (default 4 = 1 human + 3 AI)
* Singleplayer does **not** change ranking and does **not** take a Real entry

</details>

<details>

<summary><strong>♻️ Boards disappear after server restart</strong></summary>

Placed boards are **in-memory only** (not saved to the database).\
After a restart, players/admins must place boards again (`citytour_board` item or `/citytourplace`).

Player ranking, history, and profiles **are** persisted in MySQL.

</details>

<details>

<summary><strong>🖱 Mouse wheel scrolls the lobby / match window instead of the camera</strong></summary>

Intended. Lobby and match cards use header **up/down arrows** (and the scrollbar). Mouse wheel is reserved for **cinema zoom**. The Gaming Hub and admin panel still use mouse-wheel scroll.

</details>

<details>

<summary><strong>🔔 Too many notifications / duplicate toasts</strong></summary>

Lobby create/join validation errors are shown in the **NUI banner** only.\
If you still see duplicates, check that custom bridges are not calling notify twice, and that `Bridge.Notify` is set to a single system (`ox_lib`, `qbcore`, `esx`, or `native`).

</details>
