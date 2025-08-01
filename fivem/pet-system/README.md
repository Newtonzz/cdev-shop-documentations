---
description: Standalone advanced Pet System
---

# 🐶 Pet System

## SHOWCASE VIDEO

{% embed url="https://youtu.be/9perfvfwDF0" %}

## What is this resource?

This resource is a companionship script that provides entertainment, customization of appearance and other refined details ([features listed here](https://fivem.cdev.shop/category/scripts)) that makes this the best pet script for your **FiveM** server.

## Instructional Video: Setting up Shops

📝 **Creating Shop Command:** `/pscreator`

{% embed url="https://www.youtube.com/watch?v=-_eOmtHj4Vk" %}

### Installation Guide

***

{% stepper %}
{% step %}
## Install all resource dependencies

Make sure you have all of the following resources installed:

* cdev\_lib <mark style="color:green;">(Include with cdev\_pets)</mark>
* cdev\_pets
* cdev\_pets\_assets <mark style="color:green;">(Include with cdev\_pets)</mark>
* cdev\_pets\_assets2  <mark style="color:green;">(Include with cdev\_pets)</mark>
{% endstep %}

{% step %}
## Organizing Your Resource Folders

🚩 <mark style="color:red;">**Correct folder organization is essential for everything to work properly.**</mark>

➤ Step 1: Create the `[cdev]` folder. Inside your server's `resources` folder and Place **only** the following resource inside:

* cdev\_pets

➤ Step 2: Create the `[cdev_assets]` folder till inside your server’s `resources` folder, Inside `[cdev_assets]`, place the following assets:

* cdev\_cat\_amer
* cdev\_dog\_dobb
* cdev\_dog\_rott
* cdev\_pets\_assets
* cdev\_pets\_assets2

⚠ <mark style="color:yellow;">**If you have the subscription package, then you will receive some additional resources, and your**</mark> <kbd>**\[cdev\_assets]**</kbd> <mark style="color:yellow;">**folder should contain**</mark>**&#x20;**<mark style="color:red;">**only**</mark>**&#x20;**<mark style="color:yellow;">**the following resources.**</mark>

* cdev\_petshop
* cdev\_pets\_assets
* cdev\_pets\_assets2
* cdev\_dog\_pets
* cdev\_cat\_pets

➤ Step 3: Add `cdev_lib` to the Resources Root

**Below is an example screenshot showing the correct folder structure:**

<div align="left"><figure><img src="../../.gitbook/assets/folcders.png" alt=""><figcaption></figcaption></figure></div>
{% endstep %}

{% step %}
## Server.cfg Configuration

This resource must always be started **after your&#x20;**<mark style="color:yellow;">**framework**</mark>**&#x20;and any&#x20;**<mark style="color:yellow;">**other**</mark>**&#x20;required resources**.

It is essential to follow the correct startup order to ensure proper functionality and avoid conflicts.

**Below is an example screenshot showing the recommended startup order:**

<div align="left"><figure><img src="../../.gitbook/assets/cfg.png" alt=""><figcaption></figcaption></figure></div>
{% endstep %}

{% step %}
### Cdev\_lib Configuration

For the pet system and the connection between your <mark style="color:yellow;">framework</mark> and the resources to work correctly, you need to configure the `cdev_lib` resource properly according to your <mark style="color:yellow;">framework</mark>. For more details, click the link below to follow the instructions.

{% tabs %}
{% tab title="ESX" %}
{% content-ref url="../cdev-library/esx-configuration.md" %}
[esx-configuration.md](../cdev-library/esx-configuration.md)
{% endcontent-ref %}
{% endtab %}

{% tab title="QBCore/QBOX" %}
{% content-ref url="../cdev-library/qbcore-qbox-configuration.md" %}
[qbcore-qbox-configuration.md](../cdev-library/qbcore-qbox-configuration.md)
{% endcontent-ref %}
{% endtab %}

{% tab title="Custom Framework" %}
{% content-ref url="../cdev-library/advanced-customization.md" %}
[advanced-customization.md](../cdev-library/advanced-customization.md)
{% endcontent-ref %}
{% endtab %}
{% endtabs %}


{% endstep %}
{% endstepper %}

***

{% hint style="danger" %}
To be able to stream the pets and clothing in game, you must have an active CFX Element Club Subscription!\
\
You can check [HERE](https://portal.cfx.re/subscriptions) to see any active subscriptions
{% endhint %}

{% hint style="danger" %}
**Do not modify the encrypted files in any way, as this may cause issues with the resource's functionality.**
{% endhint %}

{% hint style="warning" %}
cDev Pets Version 2.5.0  requires users that already have this script running to run a query to add new columns to a table;

\
`ALTER TABLE cdev_pets ADD sniff INT(11) NOT NULL, ADD resistance INT(11) NOT NULL, ADD agility INT(11) NOT NULL, ADD attack INT(11) NOT NULL;`
{% endhint %}

