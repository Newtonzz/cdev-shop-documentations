---
description: In-depth immersion system
---

# 👩 Advanced Needs System

Are you ready to give your character a truly immersive life experience, where self-care is as essential as it is in reality? Discover the cDev Advanced Needs System and provide your players with the depth and realism they deserve!

{% embed url="https://youtube.com/watch?v=y_Izwx7F4BY" %}

## What is this resource?

This resource is an advanced needs system designed to bring your character to life. By incorporating daily needs such as hygiene, exercise, food, and thirst, it creates a unique immersion experience. This system adds depth to everyday activities, making your character's roaming more engaging and realistic.

## INSTALLATION GUIDE

### Step 1: Verify that you have the required dependencies installed

Before you can use this resource, you'll need to make sure that you have the following resources installed:

1. cdev\_lib <mark style="color:green;">(included with this resource)</mark>
2. ox\_lib ([Download Here](https://github.com/overextended/ox\_lib/releases))

### Step 2: Extract the files

1. Extract the contents of the `cdev_needs.zip` folder and place the resulting folder in your server's resource directory.

### Step 3: Configure/Install the resource

1. Open your `server.cfg` and add the following lines
   * ensure cdev\_lib
   * ensure cdev\_needs\

2. Configure which framework you are using, go to cdev\_needs/public/settings on _line 19_ you will define your framework `qbcore`, `esx`, `creativev5`.
3. If you use Qbcore you are all set up! Now you can configure your script following the steps in [Settings Guide](https://app.gitbook.com/o/eOeRCRH5NcDQh45QRfQG/s/PhIA9eCA4bwgx77hxx4i/\~/changes/168/fivem/advanced-needs-system/settings-guide). If you are using [ESX](https://app.gitbook.com/o/eOeRCRH5NcDQh45QRfQG/s/PhIA9eCA4bwgx77hxx4i/\~/changes/168/fivem/advanced-needs-system/additional-steps-esx)[ ](https://app.gitbook.com/o/eOeRCRH5NcDQh45QRfQG/s/PhIA9eCA4bwgx77hxx4i/\~/changes/168/fivem/advanced-needs-system/additional-steps-esx)or [Creative V5](https://app.gitbook.com/o/eOeRCRH5NcDQh45QRfQG/s/PhIA9eCA4bwgx77hxx4i/\~/changes/168/fivem/advanced-needs-system/additional-steps-creative-v5), please see additional steps.

{% hint style="warning" %}
Make sure that cdev\_lib is started before cdev\_needs
{% endhint %}

{% hint style="danger" %}
**Do not modify the encrypted files in any way, as this may cause issues with the resource's functionality.**
{% endhint %}
