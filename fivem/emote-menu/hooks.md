---
description: >-
  The Hooks Handler system for cdev_emotemenu allows you to register callbacks
  that will be executed when specific events occur within the emote menu system.
  This provides a powerful way to extend funct
---

# Hooks

### Available Hooks

The following hooks are currently available:

* `onAnimationStart`: Triggered when an animation begins playing
* `onAnimationCancel`: Triggered when an animation is canceled

## Exports

***

### addHook

Description: Registers a callback function to be executed when a specific hook is triggered.

Parameters:

* hookName (string): The name of the hook to register for ('onAnimationStart' or 'onAnimationCancel')
* callback (function): The callback function to execute when the hook is triggered

Usage:

```lua
exports['cdev_emotemenu']:addHook('onAnimationStart', function(animData, person)
    print("Animation started: " .. animData.label)
    -- Your code here
end)
```

***

### removeHook

Description: Removes a previously registered callback function from a specific hook.

Parameters:

* hookName (string): The name of the hook to remove the callback from
* callback (function): The callback function to remove

Usage:

```lua
local myCallback = function(animId, animData)
    print("Animation started: " .. animId)
end

-- Add the hook
exports['cdev_emotemenu']:addHook('onAnimationStart', myCallback)

-- Later, remove the hook
exports['cdev_emotemenu']:removeHook('onAnimationStart', myCallback)
```

***

### clearHooks

Description: Removes all callback functions from a specific hook.

Parameters:

* hookName (string): The name of the hook to clear all callbacks from

Usage:

```lua
exports['cdev_emotemenu']:clearHooks('onAnimationStart')
```

***

### callHook

Description: Manually triggers a specific hook, executing all registered callbacks.

Parameters:

* hookName (string): The name of the hook to trigger
* ... (any): Additional parameters to pass to the callback functions

Usage:

```lua
exports['cdev_emotemenu']:callHook('onAnimationStart', ...)
```

***

### Hook Callback Parameters

#### onAnimationStart

Callback parameters:

* animData (table): data about the animation
* person (string): 'firstperson' or 'secondperson'

Example:

```lua
exports['cdev_emotemenu']:addHook('onAnimationStart', function(animData, person)
    print("Animation name: " .. animData.label)
end)
```

#### onAnimationCancel

Callback parameters:

* ped (number): Ped

Example:

```lua
exports['cdev_emotemenu']:addHook('onAnimationCancel', function(ped)
    print(ped)
end)
```

***

### Example Usage

```lua
-- Register a callback for when animations start
local function onAnimStart(animId, animData)
    print("Animation started: " .. animId)
    if animData.category == "dances" then
        -- Do something special for dance animations
    end
end

-- Register the callback
exports['cdev_emotemenu']:addHook('onAnimationStart', onAnimStart)

-- Register a callback for when animations are canceled
exports['cdev_emotemenu']:addHook('onAnimationCancel', function(animId, reason)
    print("Animation " .. animId .. " was canceled because: " .. reason)
end)

-- Later, if needed, remove specific callbacks
exports['cdev_emotemenu']:removeHook('onAnimationStart', onAnimStart)

-- Or clear all callbacks for a hook
exports['cdev_emotemenu']:clearHooks('onAnimationCancel')
```
