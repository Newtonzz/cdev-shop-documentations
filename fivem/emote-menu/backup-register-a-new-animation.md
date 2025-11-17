---
description: >-
  Here’s how to register a new animation in the Animations File. Don't be
  intimidated by the size of this page—most of the options are optional. Scroll
  down for a clearer understanding.
hidden: true
---

# Backup Register a New Animation!

***

Animation Example

```lua
{
    id = "ultimate_sync_animation",  -- Unique animation identifier
    label = "Ultimate Sync Animation",  -- Display name for the animation
    category = "sharedanimations",  -- Animation category
    thumbnailcdn = "http:/examplecdn/ultimate_sync_thumbnail",  -- CDN URL for thumbnail (optional)
    -- thumbnail = "animation1"  -- Local path for the preview image (if hosted within the application) (optional)
    vip = false,  -- VIP-only animation (optional)

    syncedoptions = {
        sourceoffset = { x = 1.0, y = 0.0, z = 0.0 },  -- Position offset for first person
        targetoffset = { x = -1.0, y = 0.0, z = 0.0 },  -- Position offset for second person
        sourceheading = 180.0,  -- Heading for first person
        targetheading = 0.0,  -- Heading for second person
    },

    rules = {
        blockFoot = true,
        blockSetPosition = true,
        blockVehicle = false, 
        -- Additional rules can be added in the public/shared/api
    },

    firstperson = {
        anim = "source_anim",  -- Animation for the first person
        dict = "source_dict",  -- Animation dictionary
        config = {
            posOffset = { x = 0.0, y = 0.3, z = 0.0 },  -- Position offset for effect
            rotOffset = { x = 0.0, y = 90.0, z = 90.0 },  -- Rotation offset for effect
            heading = 90.0,  -- Heading direction
            freeze = false, -- freeze the player
            onfinishtptolastcoords = true -- tp to last coord in finish
            flags = {
                controllable = true,  -- Player can control the character
                loop = true,  -- Animation loops
                customduration = 10000,  -- Custom duration for the animation
            },
            props = {  -- Props attached to the first person
                {
                    bone = 57005,  -- Bone ID
                    model = "prop_phone_ing",  -- Prop model
                    posOffset = { x = 0.15, y = 0.1, z = 0.05 },  -- Positional offset for prop
                    rotOffset = { x = 0.0, y = -90.0, z = 10.0 },  -- Rotational offset for prop
                }
            },
            ptfx = {  -- Particle effect configuration
                asset = "scr_amb_chop",  -- Particle effect asset
                canhold = true,  -- Can hold the particle effect
                name = "ent_anim_dog_peeing",  -- Particle effect name
                posOffset = { x = 0.0, y = 0.3, z = 0.0 },  -- Position offset for effect
                rotOffset = { x = 0.0, y = 90.0, z = 90.0 },  -- Rotation offset for effect
                scale = 1.5,  -- Particle effect scale
            },
        },
        attachtootherperson = true,  -- Attach to second person
        attachbone = 11816,  -- Bone ID for attachment
        attachcoordsoffset = { x = 0.1, y = 0.2, z = 0.3 },  -- Coordinate offset for attachment
        attachrotoffset = { x = 10.0, y = 0.0, z = 90.0 },  -- Rotation offset for attachment
        allowPedTypes = {
            'bigdogs'  -- Allowed Ped types (optional)
        }
    },

    secondperson = {  -- Second person configuration (optional)
        anim = "target_anim",  -- Animation for second person
        dict = "target_dict",  -- Animation dictionary for second person
        config = {
            offset = { x = -0.5, y = 0.0, z = 0.0 },  -- Positional offset for second person
            heading = 270.0,  -- Heading for second person
            freeze = false, -- freeze the player
            flags = {
                controllable = false,  -- Not player-controllable
                loop = false,  -- Animation does not loop
                customduration = 8000,  -- Custom animation duration
            },
            props = {  -- Props for second person
                {
                    bone = 60309,  -- Bone ID
                    model = "prop_umbrella_01",  -- Prop model
                    posOffset = { x = 0.2, y = 0.1, z = -0.2 },  -- Positional offset for prop
                    rotOffset = { x = 45.0, y = 0.0, z = 0.0 },  -- Rotational offset for prop
                }
            },
            ptfx = {  -- Particle effects configuration
                asset = "scr_bike_shot",
                canhold = false,  -- Cannot hold this particle effect
                name = "ent_anim_bike_tiresmoke",
                posOffset = { x = 0.0, y = -0.1, z = 0.0 },  -- Positional offset
                rotOffset = { x = 0.0, y = 0.0, z = 0.0 },  -- Rotational offset
                scale = 0.8,  -- Particle effect scale
            }
        },
        attachtootherperson = true,  -- Attach to first person
        attachbone = 11816,  -- Bone ID for attachment
        attachcoordsoffset = { x = 0.2, y = 0.2, z = 0.3 },  -- Coordinate offset for attachment
        attachrotoffset = { x = 15.0, y = 5.0, z = 90.0 },  -- Rotation offset for attachment
        allowPedTypes = {
            'bigdogs'  -- Allowed Ped types (optional)
        }
    }
}

```

