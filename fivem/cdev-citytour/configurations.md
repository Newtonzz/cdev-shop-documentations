---
icon: wrench
---

# Configurations

{% hint style="warning" %}
All configuration is done in `public/shared/config.lua` (`CityTourConfig`). Restart the resource after changing values.
{% endhint %}

***

#### General

| Option   | Type    | Default     | Description                                                                            |
| -------- | ------- | ----------- | -------------------------------------------------------------------------------------- |
| `Debug`  | boolean | `false`     | Enable extra logs in F8 / server console. Set `false` on production.                   |
| `Locale` | string  | `"en"`      | Language code. Options: `"en"`, `"pt"`. Must match a file in `public/shared/locales/`. |
| `Theme`  | string  | `"default"` | NUI theme key from `public/shared/themes.json` (`default` \| `custom`).                |

***

#### Bridge

| Option               | Type   | Options                                                              | Description                                                     |
| -------------------- | ------ | -------------------------------------------------------------------- | --------------------------------------------------------------- |
| `Bridge.Framework`   | string | `"auto"` \| `"qb-core"` \| `"qbx_core"` \| `"es_extended"`           | Framework to use. `"auto"` detects automatically.               |
| `Bridge.Inventory`   | string | `"auto"` \| `"ox_inventory"` \| `"qb-inventory"` \| `"qs-inventory"` | Inventory system.                                               |
| `Bridge.Interaction` | string | `"drawtext"` \| `"target"`                                           | How players interact with placed boards. Default is `"target"`. |
| `Bridge.Target`      | string | `"auto"` \| `"ox_target"` \| `"qb-target"`                           | Target system when `Interaction = "target"`.                    |
| `Bridge.Notify`      | string | `"auto"` \| `"ox_lib"` \| `"qbcore"` \| `"esx"` \| `"native"`        | Notification system.                                            |

#### Notify Options (ox\_lib)

| Option                   | Type   | Default       | Description                                                                 |
| ------------------------ | ------ | ------------- | --------------------------------------------------------------------------- |
| `NotifyOptions.position` | string | `"top-right"` | ox\_lib toast position (`top-right`, `top-left`, `top`, `bottom-right`, …). |
| `NotifyOptions.duration` | number | `4500`        | Toast duration (ms).                                                        |

{% hint style="info" %}
Toasts use a **single path**: `Api.Notify` → `cdev_citytour:clientNotify` → Notify bridge.
{% endhint %}

***

#### Interaction Options

**DrawText (when `Bridge.Interaction = "drawtext"`)**

World text floats above the nearest board. Two actions:

| On screen            | Default key | Action                                              |
| -------------------- | ----------- | --------------------------------------------------- |
| `[E] Play City Tour` | **E**       | Interact (create / join lobby / open / spectate)    |
| `[G] Pick up board`  | **G**       | Pick up idle board (owner or admin) — item returned |

