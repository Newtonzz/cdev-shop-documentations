---
hidden: true
---

# Installation Guide OX Inventory

{% stepper %}
{% step %}
### Install resource from [Portal](https://portal.cfx.re/assets/granted-assets)

**After installing, you should get a zip file with the name shown below.**

* <mark style="color:yellow;">cdev\_tarot.pack.zip</mark>
{% endstep %}

{% step %}
### Extract the zip.

➤ Step 1: Extract the contents of <mark style="color:yellow;">cdev\_tarot.pack.zip</mark> the folder extact should be the name <kbd><mark style="color:red;">cdev\_tarot<mark style="color:red;"></kbd>.

{% hint style="danger" %}
**It is extremely essential that the folder has the exact same name as above, otherwise the resource will not work properly.**
{% endhint %}
{% endstep %}

{% step %}
### Server.cfg Configuration

This resource must always be started **after your&#x20;**<mark style="color:yellow;">**framework**</mark>**&#x20;and any&#x20;**<mark style="color:yellow;">**other**</mark>**&#x20;required resources**.

It is essential to follow the correct startup order to ensure proper functionality and avoid conflicts.

**Below is an example screenshot showing the recommended startup order:**

<div align="left"><figure><img src="../../.gitbook/assets/image (2).png" alt=""><figcaption></figcaption></figure></div>
{% endstep %}

{% step %}
### Cdev\_tarot Configuration

🚩 <mark style="color:red;">**To work correctly,**</mark> <mark style="color:yellow;">cdev\_tarot</mark> <mark style="color:red;">**requires the proper configuration of the inventory in the**</mark>**&#x20;`config.lua`&#x20;**<mark style="color:red;">**file located in the**</mark>**&#x20;`cdev_tarot > public > shared`&#x20;**<mark style="color:red;">**folder. Below is how the file should be configured to ensure everything functions properly.**</mark>

<figure><img src="../../.gitbook/assets/image (1) (1) (1).png" alt=""><figcaption></figcaption></figure>
{% endstep %}

{% step %}
### Setup Item and Images inside Ox Inventory

**Step One**

Add images to `ox_inventory/web/images` Images are available in the `cdev_tarot > images` folder of this resource.

**Step Two**

Add item to `ox_inventory/data/items.lua` like listed bellow.

```lua
["tarotminordeck"] = {
    label = "Tarot Minor Deck",
    weight = 100,
    consume = 1,
    stack = true,
    close = true,
    client = {
        image = "tarotminordeck.png",
        export = "cdev_tarot.createDeckOXItem",
        type = 'minor'
    }
},

["tarotmajordeck"] = {
    label = "Tarot Major Deck",
    weight = 100,
    consume = 1,
    stack = true,
    close = true,
    client = {
        image = "tarotmajordeck.png",
        export = "cdev_tarot.createDeckOXItem",
        type = 'major'
    }
},
["tarotmixeddeck"] = {
    label = "Tarot Mixed Deck",
    weight = 100,
    consume = 1,
    stack = true,
    close = true,
    client = {
        image = "tarotmixeddeck.png",
        export = "cdev_tarot.createDeckOXItem",
        type = 'mixed'
    }
},
```
{% endstep %}

{% step %}



{% endstep %}

{% step %}

{% endstep %}
{% endstepper %}
