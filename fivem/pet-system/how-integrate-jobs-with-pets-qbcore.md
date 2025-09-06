---
hidden: true
---

# How integrate Jobs with Pets QBCore

Now, since you are using the **QBCore framework**, you need to configure the \*\*job in QBCore \*\*to sync with your pet shop, otherwise you won’t be able to assign an employee with permissions.

First, you’ll create the shop just as shown in this video tutorial:

{% embed url="https://youtu.be/-_eOmtHj4Vk" %}

When it comes time to configure the player and give them permission, you’ll need to shut down the server and go to the file: `[qb] > qb-core > shared > jobs.lua`

Inside this file, you’ll create a new job and configure it like this:

The job name will be `petshop[shopname]`. For example, if your shop is named “<mark style="color:yellow;">**Pet Shop Test**</mark>”, then the job name will be **petshoppetshoptest**. Below is an example of how the configuration should look:

```lua
petshoppetshoptest = { -- Change this like above
        label = 'Pet Shop Test Shop', -- Change this for your Shop name
        defaultDuty = true, -- No touch
        offDutyPay = false, -- No touch
        grades = {
            ['0'] = { name = 'Clerk', payment = 25 }, -- No touch
            ['25'] = { name = 'Veterinarian', payment = 50 }, -- No touch       
            ['50'] = { name = 'Manager', payment = 75 },  -- No touch         
            ['100'] = { name = 'Boss', payment = 150, isboss = true, bankAuth = true }, -- No touch
        },
},
```
