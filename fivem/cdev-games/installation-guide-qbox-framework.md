---
hidden: true
---

# Installation Guide QBox Framework

{% stepper %}
{% step %}
### Install all resources dependencies

Make sure you have all of the following resources installed:

* cdev\_lib <mark style="color:$success;">(Include with cdev\_games)</mark>
* cdev\_games&#x20;
{% endstep %}

{% step %}
### Extract and Create Correct Name Folder

➤ Step 1: Create the `cdev_games` folder.

* Extract the contents of <mark style="color:yellow;">cdev\_games.pack.zip</mark> into the `cdev_games` folder.
{% endstep %}

{% step %}
### Organizing Your Resource Folders

🚩<mark style="color:red;">**Correct folder organization is essential for everything to work properly.**</mark>

➤ Step 1: Create the `[cdev]` folder. Inside your server's `resources` folder and Place **only** the following resource inside:

* cdev\_games

➤ Step 2: Add `cdev_lib` to the Resources Root

**Below is an example screenshot showing the correct folder structure:**

<div align="left"><figure><img src="../../.gitbook/assets/image (3) (1) (1).png" alt=""><figcaption></figcaption></figure></div>
{% endstep %}

{% step %}
### Server.cfg Configuration

This resource must always be started **after your&#x20;**<mark style="color:yellow;">**framework**</mark>**&#x20;and any&#x20;**<mark style="color:yellow;">**other**</mark>**&#x20;required resources**.

It is essential to follow the correct startup order to ensure proper functionality and avoid conflicts.

**Below is an example screenshot showing the recommended startup order:**

<div align="left"><figure><img src="../../.gitbook/assets/image (1) (1) (1) (1) (1) (1).png" alt=""><figcaption></figcaption></figure></div>
{% endstep %}

{% step %}
### Cdev\_lib Configuration

For the game system and the connection between your <mark style="color:yellow;">framework</mark> and the resources to work correctly, you need to configure the `cdev_lib` resource properly according to your <mark style="color:yellow;">framework</mark>. For more details, click the link below to follow the instructions.

{% tabs %}
{% tab title="QBox" %}
{% content-ref url="../cdev-library/qbcore-qbox-configuration.md" %}
[qbcore-qbox-configuration.md](../cdev-library/qbcore-qbox-configuration.md)
{% endcontent-ref %}
{% endtab %}
{% endtabs %}
{% endstep %}

{% step %}
### Cdev\_games Configuration

🚩 <mark style="color:red;">To work correctly,</mark> <mark style="color:yellow;">**cdev\_games**</mark> <mark style="color:red;">requires the proper configuration of the inventory and framework in the</mark> `config.lua` <mark style="color:red;">file located in the</mark> `cdev_games` <mark style="color:red;">folder.</mark>\ <mark style="color:red;">Below is how the file should be configured to ensure everything functions properly.</mark>

<div align="left"><figure><img src="../../.gitbook/assets/image (2) (1) (1) (1) (1).png" alt=""><figcaption></figcaption></figure></div>

{% hint style="danger" %}
**If you're using a different&#x20;**<mark style="color:yellow;">**inventory**</mark>**, change the settings according to your custom inventory.**
{% endhint %}
{% endstep %}

{% step %}
### Configuring the items and images in ox\_inventory

{% tabs %}
{% tab title="OX Inventory" %}
{% content-ref url="ox-inventory.md" %}
[ox-inventory.md](ox-inventory.md)
{% endcontent-ref %}
{% endtab %}
{% endtabs %}
{% endstep %}

{% step %}
### Using the games in-game

<figure><img src="../../.gitbook/assets/FiveM_GTAProcess_er4jlmGEYJ-_online-video-cutter.com_.gif" alt=""><figcaption></figcaption></figure>

{% hint style="info" %}
T**o interact between the "**<mark style="color:red;">**Read Cards**</mark>**" and "**<mark style="color:red;">**Pickup Cards**</mark>**" menus, use the&#x20;**<mark style="color:yellow;">**mouse**</mark>**&#x20;scroll up and down.**
{% endhint %}
{% endstep %}
{% endstepper %}

