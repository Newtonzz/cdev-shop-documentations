# Exports

This document explains how to use the exports provided by the `cdev_emotemenu`

### Exports

#### toggleUI

**Description:** Toggles the visibility of the UI.

**Usage:**

```lua
exports['cdev_emotemenu']:toggleUI()
```

***

#### hideUI

**Description:** Hides the UI.

**Usage:**

```lua
exports['cdev_emotemenu']:hideUI()
```

***

#### showUI

**Description:** Shows the UI.

**Usage:**

```lua
exports['cdev_emotemenu']:showUI()
```

***

#### playAnimById

**Description:** Plays an animation by its ID.

**Parameters:**

* `animId` (number): The ID of the animation to play.
* `customCoords` (table, optional): Custom coordinates to play the animation at.
* `customHeading` (number, optional): Custom heading to play the animation at.
* `freezePlayer` (boolean, optional): Whether to freeze the player while playing the animation.
* `oldCoords` (table, optional): The old coordinates of the player before playing the animation.
* `forceLoop` (boolean, optional): Force the animation to loop.
* `customPerson` (string, optional): The person/side to play the animation on (first or second person).

**Usage:**

```lua
exports['cdev_emotemenu']:playAnimById(animId, customCoords, customHeading, freezePlayer, oldCoords, forceLoop, customPerson)
```

***

#### setExpressionById

**Description:** Sets a facial expression by its ID.

**Parameters:**

* `expressionId` (number): The ID of the expression to set.

**Usage:**

```lua
exports['cdev_emotemenu']:setExpressionById(expressionId)
```

***

#### resetExpression

**Description:** Resets the facial expression to the default.

**Usage:**

```lua
exports['cdev_emotemenu']:resetExpression()
```

***

#### initializeExpression

**Description:** Initializes the facial expression system.

**Usage:**

```lua
exports['cdev_emotemenu']:initializeExpression()
```

***

#### getExpression

**Description:** Retrieves the current facial expression ID.

**Returns:**

* `(number)`: The ID of the current expression.

**Usage:**

```lua
local expressionId = exports['cdev_emotemenu']:getExpression()
```

***

#### setWalkStyleById

**Description:** Sets a walk style by its ID.

**Parameters:**

* `walkStyleId` (number): The ID of the walk style to set.

**Usage:**

```lua
exports['cdev_emotemenu']:setWalkStyleById(walkStyleId)
```

***

#### resetWalkStyle

**Description:** Resets the walk style to the default.

**Usage:**

```lua
exports['cdev_emotemenu']:resetWalkStyle()
```

***

#### initializeWalkStyle

**Description:** Initializes the walk style system.

**Usage:**

```lua
exports['cdev_emotemenu']:initializeWalkStyle()
```

***

#### getWalkStyle

**Description:** Retrieves the current walk style ID.

**Returns:**

* `(number)`: The ID of the current walk style.

**Usage:**

```lua
local walkStyleId = exports['cdev_emotemenu']:getWalkStyle()
```

***

#### cancelAnim

**Description:** Cancels the current animation.

**Usage:**

```lua
exports['cdev_emotemenu']:cancelAnim()
```

***

#### isAnimRunning

**Description:** Checks if an animation is currently running.

**Returns:**

* `(boolean)`: `true` if an animation is running, `false` otherwise.

**Usage:**

```lua
local isRunning = exports['cdev_emotemenu']:isAnimRunning()
```

***

#### blockAnimationUsage

**Description:** Blocks or unblocks animation usage.

**Parameters:**

* `block` (boolean): `true` to block animations, `false` to unblock.

**Usage:**

```lua
exports['cdev_emotemenu']:blockAnimationUsage(block)
```

***

#### registerAnimation

**Description:** Registers a new animation.

**Parameters:**

* `data` (table): A table containing animation data with the following fields:
  * `id` (number): The ID of the animation.
  * `category` (string): The category of the animation.
  * `thumbnail` (string): The path to the thumbnail image.
  * `label` (string): The display label for the animation.
  * `firstperson` (table): Contains `dict` and `anim` for the animation.
  * `vip` (boolean, optional): Whether the animation is VIP-only.

**Usage:**

```lua
exports['cdev_emotemenu']:registerAnimation({
    id = 1,
    category = 'dance',
    thumbnail = 'path/to/thumbnail.png',
    label = 'My Custom Dance',
    firstperson = {
        dict = 'anim@mp_player_intcelebrationmale@uncle_disco',
        anim = 'uncle_disco'
    },
    vip = false
})
```

***

### Notes

* Ensure that the `cdev_emotemenu` resource is properly installed and running on your server.
* Replace `'cdev_emotemenu'` with the actual name if the resource folder has a different name.
* Optional parameters can be omitted or set to `nil`.
* Consult the resource documentation for specific IDs and available animations.
