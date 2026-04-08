---
icon: rectangle-terminal
---

# Commands

Chat commands are registered on the **client** when the resource starts. **Permission checks** for creator and admin tools run on the **server** (ACE).

Default command names come from `HorseShopConfig.Creator` in `public/shared/config.lua` — change `Command`, `MyShopsCommand`, or `AdminManagerCommand` there if you want different names, then restart the resource.

***

### 👤 Player commands

| Command    | Permission  | Description                                                                                                                     |
| ---------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `/myshops` | All players | Opens **My Shops**: branches where your character is **owner** or **employee**. If you have none, you get an info notification. |

{% hint style="danger" %}
_Default:_ `Creator.MyShopsCommand = "myshops"` (no leading slash in config).
{% endhint %}

***

### 🛠 Creator & admin commands

{% hint style="info" %}
These require the ACE permission set in `Creator.AcePermission` (default: `cdev_horseshop.creator`).
{% endhint %}

| Command             | Permission  | Description                                                                                                                                                                           |
| ------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/horseshopcreate`  | Creator ACE | Starts the **shop creator** flow: place shop, management, vault, delivery, preview horse/camera, then create the branch in the database.                                              |
| `/horseshopmanager` | Creator ACE | Opens the **admin manager** UI: list **all** shops, sort by id or profit, total sales revenue per branch, and **delete** a shop (cascade DB cleanup). Same permission as the creator. |

{% hint style="danger" %}
_Defaults:_ `Creator.Command = "horseshopcreate"`, `Creator.AdminManagerCommand = "horseshopmanager"`.
{% endhint %}

***

### 🔐Granting creator / admin access

Add one of the following to your `server.cfg` or `permissions.cfg:`

```cfg
add_ace group.admin cdev_horseshop.creator allow
```

**or**

```cfg
add_ace identifier.license:xxxxxxxxxxxx cdev_horseshop.creator allow
```

{% hint style="warning" %}
If you changed `Creator.AcePermission` in `config.lua`, use that string instead of `cdev_horseshop.creator`.
{% endhint %}
