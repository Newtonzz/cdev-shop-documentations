---
description: Questions, Truth or Dare & Spin the Bottle
---

# 🎉 cDev Games

## SHOWCASE VIDEO COMING

## What is this resource?

This resource provides quick and easy entertainment including two games

* Truth or Dare (by spinning a custom 3d model bottle)
* Questions Game (configurable by choice in `config.lua`

## INSTALLATION GUIDE

### Step 1: Verify that you have the required dependencies installed

Before you can use this resource, you'll need to make sure that you have the following resources installed:

1. cdev\_lib <mark style="color:green;">(included with this resource)</mark>

**xsound is the audio resource integrated by default on this script, however you can integrate any audio resource in cdev\_lib.**

### Step 2: Extract the files

1. Extract the contents of the `cdev_games.zip` folder and place the resulting folder in your server's resource directory.

### Step 3: Configure/Install the resource

1. Head to `config.lua` and select your framework inventory (qb, ox or custom).
2. Add the inventory images & item data by checking the guide for [OX Inventory ](ox-inventory.md)or [QB Inventory](qb-inventory.md)&#x20;
3. add the listed convars for your `server.cfg` below **after** your framework and inventory

* `ensure cdev_lib`
* `ensure cdev_games`

{% hint style="warning" %}
Make sure that cdev\_lib is started before cdev\_games
{% endhint %}

{% hint style="danger" %}
**Do not modify the encrypted files in any way, as this may cause issues with the resource's functionality.**
{% endhint %}
