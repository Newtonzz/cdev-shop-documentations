---
hidden: true
---

# Installation Guide OX Inventory

{% stepper %}
{% step %}
### Install resource from [Portal](https://portal.cfx.re/assets/granted-assets)

**After installing, you should get a zip file with the name shown below.**

* <mark style="color:yellow;">cdev\_cOne.pack.zip</mark>
{% endstep %}

{% step %}
### Create the folder and extract the zip inside it.

➤ Step 1: Create the <kbd><mark style="color:red;">cdev\_cOne<mark style="color:red;"></kbd> folder.

➤ Step 2: Extract the contents of <mark style="color:yellow;">cdev\_cOne.pack.zip</mark> into the <kbd><mark style="color:red;">cdev\_cOne<mark style="color:red;"></kbd> folder.

{% hint style="danger" %}
**It is extremely essential that the folder has the exact same name as above, otherwise the resource will not work properly.**
{% endhint %}
{% endstep %}

{% step %}
### Server.cfg Configuration

This resource must always be started **after your&#x20;**<mark style="color:yellow;">**framework**</mark>**&#x20;and any&#x20;**<mark style="color:yellow;">**other**</mark>**&#x20;required resources**.

It is essential to follow the correct startup order to ensure proper functionality and avoid conflicts.

**Below is an example screenshot showing the recommended startup order:**

<div align="left"><figure><img src="../../.gitbook/assets/image (14).png" alt=""><figcaption></figcaption></figure></div>
{% endstep %}

{% step %}
### Cdev\_cOne Configuration

🚩 <mark style="color:red;">**To work correctly, cdev\_cOne requires the proper configuration of the inventory in the**</mark>**&#x20;`config.lua`&#x20;**<mark style="color:red;">**file located in the**</mark>**&#x20;`cdev_cOne > public > shared`&#x20;**<mark style="color:red;">**folder. Below is how the file should be configured to ensure everything functions properly.**</mark>

<figure><img src="../../.gitbook/assets/image (15).png" alt=""><figcaption></figcaption></figure>

{% hint style="danger" %}
<mark style="color:yellow;">**Attention:**</mark>**&#x20;the Language configuration is set to&#x20;**<mark style="color:yellow;">**EN**</mark>**&#x20;by default because we don’t have other translation files. If you change it to another language without creating the file in the folder&#x20;**<kbd><mark style="color:yellow;">**cdev\_cOne > data > languages**<mark style="color:yellow;"></kbd>**, it will not work.**
{% endhint %}
{% endstep %}

{% step %}
### Setup Item and Images inside Ox Inventory

**Step One**

Add images to `ox_inventory/web/images` Images are available in the `cdev_cOne > images` folder of this resource.

**Step Two**

Add item to `ox_inventory/data/items.lua` like listed bellow.

```lua
["conedeck"] = {
	label = "cOne Deck",
	weight = 100,
	consume = 1,
	stack = true,
	close = true,
	client = {
		image = "conedeck.png",
		export = "cdev_cOne.createTableOXItem",
	}
},
```
{% endstep %}

{% step %}
### Using the card cOne Deck in-game

<figure><img src="../../.gitbook/assets/Give Ox.gif" alt=""><figcaption></figcaption></figure>
{% endstep %}
{% endstepper %}

