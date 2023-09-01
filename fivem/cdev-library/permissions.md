# Permissions

To set the permission levels for each group within your framework, you can refer to this QBCore configuration file example

```
-- 👮 Determine permission levels for each QBCore group
-- 📣 PERMISSION_LOW = Lowest permission level
-- 📣 PERMISSION_MEDIUM = Medium permission level
-- 📣 PERMISSION_HIGH = Highest permission level
-- 📣 Permission level requirements are defined in the config for each resource
PermissionLevel = {
    god = PERMISSION_HIGH,
    admin = PERMISSION_HIGH,
    mod = PERMISSION_MEDIUM,
},
```

Here "god", "admin", and "mod" represent specific permission groups within the QBCore framework. Each of these groups is assigned a particular permission level, which determines the actions that users within these groups are able to perform.

{% hint style="info" %}
`PERMISSION_HIGH` represents the highest permission level.

`PERMISSION_MEDIUM` represents the medium permission level.

`PERMISSION_LOW` represents the lowest permission level.

`PERMISSION_NONE` represents no permission level.
{% endhint %}

{% hint style="info" %}
On individual cDev resources, you may find configuration parameters that specify the permission levels required for certain actions.&#x20;

For example, the `ShopCreatorPermissionLevel` parameter in the Vehicle Shop resource typically requires the `PERMISSION_HIGH` level. This means that only users in the "god" and "admin" permission groups would be able to access the shop creator.
{% endhint %}
