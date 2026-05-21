---
icon: user
---

# Client

## Client exports

**Call from client-side scripts only (local player).**

## OpenPlayerPanel

**Opens the player betting panel for the local player.**

**Parameters:** none

**Returns:** nothing

```lua
exports['cdev_bet']:OpenPlayerPanel()
```

### Example key mapping

```lua
RegisterCommand('+openbet', function()
    exports['cdev_bet']:OpenPlayerPanel()
end, false)
RegisterKeyMapping('+openbet', 'Open sportsbook', 'keyboard', 'F7')
```

***

### OpenAdminPanel

**Opens the admin panel for the local player. Server still validates admin ACE when loading data.**

**Parameters:** none

**Returns:** nothing

```lua
exports['cdev_bet']:OpenAdminPanel()
```

***

## ClosePanel

**Closes the betting UI for the local player.**

**Parameters:** none

**Returns:** nothing

```lua
exports['cdev_bet']:ClosePanel()
```

***

## IsPanelOpen

**Returns whether the local player has the betting panel open.**

**Parameters:** none

**Returns:** `boolean`

```lua
if exports['cdev_bet']:IsPanelOpen() then
    exports['cdev_bet']:ClosePanel()
end
```
