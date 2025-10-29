# 🏠 Routing Bucket System

## 🏠 Routing Bucket System

{% hint style="success" %}
**NEW FEATURE!** Pets now work seamlessly in apartments and houses with full routing bucket support!
{% endhint %}

### 📋 Overview

The **Routing Bucket System** enables pets to function properly inside apartments, houses, and other instanced areas that use FiveM's routing bucket technology. Players can spawn and interact with their pets anywhere, regardless of which bucket they're in.

**Perfect for:**

* 🏘️ Apartment systems (qb-apartments, qbx\_properties)
* 🏡 Housing scripts with instancing
* 🎮 Custom housing systems using buckets
* 🔄 Multi-instance gameplay

***

### ✨ Key Features

<table data-view="cards"><thead><tr><th></th><th></th><th data-hidden data-card-cover data-type="files"></th></tr></thead><tbody><tr><td><strong>🖥️ Server-Side Spawning</strong></td><td>Pets spawned server-side for proper bucket synchronization</td><td></td></tr><tr><td><strong>🔄 Auto-Sync System</strong></td><td>Pets automatically stored/restored on bucket changes</td><td></td></tr><tr><td><strong>🏠 Full Housing Support</strong></td><td>Works with qb-apartments, qbx_properties, ps-housing and more</td><td></td></tr><tr><td><strong>⚡ Zero Performance Impact</strong></td><td>Minimal server overhead (~0.01ms per spawn)</td><td></td></tr></tbody></table>

#### Complete Feature List

* ✅ **Server-Side Pet Spawning** - Pets spawned on server for bucket compatibility
* ✅ **Auto-Store on Bucket Change** - Pets automatically stored when changing buckets
* ✅ **Apartment/House Support** - Full compatibility with housing scripts
* ✅ **Seamless Transitions** - Smooth pet handling across bucket changes
* ✅ **Framework Agnostic** - Works with any framework or housing system
* ✅ **Backward Compatible** - Existing pets work without migration
* ✅ **Performance Optimized** - Minimal impact on server performance

***

### 🎮 How It Works

{% tabs %}
{% tab title="What is a Routing Bucket?" %}
#### Understanding Routing Buckets

{% hint style="info" %}
**Routing Buckets** create isolated "instances" of the game world. Players in different buckets cannot see or interact with each other.
{% endhint %}

**Common Use Cases:**

🏠 **Apartments**

* Each apartment is a separate bucket
* Only people inside see each other
* Prevents interference from outside players

🏡 **Houses**

* Private instances for property owners
* Isolated from main world
* Multiple houses can exist in same location

🎮 **Custom Instances**

* Special events or missions
* PvP arenas
* Admin areas

#### How Buckets Work

**Default World (Bucket 0):**

All players spawn here by default Main city, streets, public áreas

**Apartment Example (Bucket 5):**

Player enters apartment → Moved to bucket 5 Only players in bucket 5 can see each other Player exits → Returns to bucket 0

{% hint style="warning" %}
**Without routing bucket support:** Pets would become invisible or glitched when players enter apartments!
{% endhint %}
{% endtab %}

{% tab title="System Flow" %}
#### Complete System Flow

**Step-by-Step Process:**

1. **Player in Main World (Bucket 0)**

Player has pet spawned Pet visible to everyone in bucket 0

2. **Player Enters Apartment**

Housing script changes bucket (0 → 5) Pet Manager detects bucket change If AutoSyncBucket = true → Pet auto-stored

3. **Inside Apartment (Bucket 5)**

Player spawns pet normally Pet spawns in bucket 5 (server-side) Pet visible only to players in bucket 5

4. **Player Exits Apartment**

Housing script returns to bucket 0 Pet Manager detects bucket change Pet auto-stored again

5. **Back in Main World**

Player can spawn pet normally Pet spawns in bucket 0 Everything works as before
{% endtab %}

{% tab title="Configuration" %}
#### System Configuration

You can find this configs inside the file `config.lua`:

