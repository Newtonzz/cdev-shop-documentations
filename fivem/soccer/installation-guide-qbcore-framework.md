---
hidden: true
---

# Installation Guide QBCore Framework

{% stepper %}
{% step %}
### Install all resources dependencies

Make sure you have all of the following resources installed:

* cdev\_lib <mark style="color:green;">(included with this resource)</mark>
* cdev\_soccer
* xsound [<mark style="color:orange;">(download here)</mark>](https://github.com/Xogy/xsound)
* PolyZone [(download here)](https://github.com/mkafrin/PolyZone/releases/tag/v2.6.1)
{% endstep %}

{% step %}
### Extract Ziped File

* Extract the contents of <mark style="color:yellow;">cdev\_soccer.pack.zip</mark> after extract should contain the `cdev_soccer` folder.
{% endstep %}

{% step %}
### Organizing Your Resource Folders

🚩<mark style="color:red;">**Correct folder organization is essential for everything to work properly.**</mark>

➤ Step 1: Create the `[cdev]` folder. Inside your server's `resources` folder and Place **only** the following resource inside:

* cdev\_soccer

➤ Step 2: Add `cdev_lib` to the Resources Root

➤ Step 3: Add `xsound` to the Resources Root

➤ Step 4: Add `PolyZone` to the Resources Root

**Below is an example screenshot showing the correct folder structure:**

<div align="left"><figure><img src="../../.gitbook/assets/FoldersImage.png" alt=""><figcaption></figcaption></figure></div>
{% endstep %}

{% step %}
### Server.cfg Configuration

This resource must always be started **after your&#x20;**<mark style="color:yellow;">**framework**</mark>**&#x20;and any&#x20;**<mark style="color:yellow;">**other**</mark>**&#x20;required resources**.

It is essential to follow the correct startup order to ensure proper functionality and avoid conflicts.

**Below is an example screenshot showing the recommended startup order:**

<div align="left"><figure><img src="../../.gitbook/assets/Soocer CFG.png" alt=""><figcaption></figcaption></figure></div>
{% endstep %}

{% step %}
### Cdev\_lib Configuration

For the game system and the connection between your <mark style="color:yellow;">framework</mark> and the resources to work correctly, you need to configure the `cdev_lib` resource properly according to your <mark style="color:yellow;">framework</mark>. For more details, click the link below to follow the instructions.

{% tabs %}
{% tab title="QBCore" %}
{% content-ref url="../cdev-library/qbcore-qbox-configuration.md" %}
[qbcore-qbox-configuration.md](../cdev-library/qbcore-qbox-configuration.md)
{% endcontent-ref %}
{% endtab %}
{% endtabs %}
{% endstep %}

{% step %}
### Cdev\_soccer Configuration

🚩 <mark style="color:red;">To work correctly,</mark> <mark style="color:yellow;">**cdev\_soccer**</mark> <mark style="color:red;">requires the proper configuration of the polyzone in the</mark> `config.lua` <mark style="color:red;">file located in the</mark> `cdev_soccer > public > config > config.lua` <mark style="color:red;">folder.</mark>\ <mark style="color:red;">Below is how the file should be configured to ensure everything functions properly.</mark>

<div align="left"><figure><img src="../../.gitbook/assets/image.png" alt=""><figcaption></figcaption></figure></div>
{% endstep %}

{% step %}
### Starting match in-game

**Location Default Field:** `vec4(770.54, -214.28, 66.11, 322.44)`

<figure><img src="../../.gitbook/assets/FiveM_GTAProcess_3PhcGEZBei (online-video-cutter.com).gif" alt=""><figcaption></figcaption></figure>
{% endstep %}
{% endstepper %}

