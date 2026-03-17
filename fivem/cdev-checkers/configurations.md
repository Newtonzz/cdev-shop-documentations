---
icon: wrench
---

# Configurations

{% hint style="warning" %}
All configuration is done in `public/shared/config.lua`. Restart the resource after changing values.
{% endhint %}

***

### General

| Option   | Type    | Default | Description                                                                            |
| -------- | ------- | ------- | -------------------------------------------------------------------------------------- |
| `Debug`  | boolean | `false` | Enable extra logs in F8. Set `false` on production.                                    |
| `Locale` | string  | `"en"`  | Language code. Options: `"en"`, `"pt"`. Must match a file in `public/shared/locales/`. |

***

### Bridge

| Option               | Type   | Options                                                              | Description                                       |
| -------------------- | ------ | -------------------------------------------------------------------- | ------------------------------------------------- |
| `Bridge.Framework`   | string | `"auto"` \| `"qb-core"` \| `"qbx_core"` \| `"es_extended"`           | Framework to use. `"auto"` detects automatically. |
| `Bridge.Inventory`   | string | `"auto"` \| `"ox_inventory"` \| `"qb-inventory"` \| `"qs-inventory"` | Inventory system.                                 |
| `Bridge.Interaction` | string | `"drawtext"` \| `"target"`                                           | How players interact with placed boards.          |
| `Bridge.Target`      | string | `"auto"` \| `"ox_target"` \| `"qb-target"`                           | Target system when `Interaction = "target"`.      |
| `Bridge.Notify`      | string | `"auto"` \| `"ox_lib"` \| `"qbcore"` \| `"esx"` \| `"native"`        | Notification system.                              |

***

### Interaction Options

#### DrawText (when `Bridge.Interaction = "drawtext"`)

| Option       | Type          | Default | Description                                  |
| ------------ | ------------- | ------- | -------------------------------------------- |
| `keyDisplay` | string        | `"E"`   | Key shown in hint (e.g. \[E] Play Checkers). |
| `controlId`  | number        | `38`    | FiveM control ID. 38 = E key.                |
| `label`      | string \| nil | `nil`   | Custom label. `nil` = use locale.            |

#### Target (when `Bridge.Interaction = "target"`)

| Option             | Type   | Default               | Description                                |
| ------------------ | ------ | --------------------- | ------------------------------------------ |
| `label`            | string | `"Play Checkers"`     | Text shown on target option.               |
| `icon`             | string | `"fas fa-border-all"` | Icon (Font Awesome for ox\_target).        |
| `TargetSyncRadius` | number | `80`                  | Max distance (m) to add target for boards. |
| `TargetRescanMs`   | number | `8000`                | Rescan interval (ms) for nearby boards.    |

***

### Match History

| Option                             | Type   | Default | Description                                                              |
| ---------------------------------- | ------ | ------- | ------------------------------------------------------------------------ |
| `MatchHistory.MaxEntriesPerPlayer` | number | `20`    | Max matches to keep per player. Set `0` for unlimited (not recommended). |

***

### Rating & Badges (ELO)

| Option              | Type   | Default   | Description                        |
| ------------------- | ------ | --------- | ---------------------------------- |
| `Rating.DefaultELO` | number | `1000`    | Starting ELO for new players.      |
| `Rating.KFactor`    | number | `32`      | K-factor (rating change per game). |
| `Rating.MinRating`  | number | `100`     | Minimum allowed rating.            |
| `Rating.MaxRating`  | number | `3000`    | Maximum allowed rating.            |
| `Rating.Badges`     | table  | See below | Badge thresholds and colors.       |

#### Default Badges

| Min ELO | Badge  | Label                |
| ------- | ------ | -------------------- |
| 2600    | GM     | Grandmaster          |
| 2400    | IM     | International Master |
| 2300    | FM     | FIDE Master          |
| 2200    | CM     | Candidate Master     |
| 2000    | NM     | National Master      |
| 1800    | Expert | Expert               |
| 1600    | CA     | Class A              |
| 1400    | CB     | Class B              |
| 1200    | CC     | Class C              |
| 1000    | —      | Beginner             |

***

### Item

