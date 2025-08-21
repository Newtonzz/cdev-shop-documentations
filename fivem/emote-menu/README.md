---
description: >-
  This is more than just an emote menu—it's a complete animation system that
  transforms your FiveM server into a dynamic and engaging environment.
---

# 🕺 Emote Menu

***

### What is the cDev Emote Menu?

The cDev Emote Menu is a powerful enhancement of the standard emote menu, transforming it into an advanced animation player for FiveM servers. With a host of unique features, including an in-game Animation Builder, Sequence Creator, and Position Selector, it offers an immersive experience with an extensive library of custom animations.

<details>

<summary>Feature List</summary>



* **Advanced Animation Builder:**\
  Create custom animations by combining any two animations and one expression with our modern drag-and-drop UI. All custom-built animations are saved to a dedicated category on the client side.
* **Sequence Creator:**\
  Build sequences by selecting multiple animations and assigning specific durations to each. These sequences are also saved to a client-side category.
* **Built-in GIF Recorder:**\
  With our new media library, players can easily record GIFs by entering a few details.
* **Idle System:**\
  Players can set custom idle animations. Server owners can enable this feature, and player preferences are saved between restarts.
* **Position Selector:**\
  Choose the exact position for your animations before playing them, giving you full control over your character's movements.
* **Favorite System:**\
  With over 8,000 animations available, you can save your favorites in a dedicated category, all stored on the client side.
* **Modern & Intuitive UI:**\
  Our user interface is designed to be sleek and user-friendly, ensuring an easy experience for all players.
* **Optimized Performance:**\
  The resource runs at `0.0 ms` when idle and peaks at only `~0.02 ms` while in use, ensuring minimal impact on performance.
* **Custom Hotkey System:**\
  Drag and drop animations into hotkey slots for quick access during gameplay.
* **VIP Functionality:**\
  Server owners can lock specific animations behind a VIP system (function is not escrowed). Discord integration is supported for easy management.
* **Extensive Animation Library:**\
  With over 8,000 animations including: Couple dances, couple poses, car animations (to interact inside the car), car couples animations, couple interactions, couple carry, solo poses, solo animations, police animations, dances, pet (characther) shared animations or alone, walk styles, idles.
* **Expression System:**\
  Players can express themselves with custom facial expressions that are saved between restarts.
* **Walk Styles:**\
  Save your character's walk style preferences and ensure they persist across sessions.
* **GIF-Based Content:**\
  All GIFs and media are uploaded to the cDev CDN, reducing server storage requirements for server owners.
* **Rule Feature:**\
  Restrict specific animations to designated players via a rule feature (API available for server owners).

</details>



## Installation Guide

<details>

<summary>Step 1: Verify that you have the required dependencies installed</summary>

Before you can use this resource, you'll need to make sure that you have the following resource installed:

1. cdev\_lib <mark style="color:green;">(included with this resource)</mark>

</details>

<details>

<summary>Step 2: Extract the files</summary>

1. Extract the contents of the `cdev-emotemenu.pack.zip` folder and place the resulting folder in your server's resource directory.

2) Extract the contents of the `cdev_emotemenuassets.pack.zip`folder and place the resulting folder in your server's resource directory.

</details>

<details>

<summary>Step 3: Ensure the files</summary>

Your ensure should look like this in your `server.cfg`

```lua
ensure cdev_emotemenuassets
ensure cdev_lib
ensure cdev_emotemenu
```

</details>

{% hint style="warning" %}
Make sure that cdev\_lib is started before cdev\_emotemenu
{% endhint %}

