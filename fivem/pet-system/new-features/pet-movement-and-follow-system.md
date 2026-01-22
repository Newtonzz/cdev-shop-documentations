# 🏃‍♂️ Pet Movement & Follow System

## &#x20;🏃Pet Movement & Follow System <a href="#pet-transfer-system" id="pet-transfer-system"></a>

{% hint style="success" %}
**NEW FEATURE!** Advanced dynamic speed system that adapts to player movement in real-time.
{% endhint %}

### 📋 Overview

The **Pet Movement & Follow System** gives you complete control over how pets follow players. The system dynamically adjusts pet speed based on player movement (walking, running, sprinting), preventing pets from falling behind and includes smart teleportation for stuck situations.

**Perfect for:**

* 🏃 Ensuring pets always keep up with players
* 🎮 Creating realistic pet following behavior
* ⚡ Preventing pets from getting lost or stuck
* 🎨 Customizing pet speed for different gameplay styles
* 🔧 Optimizing server performance with configurable update intervals



***

### ✨ Key Features

<table data-view="cards"><thead><tr><th>Feature</th><th>Description</th></tr></thead><tbody><tr><td><h3>🎯 Dynamic Speed Adjustment</h3></td><td>Pet speed automatically adapts based on player movement state (walking/running/sprinting)</td></tr><tr><td><h3>🚀 Smart Teleportation System</h3></td><td>Automatically teleports pets to players when they get too far away, preventing permanent separation</td></tr><tr><td><h3>⚙️ Performance Optimization</h3></td><td>Configurable update intervals allow balancing between responsiveness and server performance</td></tr><tr><td><h3>🔄 Full Backward Compatibility</h3></td><td>Works seamlessly with existing pet systems without requiring migration</td></tr><tr><td><h3>🎨 Visual Quality Controls</h3></td><td>Built-in limits prevent animation glitches while allowing extreme speeds for special use cases</td></tr><tr><td><h3>📏 Distance-Based Intelligence</h3></td><td>Speed boost only activates when pets are far enough, preventing unnatural close-range behavior</td></tr></tbody></table>

#### Complete Feature List

* ✅ **Dynamic Speed Multipliers** – Three-tier speed system (walking/running/sprinting)
* ✅ **Real-Time Speed Detection** – Automatically detects player movement state
* ✅ **Distance-Based Activation** – Speed boost only when pet is far enough
* ✅ **Smart Teleportation** – Auto-teleport when pet exceeds maximum distance
* ✅ **Ground Detection** – Teleport finds valid ground coordinates
* ✅ **Animation Preservation** – Speed limits prevent animation desync
* ✅ **Configurable Performance** – Adjustable update intervals for optimization
* ✅ **Thread Management** – Automatic cleanup when changing pet states
* ✅ **Ownership Handling** – Maintains network ownership during follow



***

### 🎮 How to Configure <a href="#how-to-configure" id="how-to-configure"></a>

### Accessing Configuration

**File Location:**

```
cdev_pets/public/config/config.lua
```

**Configuration Section:**

