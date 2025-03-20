---
description: Full list is over 7000 lines hence why this list is shortened.
---

# items.lua

```lua
---@enum ECategoryInventoryPets
ECategoryInventoryPets = {
    COLLAR = 0,
    FUR = 1,
    LEASH = 2,
    BOWL = 3,
    CLOTHES = 4,
    TOYS = 5,
    FOOD = 6,
    DRINKS = 7,
    TRAINING = 8,
}

---@type { [string]: InventoryItemSpec }
InventoryItemSpecs = {
    ["dummy"] = {
        label = "Dummy",
        category = ECategoryInventoryPets.TRAINING,
        stack = false,
        description = "Dummy item for testing.",
        canbeRemoved = true,
        usable = true,
        isK9 = true,
        onUse = {
            event = "cdev_pets:useDummy",
            data = { staminaDecrese = 5 },
            close = true,
            net = false,
            preventRestoreState = true,
        }
    },
    ["cone"] = {
        label = "Cones",
        category = ECategoryInventoryPets.TRAINING,
        stack = false,
        description = "Tunnel item for testing.",
        canbeRemoved = true,
        usable = true,

        isK9 = true,
        onUse = {
            event = "cdev_pets:useCones",
            data = { staminaDecrese = 5 },
            close = true,
            net = false,
            preventRestoreState = true,
        }
    },
    ["ramp"] = {
        label = "Ramp",
        category = ECategoryInventoryPets.TRAINING,
        stack = false,
        description = "Tunnel item for testing.",
        canbeRemoved = true,
        usable = true,
        isK9 = true,
        onUse = {
            event = "cdev_pets:useRampa",
            data = { staminaDecrese = 5 },
            close = true,
            net = false,
            preventRestoreState = true,
        }
    },
    ["hoop"] = {
        label = "Hoop",
        category = ECategoryInventoryPets.TRAINING,
        stack = true,
        description =
        "A great option for playing with pets, especially dogs. They are simple, straightforward, and effective toys that can be used for playing fetch or rolling around the house or yard.",
        canbeRemoved = true,
        usable = true,

        isK9 = true,
        onUse = {
            event = "cdev_pets:UseHoop",
            data = { staminaDecrese = 5 },
            net = false,
            close = true,
            preventRestoreState = true,
        }
    },
    ["baseball"] = {
        label = "Baseball",
        category = ECategoryInventoryPets.TOYS,
        stack = true,
        description =
        "A great option for playing with pets, especially dogs. They are simple, straightforward, and effective toys that can be used for playing fetch or rolling around the house or yard.",
        canbeRemoved = true,
        usable = true,
        onUse = {
            event = "cdev_pets:useBall",
            data = {},
            net = false,
            close = true,
            preventRestoreState = true,
        }
    },
    ["cleanwater"] = {
        label = "Water Gallon",
        category = ECategoryInventoryPets.DRINKS,
        stack = true,
        description =
        "A great option for pets as it helps keep them hydrated and healthy. It is recommended to provide filtered water to pets to protect them from toxins that can be present in tap water.",
        canbeRemoved = true,
        usable = true,
        metadata = {
            refill = 15,
        },
        onUse = {
            event = "cdev_pets:useWater",
            data = {},
            net = false,
            close = true,
            preventRestoreState = true,
        }
    },
    ["petfood1"] = {
        label = "Chicken Dog Food",
        category = ECategoryInventoryPets.FOOD,
        stack = true,
        description =
        "A tasty and nutritious meal for dogs, packed with essential nutrients for their overall health and well-being.",
        canbeRemoved = true,
        usable = true,
        metadata = {
            refill = 7,
        },
        onUse = {
            event = "cdev_pets:useFood",
            data = {},
            close = true,
        }
    },
    ["petfood2"] = {
        label = "Porterhouse Dog Food",
        category = ECategoryInventoryPets.FOOD,
        stack = true,
        description =
        "A tasty and nutritious meal for dogs, packed with essential nutrients for their overall health and well-being.",
        canbeRemoved = true,
        usable = true,
        metadata = {
            refill = 8,
        },
        onUse = {
            event = "cdev_pets:useFood",
            data = {},
            close = true,
        }
    },
    ["petfood3"] = {
        label = "Filetmignon Dog Food",
        category = ECategoryInventoryPets.FOOD,
        stack = true,
        description =
        "A tasty and nutritious meal for dogs, packed with essential nutrients for their overall health and well-being.",
        canbeRemoved = true,
        usable = true,
        metadata = {
            refill = 10,
        },
        onUse = {
            event = "cdev_pets:useFood",
            data = {},
            close = true,
        }
    },
    ["petfood4"] = {
        label = "Paté Poultry Platter",
        category = ECategoryInventoryPets.FOOD,
        stack = true,
        description =
        "A tasty and nutritious meal for cats, packed with essential nutrients for their overall health and well-being.",
        canbeRemoved = true,
        usable = true,
        metadata = {
            refill = 10,
        },
        onUse = {
            event = "cdev_pets:useFood",
            data = {},
            close = true,
        },
    },
    ["petfood5"] = {
        label = "Tasty Treasure Paté",
        category = ECategoryInventoryPets.FOOD,
        stack = true,
        description =
        "A tasty and nutritious meal for cats, packed with essential nutrients for their overall health and well-being.",
        canbeRemoved = true,
        usable = true,
        metadata = {
            refill = 10,
        },
        onUse = {
            event = "cdev_pets:useFood",
            data = {},
            close = true,
        },
    },
    ["petfood6"] = {
        label = "Proactive Health",
        category = ECategoryInventoryPets.FOOD,
        stack = true,
        description =
        "A tasty and nutritious meal for cats, packed with essential nutrients for their overall health and well-being.",
        canbeRemoved = true,
        usable = true,
        metadata = {
            refill = 10,
        },
        onUse = {
            event = "cdev_pets:useFood",
            data = {},
            close = true,
        },
    },
    ["pettreat1"] = {
        label = "Beef & Bacon Biscuits",
        category = ECategoryInventoryPets.FOOD,
        stack = true,
        description =
        "A tasty and nutritious meal for dogs, packed with essential nutrients for their overall health and well-being.",
        canbeRemoved = true,
        usable = true,
        metadata = {
            refill = 5,
        },
        onUse = {
            event = "cdev_pets:useTreat",
            data = {},
            close = true,
        }
    },
    ["pettreat2"] = {
        label = "Yogurt Biscuits",
        category = ECategoryInventoryPets.FOOD,
        stack = true,
        description =
        "A tasty and nutritious meal for dogs, packed with essential nutrients for their overall health and well-being.",
        canbeRemoved = true,
        usable = true,
        metadata = {
            refill = 7,
        },
        onUse = {
            event = "cdev_pets:useTreat",
            data = {},
            close = true,
        }
    },
    ["pettreat3"] = {
        label = "Peanut Butter Biscuits",
        category = ECategoryInventoryPets.FOOD,
        stack = true,
        description =
        "A tasty and nutritious meal for dogs, packed with essential nutrients for their overall health and well-being.",
        canbeRemoved = true,
        usable = true,
        metadata = {
            refill = 7,
        },
        onUse = {
            event = "cdev_pets:useTreat",
            data = {},
            close = true,
        }
    },
    ["petmedlow"] = {
        label = "Pet Medkit (Low Effect)",
        stack = false,
        description =
        "The Pet Medkit (Low Effect) is a compact first aid kit for pets. It contains basic supplies to address minor injuries and ailments, providing immediate care and peace of mind for your furry friend.",
        canbeRemoved = true,
        usable = true,
        metadata = {
            refill = 10,
        },
        onUse = {
            event = "cdev_pets:useMedication",
            data = {},
            close = true,
            preventRestoreState = true,
        }
    },
    ["petmedmed"] = {
        label = "Pet Medkit (Medium Effect)",
        stack = false,
        description =
        "The Pet Medkit (Medium Effect) is a comprehensive first aid kit for pets, providing intermediate medical support. With a wider range of supplies and treatments, it equips you to handle moderate injuries and health issues. Convenient and reliable, it's designed to ensure your pet's well-being in various emergencies.",
        canbeRemoved = true,
        usable = true,
        metadata = {
            refill = 25,
        },
        onUse = {
            event = "cdev_pets:useMedication",
            data = {},
            close = true,
            preventRestoreState = true,
        }
    },
    ["petmedhigh"] = {
        label = "Pet Medkit (High Effect)",
        stack = false,
        description =
        "The Pet Medkit (High Effect) is an advanced and powerful first aid kit for pets. With a wide array of supplies and treatments, it provides strong medical support for addressing serious injuries and health conditions. Designed to handle high-impact emergencies, this medkit offers comprehensive care and ensures your pet's well-being in critical situations.",
        canbeRemoved = true,
        usable = true,
        metadata = {
            refill = 50,
        },
        onUse = {
            event = "cdev_pets:useMedication",
            data = {},
            close = true,
            preventRestoreState = true,
        }
    },
    ["leashgreen"] = {
        label = "Green Leash",
        category = ECategoryInventoryPets.LEASH,
        stack = false,
        description = "Take your dog for a walk.",
        canbeRemoved = true,
        usable = true,
        onUse = {
            event = "cdev_pets:useLeash",
            data = {
                prop = "leashgreen",
                offset = vector3(0.18, -0.0, -0.02),
                rotation = vector3(300.0, 0.0, 0.0),
            },
            close = true,
            preventRestoreState = true,
        }
    },
    -- OUTFITS --
    ["purpleshoes"] = {
        label = "Purple Shoes",
        category = ECategoryInventoryPets.CLOTHES,

        stack = false,
        description = "Fancy shoes for your pet",
        canbeRemoved = true,
        usable = true,
        onUse = {
            event = "cdev_pets:useClothing",
            data = {
                component = 6,
                drawable = 2,
                texture = 0,
            },
            close = true,
        }
    },
    ["blackcollarstrass"] = {
        label = "Black Collar w Strass",
        category = ECategoryInventoryPets.COLLAR,

        stack = false,
        description = "A very strong collar for your pet, black collar with gray strass",
        canbeRemoved = true,
        usable = true,
        onUse = {
            event = "cdev_pets:useClothing",
            data = {
                component = 8,
                drawable = 1,
                texture = 3,
            },
            close = true,
        }
    },
    ["goldcollar"] = {
        label = "Gold Collar",
        category = ECategoryInventoryPets.COLLAR,

        stack = false,
        description = "A very strong collar for your pet, there is gold strass",
        canbeRemoved = true,
        usable = true,
        onUse = {
            event = "cdev_pets:useClothing",
            data = {
                component = 8,
                drawable = 1,
                texture = 1
            },
            close = true,
        }
    },
    ["whitecollar"] = {
        label = "White Collar",
        category = ECategoryInventoryPets.COLLAR,
        stack = false,
        description = "A very strong collar for your pet completely white",
        canbeRemoved = true,
        usable = true,
        onUse = {
            event = "cdev_pets:useClothing",
            data = {
                component = 8,
                drawable = 1,
                texture = 2,
            },
            close = true,
        }
    },
    ["greencamohoodie"] = {
        label = "Green Camo Hoodie",
        category = ECategoryInventoryPets.CLOTHES,

        stack = false,
        description = "A beautiful sweatshirt for your pet.",
        canbeRemoved = true,
        usable = true,
        onUse = {
            event = "cdev_pets:useClothing",
            data = {
                component = 3,
                drawable = 3,
                texture = 2,
            },
            close = true,
        }
    },
    ["allblackcollar"] = {
        label = "All Black Collar",
        category = ECategoryInventoryPets.COLLAR,

        stack = false,
        description = "A very strong collar for your pet completely black",
        canbeRemoved = true,
        usable = true,
        onUse = {
            event = "cdev_pets:useClothing",
            data = {
                component = 8,
                drawable = 2,
                texture = 1,
            },
            close = true,
        }
    },
    ["greendothoodie"] = {
        label = "Green Dot Hoodie",
        category = ECategoryInventoryPets.CLOTHES,

        stack = false,
        description = "A beautiful sweatshirt for your pet.",
        canbeRemoved = true,
        usable = true,
        onUse = {
            event = "cdev_pets:useClothing",
            data = {
                component = 3,
                drawable = 1,
                texture = 2,
            },
            close = true,
        }
    },
    ["yellowbootslong"] = {
        label = "Yellow Boots Long",
        category = ECategoryInventoryPets.CLOTHES,

        stack = false,
        description = "A good rain day shoes for your pet color yellow",
        canbeRemoved = true,
        usable = true,
        onUse = {
            event = "cdev_pets:useClothing",
            data = {
                component = 6,
                drawable = 1,
                texture = 0,
            },
            close = true,
        }
    },
    ["yellowhoodie"] = {
        label = "Yellow Hoodie",
        category = ECategoryInventoryPets.CLOTHES,
        stack = false,
        description = "A beautiful sweatshirt for your pet.",
        canbeRemoved = true,
        usable = true,
        onUse = {
            event = "cdev_pets:useClothing",
            data = {
                component = 3,
                drawable = 1,
                texture = 5,
            },
            close = true,
        }
    },
    ["bluebootslong"] = {
        label = "Blue Boots Long",
        category = ECategoryInventoryPets.CLOTHES,

        stack = false,
        description = "A good rain day shoes for your pet, color blue",
        canbeRemoved = true,
        usable = true,
        onUse = {
            event = "cdev_pets:useClothing",
            data = {
                component = 6,
                drawable = 1,
                texture = 1,
            },
            close = true,
        }
    },
    ["redbootslong"] = {
        label = "Red Boots Long",
        category = ECategoryInventoryPets.CLOTHES,

        stack = false,
        description = "A good rain day shoes for your pet, color red",
        canbeRemoved = true,
        usable = true,
        onUse = {
            event = "cdev_pets:useClothing",
            data = {
                component = 6,
                drawable = 1,
                texture = 2,
            },
            close = true,
        }
    },
    ["lightyellowhoodie"] = {
        label = "Light Yellow Hoodie",
        category = ECategoryInventoryPets.CLOTHES,

        stack = false,
        description = "A beautiful sweatshirt for your pet.",
        canbeRemoved = true,
        usable = true,
        onUse = {
            event = "cdev_pets:useClothing",
            data = {
                component = 3,
                drawable = 1,
                texture = 3,
            },
            close = true,
         }
    },
}
```
