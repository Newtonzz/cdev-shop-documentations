---
icon: database
---

# Server

## Server exports

Call from server-side scripts only. Always pass a valid player server id (`source`).

## OpenPlayerPanel

**Opens the full player sportsbook (matches, bet slip, history, wallet).**

### Parameters

| Name     | Type     | Required | Description      |
| -------- | -------- | -------- | ---------------- |
| `source` | `number` | Yes      | Player server id |

### Returns: `boolean` , `true` if the event was sent, `false` if `source` is invalid.

```lua
exports['cdev_bet']:OpenPlayerPanel(source)
```

### Example command wrapper

```lua
RegisterCommand('sportsbook', function(source)exports['cdev_bet']:OpenPlayerPanel(source)end, false)
```

### Example ox\_target (server)

```lua
exports.ox_target:addBoxZone({coords = vec3(-1193.0, -892.0, 13.0),size = vec3(2, 2, 2),options = {{name = 'cdev_bet_open',label = 'Open sportsbook',onSelect = function(data)exports['cdev_bet']:OpenPlayerPanel(data.source or source)end,},},})
```

***

## OpenAdminPanel

**Opens the admin management panel (categories, matches, settle, treasury).**

### Parameters

| Name     | Type     | Required | Description      |
| -------- | -------- | -------- | ---------------- |
| `source` | `number` | Yes      | Player server id |

### Returns: `boolean`

### Permission: The player still needs the ACE permission configured in `BetConfig.ACE.Admin` (default: `cdev_bet.admin`). Without it, the panel opens but bootstrap returns an access error.

```lua
exports['cdev_bet']:OpenAdminPanel(source)
```

***

## ClosePanel

**Closes the betting NUI and releases focus for that player.**

### Parameters

| Name     | Type     | Required | Description      |
| -------- | -------- | -------- | ---------------- |
| `source` | `number` | Yes      | Player server id |

### Returns: `boolean`

```lua
exports['cdev_bet']:ClosePanel(source)
```

### Example close on death

```lua
AddEventHandler('baseevents:onPlayerDied', function()exports['cdev_bet']:ClosePanel(source)end)
```

***

## IsPlayerPanelOpen

**Checks if the player currently has the betting panel open. Uses the synced state bag `cdevBetTablet`.**

### Parameters

| Name     | Type     | Required | Description      |
| -------- | -------- | -------- | ---------------- |
| `source` | `number` | Yes      | Player server id |

### Returns: `boolean`

```lua
local open = exports['cdev_bet']:IsPlayerPanelOpen(source)
if open thenexports['cdev_bet']:ClosePanel(source) end
```
