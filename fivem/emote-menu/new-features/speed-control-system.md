# ⚡ Speed Control System

## ⚡ Speed Control System

{% hint style="success" %}
**NEW FEATURE!** Adjust animation speed in real-time from 10% to 200%!
{% endhint %}

### 📋 Overview

The **Speed Control System** allows players to dynamically adjust the playback speed of animations in real-time. Speed up your dances, slow down your walks, or fine-tune any animation to match your roleplay needs!

**Perfect for:**

* 🎭 Matching animation timing in performances
* 🎬 Creating cinematic slow-motion scenes
* 🎪 Coordinating group animations
* 🎮 Enhancing roleplay immersion

***

### ✨ Key Features

<table data-view="cards"><thead><tr><th></th><th></th><th data-hidden data-card-cover data-type="files"></th></tr></thead><tbody><tr><td><strong>⚡ Real-time Control</strong></td><td>Adjust speed instantly with hotkeys - no menu needed</td><td></td></tr><tr><td><strong>🔄 Wide Range</strong></td><td>From 10% (super slow) to 200% (double speed)</td><td></td></tr><tr><td><strong>🎯 Precision</strong></td><td>10% increments for fine-tuned control</td><td></td></tr><tr><td><strong>👥 Synced Animations</strong></td><td>Speed changes automatically sync between paired players</td><td></td></tr></tbody></table>

#### Complete Feature List

* ✅ **Hotkey Control** - Adjust speed with PAGE UP/PAGE DOWN
* ✅ **Visual Feedback** - On-screen tooltip shows current speed percentage
* ✅ **Auto-Sync** - Speed changes synchronized in paired animations
* ✅ **Smart Detection** - Only works with compatible animations
* ✅ **Limit Notifications** - Optional alerts when reaching min/max speed
* ✅ **Group Support** - Leader can control speed for entire group
* ✅ **Customizable** - Full configuration of range, step, and UI

***

### 🎮 How to Use

{% tabs %}
{% tab title="Solo Animations" %}
#### Playing with Speed Control

<figure><img src="../../../.gitbook/assets/FiveM_GTAProcess_yWlh9WVoKn.gif" alt=""><figcaption></figcaption></figure>

1. **Play any compatible animation**
2. A **tooltip** appears in the corner showing:
   * Current speed percentage (100%)
   * Control keys (PAGE UP / PAGE DOWN)
3. **Press PAGE UP** to increase speed (110%, 120%, etc.)
4. **Press PAGE DOWN** to decrease speed (90%, 80%, etc.)
5. Speed updates **instantly** and displays on tooltip

#### Compatible Animations

**✅ Works with:**

* Regular animations (TaskPlayAnim)
* Loop animations
* Most dances and emotes
* Synchronized/paired animations

**❌ Limited/Not Supported:**

* Scenarios (some have restrictions)
* Built animations
* Sequences
* Idle animations (optional via config)

{% hint style="warning" %}
Tooltip only appears for **compatible animations**
{% endhint %}
{% endtab %}

{% tab title="Paired Animations" %}
#### Synchronized Speed Control

<figure><img src="../../../.gitbook/assets/FiveM_GTAProcess_tM7ycTVs8F.gif" alt=""><figcaption></figcaption></figure>

**How it works:**

1. **Player 1** (initiator) starts a paired animation
2. **Player 2** accepts the animation
3. **Both players** play the animation
4. **Only Player 1** sees speed controls
5. **Player 1** adjusts speed with PAGE UP/DOWN
6. **Speed changes sync** automatically to Player 2

{% hint style="success" %}
**Perfect sync!** Both players always see the same speed - no desynchronization!
{% endhint %}

#### Control Permissions

| Player        | Can Control Speed? | Sees Tooltip?         |
| ------------- | ------------------ | --------------------- |
| **Initiator** | ✅ Yes              | ✅ Yes (with controls) |
| **Partner**   | ❌ No               | ✅ Yes (speed only)    |

{% hint style="info" %}
This prevents conflicts and ensures smooth synchronized playback
{% endhint %}
{% endtab %}

{% tab title="Group Animations" %}
#### Group Speed Control

<figure><img src="../../../.gitbook/assets/Sync Player.gif" alt=""><figcaption></figcaption></figure>

**How it works:**

