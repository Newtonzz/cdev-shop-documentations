---
description: Standalone advanced Pet System
---

# 🐶 Pet System

## SHOWCASE VIDEO

{% embed url="https://youtu.be/9perfvfwDF0" %}

## What is this resource?

This resource is a companionship script that provides entertainment, customization of appearance and other refined details ([features listed here](https://fivem.cdev.shop/category/scripts)) that makes this the best pet script for your **FiveM** server.

## Instructional Video: Setting up Shops

{% embed url="https://www.youtube.com/watch?v=-_eOmtHj4Vk" %}

## INSTALLATION GUIDE

<details>

<summary>Step 1: Verify that you have the required dependencies installed</summary>

Before you can use this resource, you'll need to make sure that you have the following resources installed:

1. cdev\_lib <mark style="color:green;">(included with this resource)</mark>
2. cdev\_pets <mark style="color:green;">(included with this resource)</mark>
3. cdev\_pets\_assets <mark style="color:green;">(included with this resource)</mark>
4. cdev\_pets\_assets2 <mark style="color:green;">(included with this resource)</mark>

</details>

<details>

<summary>Step 2: Extract the files</summary>

1. Extract the contents of the `cdev-pets.zip` folder and place the resulting folder in your server's resource directory.

2) Extract the contents of the `cdev_pets_assets` and `cdev_pets_assets2` folder and place the resulting folder in your server's resource directory.

3. Extract the contents of the `cDev Pets Assets Premium - Rottweiler` , `cDev Pets Assets Premium - Dobbermann` and `cDev - Cat American` folder and place the resulting folder in your server's resource directory.

4) Additional step if you have the Pets Premium Sub, extract the contents of the:\
   \
   `cDev Pets Assets Premium - Bully`\
   `cDev Pets Assets Premium - Chow-Chow`\
   `cDev Pets Assets Premium - Dobbermann`\
   `cDev Pets Assets Premium - French Bulldog`\
   `cDev Pets Assets Premium - Golden Retriever`\
   `cDev Pets Assets Premium - Husky`\
   `cDev Pets Assets Premium - Rottweiler`\
   `cDev Pets Assets Premium - Shepherd`\
   `cDev Pets Assets Premium - Belgian Malinois`\
   `cDev Pets Assets Premium - Dalmation`\
   `cDev Pets Assets Premium - Pittbull`\
   `cDev Pets Assets Premium - Cat Turkish`\
   `cDev - Cat American`\
   \
   folders and place the resulting folder in your server's resource directory.

</details>

<details>

<summary>Step 3: Ensure the files in your server.cfg</summary>

### If you have the base Pets script, ensure them in this order:

```
ensure cdev_lib
ensure cdev_pets_assets
ensure cdev_pets_assets2
ensure cdev_cat_amer
ensure cdev_dog_rott
ensure cdev_dog_dobb
ensure cdev_pets
```

### If you have the Pets Premium Subscription, ensure them in this order:

```lua
ensure cdev_lib
ensure cdev_pets_assets
ensure cdev_pets_assets2
ensure cdev_cat_amer
ensure cdev_cat_turk
ensure cdev_dog_bully
ensure cdev_dog_chow
ensure cdev_dog_dal
ensure cdev_dog_dobb
ensure cdev_dog_frbull
ensure cdev_dog_golden
ensure cdev_dog_husky
ensure cdev_dog_mal
ensure cdev_dog_minipitt
ensure cdev_dog_pitt
ensure cdev_dog_rott
ensure cdev_dog_shep
ensure cdev_pets

[or]

-- create a [cdev] folder, place cdev_lib and scripts in here 
-- create a [cdev_assets] folder inside of [cdev]
-- place assets, dogs, cats, and mlo inside this folder
-- ensure like below:
ensure cdev_lib
ensure [cdev_assets]
ensure [cdev]
```

</details>

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

