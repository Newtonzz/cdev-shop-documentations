---
icon: rectangle-terminal
---

# Commands

{% hint style="warning" %}
Opening the editor is gated on the server. The player still needs the configured ACE (or framework admin when enabled).
{% endhint %}

***

**Editor**

| Command / key | Permission                        | Description                                 |
| ------------- | --------------------------------- | ------------------------------------------- |
| `/mapeditor`  | ACE `command.mapeditor` (default) | Opens the map editor                        |
| **F7**        | Same                              | Default keybind (`MapEditorConfig.Keybind`) |

Command name is `MapEditorConfig.Command`. Change it and update your ACE to `command.<newname>`.

***

**Useful in-editor defaults**

These are NUI hotkeys from `MapEditorConfig.Keys` (all remappable):

<table data-search="false"><thead><tr><th>Key</th><th>Action</th></tr></thead><tbody><tr><td>WASD</td><td>Freecam move</td></tr><tr><td>Q / E</td><td>Height (freecam or place)</td></tr><tr><td>Shift / Alt</td><td>Fast / slow</td></tr><tr><td>CapsLock</td><td>Toggle free cursor</td></tr><tr><td>LMB / RMB</td><td>Select or place / look</td></tr><tr><td>V</td><td>Grab</td></tr><tr><td>G / Space</td><td>Ground snap</td></tr><tr><td>B</td><td>Marquee</td></tr><tr><td>P</td><td>Brush</td></tr><tr><td>M</td><td>Multi-place</td></tr><tr><td>Enter</td><td>Close area-fill shape, or Apply array when Array is active</td></tr><tr><td>Ctrl+Z / Ctrl+Y</td><td>Undo / redo</td></tr><tr><td>Delete</td><td>Delete selection</td></tr><tr><td>X</td><td>Cancel</td></tr><tr><td>Esc</td><td>Request close</td></tr></tbody></table>

***

**Granting access**

{% hint style="info" %}
Add one of the following to `server.cfg` or `permissions.cfg`:
{% endhint %}

```cfg
add_ace group.admin command.mapeditor allow
```

**or**

```cfg
add_ace identifier.license:xxxxxxxxxxxx command.mapeditor allow
```