1. **Group leader** plays an animation
2. **All members** automatically play the same animation
3. **Only the leader** can control speed
4. **Leader** uses PAGE UP/DOWN to adjust
5. **Speed syncs** to all group members instantly

#### Leader Tooltip

Shows:

* 👑 Leader indicator
* Current speed (100%)
* PAGE UP / PAGE DOWN controls
* Member count
* \[E] Stop All

#### Member Tooltip

Shows:

* 👥 Member indicator
* Stop Animation
* \[L] Leave Group

{% hint style="warning" %}
**Members cannot control speed** - only the leader has this ability to maintain synchronization
{% endhint %}
{% endtab %}
{% endtabs %}

***

### ⚙️ Configuration

{% hint style="warning" %}
**File Location:** `cdev_emotemenu/public/shared/config.lua`\
**Restart Required:** Yes (`restart cdev_emotemenu`)
{% endhint %}

#### Basic Configuration

```lua
    -- 🎮 Animation Speed Control Settings
    -- ⚠️ ANIMATION COMPATIBILITY:
    -- ✅ WORKS: Normal animations (TaskPlayAnim)
    -- ✅ WORKS: Loop animations
    -- ✅ WORKS: Controllable animations
    -- ✅ WORKS: Synchronized/paired animations (both players see synced speed!)
    -- ❌ LIMITED: Scenarios (some have speed restrictions)
    -- ❌ NOT SUPPORTED: Built animations
    -- ❌ NOT SUPPORTED: Sequences
    -- ℹ️  Speed control tooltip will only appear for compatible animations
    -- ℹ️  For synced animations, only the initiator (firstperson) can control speed
    -- 🔄 Speed changes are automatically synchronized between both players in paired animations
    AnimationSpeedControl = {
        enabled = true, -- Enable/disable speed control feature

        -- 🎯 HOW IT WORKS:
        -- • Solo animations: Only you see the speed change (client-side)
        -- • Paired animations: Both players see the same speed (synchronized via server)
        -- • The player who initiated the animation has full control

        minRate = 0.1,     -- Minimum speed (10%)
        maxRate = 2.0,     -- Maximum speed (200%)
        rateStep = 0.1,    -- Speed change per key press (10%)
        defaultRate = 1.0, -- Default speed (100%)

        -- Keybinds for speed control
        keybinds = {
            speedUp = 'PAGEUP',     -- Key to increase speed
            speedDown = 'PAGEDOWN', -- Key to decrease speed
        },

        -- Tooltip position: 'top-left', 'top-right', 'top-center', 'bottom-left', 'bottom-right', 'bottom-center'
        tooltipPosition = 'bottom-left',

        -- Show tooltip for idle animations (default: false)
        showTooltipForIdleAnimations = false,

        -- Show notifications when reaching limits
        showLimitNotifications = true,

        -- UI Colors Configuration
        uiColors = {
            bgGradientFrom = '#000000CC', -- Background gradient start (darker for better visibility)
            bgGradientTo = '#00000099',   -- Background gradient end
            keyBgOuter = '#d1d5db',       -- Key button outer background (gray-300)
            keyBgInner = '#ffffff',       -- Key button inner background (white)
            keyTextColor = '#374151',     -- Key text color (gray-700)
            labelTextColor = '#ffffff',   -- Label text color (white)
            speedBoxBg = '#5AB0FF55',     -- Speed indicator box background
            speedValueColor = '#5AB0FF',  -- Speed percentage color
        },
    },
```

***

#### Configuration Options Explained

{% tabs %}
{% tab title="Speed Settings" %}
**`enabled`**

**Type:** `boolean`\
**Default:** `true`

Enable or disable the entire Speed Control System.

```lua
enabled = true -- System active enabled
enabled = false -- System disable
```

***

**`minRate`**

**Type:** `number`\
**Default:** `0.1` (10%)\
**Range:** `0.01 - 1.0`

Minimum speed players can set.

```lua
minRate = 0.1 -- 10% minimum (very slow)
minRate = 0.5 -- 50% minimum (half speed)
minRate = 1.0 -- 100% minimum (no slow-down)
```

{% hint style="info" %}
Lower values = slower motion possible
{% endhint %}

***

**`maxRate`**

**Type:** `number`\
**Default:** `2.0` (200%)\
**Range:** `1.0 - 5.0`

Maximum speed players can set.

