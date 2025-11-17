---
description: >-
  Here’s how to register a new animation in the Animations File. Don't be
  intimidated by the size of this page—most of the options are optional. Scroll
  down for a clearer understanding.
---

# Register a New Animation!

***

### Required Fields <a href="#required-fields" id="required-fields"></a>

| Field                         | Type    | Description                                   | Example                               |
| ----------------------------- | ------- | --------------------------------------------- | ------------------------------------- |
| `id`                          | string  | Unique internal name                          | `"wavehand"`                          |
| `label`                       | string  | Name visible in list/UI                       | `"Wave Hand"`                         |
| `category`                    | string  | Animation category (e.g. `generalanimations`) | `"generalanimations"`                 |
| `vip`                         | boolean | `true` or `false`: requires VIP to use?       | `false`                               |
| `thumbnailcdn` or `thumbnail` | string  | Animation preview image (CDN URL or local)    | `"cdnurl/anim.webp"` or `"local.png"` |
| `firstperson`                 | object  | See “Animation Config” below                  | `{ ... }`                             |

***

### Animation Config (`firstperson`/`secondperson`) <a href="#undefined" id="undefined"></a>

### Basic Structure

```lua
firstperson = {
    dict = "animation_dictionary",
    anim = "animation_name",
    config = { ... }           -- optional, see below
}
```

### Main Options (inside `config`)

| Setting                  | Type                | Description                                   | Example                             |
| ------------------------ | ------------------- | --------------------------------------------- | ----------------------------------- |
| `posOffset`              | object `{x=,y=,z=}` | Moves animation position                      | `{ x=0, y=0, z=0 }`                 |
| `heading`                | number              | Facing direction (degrees)                    | `90.0`                              |
| `freeze`                 | boolean             | Freeze in place during animation?             | `true`                              |
| `onfinishtptolastcoords` | boolean             | Teleports back to original position on finish | `true`                              |
| `allowPedTypes`          | array               | Restrict to certain ped types                 | `{ "bigdogs", "default" }`          |
| `flags`                  | object              | Animation behavior flags, see below           | `{ loop=true, controllable=false }` |
| `props`                  | array               | Attach props to bones, see props section      | `[ { ... } ]`                       |
| `ptfx`                   | object              | Particle effect config, see ptfx section      | `{ ... }`                           |

***

### Flags (inside `config.flags`)

| Key              | Type   | Description                                |
| ---------------- | ------ | ------------------------------------------ |
| `loop`           | bool   | Repeat animation until stopped             |
| `controllable`   | bool   | Allow player to move while animating       |
| `customduration` | number | Animation duration (ms) (overrides native) |
| `customflag`     | number | GTA anim flag (e.g. 49 for controllable)   |

***

### Props (inside `config.props`)

| Key         | Type           | Description                              |
| ----------- | -------------- | ---------------------------------------- |
| `model`     | string         | Model name (prop)                        |
| `bone`      | number         | Bone to attach (e.g. 28422 = right hand) |
| `posOffset` | object {x,y,z} | Position offset                          |
| `rotOffset` | object {x,y,z} | Rotation offset                          |

***

### PTFX (inside `config.ptfx`)

| Key            | Type              | Description                    |
| -------------- | ----------------- | ------------------------------ |
| `asset`        | string            | Particle dictionary            |
| `name`         | string            | Particle asset name            |
| `posOffset`    | object {x,y,z}    | Offset position                |
| `rotOffset`    | object {x,y,z}    | Offset rotation                |
| `scale`        | number            | Scale                          |
| `bone`         | number (optional) | Attach to bone                 |
| `color`        | object {r,g,b}    | RGB color (optional)           |
| `canhold`      | boolean           | Maintainable effect (optional) |
| `attachtoprop` | boolean           | Attach to prop (optional)      |

***

### Synchronized Animations <a href="#synchronized-animations" id="synchronized-animations"></a>

If the animation uses two players:

* Add a `secondperson` block (same structure as `firstperson`).
* Add `syncedoptions` for positioning, heading, and initiator role.

```lua
syncedoptions = {
    sourceoffset = { x=, y=, z= },
    targetoffset = { x=, y=, z= },
    sourceheading = 0.0,
    targetheading = 180.0,
    initiatorRole = "first",   -- optional: "first"|"second"
}
```

