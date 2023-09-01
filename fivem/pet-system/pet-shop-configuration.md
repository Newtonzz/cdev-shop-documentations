# Pet Shop Configuration

## Integration

By default, the pet shop can be accessed from your pet bag menu. If you want to open the shop through another way, first disable the button in the config file by setting&#x20;

<pre class="language-lua" data-title="cdev_pets/public/config/config.lua" data-full-width="false"><code class="lang-lua"><strong>WantPetShopButton = false,
</strong></code></pre>

&#x20;and then you need to trigger this event from your own script:

```lua
TriggerEvent("cdev_pets:loadShop")
```

## Example: using Target to load the shop

<figure><img src="../../.gitbook/assets/image (1).png" alt=""><figcaption></figcaption></figure>

```lua
    {
        coords = vec3(-1043.8, -2688.55, 13.75), -- just random location
        size = vec3(2.0, 2.0, 2.0),
        rotation = 288.21,
        event = 'cdev_pets:loadShop', -- the client event that triggers open shop
        icon = 'fa-solid fa-dog',
        label = 'Open Pet Shop',
    },
```

## Modifying Shop Items

Shop items are available in `cdev_pets/public/config/shop.lua`&#x20;

```lua
    {
        key = "pet_chop",
        label = "Hottweiler (Female)",
        price = 5000,
        category = "pet_category_dog",
        description = "A Hottweiler",
        customization = {
            drawables = {
                ["4"] = 1,
            }
        },
    },
```

* `key` - Item id (from items.lua)
  * When adding a pet entry, this id should be the same from pets.lua instead.
* `label` - **Only required for pet entries**, otherwise automatically obtained from items.lua
* `price` - Cost of the item
* `category` - Item category on the shop, categories are in the `config.lua` file under "Shop"
* `description` - **Only required for pet entries**, otherwise automatically obtained from items.lua
* `customization` - **Optional for pet entries,** this pet will automatically start with this customization
  * drawables
    * `["componentId"] = drawableId`&#x20;
  * textures
    * `["componentId"] = textureId`&#x20;
* `vip` - If true and if VIP enabled in the config, item will have golden highlight and only be purchaseable if has VIP status
