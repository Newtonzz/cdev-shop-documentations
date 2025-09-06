---
hidden: true
---

# How integrate Jobs with Pets QBox

Now, since you are using the **Qbox framework**, you need to configure the \*\*job in Qbox \*\*to sync with your pet shop, otherwise you won’t be able to assign an employee with permissions.

First, you’ll create the shop just as shown in this video tutorial:

{% embed url="https://youtu.be/-_eOmtHj4Vk" %}

When it comes time to configure the player and give them permission, you’ll need to shut down the server and go to the file: `[qbx] > qbx_core > shared > jobs.lua`

Inside this file, you’ll create a new job and configure it like this:

The job name will be `petshop[shopname]`. For example, if your shop is named “**test**”, then the job name will be **petshoptest**. Below is an example of how the configuration should look:

```lua
['petshoptest'] = {
    label = 'Pet Shop Test Shop',
    defaultDuty = true,
    offDutyPay = false,
    grades = {
        [0] = {
            name = 'Clerk',
            payment = 25
        },
        [25] = {
            name = 'Veterinarian',
            payment = 50
        },
        [50] = {
            name = 'Manager',
            payment = 75
        },
        [100] = {
            name = 'Boss',
            payment = 150,
            isboss = true,
            bankAuth = true
        },
    },
},
```
