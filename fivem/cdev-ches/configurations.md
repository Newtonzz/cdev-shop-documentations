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

| Option       | Type          | Default | Description                               |
| ------------ | ------------- | ------- | ----------------------------------------- |
| `keyDisplay` | string        | `"E"`   | Key shown in hint (e.g. \[E] Play Chess). |
| `controlId`  | number        | `38`    | FiveM control ID. 38 = E key.             |
| `label`      | string \| nil | `nil`   | Custom label. `nil` = use locale.         |

#### Target (when `Bridge.Interaction = "target"`)

| Option             | Type   | Default                | Description                                |
| ------------------ | ------ | ---------------------- | ------------------------------------------ |
| `label`            | string | `"Play Chess"`         | Text shown on target option.               |
| `icon`             | string | `"fas fa-chess-board"` | Icon (Font Awesome for ox\_target).        |
| `TargetSyncRadius` | number | `80`                   | Max distance (m) to add target for boards. |
| `TargetRescanMs`   | number | `8000`                 | Rescan interval (ms) for nearby boards.    |

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
| 2500    | GM     | Grandmaster          |
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

| Option         | Type    | Default         | Description             |
| -------------- | ------- | --------------- | ----------------------- |
| `Item.enabled` | boolean | `true`          | Enable item placement.  |
| `Item.name`    | string  | `"chess_board"` | Item name in inventory. |
| `Item.label`   | string  | `"Chess Board"` | Display name in menus.  |

***

### Props

Board and piece models. Must match stream files. Do not change unless replacing models.

| Option              | Description                                      |
| ------------------- | ------------------------------------------------ |
| `Props.Board.model` | Board model (e.g. `"cdev_chesstable"`).          |
| `Props.Pieces.*`    | Piece models (king\_w, king\_b, queen\_w, etc.). |

***

### Interaction Distance

| Option                | Type   | Default | Description                                |
| --------------------- | ------ | ------- | ------------------------------------------ |
| `InteractionDistance` | number | `2.5`   | Max distance (m) to interact with a board. |

***

### Board & Pieces (Positioning)

| Option                                  | Type   | Default  | Description                          |
| --------------------------------------- | ------ | -------- | ------------------------------------ |
| `BoardPieces.squareSize`                | number | `0.06`   | Size of one square (m).              |
| `BoardPieces.pieceSpacing`              | number | `0.005`  | Gap between pieces.                  |
| `BoardPieces.pieceHeight`               | number | `0.050`  | Height above board surface.          |
| `BoardPieces.whiteOffsetX/Y`            | number | `0`      | Offset for white pieces.             |
| `BoardPieces.blackOffsetX/Y`            | number | `0`      | Offset for black pieces.             |
| `BoardPieces.landCorrectionWhite/Black` | number | `-0.010` | Landing correction for moved pieces. |

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

### Custom Framework, Inventory, Notify & Target

DEV Chess uses a **bridge system** for framework, inventory, notifications, and target. By default it auto-detects supported systems. If you use a **custom** or unsupported system, you can add support by editing the bridge files.

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
                if BoardHandler and BoardHandler.OpenChessTableUI then
                    BoardHandler.OpenChessTableUI(entity)
                end
            end
        })
    end)
end
```

Also add removal in `Target.RemoveBoardTarget()`.

Alternatively, use `Bridge.Interaction = "drawtext"` to avoid target altogether — players will see floating text and press a key to interact.
