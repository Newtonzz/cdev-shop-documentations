---
icon: rectangle-terminal
---

# Commands

## Commands

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

| Key             | Action                                                     |
| --------------- | ---------------------------------------------------------- |
| WASD            | Freecam move                                               |
| Q / E           | Height (freecam or place)                                  |
| Shift / Alt     | Fast / slow                                                |
| CapsLock        | Toggle free cursor                                         |
| LMB / RMB       | Select or place / look                                     |
| V               | Grab                                                       |
| G / Space       | Ground snap                                                |
| B               | Marquee                                                    |
| P               | Brush                                                      |
| M               | Multi-place                                                |
| Enter           | Close area-fill shape, or Apply array when Array is active |
| Ctrl+Z / Ctrl+Y | Undo / redo                                                |
| Delete          | Delete selection                                           |
| X               | Cancel                                                     |
| Esc             | Request close                                              |

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