```lua
maxRate = 2.0 -- 200% maximum (double speed)
maxRate = 3.0 -- 300% maximum (triple speed)
maxRate = 1.0 -- 100% maximum (no speed-up)
```

{% hint style="warning" %}
**Very high speeds (3.0+)** may look unnatural or cause animation glitches
{% endhint %}

***

**`rateStep`**

**Type:** `number`\
**Default:** `0.1` (10%)\
**Range:** `0.01 - 0.5`

How much speed changes per key press.

```lua
rateStep = 0.1 -- 10% per press (default)
rateStep = 0.05 -- 5% per press (finer control)
rateStep = 0.25 -- 25% per press (faster adjustment)
```

**Example:**

* Starting at 100%
* Press PAGE UP once → 110%
* Press PAGE UP again → 120%
* Press PAGE DOWN → 110%

***

**`defaultRate`**

**Type:** `number`\
**Default:** `1.0` (100%)

Starting speed for all animations.

```lua
defaultRate = 1.0 -- 100% (normal speed)
defaultRate = 0.8 -- 80% (slower default)
defaultRate = 1.2 -- 120% (faster default)
```

{% hint style="info" %}
Most servers should keep this at `1.0` (normal speed)
{% endhint %}
{% endtab %}

{% tab title="Keybinds" %}
**`speedUp`**

**Type:** `string` (FiveM key name)\
**Default:** `'PAGEUP'`

Key to increase animation speed.

```lua
speedUp = 'PAGEUP' -- PAGE UP (default)
speedUp = 'UP' -- Arrow Up
speedUp = 'EQUALS' -- = key
```

***

**`speedDown`**

**Type:** `string` (FiveM key name)\
**Default:** `'PAGEDOWN'`

Key to decrease animation speed.

```lua
speedDown = 'PAGEDOWN' -- PAGE DOWN (default)
speedDown = 'DOWN' -- Arrow Down
speedDown = 'MINUS' -- - key
```

