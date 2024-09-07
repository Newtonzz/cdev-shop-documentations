---
description: Loan, bank accounts, card and payment systems with ATM's
hidden: true
---

# 💰 Banking

## SHOWCASE VIDEO COMING

## What is this resource?

This resource provides an overall integration of the finances for your FiveM server, we provide various features to enhance the general possibilities for players in terms of loans, credit scores and more!

* ATM's
* Loan System
* Payment Request machines for business owners, players can select which card to pay with.&#x20;
* Invoice system
* Create creditcards on the go

## INSTALLATION GUIDE

### Step 1: Verify that you have the required dependencies installed

Before you can use this resource, you'll need to make sure that you have the following resources installed:

1. cdev\_lib <mark style="color:green;">(included with this resource)</mark>

**xsound is the audio resource integrated by default on this script, however you can integrate any audio resource in cdev\_lib.**

### Step 2: Extract the files

1. Extract the contents of the `cdev_banking.zip` folder and place the resulting folder in your server's resource directory.

### Step 3: Configure/Install the resource

1. Head to `config.lua` and select your framework inventory (qb, ox or custom).

* `ensure cdev_lib`
* `ensure cdev_banking`

{% hint style="warning" %}
Make sure that cdev\_lib is started before cdev\_banking
{% endhint %}

{% hint style="danger" %}
**Do not modify the encrypted files in any way, as this may cause issues with the resource's functionality.**
{% endhint %}
