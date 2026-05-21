---
icon: rectangle-terminal
---

# Commands

{% hint style="warning" %}
All commands are handled **server-side** and routed to clients.\
Admin subcommands require the ACE permission `cdev_bet.admin`.
{% endhint %}

***

#### Player commands

| Command     | Permission  | Description               |
| ----------- | ----------- | ------------------------- |
| `/betpanel` | All players | Opens a Bet Player Panel. |

***

#### Admin commands

| Command     | Permission              | Description          |
| ----------- | ----------------------- | -------------------- |
| `/betadmin` | Admin (cdev\_bet.admin) | Open Bet Admin Panel |

***

#### Granting admin access

{% hint style="info" %}
Add the following to your `server.cfg` or `permissions.cfg`:
{% endhint %}

```cfg
add_ace group.admin cdev_bet.admin allow
```

**or**

```
add_ace identifier.license:xxxxxxxxxxxx cdev_bet.admin allow
```
