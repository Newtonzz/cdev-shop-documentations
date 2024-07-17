# Additional Steps: Creative V5

1. Copy the `Creative V5` paste located in`cdev_needs/additional files`.\

2. Paste it into `cdev_needs/public` (If asked to replace files, replace).\

3. Delete the zip inside `cdev_needs/public`.\

4. Add these two items to your item list&#x20;

```lua
["sleepingbag"] = {
    ["index"] = "sleepingbag",
    ["name"] = "Sleeping Bag",
    ["type"] = "Comum",
    ["weight"] = 0.5,
},
["emptybottle"] = {
    ["index"] = "emptybottle",
    ["name"] = "Water Bottle",
    ["type"] = "Comum",
    ["weight"] = 0.5,
},
```

5. Please find the block "usável" and after all those items listed, add the TriggerEvent as shown below:

```lua
TriggerEvent("cdev_needs:server:itemUsed", source, nameItem)
```

{% hint style="info" %}
By default in the Creative V5 inventory you will find this block around the line 4105, but don't trust this information, **check for yourself** where the "usável" category is within the **useItem event**.&#x20;
{% endhint %}

{% hint style="warning" %}
You have to put the trigger at the end of all the items that are inside the "usável" block. If you put before the items might not work.
{% endhint %}

6. You are all set up! Now you can configure your script following the steps in [Settings Guide](https://app.gitbook.com/o/eOeRCRH5NcDQh45QRfQG/s/PhIA9eCA4bwgx77hxx4i/\~/changes/168/fivem/advanced-needs-system/settings-guide).
