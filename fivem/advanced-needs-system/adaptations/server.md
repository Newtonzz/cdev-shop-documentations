# Server

## How to adapt 'public' to a non-supported inventory

Setting functions

<details>

<summary>CreateItem</summary>

* _Description:_ This function is responsible to create an new item inside the item list.
  * _<mark style="color:orange;">Not all the inventory has the exports that makes possible to use this function, in this particular case you will need to add manually both of these items along with all the consumables. You will need to create the items with the exactly name as below.</mark>_
    * {% code title="Item names" overflow="wrap" %}
      ```
      sleepingbag
      emptybottle
      ```
      {% endcode %}
* _How to:_ You will need to use the documentation of your own inventory and verify if there is an export that can do this, in case the export exist, clear code inside 'CreateItem' and put the export following the documentation of your inventory.
* _Example: In this example we will be using the inventory from "QbCore"_&#x20;

```lua
--- @param itemName string Item name.
--- @param label string Label.
--- @param weight number Weight in grams.
--- @param description string Description.
function CreateItem(itemName, label, weight, description)
    QBCore.Functions.AddItem(itemName, {
        name = itemName,
        label = label,
        weight = weight,
        type = "item",
        image = itemName .. ".png",
        unique = true,
        useable = false,
        shouldClose = false,
        combinable = nil,
        description = description,
    })
end
```

</details>

<details>

<summary>RegisterItemAsUsable</summary>

* _Description:_ This function is responsible to register a callback for when the item is used.
* _How to:_ You will need to use the documentation of your own inventory to be able to identify the export name after that, clear code inside 'RegisterItemAsUsable' and put the export following the documentation of your inventory.
* _Example: In this example we will be using the inventory from "qb-inventory"_&#x20;

```lua
--- @param itemName string Item name.
--- @param callback function Callback funtion.
function RegisterItemAsUsable(itemName, callback)
    QBCore.Functions.CreateUseableItem(itemName, callback)
end
```

</details>

<details>

<summary>AddItem</summary>

* _Description:_ This function is responsible to add an item to the inventory of the player.
* _How to:_ You will need to use the documentation of your own inventory to be able to identify the export name after that, clear code inside 'AddItem' and put the export following the documentation of your inventory.
* _Example: In this example we will be using the inventory from "qb-inventory"_&#x20;

```lua
--- @param src number Player source.
--- @param itemName string Item name.
--- @param amount number Amount to add.
--- @return boolean
function AddItem(src, itemName, amount)
    return exports["qb-inventory"]:AddItem(src, itemName, amount)
end
```

</details>

<details>

<summary>RemoveItem</summary>

* _Description:_ This function is responsible to remove an item to the inventory of the player.
* _How to:_ You will need to use the documentation of your own inventory to be able to identify the export name after that, clear code inside 'RemoveItem' and put the export following the documentation of your inventory.
* _Example: In this example we will be using the inventory from "qb-inventory"_&#x20;

```lua
--- @param src number Player source.
--- @param itemName string Item name.
--- @param amount number Amount to remove.
--- @return boolean
function RemoveItem(src, itemName, amount)
    return exports["qb-inventory"]:RemoveItem(src, itemName, amount)
end
```

</details>

<details>

<summary>GetItemCount</summary>

* _Description:_ This function is responsible to obtain the count of a specify item, inside the inventory of the player.
* _How to:_ You will need to use the documentation of your own inventory to be able to identify the export name after that, clear code inside 'GetItemCount' and put the export following the documentation of your inventory.
* _Example: In this example we will be using the inventory from "qb-inventory"_&#x20;

```lua
--- @param src number Player source.
--- @param itemName string Item name.
--- @return boolean
function GetItemCount(src, itemName)
    local slots <const> = exports["qb-inventory"]:GetItemsByName(src, itemName)

    local count = 0

    for _, slot in pairs(slots) do
        count = count + slot.amount
    end

    return count
end
```

* _<mark style="color:orange;">In this case was necessary to do for looping, because the export of the qb-inventory returns an object with each slot and quantity. In case the export of your inventory return an number, just call the export.</mark>_

</details>