| Option         | Type    | Default            | Description             |
| -------------- | ------- | ------------------ | ----------------------- |
| `Item.enabled` | boolean | `true`             | Enable item placement.  |
| `Item.name`    | string  | `"checkers_board"` | Item name in inventory. |
| `Item.label`   | string  | `"Checkers Board"` | Display name in menus.  |

***

### Props

Board and piece models. Must match stream files. Do not change unless replacing models.

| Option              | Description                                |
| ------------------- | ------------------------------------------ |
| `Props.Board.model` | Board model (e.g. `"cdev_checkersboard"`). |
| `Props.Pieces.*`    | Piece models (red\_man, red\_king etc..).  |

***

### Interaction Distance

| Option                | Type   | Default | Description                                |
| --------------------- | ------ | ------- | ------------------------------------------ |
| `InteractionDistance` | number | `2.5`   | Max distance (m) to interact with a board. |

***

### Rules

| Option             | Type    | Default | Description                                                   |
| ------------------ | ------- | ------- | ------------------------------------------------------------- |
| `MandatoryCapture` | boolean | `true`  | If true show valid moves , if false palyer may move any piece |

***

### Board & Pieces (Positioning)

<table><thead><tr><th width="263">Option</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>BoardPieces.squareSize</code></td><td>number</td><td><code>0.0498</code></td><td>Size of one square (m).</td></tr><tr><td><code>BoardPieces.pieceSpacing</code></td><td>number</td><td><code>0.005</code></td><td>Gap between pieces.</td></tr><tr><td><code>BoardPieces.pieceHeight</code></td><td>number</td><td><code>0.036</code></td><td>Height above board surface.</td></tr><tr><td><code>BoardPieces.KingZOffset</code></td><td>number</td><td><code>0.036</code></td><td>OffsetZ for king pieces.</td></tr><tr><td><code>BoardPieces.forceSquareSize</code></td><td>number</td><td><code>0.0548</code></td><td>Square size in meters (match your board model)</td></tr></tbody></table>

***

### Placement Mode

| Option                                | Type   | Default   | Description                                 |
| ------------------------------------- | ------ | --------- | ------------------------------------------- |
| `Placement.raycastDistance`           | number | `20`      | Raycast distance (m) for surface detection. |
| `Placement.maxDistanceFromPlayer`     | number | `6`       | Max placement distance (m).                 |
| `Placement.Keybinds.place`            | number | `38`      | Confirm place (E).                          |
| `Placement.Keybinds.cancel`           | number | `200`     | Cancel (ESC).                               |
| `Placement.Keybinds.scrollUp/Down`    | number | `15/14`   | Rotate board.                               |
| `Placement.Keybinds.fineRotate`       | number | `21`      | Shift for fine rotation.                    |
| `Placement.Keybinds.rotateLeft/Right` | number | `174/175` | Arrow keys for rotation.                    |

***

### Sit Animation

| Option                             | Type    | Default                                       | Description                  |
| ---------------------------------- | ------- | --------------------------------------------- | ---------------------------- |
| `SitAnimation.Enable`              | boolean | `true`                                        | Play sit animation at board. |
| `SitAnimation.dict`                | string  | `"anim@heists@fleeca_bank@ig_7_jetski_owner"` | Animation dictionary.        |
| `SitAnimation.name`                | string  | `"owner_idle"`                                | Animation name.              |
| `SitAnimation.whiteSeat/blackSeat` | vector3 | See config                                    | Seat offsets.                |

***

### Camera

| Option                       | Type    | Default    | Description             |
| ---------------------------- | ------- | ---------- | ----------------------- |
| `Camera.white/black`         | vector3 | See config | Camera offset per side. |
| `Camera.fov`                 | number  | `45`       | Field of view.          |
| `Camera.zoomDistanceMin/Max` | number  | `0.7/4`    | Zoom limits.            |
| `Camera.zoomStep`            | number  | `0.12`     | Zoom step.              |
| `Camera.fovMin/Max`          | number  | `28/55`    | FOV limits.             |

***

### Board Light

| Option                    | Type   | Default               | Description          |
| ------------------------- | ------ | --------------------- | -------------------- |
| `BoardLight.toggleKey`    | string | `"F"`                 | Key to toggle light. |
| `BoardLight.heightOffset` | number | `0.5`                 | Light height.        |
| `BoardLight.color`        | table  | `{r=255,g=255,b=255}` | Light color.         |
| `BoardLight.range`        | number | `5.5`                 | Light range.         |
| `BoardLight.intensity`    | number | `0.38`                | Light intensity.     |
| `BoardLight.fillLight`    | table  | See config            | Optional fill light. |

