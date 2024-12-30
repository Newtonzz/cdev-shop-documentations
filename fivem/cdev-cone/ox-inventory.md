# Ox Inventory

## OX Inventory

How to add cOne to your ox\_inventory

### Step one <a href="#step-one" id="step-one"></a>

Add images to `ox_inventory/web/images`Images are available in the `images` folder of this resource.

### Step two <a href="#step-two" id="step-two"></a>

Add items to `ox_inventory/data/items.lua` like listed below

```lua
	["conedeck"] = {
		label = "cOne Deck",
		weight = 100,
		consume = 1,
		stack = true,
		close = true,
		client = {
			image = "cone.png",
			export = "cdev_cOne.createTableOXItem",
		}
	},
```
