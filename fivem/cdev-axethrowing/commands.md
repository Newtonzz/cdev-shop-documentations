---
icon: rectangle-terminal
---

# Commands

{% hint style="warning" %}
All commands are handled **server-side** and routed to clients.\
Admin subcommands require the ACE permission **`cdev_axethrowing.admin`**.
{% endhint %}

***

#### Player commands

| Command                    | Permission  | Description                                       |
| -------------------------- | ----------- | ------------------------------------------------- |
| `/axethrowing leaderboard` | All players | Opens the **leaderboard / ranking** panel.        |
| `/axethrowing ranking`     | All players | Same as **leaderboard**.                          |
| `/axethrowing lb`          | All players | Same as **leaderboard**.                          |
| `/axethrowing tournament`  | All players | Opens the **tournament browser** (join / browse). |
| `/axethrowing tournaments` | All players | Same as **tournament**.                           |
| `/axethrowing tour`        | All players | Same as **tournament**.                           |

***

#### Admin commands

| Command               | Permission                       | Description                                                                                      |
| --------------------- | -------------------------------- | ------------------------------------------------------------------------------------------------ |
| `/axethrowing place`  | Admin (`cdev_axethrowing.admin`) | Starts **placement mode** without using the inventory item (same flow as using the target item). |
| `/axethrowing delete` | Admin                            | Deletes the **closest** placed lane to the player (see in-game rules for active matches).        |
| `/axethrowing admin`  | Admin                            | Opens the **admin panel** (manage lanes, teleport, delete).                                      |

***

#### Granting admin access

{% hint style="info" %}
Add the following to your `server.cfg` or `permissions.cfg`:
{% endhint %}

```cfg
add_ace group.admin cdev_axethrowing.admin allow
```

**or**

```
add_ace identifier.license:xxxxxxxxxxxx cdev_axethrowing.admin allow
```
