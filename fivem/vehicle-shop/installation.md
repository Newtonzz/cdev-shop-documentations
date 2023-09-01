# Installation

{% hint style="warning" %}
**DISCLAIMER:** Please follow the setup guide of [cDev Library](../cdev-library/) first.
{% endhint %}

## INSTALLATION GUIDE

### Step 1: Verify that you have the required dependencies installed

Before you can use this resource, you'll need to make sure that you have the following resources installed:

1. cdev\_lib <mark style="color:green;">(included with this resource)</mark>
2. screenshot-basic <mark style="color:orange;">(optional)</mark>&#x20;

Double-check that these resources are installed and available on your server. If you're not sure whether you have them installed, you can check your server's resource list to confirm.

{% hint style="info" %}
While screenshot-basic is optional it is required if you want to use our built-in vehicle thumbnail generator
{% endhint %}

{% hint style="danger" %}
Before using this resource, ensure that your server's artifacts are updated to version 5904 or higher.
{% endhint %}

### Step 2: Extract the files

1. Extract the contents of the `cdev-vehicleshop.zip` folder and place the resulting folder in your server's resource directory.
2. Add the resource to your server start configuration: `ensure cdev_lib` (if you are using a framework, it must be placed below the framework resource, such as es\_extended)

{% hint style="warning" %}
Make sure that cdev\_lib is started before cdev\_vehicleshop
{% endhint %}

{% hint style="danger" %}
Do not modify the encrypted files in any way, as this may cause issues with the resource's functionality.
{% endhint %}

Next, you will perform basic configuration on the resource.
