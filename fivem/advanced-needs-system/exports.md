# Exports

#### HUD Visibility

Control HUD visibility via client-sde :

```lua
local UI = exports['cdev_needs']:getUI()
UI.setVisibility(false)
UI.setCompassVisibility(false)
```

***

#### Stats Manipulation (Client-Side)

```lua
local Needs = exports['cdev_needs'].getNeeds()

Needs.get(stat)
Needs.set(stat, newValue)
Needs.add(stat, increaseAmount)
Needs.sub(stat, decreaseAmount)
```

***

#### Stats Manipulation (Server-Side)

```lua
local Needs = exports['cdev_needs'].getNeeds()

Needs.get(source, stat)
Needs.set(source, stat, newValue)
Needs.add(source, stat, increaseAmount)
Needs.sub(source, stat, decreaseAmount)
```

***

#### Stat Change Events (Client-Side Only)

Register a callback for when a stat changes:

```lua
local Needs = exports['cdev_needs'].getNeeds()

Needs.registerOnUpdate(stat, callback)

-- Example:
Needs.registerOnUpdate(
    'thirst',
    function(newValue, oldValue, overflowed)
        print('Thirst updated from ' .. oldValue .. ' to ' .. newValue)
    end
)
```

***

#### Actions menu (client-side)

Opens the same menu as the **O** key (pee, poop, shower, sleep, etc.). Useful for custom menus (ESX, ox\_lib, radial menus, etc.).

```lua
exports['cdev_needs']:openActionsMenu()    -- open menu, returns true if opened
exports['cdev_needs']:closeActionsMenu() -- close menu, returns true if it was open
exports['cdev_needs']:toggleActionsMenu() -- same as pressing O
exports['cdev_needs']:isActionsMenuOpen()  -- returns boolean
```

**Example (custom menu button):**

```lua
RegisterCommand('myneeds', function()
    local opened = exports['cdev_needs']:openActionsMenu()
    if not opened then
        print('Could not open needs menu (dead or already open)')
    end
end, false)
```

**Example (another resource):**

```lua
if GetResourceState('cdev_needs') == 'started' then
    exports['cdev_needs']:openActionsMenu()
end
```

***

#### Action lock (client-side)

Prevents the player from starting needs actions (useful during cutscenes, minigames, etc.).

```lua
exports['cdev_needs']:isLocked()           -- returns boolean
exports['cdev_needs']:setActionLocked(true)  -- lock actions
exports['cdev_needs']:setActionLocked(false) -- unlock actions
```
