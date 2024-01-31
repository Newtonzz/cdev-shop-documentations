---
description: Images & format to add to your inventory.
---

# OX Inventory

## Step one

Add images to `ox_inventory/web/images`

Images are available in the `images` folder of this resource.

## Step two

Add items to `ox_inventory/data/items.lua` like listed below

```etlua
	["aboutme"] = {
		label = "About Me Box",
		weight = 100,
		consume = 0,
		stack = true,
		close = true,
		client = {
			image = "aboutme.png",
			export = "cdev_games.use",
			type = 'aboutme'
		}
	},

	["fetish"] = {
		label = "Fetish Box",
		weight = 100,
		consume = 0,
		stack = true,
		close = true,
		client = {
			image = "fetish.png",
			export = "cdev_games.use",
			type = 'fetish'
		}
	},

	["morally"] = {
		label = "About Me Box",
		weight = 100,
		consume = 0,
		stack = true,
		close = true,
		client = {
			image = "morally.png",
			export = "cdev_games.use",
			type = 'morally'
		}
	},

	["sensualus"] = {
		label = "Sensualus Box",
		weight = 100,
		consume = 0,
		stack = true,
		close = true,
		client = {
			image = "sensualus.png",
			export = "cdev_games.use",
			type = 'sensualus'
		}
	},

	["truthordare"] = {
		label = "Truth or Dare Box",
		weight = 100,
		consume = 0,
		stack = true,
		close = true,
		client = {
			image = "truthordare.png",
			export = "cdev_games.use",
			type = 'truthordare'
		}
	},

	["would_you_rather"] = {
		label = "Would you Rather Box",
		weight = 100,
		consume = 0,
		stack = true,
		close = true,
		client = {
			image = "would_you_rather.png",
			export = "cdev_games.use",
			type = 'would_you_rather'
		}
	},
	
	["couplesquiz"] = {
        	label = "Couples Quiz Box",
        	weight = 100,
        	consume = 0,
        	stack = true,
        	close = true,
        	client = {
            		image = "couplesquiz.png",
            		export = "cdev_games.use",
            		type = 'couplesquiz'
        }
    },
```
