---
icon: rectangle-terminal
---

# Commands

All commands are server-side.\
Admin commands require the ACE permission `cdev_checkers.admin`.

***

### 👤 Player Commands

| Command             | Permission  | Description                                   |
| ------------------- | ----------- | --------------------------------------------- |
| `/checkersranking`  | All players | 🏆 Opens the ELO leaderboard / ranking panel. |
| `/checkers ranking` | All players | 🏆 Same as above.                             |

***

### 🛠 Admin Commands

| Command            | Permission | Description                                                                                                       |
| ------------------ | ---------- | ----------------------------------------------------------------------------------------------------------------- |
| `/checkersadmin`   | Admin      | 🧩 Opens the admin panel. Manage placed boards, teleport to them, delete individual boards, or remove all boards. |
| `/checkersplace`   | Admin      | 🔴 Starts placement mode without using the item. Places a board on the aimed surface.                             |
| `/checkers place`  | Admin      | 🔴 Same as above.                                                                                                 |
| `/checkersdelete`  | Admin      | 🗑 Deletes the closest checkers board to the player. Active games are protected.                                  |
| `/checkers delete` | Admin      | 🗑 Same as above.                                                                                                 |

***

### 🔐 Granting Admin Access

Add the following to your `server.cfg` or `permissions.cfg`:

```cfg
add_ace group.admin cdev_checkers.admin allow
```

**or**&#x20;

```
add_ace identifier.license:xxxxxxxxxxxx cdev_checkers.admin allow
```
