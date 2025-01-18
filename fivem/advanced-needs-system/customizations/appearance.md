# Appearance

You can fully customize the Needs UI by editing /public/config/hud.lua (**make sure you have the latest version**).

### How to edit

With Debug mode enabled (`/public/config/config.lua`), you can customize your HUD directly in-game and type `/needs copy` to copy the presets and use them in your code.

### Default settings

```lua
Defaults = {
    Positions = {
        OnFoot = {
            stats = { x = 26, y = 801, scale = 100 },
            compass = { x = 821, y = 21, scale = 100 },
            speedometer = { x = 1676, y = 831 },
            actionSelector = { x = 1461, y = 206, scale = 100 },
        },
        InVehicle = {
            stats = { x = 346, y = 826, scale = 100 },
            compass = { x = 806, y = 11, scale = 100 },
            speedometer = { x = 1631, y = 836 },
            actionSelector = { x = 1341, y = 286, scale = 100 },
        }
    },
    Appearance = {
        Variants = {
            Hud = "AroundHUD", -- Options: AroundHUD, GlowingIcon, RadialProgress, Dot, Pill
            Speedometer = "minimal-circle", -- Options: minimal-circle, race,
            Compass = "minimal" -- Options: minimal
        },
        Stats = {
            health = {
                order = 1,
                icon = "heart",
                color = "#ff4c4c",
                visibility = defaultStatVisibility,
            },
            armor = {
                order = 2,
                icon = "shield",
                color = "#3b82f6",
                visibility = defaultStatVisibility,
            },
            breath = {
                order = 3,
                icon = "waves",
                color = "#3b82f6",
                visibility = defaultStatVisibility,
            },
            hunger = {
                order = 4,
                icon = "utensils",
                color = "#f97316",
                visibility = defaultStatVisibility
            },
            thirst = {
                order = 5,
                icon = "glasswater",
                color = "#06b6d4",
                visibility = defaultStatVisibility
            },
            bladder = {
                order = 6,
                icon = "bladder",
                color = "#f6c343",
                visibility = defaultStatVisibility
            },
            poop = {
                order = 7,
                icon = "toilet 2",
                color = "#c3681c",
                visibility = defaultStatVisibility
            },
            energy = {
                order = 8,
                icon = "MoonZzZ",
                color = "#d993ff",
                visibility = defaultStatVisibility
            },
            social = {
                order = 9,
                icon = "social chat",
                color = "#b1ffea",
                visibility = defaultStatVisibility
            },
            hygiene = {
                order = 10,
                icon = "wash hands",
                color = "#b1ffea",
                visibility = defaultStatVisibility
            },
            stress = {
                order = 11,
                icon = "zap",
                color = "#b1ffea",
                visibility = defaultStatVisibility
            }
        },
        Compass = {
            Visibility = {
                InVehicle = true,
                OnFoot = false
            }
        }
    }
}
```
