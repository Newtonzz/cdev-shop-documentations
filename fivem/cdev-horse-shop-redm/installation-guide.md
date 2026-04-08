# ⚙️ Installation Guide

{% stepper %}
{% step %}
### Install (or update) dependencies and optional

{% hint style="danger" %}
<mark style="color:yellow;">**Verify all dependencies below are started**</mark><mark style="color:yellow;">**&#x20;**</mark>_<mark style="color:yellow;">**before**</mark>_<mark style="color:yellow;">**&#x20;**</mark><mark style="color:yellow;">**this script in your**</mark>**&#x20;`server.cfg`**<mark style="color:yellow;">**.**</mark>
{% endhint %}

#### Required

| Resource      | Purpose                                                                                                                                 |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| **oxmysql**   | Database driver for player data, ranking, and match history. [Download oxmysql](https://github.com/CommunityOx/oxmysql/releases/latest) |
| **Framework** | [VORP ](https://github.com/VORPCORE), Custom.                                                                                           |
| Notify        | VORP, Custom.                                                                                                                           |

#### Optional

| Resource                        | Purpose                                                                                                              |
| ------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| Inventory                       | [Vorp\_inventory](https://github.com/VORPCORE/vorp_inventory)                                                        |
| **ox\_target** or **qb-target** | Target-based board interaction (alternative to DrawText) [OX Target RedM](https://github.com/overextended/ox_target) |
| Horse Delivery                  | [vorp\_stables](https://github.com/VORPCORE/VORP-Stables) (Recommended)                                              |
{% endstep %}

{% step %}
### Install cDev\_horseshop and create a new subfolders or extract folder to server's root

### Install resource from [Portal](https://portal.cfx.re/assets/granted-assets)

**After installing, you should get a zip file with the name shown below.**

* <mark style="color:yellow;">cdev\_horseshop.pack.zip</mark>

{% hint style="info" %}
Create a new subfolder optional step, but is _highly recommended_.
{% endhint %}

**If you haven’t already, create a new subfolder named `[cdev]` in your server’s root resources directory. Unzip (**_**extract**_**) this script into the newly created `[cdev]` subfolder.**

<div align="left"><figure><img src="../../.gitbook/assets/explorer_FKtZ2vHxZq.gif" alt=""><figcaption></figcaption></figure></div>
{% endstep %}

{% step %}
#### ACE permissions (Creator & Admin Manager)

Open your `server.cfg` and add the following ACE permission:

```
add_ace group.admin cdev_horseshop.creator allow
```

**or**

```
add_ace identifier.license:xxxxxxxxxxxx cdev_horseshop.creator allow
```

{% hint style="info" %}
**This permission is required for:**

* **The shop creator flow (placing new shops in the world)**
* **The admin manager command (list all shops, revenue summary, delete branches)**
{% endhint %}

{% hint style="danger" %}
<mark style="color:$warning;">**Important:**</mark> If you changed `Creator.AcePermission` in `public/shared/config.lua`, use that string in `add_ace` instead of `cdev_horseshop.creator`.
{% endhint %}

{% hint style="warning" %}
**Note:** CDEV Horse Shop targets RedM / VORP; permissions are usually kept in `server.cfg`. If your hosting setup uses a separate permissions file (similar to Others framework and `permissions.cfg`), add the same `add_ace` line there instead of cluttering `server.cfg`.
{% endhint %}
{% endstep %}

{% step %}
### Update server.cfg & perform a full restart

Once all other steps are completed, open your `server.cfg` & add `ensure cdev_chess` to the very **bottom** of your resource start list (after oxmysql, your framework, inventory, and target if used). Finally, perform a full server restart. Failure to perform a full restart after installation will cause errors.

<figure><img src="../../.gitbook/assets/Code_2kDSMvE0Yp.gif" alt=""><figcaption></figcaption></figure>

{% hint style="success" %}
Note: When everything is installed, run `/horseshopcreate` in-game to start creating a shop. (Configurable via `Creator.Command` in the shared config.)
{% endhint %}
{% endstep %}

{% step %}
### ⭐ In-Game Preview's / Guides

{% tabs %}
{% tab title="Creating Shop" %}
### Guide how create a Shop

```
/horseshopcreate
```

<figure><img src="../../.gitbook/assets/Cerating+Shop+(1).gif" alt=""><figcaption></figcaption></figure>
{% endtab %}

{% tab title="Manager" %}
### Manager Preview

<figure><img src="../../.gitbook/assets/Manager Video.gif" alt=""><figcaption></figcaption></figure>

### Buying Horse From Supplier

<figure><img src="../../.gitbook/assets/Buying+a+Horse.gif" alt=""><figcaption></figcaption></figure>

### Place horse in Showroom

<figure><img src="../../.gitbook/assets/Placing A horse in Vetrine.gif" alt=""><figcaption></figcaption></figure>

### Using / Deposit Vault

<figure><img src="../../.gitbook/assets/Vault and Deposit.gif" alt=""><figcaption></figcaption></figure>

### Manager Config's

<figure><img src="../../.gitbook/assets/Disabling 3D Points.gif" alt=""><figcaption></figcaption></figure>
{% endtab %}

{% tab title="Show Owner" %}
### Simple Shop Owner Command

<pre><code><strong>/myshops
</strong></code></pre>

<figure><img src="../../.gitbook/assets/RedM_GTAProcess_vOJPKNNzuG.gif" alt=""><figcaption></figcaption></figure>
{% endtab %}

{% tab title="Server Admin" %}
### Admin Menu ( Delete Shops)

```
/horseshopmanager
```

<figure><img src="../../.gitbook/assets/RedM_GTAProcess_mwTIOr9h5p.gif" alt=""><figcaption></figcaption></figure>
{% endtab %}

{% tab title="Client" %}
### Buying a horse and Preview

<figure><img src="../../.gitbook/assets/Bying+a+Horse+And+Preview.gif" alt=""><figcaption></figcaption></figure>
{% endtab %}
{% endtabs %}
{% endstep %}
{% endstepper %}

