---
icon: wrench
---

# Configurations

{% hint style="warning" %}
All configuration is done in `public/shared/config.lua` (`LudusConfig`). Restart the resource after changing values.
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

| Option               | Type   | Options                                                              | Description                                       |
| -------------------- | ------ | -------------------------------------------------------------------- | ------------------------------------------------- |
| `Bridge.Framework`   | string | `"auto"` \| `"qb-core"` \| `"qbx_core"` \| `"es_extended"`           | Framework to use. `"auto"` detects automatically. |
| `Bridge.Inventory`   | string | `"auto"` \| `"ox_inventory"` \| `"qb-inventory"` \| `"qs-inventory"` | Inventory system.                                 |
| `Bridge.Interaction` | string | `"drawtext"` \| `"target"`                                           | How players interact with placed boards.          |
| `Bridge.Target`      | string | `"auto"` \| `"ox_target"` \| `"qb-target"`                           | Target system when `Interaction = "target"`.      |
| `Bridge.Notify`      | string | `"auto"` \| `"ox_lib"` \| `"qbcore"` \| `"esx"` \| `"native"`        | Notification system.                              |

#### Notify Options (ox\_lib)

| Option                   | Type   | Default       | Description                                                                 |
| ------------------------ | ------ | ------------- | --------------------------------------------------------------------------- |
| `NotifyOptions.position` | string | `"top-right"` | ox\_lib toast position (`top-right`, `top-left`, `top`, `bottom-right`, …). |
| `NotifyOptions.duration` | number | `4500`        | Toast duration (ms).                                                        |

{% hint style="info" %}
Toasts use a **single path**: `Api.Notify` → `cdev_ludus:clientNotify` → Notify bridge. Identical messages within \~900ms are ignored to prevent duplicates.
{% endhint %}

#### Interaction Options

**DrawText (when `Bridge.Interaction = "drawtext"`)**

World text floats above the nearest board (checkers-style). Two actions:

| On screen           | Default key | Action                                              |
| ------------------- | ----------- | --------------------------------------------------- |
| `[E] Play Ludus`    | **E**       | Interact (create / join lobby / open / spectate)    |
| `[G] Pick up board` | **G**       | Pick up idle board (owner or admin) — item returned |

