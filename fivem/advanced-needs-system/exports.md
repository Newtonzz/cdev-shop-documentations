# Exports

#### HUD Visibility

Control HUD visibility via server or client triggers:

```lua
local isVisible = true

-- Server-side
TriggerClientEvent(source, 'cdev:hud:visibility', isVisible)

-- Client-side
TriggerEvent('cdev:hud:visibility', isVisible)
exports["cdev_needs"]["hud"].setVisibility(isVisible)
```

***

#### Stats Manipulation (Client-Side)

```lua
local Needs = exports['cdev_needs']['stats']

Needs.get(stat)
Needs.set(stat, newValue)
Needs.add(stat, increaseAmount)
Needs.sub(stat, decreaseAmount)
```

***

#### Stats Manipulation (Server-Side)

```lua
local Needs = exports['cdev_needs']['stats']

Needs.get(source, stat)
Needs.set(source, stat, newValue)
Needs.add(source, stat, increaseAmount)
Needs.sub(source, stat, decreaseAmount)
```

***

#### Stat Change Events (Client-Side Only)

Register a callback for when a stat changes:

```lua
local Needs = exports['cdev_needs']['stats']

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
