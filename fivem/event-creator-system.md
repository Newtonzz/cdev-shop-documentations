---
description: Get creative today on your FiveM Server!
---

# 🎉 Event Creator System

{% embed url="https://youtu.be/If9wrj0Q53E" %}

***

### What is this resource?

The cDev Event Creator is a custom entertainment script designed for FiveM servers. It features unique, in-house animations to enhance your server's gameplay experience.

## Installation Guide

{% hint style="warning" %}
**Prerequisites**

Before installing the CDEV Event Creator, ensure you have the following dependencies:

1. **cdev\_lib** (included in the resource)
2. **xSound** - [Download here](https://github.com/Xogy/xsound/releases/latest)
3. **PolyZone** - [Download here](https://github.com/mkafrin/PolyZone/releases/latest)

> _Note: While XSound and PolyZone are integrated by default, you can customize or integrate additional resources using cdev\_lib._
{% endhint %}

**Installation Steps**

1. Download and extract all dependencies.
2. Download all 3 assets folders ( `cDev Event Creator - Prop Pack 01,02 and 03`) in [portal.cfx](https://portal.cfx.re/)
3. Copy the cdev\_lib inside FiveM server's `resources` directory
4. Create a new folder Called `[cdev]` inside FiveM server's `resources` directory and place `cdev_eventcreator` inside this `[cdev]` folder
5. Create a new folder Called `[cdev_assets]` inside FiveM server's `resources` directory and place `cdev_propevent01 , cdev_propevent02 and cdev_propevent03` inside `[cdev_assets]` folder
6.  Add the following lines to your `server.cfg` to ensure the resources load correctly:

    ```plaintext
    ensure xsound
    ensure polyzone
    ensure cdev_lib
    ensure [cdev]
    ensure [cdev_assets]
    ```
7. Restart your server to apply the changes.

#### Customization

You can customize the CDEV Event Creator by modifying files within the `public/config` directory. Key configuration options include:

* Language settings
* Job names
* Database table names
* Zone options
* Props

Each configuration file is straightforward and well-documented for ease of use.

#### Usage Instructions

**Setup**

1. Ensure `debug = true` is set in your `server.cfg`, or assign the `event_creator` job (modifiable in the config) to yourself.
2. With debug mode enabled, job requirements are bypassed, allowing you to use the resource freely.

**Creating an Event**

1. Press the `INSERT` key to begin creating a new event.
2. Click `New Zone` and select the area for your event using `Mouse Left Click`.
3. Toggle between the editor and gameplay mode by pressing `CAPSLOCK`.

**Adding Props**

1. After setting up your zone, choose the second option in the sidebar to add props.
2. Select a prop and position it using your mouse or keyboard.
3. Save your changes by clicking the `Save` button.
4. To discard changes, click `Cancel` or press `ESC`.

**Editing Props and Interactions**

1. Navigate to the third option in the sidebar to edit props.
2. Hover over a prop to see which one is currently selected.
3. Select a prop to open the prop editor.
4. Choose and customize interactions for the prop.
5. To delete or further edit a prop, click the `Cog` icon at the top right.

**Using Interactions**

1. Access interactions by pressing the `ALT` key (eye icon).
2. You can enable or disable interactions at any time through the prop editor.

***

{% hint style="warning" %}
Make sure that cdev\_lib is started before cdev\_eventcreator
{% endhint %}

{% hint style="danger" %}
**Do not modify the encrypted files in any way, as this may cause issues with the resource's functionality.**
{% endhint %}