| Option             | Type          | Default | Description                                                                                                   |
| ------------------ | ------------- | ------- | ------------------------------------------------------------------------------------------------------------- |
| `keyDisplay`       | string        | `"E"`   | Letter shown for play (must match the bound control).                                                         |
| `controlId`        | number        | `38`    | FiveM control ID for play. `38` = E ([controls list](https://docs.fivem.net/docs/game-references/controls/)). |
| `label`            | string \| nil | `nil`   | Custom play label. `nil` = locale `ludus.interact_board`.                                                     |
| `pickupKeyDisplay` | string        | `"G"`   | Letter shown for pickup.                                                                                      |
| `pickupControlId`  | number        | `47`    | FiveM control ID for pickup. `47` = G.                                                                        |
| `pickupLabel`      | string \| nil | `nil`   | Custom pickup label. `nil` = locale `ludus.pickup_board`.                                                     |

```lua
InteractionOptions = {
    DrawText = {
        keyDisplay = "E",
        controlId = 38,          -- E → play / interact
        label = nil,             -- nil = locale
        pickupKeyDisplay = "G",
        pickupControlId = 47,    -- G → pick up board
        pickupLabel = nil,       -- nil = locale
    },
},
```

{% hint style="info" %}
**Performance:** watcher sleeps at **500ms** when far; a `Wait(0)` draw thread runs **only** while a board is in range, then exits (same pattern as cdev\_checkers).
{% endhint %}

{% hint style="warning" %}
If you change `controlId` / `pickupControlId`, also update `keyDisplay` / `pickupKeyDisplay` so the on-screen letter matches the real key.**Target (when `Bridge.Interaction = "target"`)**
{% endhint %}

| Option     | Type   | Default         | Description                         |
| ---------- | ------ | --------------- | ----------------------------------- |
| `label`    | string | `"Ludus Table"` | Text shown on target option.        |
| `icon`     | string | `"fas fa-dice"` | Icon (Font Awesome for ox\_target). |
| `distance` | number | `3.5`           | Aim distance to show the option.    |

***

**ACE & Commands**

| Option             | Type   | Default              | Description                            |
| ------------------ | ------ | -------------------- | -------------------------------------- |
| `ACE.Admin`        | string | `"cdev_ludus.admin"` | ACE permission for admin features.     |
| `Commands.Admin`   | string | `"ludusadmin"`       | Admin panel command.                   |
| `Commands.Place`   | string | `"ludusplace"`       | Admin place command.                   |
| `Commands.Delete`  | string | `"ludusdelete"`      | Admin delete nearest board.            |
| `Commands.Gaming`  | string | `"ludusgaming"`      | Gaming hub (profile / rank / history). |
| `Commands.Balance` | string | `"ludusbalance"`     | Layout calibrator.                     |

***

**Item**

| Option         | Type    | Default         | Description                          |
| -------------- | ------- | --------------- | ------------------------------------ |
| `Item.enabled` | boolean | `true`          | Enable item placement.               |
| `Item.name`    | string  | `"ludus_board"` | Item name in inventory (must match). |
| `Item.label`   | string  | `"Ludus Board"` | Suggested display name.              |

#### Props

Board, dice, pawns, and stake chips. Must match stream files unless you replace models.

| Option                         | Default / notes                     | Description                                           |
| ------------------------------ | ----------------------------------- | ----------------------------------------------------- |
| `Props.board`                  | `"cdev_board"`                      | Board model.                                          |
| `Props.die`                    | `"cdev_player_dice"`                | Dice model.                                           |
| `Props.DieAnim.spinMs`         | `950`                               | Spin duration (ms).                                   |
| `Props.DieAnim.bounceHeight`   | `0.11`                              | Bounce height (m).                                    |
| `Props.DieAnim.faces[1..6]`    | See config                          | Face-up attach rotations.                             |
| `Props.pawns.*`                | `cdev_player_red/blue/green/yellow` | Pawn models per color.                                |
| `Props.Chips.enabled`          | `true`                              | Spawn chip stacks at seats.                           |
| `Props.Chips.showWithoutWager` | `false`                             | Cosmetic chips even without wager.                    |
| `Props.Chips.seatFactor`       | `0.55`                              | Chip distance toward seat (0–1).                      |
| `Props.Chips.height`           | `-0.008`                            | Local Z above board (calibrate with `/ludusbalance`). |
| `Props.Chips.spread`           | `0.04`                              | Lateral spacing between stacked chip props.           |
| `Props.Chips.fallback`         | `"prop_cash_pile_02"`               | Used if casino chip DLC models are missing.           |
| `Props.Chips.tiers`            | stake → model + count               | Visual tier by per-player stake.                      |

***

#### Furniture (kit mode)

| Option                      | Type    | Default           | Description                           |
| --------------------------- | ------- | ----------------- | ------------------------------------- |
| `Furniture.tableModel`      | string  | `"prop_table_02"` | Table under the board.                |
| `Furniture.chairModel`      | string  | `"prop_chair_02"` | Chair per seat.                       |
| `Furniture.spawnTable`      | boolean | `true`            | Spawn table + chairs with the board.  |
| `Furniture.boardLift`       | number  | `0.02`            | Gap above table surface (m).          |
| `Furniture.boardOffset`     | table   | `{x=0,y=0}`       | Fine XY if board pivot is off-center. |
| `Furniture.chairFaceOffset` | number  | `180.0`           | Extra yaw so chairs face the table.   |
| `Furniture.chairs`          | table   | 4 cardinal seats  | Kit chair ring offsets.               |
| `Furniture.colorSeats`      | table   | per color         | Seat side mapping for sit / chips.    |

***

\
Search...

| Option                                | Type   | Default   | Description                         |
| ------------------------------------- | ------ | --------- | ----------------------------------- |
| `Placement.raycastDistance`           | number | `20.0`    | Raycast distance (m).               |
| `Placement.maxDistanceFromPlayer`     | number | `6.0`     | Max place distance (m).             |
| `Placement.minDistanceFromPlayer`     | number | `1.4`     | Min place distance (m).             |
| `Placement.ghostAlpha`                | number | `180`     | Ghost prop alpha (0–255).           |
| `Placement.smooth`                    | number | `0.35`    | Ghost smoothing (0–1).              |
| `Placement.heightStep`                | number | `0.03`    | Height nudge per PageUp / PageDown. |
| `Placement.Keybinds.place`            | number | `38`      | Confirm place (E).                  |
| `Placement.Keybinds.cancel`           | number | `200`     | Cancel (ESC).                       |
| `Placement.Keybinds.scrollUp/Down`    | number | `15/14`   | Rotate board.                       |
| `Placement.Keybinds.fineRotate`       | number | `21`      | Shift for fine rotation.            |
| `Placement.Keybinds.rotateLeft/Right` | number | `174/175` | Arrow rotate.                       |
| `Placement.Keybinds.toggleKit`        | number | `47`      | Toggle furniture kit (G).           |
| `Placement.Keybinds.ground`           | number | `22`      | Snap to ground (SPACE).             |
| `Placement.Keybinds.heightUp/Down`    | number | `10/11`   | PageUp / PageDown.                  |

***

**Sit Animation**

| Option                   | Type    | Default           | Description                                     |
| ------------------------ | ------- | ----------------- | ----------------------------------------------- |
| `Sit.Enable`             | boolean | `true`            | Sit ped when joining lobby / match.             |
| `Sit.Chair.*`            | table   | See config        | Kit mode: chair anim + ped offset.              |
| `Sit.Floor.seatDistance` | number  | `1.15`            | Board-only seat distance from board center (m). |
| `Sit.Floor.Anims`        | table   | jetski owner idle | Board-only floor sit anim.                      |

***

**Cinema Camera**

| Option                   | Type   | Default | Description                   |
| ------------------------ | ------ | ------- | ----------------------------- |
| `Camera.defaultDistance` | number | `1.75`  | Default orbit distance.       |
| `Camera.minDistance`     | number | `0.42`  | Min zoom.                     |
| `Camera.maxDistance`     | number | `4.5`   | Max zoom.                     |
| `Camera.minHeight`       | number | `0.12`  | Min height above board.       |
| `Camera.maxHeight`       | number | `2.8`   | Max height above board.       |
| `Camera.defaultHeight`   | number | `1.05`  | Default height.               |
| `Camera.lookAtZ`         | number | `0.08`  | Look-at height on board.      |
| `Camera.rotateSpeed`     | number | `90.0`  | A/D orbit speed (deg/sec).    |
| `Camera.elevateSpeed`    | number | `1.6`   | W/S elevate speed (m/sec).    |
| `Camera.zoomStep`        | number | `0.12`  | Zoom step per scroll.         |
| `Camera.fov`             | number | `42.0`  | Cinema FOV.                   |
| `Camera.Controls`        | table  | W/S/A/D | Elevate / rotate control IDs. |

***

**Sync (spectators)**

| Option                 | Type    | Default | Description                                       |
| ---------------------- | ------- | ------- | ------------------------------------------------- |
| `Sync.interestRadius`  | number  | `6.0`   | Players inside receive table FX / spectator sync. |
| `Sync.leaveHysteresis` | number  | `1.0`   | Extra meters before leave (anti-flicker).         |
| `Sync.idleWaitMs`      | number  | `750`   | Loop sleep when far from tables.                  |
| `Sync.nearWaitMs`      | number  | `100`   | Loop sleep when near a table.                     |
| `Sync.debugDraw`       | boolean | `false` | Draw sync radius rings when Debug is on.          |
| `Sync.debugNotify`     | boolean | `false` | Notify on sync enter/leave when Debug is on.      |
|                        |         |         |                                                   |

Distances

| Option                          | Type   | Default | Description                              |
| ------------------------------- | ------ | ------- | ---------------------------------------- |
| `Distances.InteractionDistance` | number | `3.5`   | DrawText / interact prompt distance (m). |
| `Distances.ActionMaxDistance`   | number | `6.0`   | Server distance check for table actions. |

***

**Match**

| Option                     | Type   | Default               | Description                                        |
| -------------------------- | ------ | --------------------- | -------------------------------------------------- |
| `Match.MinPlayers`         | number | `2`                   | Minimum seats when creating a lobby (clamped 2–4). |
| `Match.MaxPlayers`         | number | `4`                   | Maximum seats when creating a lobby (clamped 2–4). |
| `Match.TurnTimeoutSec`     | number | `60`                  | Default turn timer when host enables it.           |
| `Match.TimerPresets`       | table  | `{30,45,60,90,120}`   | Lobby timer preset buttons (seconds).              |
| `Match.DisconnectPauseSec` | number | `90`                  | Pause after disconnect before forfeit.             |
| `Match.Colors`             | table  | red/blue/green/yellow | Playable colors.                                   |
| `Match.InitRollGapMs`      | number | `1200`                | Delay between initiative dice reveals.             |
| `Match.InitRollLeadMs`     | number | `500`                 | Delay before first initiative roll.                |
| `Match.InitRollEndMs`      | number | `900`                 | Delay after last initiative roll.                  |
| `Match.Controls.roll`      | number | `38`                  | Roll dice while cinema cam (E).                    |

Turn timeout is clamped server-side to **10–300** seconds when enabled. Disabled timer uses `0`.

***

**Betting**

| Option             | Type   | Default               | Description                 |
| ------------------ | ------ | --------------------- | --------------------------- |
| `Betting.MinStake` | number | `100`                 | Minimum wager amount.       |
| `Betting.MaxStake` | number | `100000`              | Maximum wager amount.       |
| `Betting.Presets`  | table  | `{100,500,1000,5000}` | Quick-select stake buttons. |

Winner pot is paid as **cash** (`Api.AddMoney` cash account), even if players paid from bank.

***

**Rating & Badges**

| Option                 | Type   | Default   | Description                      |
| ---------------------- | ------ | --------- | -------------------------------- |
| `Rating.DefaultPoints` | number | `1000`    | Starting points for new players. |
| `Rating.MinPoints`     | number | `1000`    | Floor points.                    |
| `Rating.MaxPoints`     | number | `6000`    | Ceiling points.                  |
| `Rating.WinDelta`      | number | `50`      | Points gained on win.            |
| `Rating.LossDelta`     | number | `30`      | Points lost on loss.             |
| `Rating.ForfeitDelta`  | number | `40`      | Points lost on forfeit.          |
| `Rating.PageSize`      | number | `10`      | Ranking rows per page in hub.    |
| `Rating.Badges`        | table  | See below | Rank badges by minimum points.   |

**Default Badges**

| Min Points | Badge | Label       |
| ---------- | ----- | ----------- |
| 5500       | GM    | Grandmaster |
| 4800       | M     | Master      |
| 4000       | D     | Diamond     |
| 3200       | P     | Platinum    |
| 2400       | G     | Gold        |
| 1800       | S     | Silver      |
| 1400       | B     | Bronze      |
| 1000       | R     | Rookie      |

***

#### Match History

| Option                             | Type   | Default | Description                              |
| ---------------------------------- | ------ | ------- | ---------------------------------------- |
| `MatchHistory.MaxEntriesPerPlayer` | number | `20`    | Max matches kept per player (FIFO trim). |
| `MatchHistory.PageSize`            | number | `10`    | History rows per page in hub.            |

***

#### Board Layout & Rules

| Option                      | Type   | Default               | Description                            |
| --------------------------- | ------ | --------------------- | -------------------------------------- |
| `BoardLayout.trackLength`   | number | `56`                  | Main track cells.                      |
| `BoardLayout.homeLength`    | number | `5`                   | Colored home stretch cells.            |
| `BoardLayout.safeSquares`   | table  | stars                 | Safe / star cell indices.              |
| `BoardLayout.startSquare`   | table  | per color             | Entry cell per color.                  |
| `BoardLayout.MoveAnimation` | table  | `420ms` / lift `0.08` | Pawn hop timing / height.              |
| `BoardLayout.Outline`       | table  | See config            | Legal / blocked / path outline colors. |

{% hint style="info" %}
Fine visual positions (cell size, yard radius, die Z, chip height, etc.) live in `public/shared/layout.lua` and can be overridden by `public/shared/layout_override.json` (written by `/ludusbalance`).
{% endhint %}

#### Custom Themes

Cdev Ludus Gaming ships one official look and a documented `custom` template for buyers.

**Themes Config (`public/shared/config.lua`)**

{% hint style="info" %}
* **`default`** — Official production theme (dark panels `#161619` + blue accent `#7289DA`). Do not remove this block.
* **`custom`** — Empty overrides with `_key` comments describing each token (same pattern as cdev\_checkers). Fill only what you want to change; empty `""` falls back to **default**.
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
  "_bg": "Main panel / page background",
  "bg": "",
  "_accent": "Primary accent (buttons, links, highlights)",
  "accent": "",
  "_text": "Primary text color",
  "text": ""
}
```

#### ✏️ How to create a custom theme

1. Set **`Theme = "custom"`** in `public/shared/config.lua`.
2. Open **`public/shared/themes.json`**.
3. In the **`custom`** object, fill the color keys you want (leave others as `""`).
4. Keys starting with **`_`** are documentation only — never put a color there.
5. Save and **restart** `cdev_ludus`.

```json
"accent": "#e8a038",
"accentHover": "#d4922f",
"accentMuted": "rgba(232, 160, 56, 0.28)",
"borderActive": "rgba(232, 160, 56, 0.5)",
"bgActive": "rgba(232, 160, 56, 0.16)"
```

#### 📋 Theme keys (what each color changes)

| Key                                         | What it changes                                    |
| ------------------------------------------- | -------------------------------------------------- |
| **bg**                                      | Main panel / page background                       |
| **bgPanel**                                 | Panel background (lobby, hub, match sidebar)       |
| **bgPanelSolid**                            | Solid panel background (no transparency)           |
| **bgInput**                                 | Input fields and chips background                  |
| **bgHover**                                 | Hover state (rows, icon buttons)                   |
| **bgActive**                                | Active / selected fill (tabs, toggles)             |
| **border**                                  | Default panel / card border                        |
| **borderActive**                            | Active / focused border (accent outline)           |
| **borderInput**                             | Input field border                                 |
| **accent**                                  | Primary accent (buttons, links, highlights)        |
| **accentHover**                             | Primary accent hover                               |
| **accentMuted**                             | Soft accent fill / muted highlight                 |
| **text**                                    | Primary text color                                 |
| **textSecondary**                           | Secondary text color                               |
| **textMuted**                               | Muted labels / hints                               |
| **textDim**                                 | Dimmed / placeholder text                          |
| **success**                                 | Success / win color                                |
| **error**                                   | Error / loss / danger color                        |
| **warning**                                 | Warning / neutral status color                     |
| **scrollbarThumb**                          | Scrollbar thumb color                              |
| **scrollbarThumbHover**                     | Scrollbar thumb hover color                        |
| **btnSecondary**                            | Secondary button background                        |
| **btnSecondaryHover**                       | Secondary button hover background                  |
| **overlay**                                 | Overlay / backdrop token (`transparent` or `rgba`) |
| **headerBg**                                | Panel header background                            |
| **red** / **blue** / **green** / **yellow** | Ludus seat color accents                           |

{% hint style="warning" %}
#### ⚠️ Important

* **Only colors** can be changed; icons and layout are fixed.
* Theme is **server config only** — players cannot switch themes in-game.
* Use **hex** (`#7289da`) or **CSS** (`rgba(114, 137, 218, 0.18)`).
* Empty `custom` values always fall back to **default**.
* Do **not** delete the `default` theme block.
{% endhint %}

#### Custom Framework, Inventory, Notify & Target

Cdev Ludus Gaming uses a **bridge system** for framework, inventory, notifications, and target. By default it auto-detects supported systems. If you use a **custom** or unsupported system, edit the bridge files under `public/bridge/`.

**Bridge config (`public/shared/config.lua`)**

```lua
Bridge = {
    Framework = "auto",      -- "qb-core" | "qbx_core" | "es_extended"
    Inventory = "auto",      -- "ox_inventory" | "qb-inventory" | "qs-inventory"
    Interaction = "drawtext", -- "drawtext" | "target"
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

***

**Buyer-editable folders**

| Path                                                | Role                                    |
| --------------------------------------------------- | --------------------------------------- |
| `public/shared/config.lua`                          | All tunables                            |
| `public/shared/layout.lua` + `layout_override.json` | Visual layout                           |
| `public/shared/locales/*.json`                      | Strings                                 |
| `public/shared/themes.json`                         | UI themes                               |
| `public/bridge/**`                                  | Framework / inventory / target / notify |
| `public/server/api.lua`                             | Admin / money / notify hooks            |
| `public/client/api.lua`                             | Client helpers for other resources      |

{% hint style="info" %}
`public/**` is escrow-ignored. Core server logic still re-validates ACE, distance, money, and inventory.
{% endhint %}
