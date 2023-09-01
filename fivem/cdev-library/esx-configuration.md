---
description: >-
  This page provides information and guidance on how to configure cDev Library
  for ESX
---

# ESX Configuration

In order to edit optional configuration for ESX you simply have to edit the following file:

```
cdev_lib/public/config/esx/esx_config.lua
```

{% hint style="info" %}
You can modify all config properties inside the PublicESXConfig table.

Each property has its own description so you can understand what it does.
{% endhint %}

{% hint style="info" %}
Unless you have modified core aspects of your framework you don't have to worry about most of the configuration in this file.
{% endhint %}

<mark style="color:orange;">(Optional)</mark> Read more about permissions:

* [Permissions](permissions.md)
