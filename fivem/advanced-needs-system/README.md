# 👩 Advanced Needs System

{% embed url="https://youtube.com/watch?v=y_Izwx7F4BY" %}

## What is this resource?

This advanced needs system is designed to bring your character to life, encompassing daily requirements such as hygiene, exercise, food, thirst, and more. This immersive experience adds depth and realism to your gameplay, giving you more to consider as your character navigates their daily activities.

## INSTALLATION GUIDE

### Step 1: Verify that you have the required dependencies installed

Before you can use this resource, you'll need to make sure that you have the following resources installed:

1. cdev\_lib <mark style="color:green;">(included with this resource)</mark>

**xsound is the audio resource integrated by default on this script, however you can integrate any audio resource in cdev\_lib.**

### Step 2: Extract the files

1. Extract the contents of the `cdev_needs.zip` folder and place the resulting folder in your server's resource directory.

### Step 3: Configure/Install the resource

1. Head to `config.lua` and select your framework inventory (qb, ox or custom).

* `ensure cdev_lib`
* `ensure cdev_needs`

{% hint style="warning" %}
Make sure that cdev\_lib is started before cdev\_needs
{% endhint %}

{% hint style="danger" %}
**Do not modify the encrypted files in any way, as this may cause issues with the resource's functionality.**
{% endhint %}
