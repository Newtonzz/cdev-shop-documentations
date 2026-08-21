---
icon: rectangle-terminal
---

# Commands

All commands are registered by the resource.\
Admin commands require the ACE permission `cdev_ludus.admin` (configurable via `LudusConfig.ACE.Admin`).

Command names can be changed in `public/shared/config.lua` → `Commands`.

***

#### 👤 Player Commands

| Command        | Permission    | Description                                                                                                                                                                                        |
| -------------- | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/ludusgaming` | All players   | 🏆 Opens the Gaming Hub (profile, ranking, history, money stats).                                                                                                                                  |
| `/luduspickup` | Owner / Admin | 📦 Picks up the nearest **idle** Ludus board and returns the item. Optional keybind (empty by default). In **DrawText** mode, **G** does the same (`InteractionOptions.DrawText.pickupControlId`). |

***

#### 🛠 Admin Commands

| Command         | Permission | Description                                                                                              |
| --------------- | ---------- | -------------------------------------------------------------------------------------------------------- |
| `/ludusadmin`   | Admin      | 🧩 Opens the admin panel. List boards, teleport to them, or delete individual tables.                    |
| `/ludusplace`   | Admin      | 🔴 Starts placement mode **without** consuming an item.                                                  |
| `/ludusdelete`  | Admin      | 🗑 Deletes the closest Ludus board. Active games are protected.                                          |
| `/ludusbalance` | Admin      | 📐 Opens the layout calibrator (pawn/die/chip alignment). Saves to `public/shared/layout_override.json`. |

***

#### 🔐 Granting Admin Access

Add the following to your `server.cfg` or `permissions.cfg`:

```cfg
add_ace group.admin cdev_ludus.admin allow
```

**or**

```
add_ace identifier.license:xxxxxxxxxxxx cdev_ludus.admin allow
```

{% hint style="info" %}
**Qbox:** prefer adding the ACE line in `permissions.cfg`.
{% endhint %}
