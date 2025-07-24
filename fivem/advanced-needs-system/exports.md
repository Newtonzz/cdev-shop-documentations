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