```lua
PublicSharedPetsConfig = {
     -- ==========================================
    -- 🐾 PET MOVEMENT & FOLLOW SYSTEM
    -- ==========================================
    -- 🐕 OVERVIEW:
    -- This system controls how pets follow players, adjusting their speed
    -- dynamically based on player movement (walking, running, sprinting).
    -- Prevents pets from falling behind and includes smart teleportation.

    PetMovement = {

        -- ==========================================
        -- 🏃 SPEED MULTIPLIER SETTINGS
        -- ==========================================
        --
        -- 💡 HOW IT WORKS:
        -- 1.0 = Normal NPC speed (default GTA V speed)
        -- 2.0 = 2x faster than normal
        -- 10.0 = 10x faster (66 m/s when sprinting)
        --
        -- ⚠️ TECHNICAL LIMITS (Native):
        -- MIN: 0.0 (frozen) | MAX: 10.0 (extremely fast)
        --
        -- ⚠️ RECOMMENDED LIMITS (Visual Quality):
        -- MIN: 1.0 | MAX: 4.0
        -- Values above 4.0 cause animation desync and look unnatural
        -- ==========================================

        -- 🚶 Base Speed (Player Walking)
        -- Applied when player is walking normally
        -- TECHNICAL: 0.0-10.0 | RECOMMENDED: 1.5-2.5 | VISUAL LIMIT: 3.0
        BaseSpeedMultiplier = 1.8,

        -- 🏃 Running Speed (Player Running)
        -- Applied when player is running (holding Shift on keyboard)
        -- TECHNICAL: 0.0-10.0 | RECOMMENDED: 2.0-3.0 | VISUAL LIMIT: 4.0
        RunningSpeedMultiplier = 2.2,

        -- 🏃💨 Sprinting Speed (Player Sprinting)
        -- Applied when player is sprinting (tapping Shift repeatedly)
        -- TECHNICAL: 0.0-10.0 | RECOMMENDED: 2.5-4.0 | VISUAL LIMIT: 5.0
        -- ⚠️ WARNING: Values above 5.0 will cause severe animation glitches
        SprintingSpeedMultiplier = 3.0,

        -- ==========================================
        -- 📏 DISTANCE SETTINGS
        -- ==========================================

        -- 🎯 Minimum Distance for Speed Boost
        -- Pet only gets speed boost when farther than this distance
        -- If pet is closer, it uses BaseSpeedMultiplier
        -- MIN: 0.0 | MAX: 50.0 | RECOMMENDED: 4.0-8.0
        MinDistanceForBoost = 5.0,

        -- 🚀 Maximum Follow Distance (Teleport Trigger)
        -- When pet is farther than this distance, it teleports to player
        -- This prevents pets from getting permanently lost
        -- MIN: 10.0 | MAX: 500.0 | RECOMMENDED: 30.0-60.0
        MaxFollowDistance = 40.0,

        -- ==========================================
        -- ⚙️ PERFORMANCE SETTINGS
        -- ==========================================

        -- ⏱️ Speed Update Interval
        -- How often the system checks and updates pet speed (in milliseconds)
        -- Lower = More responsive but higher CPU usage
        -- Higher = Less responsive but better performance
        -- MIN: 50 | MAX: 5000 | RECOMMENDED: 200-500
        UpdateInterval = 300,

        -- ==========================================
        -- 🔧 TELEPORT SYSTEM
        -- ==========================================

        -- 📍 Enable Smart Teleportation
        -- When enabled, pet teleports to player when too far away
        -- When disabled, pet will keep running (may get stuck/lost)
        -- true = Enabled | false = Disabled
        EnableTeleport = true,
    },
}
```

{% tabs %}
{% tab title="Speed Multiplier Configuration" %}
### 🚶 Base Speed Multiplier

**Applied when:** Player is walking normally\
**Default Value:** `1.8`\
**Technical Range:** 0.0 - 10.0\
**Recommended Range:** 1.5 - 2.5\
**Visual Quality Limit:** 3.0

```
luaBaseSpeedMultiplier = 1.8,
```

**What it does:**

* Controls pet speed when you're walking at normal pace
* Value of 1.8 means pet moves 1.8x faster than default NPC speed
* Lower values make pets more relaxed but may lag slightly behind
* Higher values make pets more eager but can look rushed

***

### 🏃 Running Speed Multiplier

**Applied when:** Player is running (holding Shift)\
**Default Value:** `2.2`\
**Technical Range:** 0.0 - 10.0\
**Recommended Range:** 2.0 - 3.0\
**Visual Quality Limit:** 4.0

```
luaRunningSpeedMultiplier = 2.2,
```

**What it does:**

* Controls pet speed when you're running
* Should be higher than BaseSpeedMultiplier
* Value of 2.2 ensures pets keep up during normal running
* Provides smooth transition between walking and sprinting

***

### 🏃💨 Sprinting Speed Multiplier

**Applied when:** Player is sprinting (tapping Shift repeatedly)\
**Default Value:** `3.0`\
**Technical Range:** 0.0 - 10.0\
**Recommended Range:** 2.5 - 4.0\
**Visual Quality Limit:** 5.0

```
luaSprintingSpeedMultiplier = 3.0,
```

**What it does:**

* Controls pet speed during maximum player speed
* Highest speed multiplier in the system
* Value of 3.0 = 3x normal NPC speed
* ⚠️ **Warning:** Values above 5.0 cause severe animation glitches

