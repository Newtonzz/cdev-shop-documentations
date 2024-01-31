---
description: Images & format to add to your inventory.
---

# QB Inventory

## Step one

Add images to `qb-inventory/html/images`

Images are available in the `images` folder of this resource.

## Step two

Add items to `qb-core/shared/items.lua` like listed below

```etlua
['aboutme'] = {
    ['name'] = 'aboutme',
    ['label'] = 'About Me Box',
    ['weight'] = 100,
    ['type'] = 'item',
    ['image'] = 'aboutme.png',
    ['unique'] = true,
    ['useable'] = true,
    ['shouldClose'] = true,
    ['combinable'] = nil,
    ['description'] = 'About Me Box',
},

['fetish'] = {
    ['name'] = 'fetish',
    ['label'] = 'Fetish Box',
    ['weight'] = 100,
    ['type'] = 'item',
    ['image'] = 'fetish.png',
    ['unique'] = true,
    ['useable'] = true,
    ['shouldClose'] = true,
    ['combinable'] = nil,
    ['description'] = 'Fetish Box',
},

['morally'] = {
    ['name'] = 'morally',
    ['label'] = 'About Me Box',
    ['weight'] = 100,
    ['type'] = 'item',
    ['image'] = 'morally.png',
    ['unique'] = true,
    ['useable'] = true,
    ['shouldClose'] = true,
    ['combinable'] = nil,
    ['description'] = 'About Me Box',
},

['sensualus'] = {
    ['name'] = 'sensualus',
    ['label'] = 'Sensualus Box',
    ['weight'] = 100,
    ['type'] = 'item',
    ['image'] = 'sensualus.png',
    ['unique'] = true,
    ['useable'] = true,
    ['shouldClose'] = true,
    ['combinable'] = nil,
    ['description'] = 'Sensualus Box',
},

['truthordare'] = {
    ['name'] = 'truthordare',
    ['label'] = 'Truth or Dare Box',
    ['weight'] = 100,
    ['type'] = 'item',
    ['image'] = 'truthordare.png',
    ['unique'] = true,
    ['useable'] = true,
    ['shouldClose'] = true,
    ['combinable'] = nil,
    ['description'] = 'Truth or Dare Box',
},

['would_you_rather'] = {
    ['name'] = 'would_you_rather',
    ['label'] = 'Would you Rather Box',
    ['weight'] = 100,
    ['type'] = 'item',
    ['image'] = 'would_you_rather.png',
    ['unique'] = true,
    ['useable'] = true,
    ['shouldClose'] = true,
    ['combinable'] = nil,
    ['description'] = 'Would you Rather Box',
},
['couplesquiz'] = {
    ['name'] = 'couplesquiz',
    ['label'] = 'Couple Quiz Box',
    ['weight'] = 100,
    ['type'] = 'item',
    ['image'] = 'couplesquiz.png',
    ['unique'] = true,
    ['useable'] = true,
    ['shouldClose'] = true,
    ['combinable'] = nil,
    ['description'] = 'Couple Quiz Box',
},
```
