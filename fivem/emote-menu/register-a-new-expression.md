---
description: >-
  Here’s how to register a new expression in the Expressions File. The process
  is quite simple, requiring just a few key fields.
---

# How to Register a New Expression!

***

Expression Example

```lua
{
    id = "angry",  -- Unique expression identifier
    label = "Angry",  -- Display name for the expression
    thumbnailcdn = CDEV_CDN .. "angry",  -- CDN URL for thumbnail (optional)
    -- thumbnail = "expression_image"  -- Local path for the preview image (optional)
    expression = "mood_angry_1",  -- Animation expression
    category = "expressions",  -- Expression category
    vip = false,
}
```

#### Required Fields

* **id**: `string`\
  The unique identifier for the expression.
* **label**: `string`\
  A user-friendly name for the expression.
* **expression**: `string`\
  The specific expression animation to be used.
* **category**: `string`\
  Defines the category for the expression.
* **thumbnailcdn**: `string`\
  URL pointing to the animation's preview image hosted on a CDN.
* **thumbnail**: `string`\
  Local path for the preview image if hosted within the application (alternative to `thumbnailcdn`)
* **vip**: `boolean` (optional)\
  Indicates if the animation is VIP-only.
