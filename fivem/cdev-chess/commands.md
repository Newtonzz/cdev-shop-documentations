---
icon: rectangle-terminal
---

# Commands

All commands are server-side.\
Admin commands require the ACE permission `cdev_chess.admin`.

***

### 👤 Player Commands

| Command          | Permission  | Description                                   |
| ---------------- | ----------- | --------------------------------------------- |
| `/chessranking`  | All players | 🏆 Opens the ELO leaderboard / ranking panel. |
| `/chess ranking` | All players | 🏆 Same as above.                             |

***

### 🛠 Admin Commands

| Command         | Permission | Description                                                                                                       |
| --------------- | ---------- | ----------------------------------------------------------------------------------------------------------------- |
| `/chessadmin`   | Admin      | 🧩 Opens the admin panel. Manage placed boards, teleport to them, delete individual boards, or remove all boards. |
| `/chessplace`   | Admin      | ♟️ Starts placement mode without using the item. Places a board on the aimed surface.                             |
| `/chess place`  | Admin      | ♟️ Same as above.                                                                                                 |
| `/chessdelete`  | Admin      | 🗑 Deletes the closest chess board to the player. Active games are protected.                                     |
| `/chess delete` | Admin      | 🗑 Same as above.                                                                                                 |

***

### 🔐 Granting Admin Access

Add the following to your `server.cfg` or `permissions.cfg`:

```cfg
add_ace group.admin cdev_chess.admin allow
```

**or**&#x20;

```
add_ace identifier.license:xxxxxxxxxxxx cdev_chess.admin allow
```
