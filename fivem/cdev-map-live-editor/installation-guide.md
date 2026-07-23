---
icon: gear
---

# Installation Guide

{% stepper %}
{% step %}
#### Install (or update) dependencies

{% hint style="danger" %}
<mark style="color:yellow;">**Verify all dependencies below are started**</mark> _<mark style="color:yellow;">**before**</mark>_ <mark style="color:yellow;">**this script in your**</mark> **`server.cfg`**<mark style="color:yellow;">**.**</mark>
{% endhint %}

**Required**

| Resource                                       | Purpose                                                                                                                                       |
| ---------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| **oxmysql**                                    | Database for maps, objects, lights, layers, prefabs, and settings. [Download oxmysql](https://github.com/CommunityOx/oxmysql/releases/latest) |
| **qb-core** / **qbx\_core** / **es\_extended** | Framework admin checks and identifiers through the in-resource bridge                                                                         |

**Optional**

| Resource           | Purpose                                        |
| ------------------ | ---------------------------------------------- |
| **cdev\_propshot** | Catalog screenshot tool (see cdev-propshot.md) |
{% endstep %}

{% step %}
#### Install cdev\_mapeditor

#### Install resource from [Portal](https://portal.cfx.re/assets/granted-assets)

**After installing, you should get a zip file with a name similar to the one below.**

* <mark style="color:yellow;">cdev\_mapeditor.pack.zip</mark>

{% hint style="info" %}
Creating a `[cdev]` subfolder under `resources` is optional, but recommended.
{% endhint %}

**If you have not already, create a folder named `[cdev]` in your server resources directory. Extract this script into that folder.**
{% endstep %}

{% step %}
#### Add ACE permission

Open your `server.cfg` (or `permissions.cfg` on Qbox) and add:

```cfg
add_ace group.admin command.mapeditor allow
```

**or**

```cfg
add_ace identifier.license:xxxxxxxxxxxx command.mapeditor allow
```

{% hint style="info" %}
The ACE follows the command name. Default command is `mapeditor`, so the ACE is `command.mapeditor`. If you change `MapEditorConfig.Command`, update the ACE to match.
{% endhint %}

{% hint style="danger" %}
On Qbox, prefer `permissions.cfg` instead of pasting ACE only in `server.cfg`.
{% endhint %}

Framework admins (QB admin/god, Qbox admin, ESX admin/superadmin) are also accepted when `useFrameworkAdmin` is enabled in `public/server/config.lua`.
{% endstep %}

{% step %}
#### Update server.cfg and restart

Add `ensure cdev_mapeditor` **after** `oxmysql` (and after your framework if you use one). Then do a **full server restart**.

```cfg
ensure oxmysql
ensure framework ( E.g qb-core )
ensure cdev_propshot ## IF YOU HAVE Package
ensure cdev_mapeditor
```

{% hint style="success" %}
On first start the resource creates all MySQL tables automatically. You do not need to import an SQL file.
{% endhint %}

{% hint style="success" %}
In-game, open the editor with **`/mapeditor`** or **F7**.
{% endhint %}

{% hint style="danger" %}
Custom framework or notify stacks: read Configurations and Integrations and adjust `Bridge` plus files under `public/bridge/`.
{% endhint %}
{% endstep %}
{% endstepper %}