* `initiatorRole` is optional; if set, forces the initiator to be either first or second person.

***

### Rules <a href="#rules" id="rules"></a>

Rules restrict when/where the animation can be played, or UI context features.

| Key              | Type    | Description                                 |
| ---------------- | ------- | ------------------------------------------- |
| blockVehicle     | boolean | Block animation if in a vehicle             |
| blockFoot        | boolean | Block animation if on foot (out of vehicle) |
| blockSetPosition | boolean | Hide UI "Set Position" (context menu)       |

```lua
rules = {
    blockVehicle = true,
    blockSetPosition = true,
}
```

{% hint style="warning" %}
_Only define these if the value is `true`._
{% endhint %}

***

### Full Example <a href="#full-example" id="full-example"></a>

```lua
{
    -- ============================================
    -- REQUIRED FIELDS
    -- ============================================
    
    id = "complete_example",              -- REQUIRED: Unique animation ID
    label = "Complete Example",           -- REQUIRED: Display name in UI
    category = "generalanimations",       -- REQUIRED: Animation category
    vip = false,                          -- REQUIRED: true = VIP only, false = everyone
    thumbnailcdn = CDEV_CDN .. "example.webp",  -- REQUIRED (or use 'thumbnail' below): Preview image URL

    -- ============================================
    -- OPTIONAL TOP-LEVEL FIELDS
    -- ============================================
    
    thumbnail = "example.png",            -- OPTIONAL: Local path (use this OR thumbnailcdn, not both)
    canIdle = true,                       -- OPTIONAL: Can be used as idle animation

    -- ============================================
    -- FIRST PERSON ANIMATION (REQUIRED)
    -- ============================================
    
    firstperson = {
        dict = "anim@mp_player_intcelebrationfemale@air_guitar",  -- REQUIRED: Animation dictionary
        anim = "air_guitar",                                       -- REQUIRED: Animation clip name
        
        allowPedTypes = {"default", "bigdogs"},  -- OPTIONAL: Restrict to specific ped types (default only if not set)
        
        config = {  -- OPTIONAL: All settings below are optional
            
            -- ========== POSITION & ROTATION ==========
            posOffset = { x = 0.0, y = 0.5, z = 0.0 },     -- OPTIONAL: Position offset from current coords
            heading = 180.0,                                -- OPTIONAL: Character facing direction (0-360 degrees)
            freeze = true,                                  -- OPTIONAL: Freeze player position during animation
            onfinishtptolastcoords = true,                 -- OPTIONAL: Teleport back to start position when done
            
            -- ========== ANIMATION FLAGS ==========
            flags = {  -- OPTIONAL: Control animation behavior
                loop = true,                    -- OPTIONAL: Loop animation infinitely
                controllable = true,            -- OPTIONAL: Player can move while animating
                customduration = 10000,         -- OPTIONAL: Duration in milliseconds (overrides native length)
                customflag = 49,                -- OPTIONAL: Native GTA flag (49 = controllable, advanced use)
            },
            
            -- ========== PROPS (ATTACHED OBJECTS) ==========
            props = {  -- OPTIONAL: Array of objects to attach
                {
                    model = "prop_npc_phone_02",                     -- REQUIRED (if using props): Model name
                    bone = 28422,                                    -- REQUIRED (if using props): Bone ID (28422 = right hand)
                    posOffset = { x = 0.0, y = 0.0, z = 0.03 },     -- OPTIONAL: Position offset from bone
                    rotOffset = { x = 50.0, y = 90.0, z = 0.0 },    -- OPTIONAL: Rotation offset
                },
                {
                    model = "prop_cs_ciggy_01",                      -- Second prop example
                    bone = 60309,                                    -- 60309 = left hand
                    posOffset = { x = 0.0, y = 0.0, z = 0.0 },
                    rotOffset = { x = 0.0, y = 0.0, z = 0.0 },
                },
            },
            
            -- ========== PTFX (PARTICLE EFFECTS) ==========
            ptfx = {  -- OPTIONAL: Particle effect configuration
                asset = "scr_rcbarry2",                              -- REQUIRED (if using ptfx): Effect dictionary
                name = "scr_clown_appears",                          -- REQUIRED (if using ptfx): Effect name
                posOffset = { x = 0.0, y = 0.0, z = 0.5 },          -- OPTIONAL: Position offset
                rotOffset = { x = 0.0, y = 0.0, z = 0.0 },          -- OPTIONAL: Rotation offset
                scale = 1.5,                                         -- OPTIONAL: Effect scale/size
                bone = 28422,                                        -- OPTIONAL: Attach to bone (if not set, attaches to ped center)
                color = { r = 255, g = 100, b = 50 },               -- OPTIONAL: RGB color (0-255 each)
                canhold = true,                                      -- OPTIONAL: Effect can be maintained/held
                attachtoprop = false,                                -- OPTIONAL: Attach to prop instead of ped
            },
        }
    },
    
    -- ============================================
    -- SECOND PERSON (OPTIONAL - FOR SYNCED ANIMS)
    -- ============================================
    
    secondperson = {  -- OPTIONAL: Only needed for synchronized animations (2 players)
        dict = "anim@mp_player_intcelebrationmale@air_guitar",
        anim = "air_guitar",
        
        allowPedTypes = {"default"},  -- OPTIONAL: Same as firstperson
        
        config = {  -- OPTIONAL: Same structure as firstperson.config
            posOffset = { x = 0.0, y = 0.0, z = 0.0 },
            heading = 0.0,
            freeze = true,
            onfinishtptolastcoords = true,
            
            flags = {
                loop = true,
                controllable = false,
                customduration = 10000,
            },
            
            props = {
                {
                    model = "prop_beer_logopen",
                    bone = 28422,
                    posOffset = { x = 0.0, y = 0.0, z = 0.0 },
                    rotOffset = { x = 0.0, y = 0.0, z = 0.0 },
                },
            },
            
            ptfx = {
                asset = "core",
                name = "exp_grd_bzgas_smoke",
                posOffset = { x = 0.0, y = 0.0, z = 0.0 },
                rotOffset = { x = 0.0, y = 0.0, z = 0.0 },
                scale = 1.0,
            },
        }
    },
    
    -- ============================================
    -- SYNCED OPTIONS (OPTIONAL - FOR SYNCED ANIMS)
    -- ============================================
    
    syncedoptions = {  -- OPTIONAL: Only needed if using secondperson
        sourceoffset = { x = 0.0, y = 0.5, z = 0.0 },    -- OPTIONAL: Position offset for first player
        targetoffset = { x = 0.0, y = -0.5, z = 0.0 },   -- OPTIONAL: Position offset for second player
        sourceheading = 90.0,                             -- OPTIONAL: Heading for first player (0-360)
        targetheading = 270.0,                            -- OPTIONAL: Heading for second player (0-360)
        initiatorRole = "first",                          -- OPTIONAL: "first" or "second" - forces initiator position
                                                          --           (if not set, player can choose freely)
    },
    
    -- ============================================
    -- RULES (OPTIONAL - BLOCKING CONDITIONS)
    -- ============================================
    
    rules = {  -- OPTIONAL: Control when/where animation can be used
        blockVehicle = true,        -- OPTIONAL: Block if player is in a vehicle
        blockFoot = true,           -- OPTIONAL: Block if player is on foot (outside vehicle)
        blockSetPosition = true,    -- OPTIONAL: Hide "Set Position & Play" option in context menu (UI only)
    },
}
```

