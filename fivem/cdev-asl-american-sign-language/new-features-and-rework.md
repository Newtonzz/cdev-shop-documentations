# 💡 New Features & Rework

{% hint style="success" %}
**The resource system has been completely redesigned and optimized, and we have implemented new features.**
{% endhint %}

### 📋 Overview

**In this new rework update, we rebuilt the resource to make it more&#x20;**<mark style="color:yellow;">**optimized**</mark>**&#x20;and implemented new configurations such as&#x20;**<mark style="color:yellow;">**locale**</mark>**,&#x20;**<mark style="color:yellow;">**theme**</mark>**,&#x20;**<mark style="color:yellow;">**additional performance improvements**</mark>**, and a new in-game configuration panel for the client `aslconfig`.**

***

### ⚙️ New Configs

{% tabs %}
{% tab title="Locale Config" %}
```lua
--- NUI language: same as file name in public/language/ without .json
Locale = "en",
```

### How to use

You just need to go into the configuration file `cdev_singlanguage > public > shared > config.lua` and change the locale to any `.json` file that exists inside the `public > language` folder.

<div align="left"><figure><img src="../../.gitbook/assets/image.png" alt=""><figcaption></figcaption></figure></div>

### How create a new Locale

Just copy the `en.json` file located in the `public > language` folder, rename it (for example, from `en.json` to `kr.json`), and then make your changes inside the file. After that, in the config locale, you will use `kr`.
{% endtab %}

{% tab title="ASL Theme" %}
```lua
--- NUI tooltip theme id: key in public/theme/themes.json ("default" or add your own; "custom" merges onto default).
ASLTooltipTheme = "default",
```

### How to use

You just need to go into the configuration file `cdev_singlanguage > public > shared > config.lua` and change the ASLTooltipTheme  to any `theme` exists inside the file  `public > theme > themes.json ( Default)`folder.

### How create a new Theme

Inside the `themes.json` file, just copy everything from `default` and only change the name from `default` to your new theme. After that, you can modify the colors as you wish. To use it, simply change `default` to `newtheme` in the `config.lua` file.

<figure><img src="../../.gitbook/assets/image (1).png" alt=""><figcaption></figcaption></figure>
{% endtab %}

{% tab title="New Performance Configs" %}
```lua
Misc = {
    timeAfterCompletion = 1000,   -- Wait time after completion ⏰
    rangeitcanbeseen = 10.0,      -- Visibility range 👀 (server + client)
    appearEntireSentence = false, -- Show entire sentence at once 📜
    --- 3D text above head: use 0 = draw every frame (smooth, no flicker). Values >0 skip frames and will blink.
    drawTextRefreshMs = 0,
    --- If false, the signing player does not receive overhead sync (Better performance).
    syncOverheadTextToSigner = false,
},
```

## New Configs

#### drawTextRefreshMs

In this config, you define the processing interval for displaying the message above the player's head when they are using emotes. Increasing the value from <mark style="color:yellow;">0</mark> will improve performance, but it may cause the text above the player’s head to flicker.

#### syncOverheadTextToSigner&#x20;

This is a new performance improvement setting. If set to `false`, the player performing the emote will not see the text above their own head, but all other players will still see it above that player’s head. This helps improve server performance. If set to `true`, both the player performing the emote and other players will see the text above the player’s head.
{% endtab %}

{% tab title="New Tool Tip" %}
<figure><img src="../../.gitbook/assets/image (2).png" alt=""><figcaption></figcaption></figure>



```lua
 --- Keybind: `key` = physical binding. Display name for pause menu / mapping is in public/language/<Locale>.json → keybinds.cancelASL.
    --- Optional: set `label` here (non-empty string) to override the JSON for this bind only.
    DefaultKeybinds = {
        cancelASL = {
            type = "keyboard",
            key = "x",
        },
    },

    --- Tooltip text: leave nil/empty to use public/language/<locale>.json (nui.*) for your Locale.
    ASLCancel = {
        tooltipTitle = nil,
        tooltipKeyLabel = nil,
        tooltipActionText = nil,
        --- Default on-screen position (CSS). Overridden after player saves with /aslconfig.
        tooltipPosition = {
            left = "1.5vw",
            bottom = "20vh",
        },
    },
```
{% endtab %}
{% endtabs %}

## ⚙️ New ToolTip and PanelConfig

{% tabs %}
{% tab title="New Functions" %}
<figure><img src="../../.gitbook/assets/vlc_4ZHUF6UFJM.gif" alt=""><figcaption></figcaption></figure>
{% endtab %}
{% endtabs %}
