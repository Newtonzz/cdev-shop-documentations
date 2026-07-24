---
icon: user-hair
---

# Client

Call from client-side scripts only (local player).

***

### OpenEditor

Opens the map editor for the local player. The server still checks permission.

**Parameters:** none

**Returns:** nothing

```lua
exports['cdev_mapeditor']:OpenEditor()
```

#### Example key mapping

```lua
RegisterCommand('+openmapeditor', function()
    exports['cdev_mapeditor']:OpenEditor()
end, false)

RegisterKeyMapping('+openmapeditor', 'Open map editor', 'keyboard', 'F7')
```

***

### CloseEditor

Closes the editor for the local player.

**Parameters:** none

**Returns:** nothing

```lua
exports['cdev_mapeditor']:CloseEditor()
```

***

### IsEditorOpen

Returns whether the local editor session is active.

**Parameters:** none

**Returns:** `boolean`

```lua
if exports['cdev_mapeditor']:IsEditorOpen() then
    exports['cdev_mapeditor']:CloseEditor()
end
```

***

### GetCustomProps

Returns the buyer `MapEditorConfig.CustomProps` table (useful for tools that extend the catalog).

**Parameters:** none

**Returns:** `table`

```lua
local custom = exports['cdev_mapeditor']:GetCustomProps()
```