```lua
    RoutingBucket = {
        -- ⚠️ IMPORTANT: Does not affect existing clients or saved pets
        -- 📊 PERFORMANCE: TRUE = +0.01ms per active pet | FALSE = No impact
        UseServerSideSpawning = false, -- Default: false (backward compatible)

        -- Automatically stores pet when player enters different dimension-- (e.g., entering apartment, garage, or house)
        -- ⚠️ REQUIREMENT: Only works if UseServerSideSpawning = true
        -- 📊 PERFORMANCE: TRUE = +0.01ms per second | FALSE = No impact
        AutoSyncBucket = true, -- Default: true

        -- How often (in seconds) to check for dimension changes
        -- ⚠️ REQUIREMENT: Only works if AutoSyncBucket = true
        -- 📊 PERFORMANCE: 1 second = ~0.01ms/s | 5 seconds = ~0.002ms/s
        BucketCheckInterval = 1, -- Default: 1 second (recommended)

        Notifications = {
            -- Show notification when pet is auto-stored due to dimension change
            ShowAutoDespawnNotification = true, -- Default: true (recommended)
        },

        -- Logs routing bucket operations to server console
        DebugLogging = true, -- Default: false (recommended for production)
    },
```

#### Configuration Options

**`UseServerSideSpawning`**

{% hint style="danger" %}
**REQUIRED:** Must be `true` for routing bucket support!
{% endhint %}

| Value   | Effect                                             |
| ------- | -------------------------------------------------- |
| `true`  | ✅ Pets spawn server-side, work in all buckets      |
| `false` | ❌ Pets spawn client-side, won't work in apartments |

**When to use `true`:**

* You have apartment/housing scripts
* You use any system with routing buckets
* You want maximum compatibility

**When to use `false`:**

* When you don't use any RoutingBucket System , and need better perfomance

***

**`AutoSyncBucket`**

{% hint style="success" %}
**RECOMMENDED:** Set to `true` to prevent pet glitches!
{% endhint %}

| Value   | Behavior                                            |
| ------- | --------------------------------------------------- |
| `true`  | ✅ Pet auto-stored on bucket change (recommended)    |
| `false` | ⚠️ Pet may glitch/become invisible on bucket change |

**When to use `true`:**

* You want automatic, seamless behavior
* You don't want players to manually store pets
* Best user experience (recommended)

**When to use `false`:**

* You want manual control over pet storage
* Custom implementation needed
* Advanced use cases only
{% endtab %}
{% endtabs %}

***

### 🔧 Installation

{% stepper %}
{% step %}
#### Update Resource Files

Replace all files in your `cdev_pets` folder with the new version.

{% hint style="warning" %}
**Backup First:** Always backup your current version before updating!
{% endhint %}
{% endstep %}

{% step %}
#### Add Configuration

Open `config.lua` and add the routing bucket section and follow settings bellow:

```lua
    RoutingBucket = {
        -- ⚠️ IMPORTANT: Does not affect existing clients or saved pets
        -- 📊 PERFORMANCE: TRUE = +0.01ms per active pet | FALSE = No impact
        UseServerSideSpawning = true, -- Default: false (backward compatible)

        -- Automatically stores pet when player enters different dimension-- (e.g., entering apartment, garage, or house)
        -- ⚠️ REQUIREMENT: Only works if UseServerSideSpawning = true
        -- 📊 PERFORMANCE: TRUE = +0.01ms per second | FALSE = No impact
        AutoSyncBucket = true, -- Default: true

        -- How often (in seconds) to check for dimension changes
        -- ⚠️ REQUIREMENT: Only works if AutoSyncBucket = true
        -- 📊 PERFORMANCE: 1 second = ~0.01ms/s | 5 seconds = ~0.002ms/s
        BucketCheckInterval = 1, -- Default: 1 second (recommended)

        Notifications = {
            -- Show notification when pet is auto-stored due to dimension change
            ShowAutoDespawnNotification = true, -- Default: true (recommended)
        },

        -- Logs routing bucket operations to server console
        DebugLogging = true, -- Default: false (recommended for production)
    },
```
{% endstep %}

{% step %}
#### Restart Resource

**restart cdev\_lib**\
**ensure cdev\_pets**

{% hint style="success" %}
✅ **No database changes needed!** System is fully backward compatible.
{% endhint %}
{% endstep %}
{% endstepper %}

***

### 🏘️ Housing Compatibility

#### Supported Scripts

<table><thead><tr><th width="250">Housing Script</th><th width="120">Status</th><th>Notes</th></tr></thead><tbody><tr><td><strong>vms-housing</strong></td><td>✅ Tested</td><td>Full compatibility, works out of box</td></tr><tr><td><strong>qbx_properties</strong></td><td>✅ Tested</td><td>Full compatibility, works out of box</td></tr><tr><td><strong>ps-housing</strong></td><td>✅ Compatible</td><td>Should work with default config</td></tr><tr><td><strong>Custom Scripts</strong></td><td>✅ Compatible</td><td>Works with any script using routing buckets</td></tr></tbody></table>