***

### Fully Field Summary <a href="#field-summary" id="field-summary"></a>

| Field                           | Location      | Required?                       | Description                   |
| ------------------------------- | ------------- | ------------------------------- | ----------------------------- |
| `id`                            | Root          | ✅ **REQUIRED**                  | Unique animation identifier   |
| `label`                         | Root          | ✅ **REQUIRED**                  | Display name shown in UI      |
| `category`                      | Root          | ✅ **REQUIRED**                  | Animation category            |
| `vip`                           | Root          | ✅ **REQUIRED**                  | VIP requirement (true/false)  |
| `thumbnailcdn` or `thumbnail`   | Root          | ✅ **REQUIRED** (one of them)    | Preview image                 |
| `canIdle`                       | Root          | ❌ Optional                      | Can be used as idle animation |
| `firstperson`                   | Root          | ✅ **REQUIRED**                  | First person animation config |
| `firstperson.dict`              | firstperson   | ✅ **REQUIRED**                  | Animation dictionary          |
| `firstperson.anim`              | firstperson   | ✅ **REQUIRED**                  | Animation clip name           |
| `firstperson.allowPedTypes`     | firstperson   | ❌ Optional                      | Allowed ped types             |
| `firstperson.config`            | firstperson   | ❌ Optional                      | Configuration block           |
| `config.posOffset`              | config        | ❌ Optional                      | Position offset               |
| `config.heading`                | config        | ❌ Optional                      | Character direction           |
| `config.freeze`                 | config        | ❌ Optional                      | Freeze in place               |
| `config.onfinishtptolastcoords` | config        | ❌ Optional                      | Teleport back on finish       |
| `config.flags`                  | config        | ❌ Optional                      | Animation behavior flags      |
| `flags.loop`                    | flags         | ❌ Optional                      | Loop infinitely               |
| `flags.controllable`            | flags         | ❌ Optional                      | Player can move               |
| `flags.customduration`          | flags         | ❌ Optional                      | Duration override (ms)        |
| `flags.customflag`              | flags         | ❌ Optional                      | Native GTA flag               |
| `config.props`                  | config        | ❌ Optional                      | Attached objects array        |
| `props[].model`                 | props         | ✅ **REQUIRED** (if using props) | Prop model name               |
| `props[].bone`                  | props         | ✅ **REQUIRED** (if using props) | Bone ID to attach             |
| `props[].posOffset`             | props         | ❌ Optional                      | Prop position offset          |
| `props[].rotOffset`             | props         | ❌ Optional                      | Prop rotation offset          |
| `config.ptfx`                   | config        | ❌ Optional                      | Particle effect config        |
| `ptfx.asset`                    | ptfx          | ✅ **REQUIRED** (if using ptfx)  | Effect dictionary             |
| `ptfx.name`                     | ptfx          | ✅ **REQUIRED** (if using ptfx)  | Effect name                   |
| `ptfx.posOffset`                | ptfx          | ❌ Optional                      | Effect position offset        |
| `ptfx.rotOffset`                | ptfx          | ❌ Optional                      | Effect rotation offset        |
| `ptfx.scale`                    | ptfx          | ❌ Optional                      | Effect scale                  |
| `ptfx.bone`                     | ptfx          | ❌ Optional                      | Attach to bone                |
| `ptfx.color`                    | ptfx          | ❌ Optional                      | RGB color                     |
| `ptfx.canhold`                  | ptfx          | ❌ Optional                      | Can be held                   |
| `ptfx.attachtoprop`             | ptfx          | ❌ Optional                      | Attach to prop                |
| `secondperson`                  | Root          | ❌ Optional (for synced)         | Second player config          |
| `syncedoptions`                 | Root          | ❌ Optional (for synced)         | Sync positioning              |
| `syncedoptions.sourceoffset`    | syncedoptions | ❌ Optional                      | First player offset           |
| `syncedoptions.targetoffset`    | syncedoptions | ❌ Optional                      | Second player offset          |
| `syncedoptions.sourceheading`   | syncedoptions | ❌ Optional                      | First player heading          |
| `syncedoptions.targetheading`   | syncedoptions | ❌ Optional                      | Second player heading         |
| `syncedoptions.initiatorRole`   | syncedoptions | ❌ Optional                      | Force initiator position      |
| `rules`                         | Root          | ❌ Optional                      | Blocking rules                |
| `rules.blockVehicle`            | rules         | ❌ Optional                      | Block in vehicle              |
| `rules.blockFoot`               | rules         | ❌ Optional                      | Block on foot                 |
| `rules.blockSetPosition`        | rules         | ❌ Optional                      | Hide UI option                |

***

### Ped Types <a href="#ped-types" id="ped-types"></a>

* Use `allowPedTypes` in config to restrict the animation (e.g. to `"default"`, `"bigdogs"`, etc.)
* If omitted, only `"default"` (human peds) is allowed by default.

***