***

***

### Outline & Markers

Colors and sizes for selected pieces, valid moves, hover effects, etc. See `config.lua` for full details.

***

### Default Avatar URL

| Option             | Type   | Default | Description                           |
| ------------------ | ------ | ------- | ------------------------------------- |
| `DefaultAvatarUrl` | string | URL     | Fallback avatar when player has none. |

***

### Timer

| Option                   | Type   | Default | Description                                     |
| ------------------------ | ------ | ------- | ----------------------------------------------- |
| `Timer.IncrementSeconds` | number | `0`     | Fischer increment per move. `0` = no increment. |

### Custom Themes

With this feature from the **cdev\_checkers** resource, you can customize and create multiple UI themes for a better experience on your server.

#### Themes Configs (`public/shared/config.lua`)

{% hint style="info" %}
* **`default`** — CDEV Checkers look (dark panels, red accents).
* **`cdev`** — CDEV brand style (cdev\_lib palette: #161619, #1f1f22, #7289DA blue accent, #5f6369 muted text, #0abc5c success).
* **`dark`** — Darker variant.
* **`light`** — Light background and dark text.
* **`custom`** — Template with empty values; fill in the colors you want. Any empty value falls back to **default**.
{% endhint %}

```lua
-- UI theme (colors only). Options: "default", "cdev", "dark", "light", "custom".
-- "custom" uses public/shared/themes.json "custom" entry; fill in values and leave others empty to fall back to default.
-- Only the server owner can change this; players cannot change theme in-game.
Theme = "cdev",
```

#### Themes Config File (`public/shared/themes.json`)

### ✏️ How to create a new theme

#### Option A: Use the `custom` template

1. Set **`Theme = "custom"`** in `config.lua`.
2. Open **`public/shared/themes.json`**.
3. Find the **`custom`** object.
4. Fill in the color values you want (hex, e.g. `#1a1a1a`, or CSS like `rgba(255,255,255,0.08)`).
5. Leave a key empty (`""`) to use the **default** value for that key.
6. Save and restart the resource.

#### Option B: Add a new theme to the JSON

1. In **`public/shared/themes.json`**, copy the **`default`** (or another) block.
2. Add a new key at the same level as `default`, e.g. **`mytheme`**:

```json
"mytheme": {
  "bg": "#0d0d0d",
  "bgRow": "#1a1a1a",
  ...
}
```

3. In **`config.lua`** set **`Theme = "mytheme"`**.
4. Restart the resource.

### 📋 Theme keys (what each color changes)

| Key                      | What it changes                                       |
| ------------------------ | ----------------------------------------------------- |
| **bg**                   | Main panel background (all menus)                     |
| **bgRow**                | Rows and cards (rating row, player panels, list rows) |
| **bgInput**              | Input fields and stat boxes                           |
| **bgHover**              | Hover state for buttons and rows                      |
| **border**               | Panel and card borders                                |
| **borderSubtle**         | Dividers, input borders                               |
| **borderActive**         | Active tab / selected border                          |
| **red**                  | Accent (rating, timer, links, highlights)             |
| **redDark**              | Dark red (selected option, delete button)             |
| **redBtn**               | Primary button (Start Game, Save, Apply)              |
| **redBtnHover**          | Primary button hover                                  |
| **redGlow**              | Glow behind “You” panel and selected option           |
| **redGlowOuter**         | Box-shadow for that glow (full CSS value)             |
| **text**                 | Primary text                                          |
| **textSecondary**        | Secondary text                                        |
| **textMuted**            | Muted labels                                          |
| **textDim**              | Dim text (hints, placeholders)                        |
| **gold**                 | Rank 1 / gold medal in ranking                        |
| **bronze**               | Rank 2–3 / bronze in ranking                          |
| **scrollbarThumb**       | Scrollbar thumb color                                 |
| **scrollbarThumbHover**  | Scrollbar thumb hover                                 |
| **scrollbarThumbActive** | Scrollbar thumb active                                |
| **success**              | Win / success (e.g. match history badge)              |
| **error**                | Loss / error                                          |
| **warning**              | Draw / neutral                                        |
| **iconBtnHover**         | Icon button hover background                          |
| **keyBg**                | Key hint background (e.g. \[E], \[ESC])               |
| **whitePanelBorder**     | White player panel border in match                    |
| **hudPanelBg**           | Game HUD panel background                             |
| **hudPanelBorder**       | Game HUD panel border                                 |
| **hudActiveBorder**      | Game HUD active (current turn) border                 |
| **hudCenterBg**          | Game HUD center (turn label) background               |
| **moveFromBg**           | Last move “from” square in HUD                        |
| **moveToBg**             | Last move “to” square in HUD                          |
| **moveToText**           | Last move “to” square text color                      |
| **controlsBg**           | HUD controls container background                     |
| **controlsBorder**       | HUD controls border                                   |
| **kbdBg**                | HUD keyboard key background                           |
| **gameOverOverlay**      | Game over banner gradient (full CSS value)            |

***

{% hint style="warning" %}
### ⚠️ Important

* **Only colors** can be changed; icons and layout are fixed.
* **Server-side only**: theme is chosen in config; players cannot change it in-game.
* Use **hex** (`#1a1a1a`) or **CSS** (`rgba(255,255,255,0.08)`) for values.
* For **`redGlowOuter`** and **`gameOverOverlay`** use the full CSS value (e.g. box-shadow or gradient) as in **default**.
{% endhint %}

### Custom Framework, Inventory, Notify & Target

DEV Checkers uses a **bridge system** for framework, inventory, notifications, and target. By default it auto-detects supported systems. If you use a **custom** or unsupported system, you can add support by editing the bridge files.

#### Bridge config (`public/shared/config.lua`)

```lua
Bridge = {
    Framework = "auto",   -- "qb-core" | "qbx_core" | "es_extended"
    Inventory = "auto",   -- "ox_inventory" | "qb-inventory" | "qs-inventory"
    Interaction = "target", -- "drawtext" | "target"
    Target = "auto",      -- "ox_target" | "qb-target"
    Notify = "auto",      -- "ox_lib" | "qbcore" | "esx" | "native"
},
```

#### Custom Framework

Edit `public/bridge/framework/server.lua` and `public/bridge/framework/client.lua`.

Add a new entry to `FrameworkSystems`:

```lua
['your_framework'] = {
    getFrameworkName = function() return 'your_framework' end,
    notify = function(source, message, type) -- your notify logic end,
    getPlayer = function(source) return ... end,
    getCitizenId = function(source) return ... end,  -- persistent identifier (e.g. citizenid, license)
    init = function() ... end,
},
```

Set `Bridge.Framework = "your_framework"` in config (only works if the resource name is in `FrameworkSystems`). For auto-detect, add your resource name to the systems table.

#### Custom Inventory

Edit `public/bridge/inventory/server.lua`.

Add a new entry to `InventorySystems`:

```lua
['your_inventory'] = {
    addItem = function(source, item, count, slot, metadata) return ... end,
    removeItem = function(source, item, count, slot) return ... end,
    getItemCount = function(source, item) return ... end,
    hasItem = function(source, item, count) return ... end,
},
```

Set `Bridge.Inventory = "your_inventory"` in config.

#### Custom Notify

Edit `public/bridge/notify/client.lua`.

Add a new block in the `send()` function (or modify `getSystem()` to return your system):

```lua
if system == 'your_notify' then
    -- TriggerEvent('your:notify', msg, notifyType)
    -- or exports['your_notify']:Notify(msg, type)
    return
end
```

Set `Bridge.Notify = "your_notify"` if you add detection, or use `"native"` for GTA native notifications.

#### Custom Target

Edit `public/bridge/target/client.lua`.

Add your target logic in `Target.AddBoardTarget()` (around the CUSTOM TARGET section):

```lua
if GetResourceState("your_target") == "started" then
    pcall(function()
        exports["your_target"]:AddTargetEntity(entity, {
            label = label,
            icon = icon,
            onSelect = function()
                if BoardHandler and BoardHandler.OpenCheckersTableUI then
                    BoardHandler.OpenCheckersTableUI(entity)
                end
            end
        })
    end)
end
```

Also add removal in `Target.RemoveBoardTarget()`.

Alternatively, use `Bridge.Interaction = "drawtext"` to avoid target altogether — players will see floating text and press a key to interact.
