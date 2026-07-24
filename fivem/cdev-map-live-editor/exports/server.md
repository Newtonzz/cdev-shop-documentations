---
icon: database
---

# Server

Call from server-side scripts only. Pass a valid player server id (`source`) when the export needs a player.

***

### OpenEditorFor

Asks the given player to open the editor. Permission is still enforced.

#### Parameters

| Name     | Type     | Required | Description      |
| -------- | -------- | -------- | ---------------- |
| `source` | `number` | Yes      | Player server id |

#### Returns

Nothing (fires the open flow on that client).

```lua
exports['cdev_mapeditor']:OpenEditorFor(source)
```

#### Example command

```lua
RegisterCommand('editmap', function(source)
    if source == 0 then return end
    exports['cdev_mapeditor']:OpenEditorFor(source)
end, true)
```

***

### CanUseEditor

Returns whether the player passes ACE / framework admin checks.

#### Parameters

| Name     | Type     | Required | Description      |
| -------- | -------- | -------- | ---------------- |
| `source` | `number` | Yes      | Player server id |

#### Returns

`boolean`

```lua
if exports['cdev_mapeditor']:CanUseEditor(source) then
    exports['cdev_mapeditor']:OpenEditorFor(source)
end
```

***

### GetActiveMaps

Returns the list of maps currently marked active for world sync (live production).

#### Parameters

none

#### Returns

`table` of map meta entries (id, name, revision, anchor, and related fields as provided by WorldSync).

```lua
local maps = exports['cdev_mapeditor']:GetActiveMaps()
```

***

### GetCustomProps

Same custom catalog list as the client export. Used by **cdev\_propshot** when building the capture queue.

#### Parameters

none

#### Returns

`table`

```lua
local custom = exports['cdev_mapeditor']:GetCustomProps()
```
