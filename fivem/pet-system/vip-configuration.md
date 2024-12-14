---
description: how to set up the VIP system for cdev_pets
---

# VIP Configuration

{% hint style="info" %}
If you need any help with this, please make a ticket, Ash can guide you through the process if you have any questions on the steps below
{% endhint %}

## Step 1 - Create a discord bot&#x20;

This is so the script can grab what players have what roles

* Head to [https://discord.com/developers/applications](https://discord.com/developers/applications)
* Click New Application on the top right
* Finish creating the bot

{% hint style="warning" %}
Make sure your bot has the server members intent checked on the "bot" page of your bot
{% endhint %}

## Step 2 - Invite the bot to your discord server

{% hint style="warning" %}
Make sure that you put the bots role above your basic member role in your roles settings
{% endhint %}

## Step 3 - Head to `cdev_lib/public/server/api.lua` and fill out the information at the top:

`clib_API.DiscordGuildId` is your servers guild id, \
( you can get this by right clicking your server and pressing Copy Server ID )\
\
`clib_API.DiscordBotToken` is the token from the bot you created\
( you can find this on the bot tab of your bot )

## Step 4 - Head to `cdev_lib/public/config/config.lua`&#x20;

make sure that`UseVIPSystem = true`\
add your role ID's in `VIPRoleIds`

## Step 5 - Head to `cdev_pets/public/config/config.lua`

make sure that `UseVIPSystem = true`

## Step 6 - You are done! Test it out!
