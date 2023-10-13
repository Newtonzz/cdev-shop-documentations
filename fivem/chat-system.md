---
description: Standalone chat system with customizeable chat channels!
---

# 💬 Chat System

## SHOWCASE VIDEO

{% embed url="https://www.youtube.com/watch?v=XVNz5jSJigY" %}

## What is this resource?

cDev Chat is an excellent way to create custom chat channels with read/write permissions that are supported for jobs, permission groups & ace permissions.&#x20;

<figure><img src="../.gitbook/assets/6aJB9nS[1].gif" alt=""><figcaption><p>Chat system showing various available channels</p></figcaption></figure>

## INSTALLATION GUIDE

### Step 1: Verify that you have the required dependencies installed

Before you can use this resource, you'll need to make sure that you have the following resources installed:

1. cdev\_lib <mark style="color:green;">(included with this resource)</mark>

### Step 2: Extract the files

1. Extract the contents of the `cdev-chat.zip` folder and place the resulting folder in your server's resource directory.

### Step 3: Delete chat related resources

1. In order for this resource to work you are required to delete the basic/default chat resource & theme & any other chat resources you may have installed.&#x20;
2. Remove **start chat** from your `server.cfg`

{% hint style="warning" %}
Make sure that cdev\_lib is started before cdev\_chat
{% endhint %}

{% hint style="danger" %}
**Do not modify the encrypted files in any way, as this may cause issues with the resource's functionality.**
{% endhint %}

{% hint style="info" %}
**ACE PERMISSIONS**

`cdev_chat.manager`
{% endhint %}
