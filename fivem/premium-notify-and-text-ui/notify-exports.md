# Notify Exports

* Notify
* Success
* Info
* Warning
* Error
* Phone

## **Example export**

```lua
exports["cdev_notify"]:Success("You did it!", "You sent a notification!", 3000)
```

## **Example server event**

```lua
TriggerClientEvent("cdev_notify:success", source, "You did it!", "You sent a notification!", 3000)
```

## Server Events

* cdev\_notify:notify
* cdev\_notify:success
* cdev\_notify:info
* cdev\_notify:warning
* cdev\_notify:error
* cdev\_notify:phone

{% hint style="warning" %}
**Parameters of either exports and events are:**

title, message, duration, playSfx (optional, default from configuration)

Alternatively, you can use export Notify and event cdev\_notify:notify providing the first parameter type which can be "warning", "success" etc.
{% endhint %}
