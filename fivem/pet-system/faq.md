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

## Where are the images from shop of the pets, clothes, and accessories located ?

***

All the images that appear in the store menu are located inside the **cdev\_lib** resource:

<kbd>**cdev\_lib > nui > dist > pets > inventory**</kbd>

The cdev\_lib use the <mark style="color:yellow;">**KEY**</mark> variable inside the file: <kbd>cdev\_pets > public > config > shop.lua</kbd>  to look up the images in the folder mentioned above.

Example:&#x20;

```lua
 {
        PetShopId = "pet_hottweiler",
        key = "pet_chop", -- This Key is reference for images inside the folder lib
        label = "Hottweiler",
        hasFemale = true,
        price = 5000,
        category = "pet_category_pets",
        description = "A Hottweiler",
        canBeK9 = true,
    },
```

⚠ <mark style="color:red;">**The images must have the**</mark><kbd>**.webp**</kbd>**&#x20;**<mark style="color:red;">**extension. Any changes inside this folder are not recommended unless you have experience.**</mark>

## Pets not spawning in?

***

{% hint style="danger" %}
Check to make sure you have an active CFX Element Club subscription: [HERE](https://portal.cfx.re/subscriptions)
{% endhint %}

## \[cdev\_pets] (ERROR) Network control timeout for spawning pet, Please Try Again!

<div align="center"><figure><img src="../../.gitbook/assets/image (3).png" alt=""><figcaption></figcaption></figure></div>

{% hint style="danger" %}
If you have an anti-cheat, it may be blocking the pet events, please check with your AC provider on how you can resolve this
{% endhint %}

## After I updated cdev\_pets to version 2.9.3 or (Higher), I can no longer open the store manager how can i fix?

***

<figure><img src="../../.gitbook/assets/Error When Try open Manager.png" alt=""><figcaption></figcaption></figure>

⚠ <mark style="color:red;">**This error happens because in the new updates, some**</mark>**&#x20;**<mark style="color:yellow;">**items**</mark>**&#x20;**<mark style="color:red;">**were**</mark>**&#x20;**<mark style="color:yellow;">**renamed**</mark>**&#x20;**<mark style="color:red;">**and problematic items were also**</mark>**&#x20;**<mark style="color:yellow;">**removed**</mark>**&#x20;**<mark style="color:red;">**from the**</mark>**&#x20;`items.lua`&#x20;**<mark style="color:red;">**and**</mark>**&#x20;`shop.lua`&#x20;**<mark style="color:red;">**files. Additionally, we replaced all the**</mark>**&#x20;**<mark style="color:yellow;">**images**</mark>**&#x20;**<mark style="color:red;">**as well. To fix this issue with the store, simply clear the tables in the database listed below and fully restart the server.**</mark>

### List of tables to empty

* cdev\_pets\_petshops\_sales
* cdev\_pets\_petshops\_sell\_prices
* cdev\_pets\_petshops\_stock

### Example Video using <mark style="color:yellow;">HeidiSQL ( version: 12.10.0.7000)</mark>&#x20;

<div align="left"><figure><img src="../../.gitbook/assets/heidisql_HIy3VGXBQi.gif" alt=""><figcaption></figcaption></figure></div>

⚠ <mark style="color:red;">**In addition to the issue above, it can also happen that when a player opens the**</mark>**&#x20;**<kbd>**/petbag**</kbd>**&#x20;**<mark style="color:red;">**or the**</mark>**&#x20;**<kbd>**TAB**</kbd><mark style="color:red;">**menu and tries to spawn certain pets, a similar error will occur. I’ll use the**</mark>**&#x20;**<mark style="color:yellow;">**Golden Retriever**</mark>**&#x20;**<mark style="color:red;">**pet as an example, which had some changes made to it.**</mark>

### This is what happens when you try to spawn a pet whose models were changed or that was removed.

<div align="left"><figure><img src="../../.gitbook/assets/FiveM_GTAProcess_fIeZZGPrKZ.gif" alt=""><figcaption></figcaption></figure></div>

#### Client Side Error (F8 Console)

<div align="left"><figure><img src="../../.gitbook/assets/Client Error Pet.png" alt=""><figcaption></figcaption></figure></div>

#### Server Side Error (Prompt or TxAdmin Console)

<figure><img src="../../.gitbook/assets/Server Errror Pet.png" alt=""><figcaption></figcaption></figure>

### Now I’ll explain how to fix this problem if you updated the version and this is happening to your players who had the old pets.

In the database image below, in the `cdev_pets` table, you’ll need to modify two columns: the first is the `KEY` column and the second is the `PETSHOPID` column, as shown in the image below.

<figure><img src="../../.gitbook/assets/You go change this.png" alt=""><figcaption></figcaption></figure>

First, let’s find the new names for the <mark style="color:yellow;">Golden Retriever</mark>, which we’re using as an example. You’ll start by opening the `shop.lua` file located in the folder `cdev_pets > public > config > shop.lua`, and you’ll find the Golden Retriever code just like in the example below.

```lua
    {
        PetShopId = "pet_gold", -- Here is the (petshopid) column
        key = "pet_gold", -- And Here is the (key) column
        label = "Golden Retriever",
        isPremiumPackage = true,
        price = 5000,
        category = "pet_category_pets",
        description = "A Golden Retriever",
        canBeK9 = true,
    },
```

Now that we have the new strings, we’re going to update them in the database, and the result will look like the image below.

<figure><img src="../../.gitbook/assets/NewStrings.png" alt=""><figcaption></figcaption></figure>

<mark style="color:yellow;">After all the changes, you will</mark> shut down <mark style="color:yellow;">and</mark> restart <mark style="color:yellow;">the server, and the pet on your client or your player’s client will be working normally.</mark>

⚠ <mark style="color:red;">**Just a reminder: if you don’t have experience, I recommend not modifying the tables to avoid any serious issues with your server, such as data loss.**</mark>
