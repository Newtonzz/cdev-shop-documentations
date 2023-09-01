# Item Configuration

{% hint style="info" %}
Pet items are only available for pets, these items cannot be used in an external inventory
{% endhint %}

Items for the pet's inventory can be edited in:

`cdev_pets/public/config/items.lua`

## Item Structure

```lua
    ["baseball"] = {
        label = "Baseball",
        category = ECategoryInventoryPets.BALLS,
        stack = true,
        description = "A great option for playing with pets, especially dogs. They are simple, straightforward, and effective toys that can be used for playing fetch or rolling around the house or yard.",
        metadata = {},
        usable = true,
        onUse = {
            event = "cdev_pets:useBall",
            data = {},
            net = false,
            close = true,
            preventRestoreState = true,
        }
    },
```

* `["baseball"]` - Item id (will be used to spawn this item and saving on db)
* `label` - Item's display name
* `category` - Item's category for inventory filter, categories are:
  * `ECategoryInventoryPets.COLLAR` - **Collar**
  * `ECategoryInventoryPets.FUR` - **Fur**
  * `ECategoryInventoryPets.LEASH`- **Leash**
  * `ECategoryInventoryPets.BOWL`- **Bowl**
  * `ECategoryInventoryPets.CLOTHES`- **Clothes**
  * `ECategoryInventoryPets.BALLS`- **Balls**
  * `ECategoryInventoryPets.FOOD`- **Food**
  * `ECategoryInventoryPets.DRINKS`- **Drinks**
* `stack` - Whether item stacks
* `description` - Item's display description
* `metadata` - Persistent data to be saved with the item on DB
* `usable` - Whether item can be right clicked to use
* `onUse` - Usage information
  * `event` - Event triggered when using
  * `data` - Data passed to event
  * `net` - Determine if the event is networked or not
  * `close` - Close inventory on use
  * `preventRestoreState` - Prevent pet from restoring back to it's previous state, **only used internally**.
* `isPremiumPackage` - **Only used internally.**

## Adding custom bowls, beds and so on.

Adding custom assets to this pet script is fairly simple, simply copy an item entry from this file that matches the custom asset you're trying to add, edit the properties to your liking and you're set.

## Adding Inventory Icons

Inventory icons can be changed/added in `cdev_lib/nui/dist/pets/inventory` . Make sure to name the icon to the item id and save format as png.
