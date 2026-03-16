---
icon: trillium
---

# Rework Cdev One (Better Experience)

## ✴ Rework Cdev One

{% hint style="success" %}
**This rework introduces new features along with significant performance improvements. Everything has been optimized to ensure the best possible performance for your server.**
{% endhint %}

### 📋 Overview

**This rework introduces a new automatic resource detection system, a new option for Eye Target interactions, an improved synchronization system, and new markers designed to improve the players' Quality of Life (QoL).**

**New Features:**

* 👀 Eye Target System
* 🔴 New Markers
* 🔮 Automatic Resoruce Detection System
* ⬆ Better performance (With new **synchronization system**)

### 🎮 Preview & How to Use

{% tabs %}
{% tab title="Eye Target System" %}
<figure><img src="../../../.gitbook/assets/FiveM_cl2_GTAProcess_iydg8sToIR.gif" alt=""><figcaption></figcaption></figure>

{% hint style="warning" %}
**With the new Eye Target system enabled, you can achieve better performance for your server.**
{% endhint %}

#### How Setup

{% hint style="info" %}
Make sure to set these values in your configuration file: **cdev\_cOne > public > shared > config.lua**
{% endhint %}

| Option        | Description                                                                                                                                                    | Example  |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| `interaction` | Switch between "target" and "context menu".                                                                                                                    | `target` |
| T`arget`      | In this configuration, you can set it to automatic detection, choose the target system that best fits your needs, or use the custom option to create your own. | `auto`   |

```lua
-- Bridge: how players interact with tables (context menu = raycast scroll menu; target = ox_target / qb-target).
Bridge = {
    -- "contextmenu" = current raycast menu; "target" = use target system (eye icon / zone).
    Interaction = "target",
    -- When Interaction = "target": "auto" (detect) | "ox_target" | "qb-target"
    Target = "auto",
},
```
{% endtab %}

{% tab title="Interaction Marker System" %}
<figure><img src="../../../.gitbook/assets/FiveM_cl2_GTAProcess_3Cc13Hbdky.gif" alt=""><figcaption></figcaption></figure>

{% hint style="danger" %}
**This system is enabled by default in the configuration. However, it uses slightly more resources and may slightly impact performance for players when interactions are nearby. It is optional, and you can disable it if needed.**
{% endhint %}

#### How Setup

{% hint style="info" %}
Make sure to set these values in your configuration file: **cdev\_cOne > public > shared > config.lua**
{% endhint %}

| Option                           | Description                                                                                                         | Example |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------- |
| `showInteractionMarkers`         | Switch between "true" and "false". (With false you get better perfomance)                                           | `true`  |
| `interactionMarkersDrawDistance` | Player distance at which markers start to appear when entering the radius. Lower values provide better performance. | `8.0`   |

```lua
-- When true, draws a small marker at each interaction point (seats and pickup) when you are near the table.
showInteractionMarkers = true,

-- How far (meters) you can be from the table to see the interaction markers.
interactionMarkersDrawDistance = 8.0,
```
{% endtab %}

{% tab title="Sync System" %}
<figure><img src="../../../.gitbook/assets/FiveM_cl2_GTAProcess_5P8pU8YcWU.gif" alt=""><figcaption></figcaption></figure>

{% hint style="warning" %}
The synchronization system is configured with a recommended radius for large servers. However, you can adjust this radius in the configuration. Smaller radius values can improve server performance for players near the card table. The <mark style="color:yellow;">radius debug system</mark>, shown as the <mark style="color:yellow;">yellow circle</mark>, is optional and recommended for testing purposes only.
{% endhint %}



#### How Setup

{% hint style="info" %}
Make sure to set these values in your configuration file: **cdev\_cOne > public > shared > config.lua**
{% endhint %}

```lua
-- Performance: sync events (addProps, stateUpdate, etc.) only to players within this radius of a table (meters). Reduces load on 300+ player servers.
SyncRadius = 17.0,

-- When true, draws a YELLOW CIRCLE on the ground around each table with radius = SyncRadius (meters). For developers to visualize sync range (players inside receive addProps, stateUpdate, etc.). Only visible when debugSyncRadius = true; set false in production.
debugSyncRadius = true,
```
{% endtab %}
{% endtabs %}