***

### 📊 Performance

#### Server Impact

{% hint style="success" %}
**Minimal Impact:** System adds negligible overhead to server performance.
{% endhint %}

**Measurements:**

| Operation               | Time      | Impact     |
| ----------------------- | --------- | ---------- |
| Pet Spawn (Server-Side) | \~0.01ms  | Negligible |
| Bucket Change Detection | \~0.001ms | Negligible |
| Auto-Store Pet          | \~0.005ms | Negligible |

**Comparison:**

| Operation               | Server-Side | Client-Side   | Difference                              |
| ----------------------- | ----------- | ------------- | --------------------------------------- |
| Pet Spawn               | \~0.01ms    | \~0.001ms     | +0.009ms per spawn (insignificant)      |
| Bucket Change Detection | \~0.001ms   | No additional | +0.001ms per pet spawned in server-side |
| Auto-Store Pet          | \~0.005ms   | No additional | +0.005ms per pet spawned in server-side |

#### Client Impact

{% hint style="success" %}
**Zero Additional Impact:** No extra client-side processing required!
{% endhint %}

* Same resource usage as before
* No additional rendering cost
* No FPS impact

***

### 🔍 Troubleshooting

{% tabs %}
{% tab title="Pet Disappears in Apartment" %}
#### Problem: Pet disappears when entering apartment

**Symptoms:**

* Pet visible in main world
* Pet disappears when entering apartment
* No errors in console

**Solution:**

1. **Enable Auto-Sync:**

```lua
AutoSyncBucket = true, -- Must be true
```

2. **Verify Server-Side Spawning:**

```lua
UseServerSideSpawning = true, -- Must be true
```

3. **Restart Resources:**

```lua
/restart cdev_lib
/ensure cdev_pets
```

3. **Test Again:**
   * Spawn pet in main world
   * Enter apartment
   * Pet should auto-store (check inventory/menu)
   * Spawn pet inside apartment

{% hint style="success" %}
**Fixed:** Pet now auto-stores on bucket change!
{% endhint %}
{% endtab %}

{% tab title="Pet Not Visible to Others" %}
#### Problem: Pet not visible to other players in apartment

**Symptoms:**

* You see your pet
* Other players don't see your pet
* They're in same apartment

**Solution:**

1. **Check Server-Side Spawning:**

```lua
UseServerSideSpawning = true, -- MUST be enabled
```

2. **Verify Both Players in Same Bucket:**
   * Both should be in same bucket number
3. **Check Console for Errors:**
   * Look for pet spawn errors
   * Check server console
4. **Restart Resources:**

```lua
/restart cdev_lib
/ensure cdev_pets
```

{% hint style="info" %}
**Note:** This usually means server-side spawning is disabled. Always keep it `true`!
{% endhint %}
{% endtab %}
{% endtabs %}

***

### 📚 FAQ

<details>

<summary><strong>Do I need to update my database?</strong></summary>

**No!** The system is fully backward compatible. All existing pets work without any database changes.

</details>

<details>

<summary><strong>Will this break existing pets?</strong></summary>

**No.** All existing pets continue working exactly as before. The new system only adds routing bucket support - it doesn't change how pets work in the main world (bucket 0).

</details>

<details>

<summary><strong>Does this work with ESX/QBCore/custom frameworks?</strong></summary>

**Yes!** The routing bucket system is framework-agnostic. It works with:

* ESX
* QBCore
* QBox
* Custom frameworks
* No framework at all

</details>

<details>

<summary><strong>Can I disable it if I don't use apartments?</strong></summary>

Yes, if you are not using any system that requires RoutingBucket, it is recommended that you do not enable the RoutingBucket settings. With this system disabled, your server will have better performance.

If you really want to disable:

```lua
RoutingBucket = {
 UseServerSideSpawning = false,
 AutoSyncBucket = false,
},
```

</details>

<details>

<summary><strong>What happens if a player's internet disconnects in an apartment?</strong></summary>

The pet behaves the same as disconnecting anywhere else:

* Pet despawns on disconnect
* Data saved to database
* Pet available when player reconnects
* No data loss

</details>

<details>

<summary><strong>Can admins see pets in all buckets?</strong></summary>

No. Admins are subject to the same routing bucket restrictions as regular players. This is a FiveM limitation - entities only render in the same bucket.

To view/manage all pets, use the **Pet Manager** admin tool (`/petmanager`).

</details>

***
