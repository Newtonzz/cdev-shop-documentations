# Client

## How to adapt \`public\` to a non-supported inventory

Setting functions

<details>

<summary>ProgressBar</summary>

* _Description:_ This function is responsible to trigger your progress bar.
* _How to:_ You will need to use the documentation of your own progress bar to be able to identify the export name after that, clear code inside 'ProgressBar' and put the export following the documentation of your progress bar.
* _Example: In this example we will be using the progress bar default of FiveM._&#x20;

```lua
--- @param name string Progressbar identifier.
--- @param label string The label that will be shown in the progressbar.
--- @param duration number Duration of the progressbar in milliseconds.
function ProgressBar(name, label, duration)
    exports["progressbar"]:Progress({
        name = name,
        duration = duration,
        label = label,
        useWhileDead = false,
        canCancel = false,
        controlDisables = {
            disableMovement = false,
            disableCarMovement = false,
            disableMouse = false,
            disableCombat = true,
        },
    })
end
```

* _<mark style="color:orange;">In case your export is asynchronous, you will need to create an threat before calling the export.</mark>_

</details>

<details>

<summary>CloseInventory</summary>

* _Description:_ This function is responsible to close inventory.
* _How to:_ You will need to use the documentation of your own inventory to be able to identify the export name after that, clear code inside 'CloseInventory' and put the export following the documentation of your progress bar.
* _Example: In this example we will be using 'qb-inventory'._

```lua
--- @return boolean
function CloseInventory()
    TriggerEvent("qb-inventory:client:closeinv")
end
```

</details>

<details>

<summary>BlockInventory</summary>

* _Description:_ This function is responsible to block inventory actions.
* _How to:_ You will need to use the documentation of your own inventory to be able to identify the export name after that, clear code inside 'BlockInventory' and put the export following the documentation of your progress bar.
* _Example: In this example we will be using 'ox-inventory'._

```lua
--- @param state boolean
function BlockInventory(state)
    LocalPlayer.state:set("invBusy", state, false)
end
```

</details>

Setting Events

<details>

<summary>cdev_needs:client:notify</summary>

* _Description:_ This event is responsible for creating a notification. By default we set up to use the needs notification, but you like to change this is the event.
* _How to:_ You will need to use the documentation of your own notifications to be able to identify the export name after that, clear code inside 'cdev\_needs:client:notify' and put the export following the documentation of your notification script.
* _Example: In this example we will be using 'cdev\_needs'._

```lua
--- @param _type string Notify type. success / error / information.
--- @param message string Notify title.
--- @param message string Notify description.
--- @param duration number Notify duration in milliseconds.
RegisterNetEvent("cdev_needs:client:notify", function(_type, title, description, duration)
    exports["cdev_needs"]:notify(_type, title, description, duration or 5000)
end)
```

</details>

<details>

<summary>cdev_needs:client:handledItemNotification</summary>

* _Description:_ This event is responsible for creating a notification of entry and exit of an item.&#x20;
* _How to:_ You will need to use the documentation of your own inventory to be able to identify the export name after that, clear code inside 'cdev\_needs:client:handledItemNotification' and put the export following the documentation of your inventory.
* _Example: In this example we will be using 'qb-inventory'._

```lua
--- @param itemName string Item name.
--- @param amount number Item amount.
--- @param action string Action description. add / remove
RegisterNetEvent("cdev_needs:client:handledItemNotification", function(itemName, amount, action)
    TriggerEvent("inventory:client:ItemBox", QBCore.Shared.Items[itemName], action)
end)
```

</details>
