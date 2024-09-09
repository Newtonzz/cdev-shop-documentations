---
description: >-
  Here’s how to register a new walkstyle in the WalkStyles File.  The process is
  quite simple, requiring just a few key fields.
---

# Register a New Walkstyle!

***

Walkstyle Example

```lua
{
    id = "lemar",  -- Unique walkstyle identifier
    label = "Lemar",  -- Display name for the walkstyle
    clipSet = "ANIM_GROUP_MOVE_LEMAR_ALLEY",  -- Animation clip set for the walkstyle
    category = "walkstyles",  -- Walkstyle category
     thumbnailcdn = "http:/examplecdn/ultimate_sync_thumbnail",   -- CDN URL for thumbnail (optional)
    -- thumbnail = "walkstyle_image"  -- Local path for the preview image (optional)
    vip = false,  -- VIP-only walkstyle (optional)
}
```

#### Field Definitions

* **id**: `string`\
  The unique identifier for the walkstyle.
* **label**: `string`\
  A user-friendly name for the walkstyle.
* **clipSet**: `string`\
  The animation clip set for the walkstyle.
* **category**: `string`\
  Defines the category for the walkstyle.
* **thumbnailcdn**: `string`\
  URL pointing to the animation's preview image hosted on a CDN.
* **thumbnail**: `string`\
  Local path for the preview image if hosted within the application (alternative to `thumbnailcdn`).
* **vip**: `boolean` (optional)\
  Indicates if the animation is VIP-only.
