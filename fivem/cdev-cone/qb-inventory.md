# QB Inventory

## Step one

Add images to `qb-inventory/html/images`

Images are available in the `images` folder of this resource.

## Step two

Add items to `qb-core/shared/items.lua` like listed below&#x20;

```lua
['conedeck'] = {
    ['name'] = 'conedeck',
    ['label'] = 'cOne Deck',
    ['weight'] = 100,
    ['type'] = 'item',
    ['image'] = 'conedeck.png',
    ['unique'] = true,
    ['useable'] = true,
    ['shouldClose'] = true,
    ['combinable'] = nil,
    ['description'] = 'cOne Deck',
},
```
