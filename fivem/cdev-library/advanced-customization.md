---
description: >-
  The cDev Library offers a wide range of customization options, including the
  ability to customize nearly all aspects of it. This is possible even if you
  are using a custom framework
---

# Advanced Customization

If you are using a custom framework make sure to set your **Framework** to `custom` in

```
cdev_lib/public/config/config.lua
```

Regardless of the framework you are using (such as ESX or QBCore), you can customize all aspects of the resource by modifying the client and server folders located in

```
cdev_lib/public/client/
cdev_lib/public/server/
```

These folders contain all the necessary functions in the `api.lua` file, which are commented to provide information on their purpose and allow you to tailor them to your specific needs.