{% hint style="info" %}
**Full key list:** [FiveM Controls Reference](https://docs.fivem.net/docs/game-references/controls/)
{% endhint %}

{% hint style="warning" %}
**Avoid common keys** like E, X, F to prevent conflicts with game controls
{% endhint %}
{% endtab %}

{% tab title="UI Settings" %}
**`tooltipPosition`**

**Type:** `string`\
**Default:** `'bottom-left'`

Where the speed tooltip appears on screen.

**Available positions:**

* `'top-left'`
* `'top-right'`
* `'top-center'`
* `'bottom-left'` ← Default
* `'bottom-right'`
* `'bottom-center'`

```lua
tooltipPosition = 'bottom-left' -- Bottom left corner
tooltipPosition = 'top-right' -- Top right corner
```

***

**`showTooltipForIdleAnimations`**

**Type:** `boolean`\
**Default:** `false`

Show speed control tooltip for idle animations.

```lua
showTooltipForIdleAnimations = false -- Hide for idle animations (default)
showTooltipForIdleAnimations = true -- Show for idle animations
```

{% hint style="info" %}
**Idle animations** are subtle background animations. Most servers keep this disabled.
{% endhint %}

***

**`showLimitNotifications`**

**Type:** `boolean`\
**Default:** `true`

Show notifications when reaching min/max speed.

```lua
showLimitNotifications = true -- Show "Maximum speed reached"
showLimitNotifications = false -- Silent limits
```

***

**`notificationSystem`**

**Type:** `string`\
**Default:** `'custom'`

Which notification system to use.

**Available options:**

* `'qbcore'` - QBCore notifications
* `'qbox'` - QBox notifications
* `'esx'` - ESX notifications
* `'custom'` - Custom/GTA native

```lua
notificationSystem = 'qbox' -- For QBox servers
notificationSystem = 'qbcore' -- For QBCore servers
notificationSystem = 'esx' -- For ESX servers
```
{% endtab %}

{% tab title="UI Colors" %}
**Customize Tooltip Colors**

```lua
  uiColors = {
            bgGradientFrom = '#000000CC', -- Background gradient start (darker for better visibility)
            bgGradientTo = '#00000099',   -- Background gradient end
            keyBgOuter = '#d1d5db',       -- Key button outer background (gray-300)
            keyBgInner = '#ffffff',       -- Key button inner background (white)
            keyTextColor = '#374151',     -- Key text color (gray-700)
            labelTextColor = '#ffffff',   -- Label text color (white)
            speedBoxBg = '#5AB0FF55',     -- Speed indicator box background
            speedValueColor = '#5AB0FF',  -- Speed percentage color
        },
```

**Example: Blue Theme**

```lua
speedBoxBg = '#0EA5E955', -- Light blue background
speedValueColor = '#0EA5E9', -- Blue percentage
```

**Example: Green Theme**

```lua
speedBoxBg = '#10B98155', -- Light green background
speedValueColor = '#10B981', -- Green percentage
```

{% hint style="success" %}
**Tip:** Use colors that match your server's theme!
{% endhint %}
{% endtab %}
{% endtabs %}

***

### 🎯 Animation Compatibility

#### ✅ Fully Compatible

| Animation Type          | Speed Control | Notes                          |
| ----------------------- | ------------- | ------------------------------ |
| **Regular Animations**  | ✅ Full        | TaskPlayAnim - works perfectly |
| **Loop Animations**     | ✅ Full        | Continuous loops supported     |
| **Dances**              | ✅ Full        | All dance animations           |
| **Emotes**              | ✅ Full        | Standard emotes                |
| **Synchronized/Paired** | ✅ Full        | Auto-syncs between players     |

#### ⚠️ Limited Support

| Animation Type      | Speed Control | Notes                         |
| ------------------- | ------------- | ----------------------------- |
| **Scenarios**       | ⚠️ Limited    | Some have engine restrictions |
| **Idle Animations** | ⚠️ Optional   | Disabled by default (config)  |

#### ❌ Not Supported

| Animation Type         | Speed Control | Notes                     |
| ---------------------- | ------------- | ------------------------- |
| **Built Animations**   | ❌ No          | Engine limitation         |
| **Sequences**          | ❌ No          | Multi-animation sequences |
| **Vehicle Animations** | ❌ No          | Vehicle-specific anims    |

***

### 🎮 Default Keybinds

| Action             | Default Key | Description                     |
| ------------------ | ----------- | ------------------------------- |
| **Increase Speed** | `PAGE UP`   | Speed up by 10% (configurable)  |
| **Decrease Speed** | `PAGE DOWN` | Slow down by 10% (configurable) |

{% hint style="info" %}
**Players can rebind keys:** Settings → Key Bindings → FiveM → cdev\_emotemenu
{% endhint %}

***

### 💡 Tips & Best Practices

#### For Players

**Getting the Perfect Speed:**

1. Start animation
2. Wait for tooltip to appear
3. Adjust speed gradually (don't spam keys)
4. Find your preferred speed
5. Enjoy!

**Speed Presets:**

* **50%** - Slow motion / dramatic effect
* **80%** - Relaxed walking pace
* **100%** - Normal (default)
* **120%** - Energetic dancing
* **150%** - Fast-paced action
* **200%** - Maximum speed

{% hint style="success" %}
**Pro Tip:** For cinematic scenes, try 70-80% speed for smooth, dramatic movement
{% endhint %}

#### For Roleplay

**Storytelling Uses:**

* 🎬 Slow-mo fight scenes (50-70%)
* 💃 High-energy club dancing (130-150%)
* 🚶 Injured character walking (60-80%)
* 🏃 Urgent running (150-180%)
* 🎭 Theatrical performance timing

#### For Server Owners

**Recommended Settings:**

**Default (Balanced):**

```lua
minRate = 0.1 -- 10% minimum 
maxRate = 2.0 -- 200% maximum
rateStep = 0.1 -- 10% steps
```

**Cinematic Server:**

```lua
minRate = 0.3 -- 30% minimum (slower looks better)
maxRate = 1.5 -- 150% maximum (prevent too-fast)
rateStep = 0.05 -- 5% steps (fine control)
```

**High-Energy Server:**

```lua
minRate = 0.5 -- 50% minimum 
maxRate = 3.0 -- 300% maximum (crazy fast!)
rateStep = 0.2 -- 20% steps (quick adjustment)
```

***

### 🌐 Network & Connection Impact

{% hint style="warning" %}
**Important:** Network conditions can significantly affect speed synchronization quality
{% endhint %}

#### How Connection Quality Affects Synchronization

The Speed Control System relies on real-time communication between clients and server. Poor network conditions can impact the synchronization experience, especially in paired animations and group systems.

***

#### 📊 Connection Quality Impact Table

| Ping Range    | Solo Animations | Paired Animations | Group Animations     | Impact              |
| ------------- | --------------- | ----------------- | -------------------- | ------------------- |
| **< 50ms**    | ✅ Perfect       | ✅ Perfect sync    | ✅ Perfect sync       | No noticeable delay |
| **50-100ms**  | ✅ Perfect       | ✅ Good sync       | ⚠️ Minor delays      | Barely noticeable   |
| **100-150ms** | ✅ Perfect       | ⚠️ Slight delay   | ⚠️ Noticeable delays | 0.1-0.15s delay     |
| **150-250ms** | ✅ Perfect       | ⚠️ Moderate delay | ❌ Poor sync          | 0.15-0.25s delay    |
| **> 250ms**   | ✅ Perfect       | ❌ Poor sync       | ❌ Very poor sync     | > 0.25s delay       |

{% hint style="info" %}
**Solo animations** are not affected by ping since they're client-side only!
{% endhint %}

***

#### Common Network Issues

{% hint style="danger" %}
<mark style="color:yellow;">**Problem:**</mark> <mark style="color:yellow;"></mark><mark style="color:yellow;">High ping causes delays in speed change synchronization</mark>
{% endhint %}

**Symptoms:**

* Speed changes take 1-2 seconds to sync to other players
* Paired animations look out of sync
* Group members appear to be at different speeds

**Impact by ping:**

* **< 100ms:** ✅ No issues
* **100-200ms:** ⚠️ Slight delays (0.1-0.2s)
* **200-300ms:** ⚠️ Moderate delays (0.2-0.3s)
* **> 300ms:** ❌ Significant delays (0.3s+)

***

### ⚠️ Known Limitations

{% hint style="warning" %}
**Important Limitations**
{% endhint %}

#### Speed Control Won't Work If:

1. **Animation is not compatible** (scenarios, built anims)
   * Tooltip won't appear
   * Keys do nothing
2. **You're not the initiator** (in paired animations)
   * Only the person who started the animation can control speed
3. **You're a group member** (not leader)
   * Only the group leader can adjust speed
4. **Animation just started**
   * Wait \~0.5 seconds for speed control to activate

#### Common Issues

**Problem: Tooltip doesn't appear**

**Solutions:**

* Check if animation is compatible (see compatibility table)
* Verify `enabled = true` in config
* Make sure you're the initiator (paired anims) or leader (groups)
* Try a different animation

***

**Problem: Speed doesn't change**

**Solutions:**

* Look for limit notification ("Maximum/Minimum speed reached")
* Check if animation restarted (speed resets to default)
* Verify keybinds in FiveM settings

***

**Problem: Desync in paired animations**

**Solutions:**

* Both players must be on same server build
* Restart resource: `restart cdev_emotemenu`
* Re-initiate the animation

***

### ❓ FAQ

<details>

<summary><strong>Can I change the default speed?</strong></summary>

**Yes!** Edit the config:

defaultRate = 1.2 -- All animations start at 120%

Restart the resource to apply changes.

</details>

<details>

<summary><strong>Why can't I go slower than 10%?</strong></summary>

**Limitation set in config.**

To allow slower speeds:

minRate = 0.01 -- 1% minimum (very slow)

**Note:** Very slow speeds (below 10%) may cause animations to appear frozen.

</details>

<details>

<summary><strong>Does speed persist after stopping?</strong></summary>

**No.** Speed resets to default (100%) when you:

* Stop the animation
* Start a new animation
* Restart the resource

This prevents accidental speed carryover.

</details>

<details>

<summary><strong>Can I disable speed control for specific animations?</strong></summary>

**Currently no.** Speed control is enabled/disabled globally.

You can disable it entirely:

enabled = false

Or hide it for idle animations:

showTooltipForIdleAnimations = false

</details>

<details>

<summary><strong>Why don't my keybinds work?</strong></summary>

**Most common causes:**

1. **Config changed but FiveM cached old binds** → Clear keybind cache
2. **Key conflict with another resource** → Try different keys
3. **Wrong key name in config** → Check [FiveM Controls docs](https://docs.fivem.net/docs/game-references/controls/)

</details>

***

{% hint style="info" %}
**Need Help?** Join our Discord or open a ticket on our support portal!
{% endhint %}