| Option             | Type   | Default | Description                                                                                                   |
| ------------------ | ------ | ------- | ------------------------------------------------------------------------------------------------------------- |
| `keyDisplay`       | string | `"E"`   | Letter shown for play (must match the bound control).                                                         |
| `controlId`        | number | `38`    | FiveM control ID for play. `38` = E ([controls list](https://docs.fivem.net/docs/game-references/controls/)). |
| `pickupKeyDisplay` | string | `"G"`   | Letter shown for pickup.                                                                                      |
| `pickupControlId`  | number | `47`    | FiveM control ID for pickup. `47` = G.                                                                        |

You may add optional `label` / `pickupLabel` strings. If omitted, locales `citytour.interact_board` and `citytour.pickup_board` are used.

```lua
InteractionOptions = {
    DrawText = {
        keyDisplay = "E",
        controlId = 38,          -- E → play / interact
        pickupKeyDisplay = "G",
        pickupControlId = 47,    -- G → pick up board
    },
},
```

{% hint style="info" %}
**Performance:** watcher sleeps at **500ms** when far; a `Wait(0)` draw thread runs **only** while a board is in range, then exits.
{% endhint %}

{% hint style="warning" %}
If you change `controlId` / `pickupControlId`, also update `keyDisplay` / `pickupKeyDisplay` so the on-screen letter matches the real key.
{% endhint %}

**Target (when `Bridge.Interaction = "target"`)**

| Option     | Type   | Default             | Description                         |
| ---------- | ------ | ------------------- | ----------------------------------- |
| `label`    | string | `"City Tour Table"` | Text shown on target option.        |
| `icon`     | string | `"fas fa-building"` | Icon (Font Awesome for ox\_target). |
| `distance` | number | `3.5`               | Aim distance to show the option.    |

***

#### ACE & Commands

| Option             | Type   | Default                 | Description                            |
| ------------------ | ------ | ----------------------- | -------------------------------------- |
| `ACE.Admin`        | string | `"cdev_citytour.admin"` | ACE permission for admin features.     |
| `Commands.Admin`   | string | `"citytouradmin"`       | Admin panel command.                   |
| `Commands.Place`   | string | `"citytourplace"`       | Admin place command.                   |
| `Commands.Delete`  | string | `"citytourdelete"`      | Admin delete nearest board.            |
| `Commands.Gaming`  | string | `"citytourgaming"`      | Gaming hub (profile / rank / history). |
| `Commands.Balance` | string | `"citytourbalance"`     | Layout calibrator.                     |

***

#### Item

| Option         | Type    | Default            | Description                          |
| -------------- | ------- | ------------------ | ------------------------------------ |
| `Item.enabled` | boolean | `true`             | Enable item placement.               |
| `Item.name`    | string  | `"citytour_board"` | Item name in inventory (must match). |

The display name in the inventory UI comes from **your items.lua**, not from this config.

***

#### Props

Board, dice, pawns, buildings, and cash stacks. Must match stream files unless you replace models.

<table data-search="false"><thead><tr><th>Option</th><th>Default / notes</th><th>Description</th></tr></thead><tbody><tr><td><code>Props.board</code></td><td><code>"cdev_citygame_board"</code></td><td>Board model.</td></tr><tr><td><code>Props.die</code></td><td><code>"cdev_citygame_player_dice_small"</code></td><td>Fallback dice model.</td></tr><tr><td><code>Props.dieSmall</code></td><td><code>"cdev_citygame_player_dice_small"</code></td><td>In-match dice model.</td></tr><tr><td><code>Props.DieAnim.spinMs</code></td><td><code>950</code></td><td>Spin duration (ms).</td></tr><tr><td><code>Props.DieAnim.bounceHeight</code></td><td><code>0.11</code></td><td>Bounce height (m).</td></tr><tr><td><code>Props.DieAnim.pairSpread</code></td><td><code>0.028</code></td><td>Pair spacing.</td></tr><tr><td><code>Props.DieAnim.faces[1..6]</code></td><td>See config</td><td>Face-up attach rotations.</td></tr><tr><td><code>Props.pawns.*</code></td><td><code>cdev_citygame_player_red/blue/green/yellow</code></td><td>Pawn models per color.</td></tr><tr><td><code>Props.Buildings.city[1..4]</code></td><td>houses 1–3 + hotel</td><td>City upgrade models.</td></tr><tr><td><code>Props.Buildings.paradise[1]</code></td><td><code>"cdev_citygame_beach_house"</code></td><td>Beach house (level 1 only).</td></tr><tr><td><code>Props.Buildings.hotel</code></td><td><code>"cdev_citygame_hotel"</code></td><td>Used if <code>city[4]</code> is missing.</td></tr><tr><td><code>Props.Buildings.height</code></td><td><code>0.0</code></td><td>Extra Z on buildings.</td></tr><tr><td><code>Props.Buildings.maxLevel</code></td><td><code>4</code></td><td>City max (hotel).</td></tr><tr><td><code>Props.Buildings.scale</code></td><td>w/h per type</td><td>Visual scale.</td></tr><tr><td><code>Props.CashStacks.enabled</code></td><td><code>true</code></td><td>Spawn cash piles at seats.</td></tr><tr><td><code>Props.CashStacks.seatFactor</code></td><td><code>0.55</code></td><td>Distance toward seat (0–1).</td></tr><tr><td><code>Props.CashStacks.height</code></td><td><code>-0.008</code></td><td>Local Z (calibrate with <code>/citytourbalance</code>).</td></tr><tr><td><code>Props.CashStacks.spread</code></td><td><code>0.035</code></td><td>Lateral spacing.</td></tr><tr><td><code>Props.CashStacks.model</code></td><td><code>"prop_cash_pile_02"</code></td><td>Cash pile model.</td></tr><tr><td><code>Props.CashStacks.tiers</code></td><td>in-match cash → count</td><td>Visual tier by capital.</td></tr></tbody></table>

***

#### Furniture (kit mode)

<table data-search="false"><thead><tr><th>Option</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>Furniture.tableModel</code></td><td>string</td><td><code>"prop_table_02"</code></td><td>Table under the board.</td></tr><tr><td><code>Furniture.chairModel</code></td><td>string</td><td><code>"prop_chair_02"</code></td><td>Chair per seat.</td></tr><tr><td><code>Furniture.spawnTable</code></td><td>boolean</td><td><code>true</code></td><td>Spawn table + chairs with the board.</td></tr><tr><td><code>Furniture.boardLift</code></td><td>number</td><td><code>-0.048</code></td><td>Extra Z after the board bottom is aligned to the tabletop.</td></tr><tr><td><code>Furniture.boardGroundZ</code></td><td>number</td><td><code>-0.035</code></td><td>Extra Z when the board sits on world ground (no kit).</td></tr><tr><td><code>Furniture.boardOffset</code></td><td>table</td><td><code>{x=0,y=0}</code></td><td>Fine XY if board pivot is off-center.</td></tr><tr><td><code>Furniture.chairFaceOffset</code></td><td>number</td><td><code>180.0</code></td><td>Extra yaw so chairs face the table.</td></tr><tr><td><code>Furniture.chairs</code></td><td>table</td><td>4 cardinal seats</td><td>Kit chair ring offsets.</td></tr><tr><td><code>Furniture.colorSeats</code></td><td>table</td><td>per color</td><td>Seat side mapping for sit / cash.</td></tr></tbody></table>

***

#### Placement Mode

<table data-search="false"><thead><tr><th>Option</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>Placement.raycastDistance</code></td><td>number</td><td><code>20.0</code></td><td>Raycast distance (m).</td></tr><tr><td><code>Placement.maxDistanceFromPlayer</code></td><td>number</td><td><code>6.0</code></td><td>Max place distance (m).</td></tr><tr><td><code>Placement.minDistanceFromPlayer</code></td><td>number</td><td><code>1.4</code></td><td>Min place distance (m).</td></tr><tr><td><code>Placement.ghostAlpha</code></td><td>number</td><td><code>180</code></td><td>Ghost prop alpha (0–255).</td></tr><tr><td><code>Placement.smooth</code></td><td>number</td><td><code>0.35</code></td><td>Ghost smoothing (0–1).</td></tr><tr><td><code>Placement.heightStep</code></td><td>number</td><td><code>0.03</code></td><td>Height nudge per PageUp / PageDown.</td></tr><tr><td><code>Placement.Keybinds.place</code></td><td>number</td><td><code>38</code></td><td>Confirm place (E).</td></tr><tr><td><code>Placement.Keybinds.cancel</code></td><td>number</td><td><code>73</code></td><td>Cancel (X). ESC still cancels too.</td></tr><tr><td><code>Placement.Keybinds.scrollUp/Down</code></td><td>number</td><td><code>15/14</code></td><td>Rotate board.</td></tr><tr><td><code>Placement.Keybinds.fineRotate</code></td><td>number</td><td><code>21</code></td><td>Shift for fine rotation.</td></tr><tr><td><code>Placement.Keybinds.rotateLeft/Right</code></td><td>number</td><td><code>174/175</code></td><td>Arrow rotate.</td></tr><tr><td><code>Placement.Keybinds.toggleKit</code></td><td>number</td><td><code>47</code></td><td>Toggle furniture kit (G).</td></tr><tr><td><code>Placement.Keybinds.ground</code></td><td>number</td><td><code>22</code></td><td>Snap to ground (SPACE).</td></tr><tr><td><code>Placement.Keybinds.heightUp/Down</code></td><td>number</td><td><code>10/11</code></td><td>PageUp / PageDown.</td></tr></tbody></table>

***

#### Sit Animation

| Option                   | Type    | Default           | Description                                     |
| ------------------------ | ------- | ----------------- | ----------------------------------------------- |
| `Sit.Enable`             | boolean | `true`            | Sit ped when joining lobby / match.             |
| `Sit.Chair.*`            | table   | See config        | Kit mode: chair anim + ped offset.              |
| `Sit.Floor.seatDistance` | number  | `1.15`            | Board-only seat distance from board center (m). |
| `Sit.Floor.Anims`        | table   | jetski owner idle | Board-only floor sit anim.                      |

***

#### Cinema Camera

<table data-search="false"><thead><tr><th>Option</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>Camera.defaultDistance</code></td><td>number</td><td><code>1.75</code></td><td>Default orbit distance.</td></tr><tr><td><code>Camera.minDistance</code></td><td>number</td><td><code>0.42</code></td><td>Min zoom.</td></tr><tr><td><code>Camera.maxDistance</code></td><td>number</td><td><code>4.5</code></td><td>Max zoom.</td></tr><tr><td><code>Camera.minHeight</code></td><td>number</td><td><code>0.12</code></td><td>Min height above board.</td></tr><tr><td><code>Camera.maxHeight</code></td><td>number</td><td><code>2.8</code></td><td>Max height above board.</td></tr><tr><td><code>Camera.defaultHeight</code></td><td>number</td><td><code>1.05</code></td><td>Default height.</td></tr><tr><td><code>Camera.lookAtZ</code></td><td>number</td><td><code>0.08</code></td><td>Look-at height on board.</td></tr><tr><td><code>Camera.rotateSpeed</code></td><td>number</td><td><code>90.0</code></td><td>A/D orbit speed (deg/sec).</td></tr><tr><td><code>Camera.elevateSpeed</code></td><td>number</td><td><code>1.6</code></td><td>W/S elevate speed (m/sec).</td></tr><tr><td><code>Camera.zoomStep</code></td><td>number</td><td><code>0.12</code></td><td>Zoom step per scroll.</td></tr><tr><td><code>Camera.fov</code></td><td>number</td><td><code>42.0</code></td><td>Cinema FOV.</td></tr><tr><td><code>Camera.Controls</code></td><td>table</td><td>W/S/A/D</td><td>Elevate / rotate control IDs.</td></tr></tbody></table>

{% hint style="info" %}
Mouse wheel zooms the **camera**. Lobby and match windows use header arrows + scrollbar (no wheel). Gaming Hub and admin still use mouse-wheel scroll.
{% endhint %}

***

#### Sync (spectators)

| Option                 | Type    | Default | Description                                       |
| ---------------------- | ------- | ------- | ------------------------------------------------- |
| `Sync.interestRadius`  | number  | `6.0`   | Players inside receive table FX / spectator sync. |
| `Sync.leaveHysteresis` | number  | `1.0`   | Extra meters before leave (anti-flicker).         |
| `Sync.idleWaitMs`      | number  | `750`   | Loop sleep when far from tables.                  |
| `Sync.nearWaitMs`      | number  | `100`   | Loop sleep when near a table.                     |
| `Sync.debugDraw`       | boolean | `false` | Draw sync radius rings when Debug is on.          |

***

#### Distances

| Option                          | Type   | Default | Description                              |
| ------------------------------- | ------ | ------- | ---------------------------------------- |
| `Distances.InteractionDistance` | number | `3.5`   | DrawText / interact prompt distance (m). |
| `Distances.ActionMaxDistance`   | number | `6.0`   | Server distance check for table actions. |

***

#### Match

<table data-search="false"><thead><tr><th>Option</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>Match.MinPlayers</code></td><td>number</td><td><code>2</code></td><td>Minimum seats when creating a lobby (clamped 2–4).</td></tr><tr><td><code>Match.MaxPlayers</code></td><td>number</td><td><code>4</code></td><td>Maximum seats when creating a lobby (clamped 2–4).</td></tr><tr><td><code>Match.TurnTimeoutSec</code></td><td>number</td><td><code>60</code></td><td>Default turn timer when host enables it.</td></tr><tr><td><code>Match.TimerPresets</code></td><td>table</td><td><code>{30,45,60,90,120}</code></td><td>Lobby timer preset buttons (seconds).</td></tr><tr><td><code>Match.DisconnectPauseSec</code></td><td>number</td><td><code>90</code></td><td>Pause after disconnect before forfeit.</td></tr><tr><td><code>Match.Colors</code></td><td>table</td><td>red/blue/green/yellow</td><td>Playable colors.</td></tr><tr><td><code>Match.InitRollGapMs</code></td><td>number</td><td><code>1200</code></td><td>Delay between initiative dice reveals.</td></tr><tr><td><code>Match.InitRollLeadMs</code></td><td>number</td><td><code>500</code></td><td>Delay before first initiative roll.</td></tr><tr><td><code>Match.InitRollEndMs</code></td><td>number</td><td><code>900</code></td><td>Delay after last initiative roll.</td></tr><tr><td><code>Match.Controls.roll</code></td><td>number</td><td><code>38</code></td><td>Roll dice while cinema cam (E).</td></tr></tbody></table>

{% hint style="info" %}
Turn timeout is clamped server-side when enabled. Disabled timer uses `0`. On timeout the engine rolls and may buy **empty land** only (no houses, hotels, or repurchase) when `Economy.AutoRollOnTimeout` is true.
{% endhint %}

***

#### NPC / AI

| Option                  | Type    | Default                           | Description                                    |
| ----------------------- | ------- | --------------------------------- | ---------------------------------------------- |
| `Npc.enabled`           | boolean | `true`                            | Allow AI opponents. Required for Singleplayer. |
| `Npc.DisplayNames`      | table   | Tour Bot / City Dealer / Rival AI | Bot names.                                     |
| `Npc.PedModels`         | table   | business peds                     | World ped models at seats.                     |
| `Npc.ThinkDelayMs`      | table   | `{min=900, max=2400}`             | Think delay before an AI action.               |
| `Npc.BuyAggression`     | number  | `0.72`                            | Chance the AI buys empty land (0–1).           |
| `Npc.UpgradeAggression` | number  | `0.55`                            | Chance the AI upgrades when it can.            |

***

#### In-match economy

These values are **fictitious match capital**, not GTA cash (except Real-mode entry / pot).

<table data-search="false"><thead><tr><th>Option</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>Economy.StartingCash</code></td><td>number</td><td><code>2000000</code></td><td>Cash each player starts with.</td></tr><tr><td><code>Economy.PassStartBonus</code></td><td>number</td><td><code>300000</code></td><td>Paid when passing Start.</td></tr><tr><td><code>Economy.IslandBail</code></td><td>number</td><td><code>200000</code></td><td>Cost to leave Lost Island by paying.</td></tr><tr><td><code>Economy.IslandTurns</code></td><td>number</td><td><code>3</code></td><td>Turns stuck on Lost Island.</td></tr><tr><td><code>Economy.BailRollSameTurn</code></td><td>boolean</td><td><code>true</code></td><td>Default for the <strong>host toggle</strong>. If the host turns it off, paying bail ends the turn. <strong>Freed from Lost Island still lets you roll this turn.</strong></td></tr><tr><td><code>Economy.TaxPercent</code></td><td>number</td><td><code>10</code></td><td>% of <strong>cash + owned property value</strong>, paid to the bank on the Tax space (after São Paulo). Rounded down.</td></tr><tr><td><code>Economy.MaxPropertyLevel</code></td><td>number</td><td><code>4</code></td><td>City: land=0, houses 1–3, hotel=4. Paradise max is 1.</td></tr><tr><td><code>Economy.MaxRentMultiplier</code></td><td>number</td><td><code>10</code></td><td>Cap for fallback rent math.</td></tr><tr><td><code>Economy.HotelRequiresFullSet</code></td><td>boolean</td><td><code>false</code></td><td>If <code>true</code>, hotel needs a complete color group. Default Business Tour: houses and hotel without a full set. Full set still <strong>doubles rent</strong>.</td></tr><tr><td><code>Economy.HotelSameTurnBlocked</code></td><td>boolean</td><td><code>true</code></td><td>Cannot buy a hotel on the same turn you completed that country's set (including a doubles extra turn).</td></tr><tr><td><code>Economy.ThreeDoublesToIsland</code></td><td>boolean</td><td><code>true</code></td><td>Three doubles in a row send you to Lost Island (no walk), unless Freed from Lost Island was already played.</td></tr><tr><td><code>Economy.AutoRollOnTimeout</code></td><td>boolean</td><td><code>true</code></td><td>AFK timeout: roll + buy empty land only.</td></tr></tbody></table>

Property **buy / rent / repurchase** numbers live in `public/shared/property_economy.lua`. Change numbers only.

***

#### Property prices (`public/shared/property_economy.lua`)

Global table: **`CityTourPropertyPrices`**. Keys must match city / beach ids in `public/shared/board.lua` (`madrid`, `bali`, `rome`, …).

| Field        | Cities                                        | Paradise beaches                                               |
| ------------ | --------------------------------------------- | -------------------------------------------------------------- |
| `buy`        | `land`, `house1`, `house2`, `house3`, `hotel` | `land`, `house1` only                                          |
| `rent`       | same keys                                     | `land`, `house1`                                               |
| `repurchase` | 2× invested buy total per level               | Present in the file; **beaches cannot be repurchased in play** |

Example (Spain city):

```lua
madrid = {
    buy = { land = 60000, house1 = 50000, house2 = 50000, house3 = 50000, hotel = 150000 },
    rent = { land = 2000, house1 = 23000, house2 = 25000, house3 = 25000, hotel = 75000 },
    repurchase = { land = 120000, house1 = 100000, house2 = 100000, house3 = 100000, hotel = 300000 },
},
```

{% hint style="warning" %}
Change **numbers only**. Do not add functions, extra keys, or rename ids unless you also change `board.lua`. Restart the resource after edits.
{% endhint %}

Groups in `board.lua`: Spain (Granada / Sevilla / Madrid) · Paradise (Bali, Cyprus, Dubai, Nice) · China · Italy · Germany · UK (London / Sydney) · USA · France · Brazil.

***

#### Modes (Fun / Real / Singleplayer)

<table data-search="false"><thead><tr><th>Option</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>Modes.Fun.enabled</code></td><td>boolean</td><td><code>true</code></td><td>In-game capital only. Changes ranking.</td></tr><tr><td><code>Modes.Real.enabled</code></td><td>boolean</td><td><code>true</code></td><td>Entry fee → pot. Changes ranking.</td></tr><tr><td><code>Modes.Real.MinEntry</code></td><td>number</td><td><code>100</code></td><td>Minimum Real entry.</td></tr><tr><td><code>Modes.Real.MaxEntry</code></td><td>number</td><td><code>100000</code></td><td>Maximum Real entry.</td></tr><tr><td><code>Modes.Real.EntryPresets</code></td><td>table</td><td><code>{100,500,1000,5000}</code></td><td>Quick-select entry buttons.</td></tr><tr><td><code>Modes.Real.Accounts</code></td><td>table</td><td><code>cash</code> / <code>bank</code> / <code>vip</code></td><td>Allowed entry accounts. <code>vip</code> uses the VIP bridge.</td></tr><tr><td><code>Modes.Real.DefaultAccount</code></td><td>string</td><td><code>"cash"</code></td><td>Default selected account.</td></tr><tr><td><code>Modes.Real.DefaultSplit</code></td><td>table</td><td><code>70 / 20 / 10</code></td><td>1st / 2nd / 3rd % of the pot.</td></tr><tr><td><code>Modes.Real.OptionalRakePercent</code></td><td>number</td><td><code>0</code></td><td>% taken from the pot before split. <code>0</code> = off.</td></tr><tr><td><code>Modes.Singleplayer.enabled</code></td><td>boolean</td><td><code>true</code></td><td>1 human vs AI. <strong>No rank, no Real money.</strong></td></tr><tr><td><code>Modes.Singleplayer.playerCount</code></td><td>number</td><td><code>4</code></td><td>Seats (1 human + 3 AI at default).</td></tr></tbody></table>

{% hint style="warning" %}
Lobby leave / cancel **refunds** a paid Real entry. Pot payout uses `Api.AddMoney` on the account the player used (`cash`, `bank`, or `vip`).
{% endhint %}

***

#### Luck cards

<table data-search="false"><thead><tr><th>Option</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>Luck.enabled</code></td><td>boolean</td><td><code>true</code></td><td>Enable Chance spaces.</td></tr><tr><td><code>Luck.MaxHeldCards</code></td><td>number</td><td><code>3</code></td><td>Max holdable cards in hand.</td></tr><tr><td><code>Luck.FineAmount</code></td><td>number</td><td><code>150000</code></td><td>Fine card amount.</td></tr><tr><td><code>Luck.BirthdayGift</code></td><td>number</td><td><code>80000</code></td><td>Birthday gift per other player.</td></tr><tr><td><code>Luck.BlackoutTurns</code></td><td>number</td><td><code>2</code></td><td>Electricity Outage duration (turn endings).</td></tr><tr><td><code>Luck.ScarTurns</code></td><td>number</td><td><code>1</code></td><td>Visual scar after sabotage / destroy.</td></tr><tr><td><code>Luck.RouletteMs</code></td><td>number</td><td><code>1800</code></td><td>Chance roulette spin (ms).</td></tr></tbody></table>

The host can switch **Default** (all cards) or **Custom** (pick cards) when creating the lobby. Enabled cards have **equal** chance. If every card is off, Chance skips the turn.

Deck ids live in `public/shared/board.lua` → `CityTourBoard.LuckCards`. Card titles / bodies are locales (`citytour.card_*`).

<table data-search="false"><thead><tr><th>Id</th><th>Type</th><th>Effect</th></tr></thead><tbody><tr><td><code>rent_x2</code></td><td>Holdable</td><td>Next rent you collect is doubled. Not used if that landing collects $0 (blackout).</td></tr><tr><td><code>rent_half</code></td><td>Holdable</td><td>Next rent you <strong>pay</strong> is halved.</td></tr><tr><td><code>free_island</code></td><td>Holdable</td><td>Play it. On the island: free now and <strong>roll this turn</strong> (bail-roll toggle does not apply). Off island: next island / three doubles does not trap you. Holding it unused does nothing.</td></tr><tr><td><code>protection</code></td><td>Holdable</td><td>Blocks the next sabotage / destroy / blackout / earthquake on your properties.</td></tr><tr><td><code>earthquake</code></td><td>Instant</td><td>Out of the draw until any house exists. Every building loses one level. Protection blocks the first hit.</td></tr><tr><td><code>go_to</code></td><td>Instant</td><td>Click a highlighted city and land there (buy / rent / upgrade).</td></tr><tr><td><code>sabotage</code></td><td>Instant</td><td>Out of the draw until an opponent city has a house. Click one city to drop one building level. Beaches cannot be chosen.</td></tr><tr><td><code>cut_power</code></td><td>Instant</td><td>Click a city: no rent for <code>BlackoutTurns</code> turn endings.</td></tr><tr><td><code>royal_gift</code></td><td>Instant</td><td>Click one of your cities; it goes to a random opponent (buildings stay).</td></tr><tr><td><code>world_championship</code></td><td>Instant</td><td>Teleport to World Championships. Each other player pays <strong>50,000</strong> if they can.</td></tr><tr><td><code>invitation</code></td><td>Instant</td><td>Teleport to World Tour, then pick any other space to travel to. No extra Start bonus for the teleport to World Tour.</td></tr><tr><td><code>fine</code></td><td>Instant</td><td>Pay <code>Luck.FineAmount</code> (default 150,000) to the bank.</td></tr><tr><td><code>happy_birthday</code></td><td>Instant</td><td>Each other player pays <code>Luck.BirthdayGift</code> (default 80,000) if they can.</td></tr><tr><td><code>start_over</code></td><td>Instant</td><td>Return to Start and collect <code>Economy.PassStartBonus</code>.</td></tr><tr><td><code>destroy_build</code></td><td>Instant</td><td>Out of the draw until an opponent city has a house. Flatten that city to empty land. Owner keeps the tile. Beaches cannot be chosen.</td></tr></tbody></table>

World Championships (**50,000**) and World Tour (**100,000**) amounts are engine values (also used when you land on those spaces). Fine / birthday / Start bonus are config.

***

#### Win conditions

| Option                               | Type    | Default | Description                                                                               |
| ------------------------------------ | ------- | ------- | ----------------------------------------------------------------------------------------- |
| `WinConditions.OwnFullSide`          | boolean | `true`  | Win by owning every purchasable tile on one board side. Always on.                        |
| `WinConditions.OwnAllParadise`       | boolean | `true`  | Default **on**; host can turn this off in the lobby. Four beaches (land is enough).       |
| `WinConditions.OwnCompleteGroup`     | boolean | `true`  | Default **on**; host can turn this off. One full color group (e.g. Spain's three cities). |
| `WinConditions.HighestValueFallback` | boolean | `true`  | Richest player wins once every city and paradise is owned. Always on.                     |

Last standing (everyone else bankrupt / left) also ends the match.

***

#### Rating & Badges

<table data-search="false"><thead><tr><th>Option</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>Rating.DefaultPoints</code></td><td>number</td><td><code>1000</code></td><td>Starting points for new players.</td></tr><tr><td><code>Rating.MinPoints</code></td><td>number</td><td><code>1000</code></td><td>Floor points.</td></tr><tr><td><code>Rating.MaxPoints</code></td><td>number</td><td><code>6000</code></td><td>Ceiling points.</td></tr><tr><td><code>Rating.WinDelta</code></td><td>number</td><td><code>50</code></td><td>Points gained on win.</td></tr><tr><td><code>Rating.LossDelta</code></td><td>number</td><td><code>30</code></td><td>Points lost on loss.</td></tr><tr><td><code>Rating.ForfeitDelta</code></td><td>number</td><td><code>40</code></td><td>Points lost on forfeit.</td></tr><tr><td><code>Rating.PageSize</code></td><td>number</td><td><code>10</code></td><td>Ranking rows per page in hub.</td></tr><tr><td><code>Rating.Badges</code></td><td>table</td><td>See below</td><td>Rank badges by minimum points.</td></tr></tbody></table>

**Default Badges**

<table data-search="false"><thead><tr><th>Min Points</th><th>Badge</th><th>Label</th></tr></thead><tbody><tr><td>5500</td><td>GM</td><td>Grandmaster</td></tr><tr><td>4800</td><td>M</td><td>Master</td></tr><tr><td>4000</td><td>D</td><td>Diamond</td></tr><tr><td>3200</td><td>P</td><td>Platinum</td></tr><tr><td>2400</td><td>G</td><td>Gold</td></tr><tr><td>1800</td><td>S</td><td>Silver</td></tr><tr><td>1400</td><td>B</td><td>Bronze</td></tr><tr><td>1000</td><td>R</td><td>Rookie</td></tr></tbody></table>

{% hint style="info" %}
Fun and Real change rating. **Singleplayer does not.**
{% endhint %}

***

#### Match History

| Option                             | Type   | Default | Description                              |
| ---------------------------------- | ------ | ------- | ---------------------------------------- |
| `MatchHistory.MaxEntriesPerPlayer` | number | `20`    | Max matches kept per player (FIFO trim). |
| `MatchHistory.PageSize`            | number | `10`    | History rows per page in hub.            |

***

#### Board layout (visual)

| Option                       | Type   | Default                | Description                                                                                                                                        |
| ---------------------------- | ------ | ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `BoardLayout.spaceCount`     | number | `32`                   | Ring size.                                                                                                                                         |
| `BoardLayout.pawnHeight`     | number | `0.0`                  | Global pawn Z.                                                                                                                                     |
| `BoardLayout.stackFormation` | number | `2`                    | `0` line X · `1` line Y · `2` 2×2 only when 4 pawns share a space. 2 and 3 pawns always sit in a line. Tune in `/citytourbalance` → Peões · pilha. |
| `BoardLayout.stackSpacing`   | number | `0.016`                | Pawn stack spacing.                                                                                                                                |
| `BoardLayout.stackYaw`       | number | `0.0`                  | Extra rotation (degrees) of the stack around the sit point. `/citytourbalance` 8/2, **R** = 180°.                                                  |
| `BoardLayout.stackScale`     | number | `0.85`                 | Stack scale.                                                                                                                                       |
| `BoardLayout.dieZ`           | number | `0.0`                  | Dice height.                                                                                                                                       |
| `BoardLayout.cashHeight`     | number | `-0.022`               | Cash pile height.                                                                                                                                  |
| `BoardLayout.pawnScale`      | number | `1.0`                  | Base pawn scale.                                                                                                                                   |
| `BoardLayout.MoveAnimation`  | table  | `280ms` / lift `0.035` | Pawn hop timing / height.                                                                                                                          |
| `BoardLayout.Outline`        | table  | See config             | Legal / blocked / hover outline.                                                                                                                   |

{% hint style="info" %}
Fine visual positions (cell size, house sit, die Z, cash height, etc.) live in `public/shared/layout.lua` and can be overridden by `public/shared/layout_override.json` (written by `/citytourbalance`).
{% endhint %}

***

#### Balance calibrator

<table data-search="false"><thead><tr><th>Option</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>Balance.step</code></td><td>number</td><td><code>0.005</code></td><td>Default nudge step (m).</td></tr><tr><td><code>Balance.stepFine</code></td><td>number</td><td><code>0.001</code></td><td>Fine nudge step (m).</td></tr><tr><td><code>Balance.autoMeshTrack</code></td><td>boolean</td><td><code>true</code></td><td>Seed track size from the board mesh on first run.</td></tr><tr><td><code>Balance.showOnlyActiveLayer</code></td><td>boolean</td><td><code>true</code></td><td>Draw only the active calibration layer.</td></tr><tr><td><code>Balance.groupMinGap</code></td><td>number</td><td><code>0.0015</code></td><td>Minimum gap between grouped cells.</td></tr><tr><td><code>Balance.guideArrowYawOffset</code></td><td>number</td><td><code>0.0</code></td><td>Extra yaw on guide arrows.</td></tr><tr><td><code>Balance.Keybinds</code></td><td>table</td><td>Numpad</td><td>Up/down/cycle/fine/save/cancel/propagate keys.</td></tr></tbody></table>

***

#### Game rules (what players actually do)

32-space ring, counter-clockwise from **Start**. One pawn per player. Two dice. Doubles grant an extra turn after decisions. Three doubles send you to **Lost Island** (you do not walk those spaces) unless **Freed from Lost Island** was already played.

**Buy.** Land on empty city or paradise → optional buy.

**Rent.** Land on a rival city or beach → pay rent. Full color group **doubles** rent. Rome (festival) can charge one house level higher if the owner has all of Italy and Rome is not a hotel.

**Upgrade.** Land on your city to buy the next building (no full-set required by default). Paradise: land, then house 1 only (the beach prop appears at house 1). You cannot buy a hotel on the same turn you completed that country.

**Repurchase.** After paying rent on a rival **city**, you may buy it for the repurchase total (2× invested). Buildings stay. **Beaches cannot be repurchased. A city with a hotel cannot be repurchased.**

**Tax.** One Tax space (after São Paulo). Pay `TaxPercent` (default 10%) of cash + current property value to the bank. Rounded down. If cash is short, sell to the bank at half value or go bankrupt.

**Lost Island.** Landing on the island space or three doubles. Stay `IslandTurns` turns. Leave with doubles, bail, or **playing** Freed from Lost Island. Host toggle “roll after bail” **only** affects paying bail. The card still lets you roll this turn.

**World Championships.** Collect 50,000 from each other player who can pay.

**World Tour.** Pick any other space on the board and go there now. Resolve that space as if you had landed on it (buy, rent, Chance, Tax, Lost Island, and so on). No bank payout.

**Bankruptcy.** Sell properties to the bank at half repurchase (invested buy total) until the debt is paid, or you are out.

***

#### Custom Themes

Cdev City Tour ships one official look and a documented `custom` template for buyers. Every UI color (backgrounds, text, borders, fills, accents, shadows, seats, board groups) is a token in `public/shared/themes.json`.

**Themes Config (`public/shared/config.lua`)**

{% hint style="info" %}
* **`default`** — Official production theme (dark panels `#161619` + blue accent `#7289da`). Do **not** remove or empty this block.
* **`custom`** — Empty overrides with `_key` comments describing each token. Fill only what you want to change; empty `""` falls back to **default**.
{% endhint %}

```lua
-- UI theme. Options: "default" | "custom"
Theme = "default",
```

**Themes File (`public/shared/themes.json`)**

Structure:

* **`default`** — full color map applied when `Theme = "default"`
* **`custom`** — pairs of `_comment` + empty value for each token

Example from `custom`:

```json
"custom": {
  "_bg": "Main / page background",
  "bg": "",
  "_accent": "Primary accent (buttons, links, highlights)",
  "accent": "",
  "_text": "Primary text / headings",
  "text": ""
}
```

#### ✏️ How to create a custom theme

1. Set **`Theme = "custom"`** in `public/shared/config.lua`.
2. Open **`public/shared/themes.json`**.
3. In the **`custom`** object, fill the color keys you want (leave others as `""`).
4. Keys starting with **`_`** are documentation only — never put a color there.
5. Save and **restart** `cdev_citytour`.

Gold accent example (change only these; the rest stays default):

```json
"accent": "#e8a038",
"accentHover": "#d4922f",
"accentMuted": "rgba(232, 160, 56, 0.28)",
"accentSoft": "rgba(232, 160, 56, 0.16)",
"accentFill": "rgba(232, 160, 56, 0.14)",
"accentGlow": "rgba(232, 160, 56, 0.4)",
"borderActive": "rgba(232, 160, 56, 0.5)",
"bgActive": "rgba(232, 160, 56, 0.16)",
"scrollbarThumbHover": "rgba(232, 160, 56, 0.4)"
```

If you change **`text`** to a dark color (light theme), also set **`textOnAccent`** to a light color (`#ffffff`) so buttons on `accent` stay readable.

#### 📋 Theme keys

Default values below are the official look. Leave a `custom` key as `""` to keep that default.

**Surfaces**

| Key            | Default                     | What it changes                              |
| -------------- | --------------------------- | -------------------------------------------- |
| `bg`           | `#161619`                   | Main / page background                       |
| `bgPanel`      | `#161619`                   | Panel background (lobby, hub, match sidebar) |
| `bgPanelSolid` | `#161619`                   | Solid panel background (no transparency)     |
| `bgInput`      | `#1f1f22`                   | Input fields, chips, header-like surfaces    |
| `headerBg`     | `#1f1f22`                   | Panel header background                      |
| `bgHover`      | `#29292c`                   | Hover fill (rows, icon buttons)              |
| `bgActive`     | `rgba(114, 137, 218, 0.18)` | Active / selected fill (tabs, toggles)       |
| `bgElevated`   | `#1c1c20`                   | Raised cards / floating match windows        |
| `bgInset`      | `#111114`                   | Inset wells / inner frames                   |
| `bgDeep`       | `#121214`                   | Deep recessed surface                        |
| `bgAlt`        | `#1a1a1d`                   | Alternate dark surface                       |
| `bgRow`        | `#252528`                   | List / row surface                           |
| `bgCard`       | `#1f1f23`                   | Secondary card surface                       |

**Borders and fills**

| Key            | Default                     | What it changes             |
| -------------- | --------------------------- | --------------------------- |
| `border`       | `rgba(255, 255, 255, 0.07)` | Default panel / card border |
| `borderActive` | `rgba(114, 137, 218, 0.45)` | Active / focused border     |
| `borderInput`  | `#55595f`                   | Input field border          |
| `borderSubtle` | `rgba(255, 255, 255, 0.08)` | Subtle card border          |
| `borderFaint`  | `rgba(255, 255, 255, 0.06)` | Faint divider / header line |
| `borderStrong` | `rgba(255, 255, 255, 0.12)` | Stronger border             |
| `borderMuted`  | `rgba(255, 255, 255, 0.1)`  | Muted border                |
| `borderHover`  | `rgba(255, 255, 255, 0.22)` | Hover border                |
| `fillSubtle`   | `rgba(255, 255, 255, 0.03)` | Very faint fill             |
| `fillMuted`    | `rgba(255, 255, 255, 0.04)` | Soft fill                   |
| `fillSoft`     | `rgba(255, 255, 255, 0.05)` | Soft highlight fill         |

**Accent (blue) and gold**

| Key           | Default                     | What it changes                             |
| ------------- | --------------------------- | ------------------------------------------- |
| `accent`      | `#7289da`                   | Primary accent (buttons, links, highlights) |
| `accentHover` | `#6579c5`                   | Primary accent hover                        |
| `accentMuted` | `rgba(114, 137, 218, 0.28)` | Soft accent fill                            |
| `accentSoft`  | `rgba(114, 137, 218, 0.16)` | Accent selected fill                        |
| `accentFill`  | `rgba(114, 137, 218, 0.14)` | Accent chip fill                            |
| `accentGlow`  | `rgba(114, 137, 218, 0.4)`  | Accent glow / hover wash                    |
| `gold`        | `#e8a038`                   | Secondary gold (lobby toggles)              |
| `goldMuted`   | `rgba(232, 160, 56, 0.28)`  | Gold muted fill                             |
| `goldSoft`    | `rgba(232, 160, 56, 0.18)`  | Gold selected fill                          |
| `goldBorder`  | `rgba(232, 160, 56, 0.45)`  | Gold selected border                        |
| `goldFill`    | `rgba(232, 160, 56, 0.08)`  | Gold faint fill                             |

**Text**

| Key             | Default   | What it changes                  |
| --------------- | --------- | -------------------------------- |
| `text`          | `#ffffff` | Primary text / headings          |
| `textSecondary` | `#c8c8d0` | Secondary text                   |
| `textMuted`     | `#5f6369` | Muted labels / hints             |
| `textDim`       | `#5f6369` | Dimmed / placeholder text        |
| `textOnAccent`  | `#ffffff` | Text on accent / colored buttons |
| `textSoft`      | `#e8e8ee` | Softer body text                 |
| `textBright`    | `#eeeef2` | Bright body text                 |
| `textOnBadge`   | `#1a1208` | Ink on colored rank badges       |

**Status, buttons, overlay, shadows**

| Key                   | Default                     | What it changes             |
| --------------------- | --------------------------- | --------------------------- |
| `success`             | `#22c55e`                   | Success / win / ready       |
| `successMuted`        | `rgba(34, 197, 94, 0.16)`   | Success background wash     |
| `successBorder`       | `rgba(34, 197, 94, 0.45)`   | Success border              |
| `successLight`        | `#86efac`                   | Light success text          |
| `error`               | `#ef4444`                   | Error / loss / danger       |
| `errorMuted`          | `rgba(239, 68, 68, 0.12)`   | Error background wash       |
| `errorBorder`         | `rgba(239, 68, 68, 0.3)`    | Error border                |
| `errorLight`          | `#f87171`                   | Light error text            |
| `errorSoft`           | `#fca5a5`                   | Softer error text           |
| `warning`             | `#f59e0b`                   | Warning / timer / pending   |
| `warningMuted`        | `rgba(245, 158, 11, 0.16)`  | Warning background wash     |
| `warningBorder`       | `rgba(245, 158, 11, 0.4)`   | Warning border              |
| `warningLight`        | `#fde68a`                   | Light warning text          |
| `scrollbarThumb`      | `rgba(255, 255, 255, 0.28)` | Scrollbar thumb             |
| `scrollbarThumbHover` | `rgba(114, 137, 218, 0.4)`  | Scrollbar thumb hover       |
| `btnSecondary`        | `#29292c`                   | Secondary button background |
| `btnSecondaryHover`   | `#353539`                   | Secondary button hover      |
| `overlay`             | `transparent`               | Overlay / backdrop          |
| `shadow`              | `rgba(0, 0, 0, 0.45)`       | Default drop-shadow         |
| `shadowMid`           | `rgba(0, 0, 0, 0.5)`        | Medium drop-shadow          |
| `shadowStrong`        | `rgba(0, 0, 0, 0.55)`       | Strong drop-shadow          |
| `shadowSoft`          | `rgba(0, 0, 0, 0.35)`       | Soft drop-shadow            |

**Seats and board groups**

| Key             | Default   | What it changes                |
| --------------- | --------- | ------------------------------ |
| `red`           | `#e5484d` | Red seat / pawn                |
| `blue`          | `#3b82f6` | Blue seat / pawn               |
| `green`         | `#22c55e` | Green seat / pawn              |
| `yellow`        | `#eab308` | Yellow seat / pawn             |
| `groupSpain`    | `#fb7185` | Board group Spain              |
| `groupChina`    | `#f87171` | Board group China              |
| `groupItaly`    | `#4ade80` | Board group Italy              |
| `groupGermany`  | `#94a3b8` | Board group Germany            |
| `groupUk`       | `#60a5fa` | Board group UK                 |
| `groupUsa`      | `#818cf8` | Board group USA                |
| `groupFrance`   | `#93c5fd` | Board group France             |
| `groupBrazil`   | `#34d399` | Board group Brazil             |
| `groupParadise` | `#2dd4bf` | Board group Paradise / beaches |

{% hint style="warning" %}
#### ⚠️ Important

* **Only colors** can be changed; icons and layout are fixed.
* Theme is **server config only** — players cannot switch themes in-game.
* Use **hex** (`#7289da`) or **CSS** (`rgba(114, 137, 218, 0.18)`).
* Empty `custom` values always fall back to **default**.
* Do **not** delete the `default` theme block.
* Do **not** put a color on keys that start with `_` — those are comments only.
{% endhint %}

***

#### Custom Framework, Inventory, Notify, Target & VIP

Cdev City Tour uses a **bridge system** for framework, inventory, notifications, target, and VIP. By default it auto-detects supported systems. If you use a **custom** or unsupported system, edit the bridge files under `public/bridge/`.

**Bridge config (`public/shared/config.lua`)**

```lua
Bridge = {
    Framework = "auto",      -- "qb-core" | "qbx_core" | "es_extended"
    Inventory = "auto",      -- "ox_inventory" | "qb-inventory" | "qs-inventory"
    Interaction = "target",  -- "drawtext" | "target"
    Target = "auto",         -- "ox_target" | "qb-target"
    Notify = "auto",         -- "ox_lib" | "qbcore" | "esx" | "native"
},
```

**Custom Framework**

Edit `public/bridge/framework/server.lua` and `public/bridge/framework/client.lua`.

Add a new entry to `FrameworkSystems` with: `getFrameworkName`, `notify`, `getPlayer`, `getCitizenId`, money helpers (`getCashOnHand`, `getBankBalance`, `addMoney`, `removeMoney`), and `init`.

Set `Bridge.Framework = "your_framework"` in config.

**Custom Inventory**

Edit `public/bridge/inventory/server.lua`.

Implement `addItem`, `removeItem`, `getItemCount`, `hasItem` for your system, then set `Bridge.Inventory = "your_inventory"`.

**Custom Notify**

Edit `public/bridge/notify/client.lua`.

Add a branch in `send()` for your notify system, then set `Bridge.Notify = "your_notify"` (or use `"native"`).

**Custom Target**

Edit `public/bridge/target/client.lua`.

Add your target attach/detach logic for board (and kit furniture) entities.

Alternatively, set `Bridge.Interaction = "drawtext"` to avoid target entirely.

**Custom VIP**

Edit `public/bridge/vip/server.lua`. Implement `Vip.GetBalance`, `Vip.Remove`, `Vip.Add`.

***

#### Buyer-editable folders

<table data-search="false"><thead><tr><th>Path</th><th>Role</th></tr></thead><tbody><tr><td><code>public/shared/config.lua</code></td><td>All tunables</td></tr><tr><td><code>public/shared/property_economy.lua</code></td><td>Buy / rent / repurchase numbers</td></tr><tr><td><code>public/shared/board.lua</code></td><td>Spaces, groups, luck deck ids</td></tr><tr><td><code>public/shared/layout.lua</code> + <code>layout_override.json</code></td><td>Visual layout</td></tr><tr><td><code>public/shared/locales/*.json</code></td><td>Strings</td></tr><tr><td><code>public/shared/themes.json</code></td><td>UI themes</td></tr><tr><td><code>public/bridge/**</code></td><td>Framework / inventory / target / notify / VIP</td></tr><tr><td><code>public/server/api.lua</code></td><td>Admin / money / notify hooks</td></tr><tr><td><code>public/client/api.lua</code></td><td>Client helpers for other resources</td></tr><tr><td><code>sql/citytour.sql</code></td><td>Optional manual MySQL install</td></tr></tbody></table>

{% hint style="info" %}
`public/**` is escrow-ignored. Core server logic still re-validates ACE, distance, money, and inventory.
{% endhint %}