***
{% endtab %}

{% tab title="Distance Settings" %}
### 🎯 Minimum Distance for Speed Boost

**Default Value:** `5.0` meters\
**Range:** 0.0 - 50.0\
**Recommended:** 4.0 - 8.0

```
luaMinDistanceForBoost = 5.0,
```

**What it does:**

* Pet only gets speed boost when farther than this distance
* If closer than this value, pet uses `BaseSpeedMultiplier`
* Prevents pets from running frantically when already close
* Creates more natural close-range behavior

**Example:**

* You're walking, pet is 3 meters away → Uses BaseSpeedMultiplier (1.8x)
* You're running, pet is 7 meters away → Uses RunningSpeedMultiplier (2.2x)

***

### 🚀 Maximum Follow Distance (Teleport Trigger)

**Default Value:** `40.0` meters\
**Range:** 10.0 - 500.0\
**Recommended:** 30.0 - 60.0

```
luaMaxFollowDistance = 40.0,
```

**What it does:**

* When pet exceeds this distance, it teleports to you
* Prevents pets from getting permanently lost
* Finds valid ground coordinates automatically
* Maintains heading (faces same direction as player)

**Use Cases:**

* **Lower values (25-35):** More frequent teleports, safer for complex maps
* **Higher values (50-80):** Fewer teleports, pets run longer distances
* **Very high (100+):** Minimal teleports, only for stuck situations

***
{% endtab %}

{% tab title="Performance Settings" %}
### ⏱️ Speed Update Interval

**Default Value:** `300` milliseconds\
**Range:** 50 - 5000\
**Recommended:** 200 - 500

```
luaUpdateInterval = 300,
```

**What it does:**

* How often the system checks and updates pet speed
* Lower = More responsive but higher CPU usage
* Higher = Less responsive but better performance

**Performance Guide:**

| Value  | Responsiveness | Performance | Use Case                         |
| ------ | -------------- | ----------- | -------------------------------- |
| 100ms  | Instant        | High CPU    | Small servers (<32 players)      |
| 300ms  | Fast           | Balanced    | **Recommended for most servers** |
| 500ms  | Normal         | Low CPU     | Large servers (100+ players)     |
| 1000ms | Delayed        | Minimal CPU | Extreme optimization needed      |

***
{% endtab %}

{% tab title="Teleport System" %}
### 📍 Enable Smart Teleportation

**Default Value:** `true`\
**Options:** `true` or `false`

```
luaEnableTeleport = true,
```

**What it does:**

* **When true:** Pet teleports when exceeding `MaxFollowDistance`
* **When false:** Pet keeps running indefinitely (may get stuck/lost)

**Recommendation:** Keep enabled unless you have custom teleport handling

***
{% endtab %}
{% endtabs %}

### 🔧 Configuration Examples <a href="#configuration-examples" id="configuration-examples"></a>

***

{% tabs %}
{% tab title="Slow, Realistic Pet (Lazy Dog)" %}
```lua
PetMovement = {
    BaseSpeedMultiplier = 1.3,      -- Slow walking
    RunningSpeedMultiplier = 1.8,   -- Moderate running
    SprintingSpeedMultiplier = 2.5, -- Fast only when necessary
    MinDistanceForBoost = 8.0,      -- Large buffer zone
    MaxFollowDistance = 30.0,       -- Teleport sooner
    UpdateInterval = 400,
    EnableTeleport = true,
}
```
{% endtab %}

{% tab title="Fast, Energetic Pet (Active Puppy)" %}
```lua
PetMovement = {
    BaseSpeedMultiplier = 2.2,      -- Quick walking
    RunningSpeedMultiplier = 2.8,   -- Fast running
    SprintingSpeedMultiplier = 3.5, -- Very fast sprinting
    MinDistanceForBoost = 4.0,      -- Small buffer zone
    MaxFollowDistance = 50.0,       -- Let it run longer
    UpdateInterval = 200,
    EnableTeleport = true,
}
```
{% endtab %}

