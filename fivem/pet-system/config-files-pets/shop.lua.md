---
description: List is shortened
---

# shop.lua

```lua
---@type PetShopItem[]
PetShopItems = {
    {
        PetShopId = "pet_hottweiler",
        key = "pet_chop",
        label = "Hottweiler",
        hasFemale = true,
        price = 5000,
        category = "pet_category_pets",
        description = "A Hottweiler",
        canBeK9 = true,
    },
    {
        PetShopId = "pet_dobermann_basic",
        key = "pet_dobermann",
        label = "Dobermann",
        hasFemale = false,
        price = 5000,
        category = "pet_category_pets",
        description = "A Dobermann",
        canBeK9 = true,
    },
    {
        PetShopId = "pet_dobermann_black_yelloweye",
        key = "pet_dobermann",
        thumbnail = "pet_dobberman_black_yelloweye.webp",
        label = "Dobermann",
        hasFemale = true,
        isPremiumPackage = true,
        price = 5000,
        category = "pet_category_pets",
        description = "A Dobermann",
        customization = {
            drawables = {
                ["4"] = 0,
            },
            textures = {
                ["4"] = 1
            }
        },
        canBeK9 = true,
    },
    {
        PetShopId = "pet_dobermann_black",
        key = "pet_dobermann",
        thumbnail = "pet_dobermann_black.webp",
        label = "Dobermann",
        hasFemale = true,
        isPremiumPackage = true,
        price = 5000,
        category = "pet_category_pets",
        description = "A Dobermann",
        customization = {
            drawables = {
                ["4"] = 0,
            },
            textures = {
                ["4"] = 2
            }
        },
        canBeK9 = true,
    },
    {
        PetShopId = "pet_golden_retriever",
        key = "pet_golden",
        label = "Golden Retriever",
        isPremiumPackage = true,
        price = 5000,
        category = "pet_category_pets",
        description = "A Golden Retriever",
        canBeK9 = true,
    },
    {
        PetShopId = "pet_husky_gray",
        key = "pet_husky",
        thumbnail = "pet_husky_gray.webp",
        label = "Husky Gray",
        hasFemale = true,
        isPremiumPackage = true,
        price = 5000,
        category = "pet_category_pets",
        description = "A Husky",
        canBeK9 = true,
    },
    {
        PetShopId = "pet_husky_caramel",
        key = "pet_husky",
        thumbnail = "pet_husky_caramel.webp",
        hasFemale = true,
        label = "Husky Caramel",
        isPremiumPackage = true,
        price = 5000,
        category = "pet_category_pets",
        description = "A Husky",
        customization = {
            drawables = {
                ["4"] = 0,
                ["3"] = 0,
            },
            textures = {
                ["4"] = 1,
                ["3"] = 1,
            }
        },
        canBeK9 = true,
    },
    {
        PetShopId = "pet_gold",
        key = "pet_gold",
        label = "Golden Retriever",
        isPremiumPackage = true,
        price = 5000,
        category = "pet_category_pets",
        description = "A Golden Retriever",
        canBeK9 = true,
    },
    {
        PetShopId = "pet_pug",
        key = "pet_pug",
        label = "Pug",
        hasFemale = true,
        price = 5000,
        category = "pet_category_pets",
        description = "A Pug",
        canBeK9 = false,
        isPremiumPackage = true,
    },
    {
        PetShopId = "pet_shusky",
        key = "pet_shusky",
        label = "Small Husky",
        hasFemale = true,
        isPremiumPackage = true,
        price = 5000,
        category = "pet_category_pets",
        description = "A Small Husky",
        canBeK9 = true,
    },
    {
        PetShopId = "pet_chiua",
        key = "pet_chiua",
        label = "Chihuahua",
        hasFemale = true,
        price = 5000,
        category = "pet_category_pets",
        description = "A Chihuahua",
        canBeK9 = false,
        isPremiumPackage = true,
    },
    {
        PetShopId = "pet_dash",
        key = "pet_dash",
        label = "Dachshund",
        hasFemale = true,
        price = 5000,
        category = "pet_category_pets",
        description = "A Dachshund",
        canBeK9 = false,
        isPremiumPackage = true,
    },
    {
        PetShopId = "pet_york",
        key = "pet_york",
        label = "Yorkshire Terrier",
        hasFemale = true,
        price = 5000,
        category = "pet_category_pets",
        description = "A Yorkshire Terrier",
        canBeK9 = false,
        isPremiumPackage = true,
    },
    {
        PetShopId = "pet_terrierk",
        key = "pet_terrierk",
        label = "Terrier",
        hasFemale = true,
        price = 5000,
        category = "pet_category_pets",
        description = "A Terrier",
        canBeK9 = false,
        isPremiumPackage = true,
    },
    {
        PetShopId = "pet_husky_white",
        key = "pet_husky",
        thumbnail = "pet_husky_white.webp",
        label = "Husky White",
        isPremiumPackage = true,
        price = 5000,
        hasFemale = true,
        category = "pet_category_pets",
        description = "A Husky",
        customization = {
            drawables = {
                ["4"] = 0,
                ["3"] = 0,
            },
            textures = {
                ["4"] = 2,
                ["3"] = 2,
            }
        },
        canBeK9 = true,
    },
    {
        PetShopId = "pet_bulldog_black",
        key = "pet_frbul",
        thumbnail = "pet_frbull_black.webp",
        hasFemale = true,
        label = "Bulldog Black",
        isPremiumPackage = true,
        price = 5000,
        category = "pet_category_pets",
        description = "A Bulldog",
    },
    {
        PetShopId = "pet_turk_white_heterochromia",
        key = "pet_turk",
        thumbnail = "pet_turk_white_heterochromia.webp",
        label = "White Heterochromia Cat",
        isPremiumPackage = true,
        price = 5000,
        category = "pet_category_pets",
        description = "An Orange Turkish Cat",
        canBeK9 = false,
    },
    {
        PetShopId = "pet_turk_black",
        key = "pet_turk",
        label = "Black Turkish Cat",
        thumbnail = "pet_turk_black.webp",
        isPremiumPackage = true,
        price = 5000,
        customization = {
            drawables = {
                ["0"] = 0,
                ["3"] = 0,
                ["6"] = 0,
            },
            textures = {
                ["0"] = 1,
                ["3"] = 1,
                ["6"] = 1,
            }
        },
        category = "pet_category_pets",
        description = "A Turkish Cat",
        canBeK9 = false,
    },
    {
        PetShopId = "pet_turk_white",
        key = "pet_turk",
        label = "White Turkish Cat",
        thumbnail = "pet_turk_white.webp",
        isPremiumPackage = true,
        price = 5000,
        customization = {
            drawables = {
                ["0"] = 0,
                ["3"] = 0,
                ["6"] = 0,
            },
            textures = {
                ["0"] = 2,
                ["3"] = 2,
                ["6"] = 2,
            }
        },
        category = "pet_category_pets",
        description = "A Turkish Cat",
        canBeK9 = false,
    },
    {
        PetShopId = "pet_turk_grey",
        key = "pet_turk",
        label = "Grey Turkish Cat",
        thumbnail = "pet_turk_grey.webp",
        isPremiumPackage = true,
        price = 5000,
        customization = {
            drawables = {
                ["0"] = 0,
                ["3"] = 0,
                ["6"] = 0,
            },
            textures = {
                ["0"] = 3,
                ["3"] = 3,
                ["6"] = 3,
            }
        },
        category = "pet_category_pets",
        description = "A Turkish Cat",
        canBeK9 = false,
    },
    {
        PetShopId = "pet_turk_snow_1",
        key = "pet_turk",
        label = "Snow Turkish Cat 1",
        thumbnail = "pet_turk_snow.webp",
        isPremiumPackage = true,
        price = 5000,
        customization = {
            drawables = {
                ["0"] = 0,
                ["3"] = 0,
                ["6"] = 0,
            },
            textures = {
                ["0"] = 4,
                ["3"] = 4,
                ["6"] = 4,
            }
        },
        category = "pet_category_pets",
        description = "A Turkish Cat",
        canBeK9 = false,
    },
    {
        PetShopId = "pet_turk_snow_2",
        key = "pet_turk",
        label = "Snow Turkish Cat 2",
        thumbnail = "pet_turk_snow_2.webp",
        isPremiumPackage = true,
        price = 5000,
        customization = {
            drawables = {
                ["0"] = 0,
                ["3"] = 0,
                ["6"] = 0,
            },
            textures = {
                ["0"] = 5,
                ["3"] = 5,
                ["6"] = 5,
            }
        },
        category = "pet_category_pets",
        description = "A Turkish Cat",
        canBeK9 = false,
    },
    {
        PetShopId = "pet_turk_snow_3",
        key = "pet_turk",
        label = "Snow Turkish Cat 3",
        thumbnail = "pet_turk_snow_3.webp",
        isPremiumPackage = true,
        price = 5000,
        customization = {
            drawables = {
                ["0"] = 0,
                ["3"] = 0,
                ["6"] = 0,
            },
            textures = {
                ["0"] = 6,
                ["3"] = 6,
                ["6"] = 6,
            }
        },
        category = "pet_category_pets",
        description = "A Turkish Cat",
        canBeK9 = false,
    },
    {
        PetShopId = "pet_turk_snow_4",
        key = "pet_turk",
        label = "Snow Turkish Cat 4",
        thumbnail = "pet_turk_snow_4.webp",
        isPremiumPackage = true,
        price = 5000,
        customization = {
            drawables = {
                ["0"] = 0,
                ["3"] = 0,
                ["6"] = 0,
            },
            textures = {
                ["0"] = 7,
                ["3"] = 7,
                ["6"] = 7,
            }
        },
        category = "pet_category_pets",
        description = "A Turkish Cat",
        canBeK9 = false,
    },
    {
        PetShopId = "pet_amer_orange",
        key = "pet_amer",
        thumbnail = "pet_amer_orange.webp",
        label = "Orange American Cat",
        price = 5000,
        category = "pet_category_pets",
        description = "An American Cat",
        canBeK9 = false,
    },
    {
        PetShopId = "pet_amer_grey",
        key = "pet_amer",
        thumbnail = "pet_amer_grey.webp",
        label = "Grey American Cat",
        price = 5000,
        customization = {
            drawables = {
                ["0"] = 0,
                ["3"] = 0,
                ["6"] = 0,
            },
            textures = {
                ["0"] = 1,
                ["3"] = 1,
                ["6"] = 1,
            }
        },
        category = "pet_category_pets",
        description = "An American Cat",
        canBeK9 = false,
    },
    {
        PetShopId = "pet_amer_white",
        key = "pet_amer",
        thumbnail = "pet_amer_white.webp",
        label = "White American Cat",
        price = 5000,
        customization = {
            drawables = {
                ["0"] = 0,
                ["3"] = 0,
                ["6"] = 0,
            },
            textures = {
                ["0"] = 2,
                ["3"] = 2,
                ["6"] = 2,
            }
        },
        category = "pet_category_pets",
        description = "An American Cat",
        canBeK9 = false,
    },
    {
        PetShopId = "pet_amer_gray",
        key = "pet_amer",
        thumbnail = "pet_amer_gray.webp",
        label = "Gray American Cat",
        price = 5000,
        customization = {
            drawables = {
                ["0"] = 0,
                ["3"] = 0,
                ["6"] = 0,
            },
            textures = {
                ["0"] = 3,
                ["3"] = 3,
                ["6"] = 3,
            }
        },
        category = "pet_category_pets",
        description = "An American Cat",
        canBeK9 = false,
    },
    {
        PetShopId = "pet_amer_black",
        key = "pet_amer",
        thumbnail = "pet_amer_black.webp",
        label = "Black American Cat",
        price = 5000,
        customization = {
            drawables = {
                ["0"] = 0,
                ["3"] = 0,
                ["6"] = 0,
            },
            textures = {
                ["0"] = 4,
                ["3"] = 4,
                ["6"] = 4,
            }
        },
        category = "pet_category_pets",
        description = "An American Cat",
        canBeK9 = false,
    },
    {
        PetShopId = "pet_amer_blue_eyes_orange",
        key = "pet_amer",
        thumbnail = "pet_amer_blue_eyes_orange.webp",
        label = "Blue Eyes Orange American Cat",
        price = 5000,
        customization = {
            drawables = {
                ["0"] = 0,
                ["3"] = 0,
                ["6"] = 0,
            },
            textures = {
                ["0"] = 5,
                ["3"] = 5,
                ["6"] = 5,
            }
        },
        category = "pet_category_pets",
        description = "An American Cat",
        canBeK9 = false,
    },
    {
        PetShopId = "pet_amer_brown",
        key = "pet_amer",
        thumbnail = "pet_amer_brown.webp",
        label = "Brown American Cat",
        price = 5000,
        customization = {
            drawables = {
                ["0"] = 0,
                ["3"] = 0,
                ["6"] = 0,
            },
            textures = {
                ["0"] = 6,
                ["3"] = 6,
                ["6"] = 6,
            }
        },
        category = "pet_category_pets",
        description = "An American Cat",
        canBeK9 = false,
    },
    {
        PetShopId = "pet_amer_white_grey",
        key = "pet_amer",
        thumbnail = "pet_amer_white_grey.webp",
        label = "White and Grey American Cat",
        price = 5000,
        customization = {
            drawables = {
                ["0"] = 0,
                ["3"] = 0,
                ["6"] = 0,
            },
            textures = {
                ["0"] = 7,
                ["3"] = 7,
                ["6"] = 7,
            }
        },
        category = "pet_category_pets",
        description = "An American Cat",
        canBeK9 = false,
    },
    {
        PetShopId = "pet_amer_black_orange_eyes",
        key = "pet_amer",
        thumbnail = "pet_amer_black_orange_eyes.webp",
        label = "Black Orange Eyes American Cat",
        price = 5000,
        customization = {
            drawables = {
                ["0"] = 0,
                ["3"] = 0,
                ["6"] = 0,
            },
            textures = {
                ["0"] = 8,
                ["3"] = 8,
                ["6"] = 8,
            }
        },
        category = "pet_category_pets",
        description = "An American Cat",
        canBeK9 = false,
    },
    {
        PetShopId = "pet_frbul_brown",
        key = "pet_frbul",
        thumbnail = "pet_frbull_brown.webp",
        hasFemale = true,
        label = "Bulldog Brown",
        isPremiumPackage = true,
        price = 5000,
        category = "pet_category_pets",
        description = "A Bulldog",
        customization = {
            drawables = {
                ["4"] = 0,
            },
            textures = {
                ["4"] = 1,
            }
        },
    },
    {
        PetShopId = "pet_frbul_caramel",
        key = "pet_frbul",
        thumbnail = "pet_frbull_caramel.webp",
        hasFemale = true,
        label = "Bulldog Caramel",
        isPremiumPackage = true,
        price = 5000,
        category = "pet_category_pets",
        description = "A Bulldog",
        customization = {
            drawables = {
                ["4"] = 0,
            },
            textures = {
                ["4"] = 2,
            }
        },
    },
    {
        PetShopId = "pet_bully_white",
        key = "pet_bully",
        thumbnail = "pet_bully_white.webp",
        hasFemale = true,
        label = "American Bully White",
        isPremiumPackage = true,
        price = 5000,
        category = "pet_category_pets",
        description = "An American Bully White",
    },
    {
        PetShopId = "pet_bully_black",
        key = "pet_bully",
        thumbnail = "pet_bully_black.webp",
        hasFemale = true,
        label = "American Bully Black",
        isPremiumPackage = true,
        price = 5000,
        category = "pet_category_pets",
        description = "An American Bully Black",
        customization = {
            drawables = {
                ["4"] = 0,
            },
            textures = {
                ["4"] = 1,
            }
        },
    },
}
```
