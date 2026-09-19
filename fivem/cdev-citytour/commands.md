---
icon: rectangle-terminal
---

# Commands

All commands are registered by the resource.\
Admin commands require the ACE permission `cdev_citytour.admin` (configurable via `CityTourConfig.ACE.Admin`).

Command names can be changed in `public/shared/config.lua` → `Commands`.

***

#### 👤 Player Commands

| Command           | Permission    | Description                                                                                                                                                                                            |
| ----------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `/citytourgaming` | All players   | 🏆 Opens the Gaming Hub (profile, ranking, history, money stats, rules).                                                                                                                               |
| `/citytourpickup` | Owner / Admin | 📦 Picks up the nearest **idle** City Tour board and returns the item. Optional keybind (empty by default). In **DrawText** mode, **G** does the same (`InteractionOptions.DrawText.pickupControlId`). |

***

#### 🛠 Admin Commands

| Command            | Permission | Description                                                                                                          |
| ------------------ | ---------- | -------------------------------------------------------------------------------------------------------------------- |
| `/citytouradmin`   | Admin      | 🧩 Opens the admin panel. List boards, teleport to them, or delete individual tables.                                |
| `/citytourplace`   | Admin      | 🔴 Starts placement mode **without** consuming an item.                                                              |
| `/citytourdelete`  | Admin      | 🗑 Deletes the closest City Tour board. Active games are protected.                                                  |
| `/citytourbalance` | Admin      | 📐 Opens the layout calibrator (pawn / die / cash / house alignment). Saves to `public/shared/layout_override.json`. |

***

#### 🔐 Granting Admin Access

Add the following to your `server.cfg` or `permissions.cfg`:

```cfg
add_ace group.admin cdev_citytour.admin allow
```

**or**

```
add_ace identifier.license:xxxxxxxxxxxx cdev_citytour.admin allow
```

{% hint style="info" %}
**Qbox:** prefer adding the ACE line in `permissions.cfg`.
{% endhint %}