{% tab title="Performance Optimized (Large Server)" %}
```lua
PetMovement = {
    BaseSpeedMultiplier = 1.8,      -- Standard speed
    RunningSpeedMultiplier = 2.2,
    SprintingSpeedMultiplier = 3.0,
    MinDistanceForBoost = 6.0,
    MaxFollowDistance = 40.0,
    UpdateInterval = 600,           -- Low CPU usage
    EnableTeleport = true,
}
```
{% endtab %}

{% tab title="Extreme Speed (Don't Care About Animations)" %}
```lua
PetMovement = {
    BaseSpeedMultiplier = 3.0,
    RunningSpeedMultiplier = 5.0,
    SprintingSpeedMultiplier = 8.0, -- Super fast!
    MinDistanceForBoost = 3.0,
    MaxFollowDistance = 60.0,
    UpdateInterval = 250,
    EnableTeleport = true,
}
```

{% hint style="danger" %}
**⚠️ Warning: Animations WILL glitch with these values!**
{% endhint %}
{% endtab %}
{% endtabs %}

***

### ❓ Frequently Asked Questions (FAQ) <a href="#frequently-asked-questions-faq" id="frequently-asked-questions-faq"></a>

<details>

<summary>Q1: What's the difference between Technical and Recommended limits?</summary>

**Answer:**

* **Technical Limits (0.0 - 10.0):** What the game engine accepts
* **Recommended Limits:** What looks good visually without animation glitches
* **Visual Quality Limits:** Maximum before severe animation desync occurs

You CAN use values up to 10.0, but animations will break above 5.0.

</details>

<details>

<summary>Q2: Do these settings apply to all pets or per-pet?</summary>

**Answer:**\
These are **global settings** that apply to all pets on your server. All pets use the same speed multipliers. If you need per-pet customization, you would need custom development.

</details>

<details>

<summary>Q3: Does the system work with leashed pets?</summary>

**Answer:**\
No, this system only affects the **Follow** state. Leashed pets use the existing system and are not affected by these settings.

</details>

<details>

<summary>Q4: Will existing pets automatically use this system?</summary>

**Answer:**\
Yes! This is **fully backward compatible**. All existing pets will automatically use the new dynamic speed system when following players. No migration needed.

</details>

<details>

<summary>Q5: Can I disable the speed system and use default behavior?</summary>

**Answer:**\
Yes, set all multipliers to `1.0`:

```lua
BaseSpeedMultiplier = 1.0,
RunningSpeedMultiplier = 1.0,
SprintingSpeedMultiplier = 1.0,
```

This reverts to default GTA V NPC speed (but pets will lag behind).

</details>

<details>

<summary>Q6: Does teleportation work indoors and in interiors?</summary>

**Answer:**\
Yes! The system uses `GetGroundZFor_3dCoord` to find valid ground coordinates, which works in most interiors. However, some custom MLOs may cause issues. If pets teleport into walls, increase `MaxFollowDistance` to reduce teleport frequency.

</details>

<details>

<summary>Q7: What happens when a pet is in a vehicle?</summary>

**Answer:**\
The speed system only applies to Follow State. When pets are in vehicles, this system is automatically disabled and cleanup occurs.

</details>

<details>

<summary>Q8: Can I use different speeds for different pet types (dogs vs cats)?</summary>

**Answer:**\
Not with the default configuration. The system applies globally to all pets.

</details>

<details>

<summary>Q9: Does this affect server performance significantly?</summary>

**Answer:**\
**Minimal impact** when properly configured:

* Each active following pet runs one thread
* Thread checks distance + applies speed multiplier every `UpdateInterval` ms
* Default 300ms = \~3 checks per second per pet
* 50 active pets = \~150 calculations/second (negligible)

For servers with 100+ simultaneous pets, increase `UpdateInterval` to 500-1000ms.

</details>

***

### Speed Reference Table

| Multiplier | Sprint Speed | Description                    |
| ---------- | ------------ | ------------------------------ |
| 1.0        | Normal       | Default GTA V ped speed        |
| 2.0        | \~13 m/s     | 2x normal speed                |
| 3.0        | \~20 m/s     | 3x normal speed                |
| 5.0        | \~33 m/s     | Animation glitches start       |
| 10.0       | \~66 m/s     | Maximum speed, severe glitches |

***
