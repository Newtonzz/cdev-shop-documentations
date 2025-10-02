# Ox Inventory

### Step One <a href="#step-two" id="step-two"></a>

Add images to `ox_inventory/web/images`Images are available in the `images` folder of this resource.

### Step two <a href="#step-two" id="step-two"></a>

Add items to `ox_inventory/data/items.lua` like listed below

```lua
["tarotminordeck"] = {
	label = "Tarot Minor Deck",
	weight = 100,
	consume = 1,
	stack = true,
	close = true,
	client = {
		image = "tarotminordeck.png",
		export = "cdev_tarot.createDeckOXItem",
		type = 'minor'
	}
},

["tarotmajordeck"] = {
	label = "Tarot Major Deck",
	weight = 100,
	consume = 1,
	stack = true,
	close = true,
	client = {
		image = "tarotmajordeck.png",
		export = "cdev_tarot.createDeckOXItem",
		type = 'major'
	}
},
```
