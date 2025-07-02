# FAQ

## How can I add another job to use the K9 pet?

***

You can add another job by configuring the `IsPlayerAllowedToBuyK9` function, which you can find in the file `cdev_pets > public > server > api.lua`.

Suppose the other job you want to add is named **Xerif**, then the code will look like this:

```
PetResourceAPI.IsPlayerAllowedToBuyK9 = function(source)
    local jobName, grade = clib.api.Character.GetCharacterJobFromSource(source)

    if jobName ~= "police" and jobName ~= "Xerif" then
        return false
    end

    return true
end
```

## How stop Dog Attack?

***

After the pet starts attacking the player or NPC, keep holding the G key until it obeys your command to stop attacking.

## I changed the keybinds in the config, but they didn’t change in-game. How do I fix this?

***

For anyone who joined before the change, you’ll need to clear the keybinds saved in your FiveM cfg file.

Here’s how:

1. Press `WIN + R`, type `%appdata%`, and open the folder.
2. Navigate to:\
   `AppData/Roaming > CitizenFX > fivem.cfg`
3. Open the `fivem.cfg` file with a text editor.
4. Look for any lines with `cdev_pets` binds and delete them, or remove only the specific bind you want to reset.

Example line to remove:

```
rbind cdev_pets KEYBOARD TAB "+petbag"
```

After clearing these lines, restart FiveM. The new keybinds from your server’s config will then load correctly.

## Where is the Pet MLO location?

***

```
Location coords : vec3(85.74, -204.44, 54.49)
```

<figure><img src="../../.gitbook/assets/Location.png" alt=""><figcaption></figcaption></figure>

## Is there a way to disable the pet store in the TAB menu?

***

Yes! You can disable the shop button in the pet bag menu (TAB) by editing the `config.lua` file:

Path:

```
cdev_pets > public > config > config.lua
```

Find the line:

```
WantPetShopButton = true
```

and set it to:

```
WantPetShopButton = false
```

## How can i buy a K9 pet and K9 items ?

***

To buy the <mark style="color:yellow;">K9</mark> pet and the exclusive <mark style="color:yellow;">K9</mark> **accessories** and **items** in the shop, you need to have the <mark style="color:yellow;">police</mark> job set in your **framework**.

After that, when you click to buy the pet, if it is a <mark style="color:yellow;">K9 type</mark>, you will see an extra <mark style="color:red;">checkbox</mark> appear in the purchase menu, just like in the example below.

<figure><img src="../../.gitbook/assets/FiveM_GTAProcess_C7AZyPNlqE.gif" alt=""><figcaption></figcaption></figure>

If you want to change the required job or add more jobs allowed to buy the K9 and its accessories, follow this tutorial: [Here](faq.md#how-can-i-add-another-job-to-use-the-k9-pet)

## Does the VIP system work only for clothes and accessories ?

***

No, the VIP system works for any item listed in the file: <kbd>cdev\_pets > public > config > shop.lua</kbd>

Inside this file, you just need to add `vip = true` to any item you want to make VIP-only. If the item doesn't already have it, here’s an example of how to add VIP to the dogs:

```lua
{
        PetShopId = "pet_hottweiler",
        key = "pet_chop",
        label = "Hottweiler",
        hasFemale = true,
        vip = true, -- Add this Line
        price = 5000,
        category = "pet_category_pets",
        description = "A Hottweiler",
        canBeK9 = true,
}, 
```

⚠  <mark style="color:red;">**If you change the**</mark>**&#x20;**<kbd>**isPremiumPackage**</kbd>**&#x20;**<mark style="color:red;">**variable for any pet, I suggest you revert it to avoid potential issues in the future**</mark>

## After I start the assets folder this crash happens how fix ?

***

<div><figure><img src="../../.gitbook/assets/image (5).png" alt=""><figcaption></figcaption></figure> <figure><img src="../../.gitbook/assets/Pool Size.png" alt=""><figcaption></figcaption></figure></div>

This happen because you got limit addons texture or other limit you can have in one server for fix this you have some options

1. Remove some others texture like cars , new maps , clothes ..
2. Increase TxdStore inside sever.cfg ( This is not recommend) `increase_pool_size "TxdStore" 26000`

3.Use different games force build to receive more space for addons we recomended use 3258 `sv_enforceGameBuild 3258`

You can check more about Game Build [here](https://docs.fivem.net/docs/server-manual/server-commands/#sv_enforcegamebuild-build)

You can read more inside this documentation and check all limits [here](https://docs.fivem.net/docs/server-manual/server-commands/#increase_pool_size-poolname-increase)

⚠ <mark style="color:red;">**Changing the gamebuild won’t necessarily free up more space, but it will remove updates, which can help allocate more addons. Keep in mind that by using an older gamebuild version, any GTA V updates included in that build will be lost, and clothing slots as well as other limits in GTA V will change, which can negatively affect other resources on your server.**</mark>
