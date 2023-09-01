# Text UI Exports

* OpenTextUI
* CloseTextUI

**Server events**

* cdev\_notify:openTextUI
* cdev\_notify:closeTextUI

## Example export

```lua
exports["cdev_notify"]:OpenTextUI("Open Door", "E")
--
exports["cdev_notify"]:CloseTextUI("E")
```

## Example server event

```lua
TriggerClientEvent("cdev_notify:openTextUI", source, "Open Door", "E")
--
TriggerClientEvent("cdev_notify:closeTextUI", source, "E")
```

{% hint style="warning" %}
**Parameters of either exports and events are:**&#x20;

title, key, color (optional, default from configuration)

You can open multiple text UI for different keys, and close them providing the same key as in the example
{% endhint %}
