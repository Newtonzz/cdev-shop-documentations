# ⚖ cDev Library

{% hint style="info" %}
**What is this resource?**

This resource serves as a library that provides support for other resources that require smart code integrations, such as our vehicle shop and other planned resources for the FiveM platform.
{% endhint %}

## INSTALLATION GUIDE

### Step 1: Verify that you have the required dependencies installed

Before you can use this resource, you'll need to make sure that you have the following resources installed:

1. [oxmysql](https://github.com/overextended/oxmysql) or mysql-async

Double-check that these resources are installed and available on your server. If you're not sure whether you have them installed, you can check your server's resource list to confirm.

{% hint style="warning" %}
While mysql-async may be an option for connecting to a MySQL database, it is not recommended due to its outdated code and poor performance. It is generally better to use a more maintained and efficient resource, such as oxmysql, for database connections. We will not provide support for mysql-async.
{% endhint %}

{% hint style="danger" %}
Before using this resource, ensure that your server's artifacts are updated to version 5904 or higher.
{% endhint %}

### Step 2: Extract the files

1. Extract the contents of the `cdev-lib.zip` folder and place the resulting folder in your server's resource directory.
2. Add the resource to your server start configuration: `ensure cdev_lib` (if you are using a framework, it must be placed below the framework resource, such as es\_extended)

{% hint style="danger" %}
Do not modify the encrypted files in any way, as this may cause issues with the resource's functionality.
{% endhint %}

Next, you will perform basic configuration on the resource.