***

#### Field Definitions

* **id**: `string`\
  Unique identifier for the animation.
* **label**: `string`\
  User-friendly name for the animation.
* **category**: `string`\
  Category for the animation, such as shared, dances, or other.
* **thumbnailcdn**: `string`\
  URL pointing to the animation's preview image hosted on a CDN.
* **thumbnail**: `string`\
  Local path for the preview image if hosted within the application (alternative to `thumbnailcdn`).
* **vip**: `boolean` (optional)\
  Indicates if the animation is VIP-only.
* **canIdle**: `boolean` (optional)\
  Indicates if the animation can be idled.

***

#### First Person Animation Configuration

* **firstperson**: `object`\
  Configuration for the first-person animation.
* **anim**: `string`\
  Animation name.
* **dict**: `string`\
  Animation dictionary.
* **config**: `object` (optional)
  * **posOffset**: `object` (optional) - Positional offset of the animation (x, y, z).
  * rosOffset: `object` (optional) - Rotation offset of the animation
  * onfinishtptolastcoords: `boolean` (optional) - teleport to last coords on finish
  * **heading**: `number` (optional) - Heading for the animation.
  * **freeze**: `boolean` (optional) - Freeze the Player while doing the animation.
  * **flags**: `object` (optional)
    * **controllable**: `boolean` - If the animation is player-controllable.
    * **loop**: `boolean` - Whether the animation loops.
    * **customduration**: `number` (optional) - Custom duration for the animation.
    * **props**: `array` (optional) - List of props attached to the character.
      * **bone**: `number` - Bone ID for prop attachment.
      * **model**: `string` - Model name for the prop.
      * **posOffset**: `object` - Positional offset for the prop (x, y, z).
      * **rotOffset**: `object` - Rotational offset for the prop (x, y, z).
    *   **ptfx**: `object` (optional) - Particle effects configuration.

        * **asset**: `string` - Particle effect asset or dictionary.
        * **canhold**: `boolean` - Whether the particle effect can be held.
        * **name**: `string` - Particle effect name.
        * **posOffset**: `object` - Positional offset for the effect (x, y, z).
        * **rotOffset**: `object` - Rotational offset for the effect (x, y, z).
        * **scale**: `number` - Scale of the particle effect.                                                     &#x20;

        **allowPedTypes**: `array` (optional)\
        List of allowed Ped types for either the first or second person in the animation.

        * Example: `'bigdogs'` or `'smallpeds'`



***

#### Second Person Animation Configuration (Optional)

* **secondperson**: `object` (optional)\
  Configuration for the second person animation.
  * **anim**: `string`\
    Animation for the second person.
  * **dict**: `string`\
    Animation dictionary for the second person.
  * **config**: `object` (optional)
    * **offset**: `object` (optional) - Positional offset of the animation (x, y, z).
    * **heading**: `number` (optional) - Heading for the animation.
    * **freeze**: `boolean` (optional) - Freeze the Player while doing the animation.
    * **flags**: `object` (optional)
      * **controllable**: `boolean` - If the animation is player-controllable.
      * **loop**: `boolean` - Whether the animation loops.
      * **customduration**: `number` (optional) - Custom duration for the animation.
    * **props**: `array` (optional) - List of props attached to the character.
      * **bone**: `number` - Bone ID for prop attachment.
      * **model**: `string` - Model name for the prop.
      * **posOffset**: `object` - Positional offset for the prop (x, y, z).
      * **rotOffset**: `object` - Rotational offset for the prop (x, y, z).
    *   **ptfx**: `object` (optional) - Particle effects configuration.

        * **asset**: `string` - Particle effect asset or dictionary.
        * **canhold**: `boolean` - Whether the particle effect can be held.
        * **name**: `string` - Particle effect name.
        * **posOffset**: `object` - Positional offset for the effect (x, y, z).
        * **rotOffset**: `object` - Rotational offset for the effect (x, y, z).
        * **scale**: `number` - Scale of the particle effect.

        **allowPedTypes**: `array` (optional)\
        List of allowed Ped types for either the first or second person in the animation.

        * Example: `'bigdogs'` or `'smallpeds'`

***

#### Synced Animation Configuration

* **syncedoptions**: `object` (optional)\
  Settings for synchronized animations between multiple characters.
  * **sourceoffset**: `object`\
    Position offset for the first person in the sync.
  * **targetoffset**: `object`\
    Position offset for the second person in the sync.
  * **sourceheading**: `number`\
    Heading for the first person in the sync.
  * **targetheading**: `number`\
    Heading for the second person in the sync.

***

#### Rules (Optional)

* **rules**: `object` (optional)\
  Additional rules for the animation.
  * **blockFoot**: `boolean`\
    Block foot movement while the animation is playing.
  * **blockSetPosition**: `boolean`\
    Block the ability to set position during the animation.
  * **blockVehicle**: `boolean`\
    Block vehicle interactions during the animation.

***





