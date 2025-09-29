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

## Issue with DrawText for players in Asia how Fix it?

***

**To fix the DrawText issue, go to `cdev_lib > public > config > config.lua` (lines 31 and 32) and change them to match the code below exactly.**

<figure><img src="../../.gitbook/assets/Erro.png" alt=""><figcaption></figcaption></figure>

> ```lua
> DrawTextConfig = {
>         OverrideDrawtextFont = true,
>         OverrideDrawtextFontId = 4
>     },
> ```

## My K9 dog is not dealing damage to the player it was ordered to attack how fix it?

***

⚠  <mark style="color:yellow;">**Attention:**</mark>**&#x20;**<mark style="color:red;">**Your**</mark>**&#x20;**<mark style="color:yellow;">**K9**</mark>**&#x20;**<mark style="color:red;">**will not deal damage to the player because the setting**</mark>**&#x20;**<kbd>**EnableAttackUpdate**</kbd><mark style="color:red;">**is enabled in the configuration file:**</mark>\
`cdev_pets > public > config > config.lua` (lines 39–40).

**With this setting&#x20;**<mark style="color:yellow;">**enabled**</mark>**, only&#x20;**<mark style="color:yellow;">**K9**</mark>**&#x20;pets are&#x20;**<mark style="color:red;">**allowed to attack**</mark>**, and they will&#x20;**<mark style="color:yellow;">**only target players**</mark>**. However, they will not cause any&#x20;**<mark style="color:red;">**damage**</mark>**&#x20;— they will simply&#x20;**<mark style="color:yellow;">**knock the player down and immobilize**</mark>**&#x20;them, making the behavior more realistic, just like a real-life K9 unit.**

**Now, if you want the pet to deal damage to the player, you will need to make some changes in the file**\
`cdev_pets > public > config > config.lua` **as shown below.**

```lua
    -- if true, pets can only attack players
    -- if false, pets can attack any entity
    EnablePetToOnlyAttackPlayers = false, or EnablePetToOnlyAttackPlayers = true,

    -- If true, will enable the new attack update with the police being the only that can use this feature and train the dog
    -- If true, only the K9 will be able to attack, and it won’t deal damage to players — it will only knock them down and immobilize them to make it more realistic.
    -- If false, will reverse to old one
    -- If This is true need EnablePetToOnlyAttackPlayers to be true
    EnableAttackUpdate = false,
```

⚠  <mark style="color:yellow;">**Attention:**</mark>**&#x20;**<mark style="color:red;">**Keep in mind that if you disable the EnableAttackUpdate setting, all pets will be able to attack, removing the exclusivity of the**</mark>**&#x20;**<mark style="color:yellow;">**K9**</mark>**&#x20;**<mark style="color:red;">**pet.**</mark>

## Is it possible to add a pet Add-ON to the Pets system? And How Add ?

***

Yes, it’s possible to add a pet <mark style="color:yellow;">Add-on</mark> or even a <mark style="color:red;">some</mark> <mark style="color:yellow;">native GTA V</mark> animal. However, below you can find a list of functions that will be compatible and others that will not be compatible with Add-on pets or native GTA V animals.

⚠  <mark style="color:yellow;">**Attention:**</mark> <mark style="color:red;">**You will only be able to add pets (Add-on or native) that belong to the Dog or Cat category. Other pets, such as**</mark>**&#x20;**<mark style="color:yellow;">**a\_c\_chickenhawk, a\_c\_chimp, a\_c\_fish, a\_c\_hen, a\_c\_pig, a\_c\_rat**</mark><mark style="color:red;">**, cannot be added — your pet will not have any movements and will also die instantly**</mark>.

\
⚠  <mark style="color:yellow;">**Attention:**</mark> <mark style="color:red;">**Issues with animations related to positioning, Add-on crashes and other problems with added pets (not including ours) are not covered by our support.**</mark>

| Appears                                              | Actions                                 | Accessories                | Care                   |
| ---------------------------------------------------- | --------------------------------------- | -------------------------- | ---------------------- |
| --------------------                                 | Follow, Cuddle, Pet Stats, Animations ✅ | Leash, Beds, Bwols, Toys ✅ | Food, Liquid, Health ✅ |
| Collar, Clothes, Shoes, Head, Patch, Glasse, Maks  ⛔ | K9 Functions (Sniff, Training)  ⛔       | -------------------        | --------------------   |

### How install new pet Add-on or retail pet from GTAV

{% stepper %}
{% step %}
### Add the animal’s photo to the shop.

⚠ <mark style="color:yellow;">**Recommended size:**</mark>**&#x20;237 x 168**

⚠ <mark style="color:yellow;">**To make sure the image works correctly in the shop, please use the**</mark> WEBP <mark style="color:yellow;">format for the photo.</mark>

⚠ <mark style="color:yellow;">**The file name (the animal’s photo) must match exactly the**</mark> <mark style="color:red;">**KEY**</mark>**&#x20;**<mark style="color:yellow;">**variable name defined in**</mark>**&#x20;**<kbd>**cdev\_pets > public > config > shop.lua**</kbd><mark style="color:yellow;">**.**</mark>

**Add the photo in the&#x20;**<mark style="color:yellow;">**cdev\_lib**</mark>**&#x20;resource under the path:&#x20;**<kbd>**cdev\_lib > nui > dist > pets > inventory**</kbd>**.**
{% endstep %}

{% step %}
### Creating the animal

**You will add a line by copying from another animal inside the&#x20;**<mark style="color:yellow;">**pets.lua**</mark>**&#x20;file located in the folder&#x20;**<kbd>**cdev\_pets > public > config > pets.lua**</kbd>**.**

**Example (Using a native pet from GTAV):**

```lua
    ["a_c_westy"] = { -- Change 
        Item = "a_c_westy", -- Change
        LeashSettings = { -- No touch
            Bone = 39317, -- No touch
            BoneName = "SKEL_Neck1", -- No touch
            BoneOffset = vector3(0.0, 0.15, -0.1), -- No touch
        },
        FloatingUISettings = { -- No touch
            Bone = 31086, -- No touch
            Offset = vector3(0.0, 0.0, 0.6), -- No touch
            MenuOffset = vector3(0.0, 0.05, 0.4), -- No touch
            BalloonOffset = vector3(0.0, 0.0, 1.0), -- No touch
            StatsOffset = vector3(-0.2, 0.0, -0.1) -- No touch
        },
        CameraCloseSettings = { -- No touch
            Bone = 31086, -- No touch
            Offset = vector3(0.3, 1.2, 0.5), -- No touch
            Rotation = vector3(0.0, 0.0, 160.0), -- No touch
        },
        BallSettings = { -- No touch
            Enable = true, -- No touch
            AttachBone = 46240, -- No touch
            AttachBoneOffset = vector3(0.14, 0.0, 0.05), -- No touch
        },
        Animations = DogAnims["SmallDog"], -- Change
    },
```

**Explanation of the part that needs to be changed:**

<mark style="color:blue;">**\["**</mark><mark style="color:yellow;">**a\_c\_westy**</mark><mark style="color:blue;">**"]**</mark>: Inside the key, instead of <kbd>**a\_c\_westy**</kbd>, you will put the name of the <mark style="color:yellow;">resource (the pet add-on folder you are adding)</mark> Or, if the pet is from GTAV, you should only use the ped name as shown on the website.

\
<mark style="color:blue;">**Item = "**</mark><mark style="color:yellow;">**a\_c\_westy**</mark><mark style="color:blue;">**"**</mark>: Here you will enter the spawn name of the ped. For an add-on file, you can find it inside the <mark style="color:yellow;">**peds.meta**</mark> file in the section marked as <kbd>\<Name>a\_c\_westy\</Name></kbd>.

<mark style="color:blue;">**Animations = DogAnims\["**</mark><mark style="color:yellow;">**SmallDog**</mark><mark style="color:blue;">**"],**</mark> : In this part, where it says <mark style="color:yellow;">**SmallDog**</mark>, you should choose based on the size and category. There are three options: <mark style="color:yellow;">**BigDog**</mark> (for large dogs), <mark style="color:yellow;">**SmallDog**</mark> (for small dogs), and <mark style="color:yellow;">**Cat**</mark> (for cats).
{% endstep %}

{% step %}
### Adding the new created pet for sale in the shop

**You will copy the line below and paste it inside the&#x20;**<mark style="color:yellow;">**shop.lua**</mark>**&#x20;file located in the folder&#x20;**<kbd>**cdev\_pets > public > config > shop.lua.**</kbd>

```lua
{
    PetShopId = "a_c_westy", -- Change
    key = "a_c_westy", -- Change
    hasFemale = false, -- No touch
    label = "Yorkshire GTAV", -- Change
    isPremiumPackage = false, -- No touch
    price = 5000, -- Change (If you want a different price)
    category = "pet_category_pets", -- Not touch
    description = "A YorkShire GTAV", -- Change
},
```

**Explanation of the part that needs to be changed:**

<mark style="color:blue;">PetShopId = "</mark><mark style="color:yellow;">a\_c\_westy</mark><mark style="color:blue;">"</mark>: Identification name that will be recorded after the purchase in the shop.

<mark style="color:blue;">key = "</mark><mark style="color:yellow;">a\_c\_westy</mark><mark style="color:blue;">"</mark>:  Same name given to the <mark style="color:yellow;">**Item**</mark> variable in the<kbd>**pet.lua**</kbd> file, and it will also be used to retrieve the <mark style="color:yellow;">photo</mark> file inside <kbd>**cdev\_lib**</kbd>.

<mark style="color:blue;">label = "</mark><mark style="color:yellow;">Yorkshire GTAV</mark><mark style="color:blue;">"</mark>: Animal name displayed in the shop.

<mark style="color:blue;">description = "</mark><mark style="color:yellow;">A Yorkhire GTAV</mark><mark style="color:blue;">"</mark>: Description of the animal that will be sold in the shop.
{% endstep %}

{% step %}
### Adding the new animal to items exclusive to certain types and sizes of animals

Some items in the <mark style="color:yellow;">**items.lua**</mark> file located in <kbd>**cdev\_pets > public > config > items.lua**</kbd> have exclusivity settings to prevent issues related to the animal’s size and category. For your new animal to be able to purchase these items, you need to add it to the <mark style="color:red;">**limited**</mark> variable.

Example item (dogbaga) : \
\
⚠ <mark style="color:red;">**You will add the name you used in the variable**</mark> **`Item = "a_c_westy"`&#x20;**<mark style="color:red;">**located in the file:**</mark>**&#x20;**<kbd>**cdev\_pets > public > config > pets.lua**</kbd>**.**\
\
**Before add:**

```lua
limited = { "pet_frbul", "pet_minpit", "pet_pug", "pet_shusky", "pet_york", "pet_poodle", "pet_chiua", "pet_dash" },
```

\
**After add:**

```lua
limited = { "pet_frbul", "pet_minpit", "pet_pug", "pet_shusky", "pet_york", "pet_poodle", "pet_chiua", "pet_dash", "a_c_westy" },
```
{% endstep %}
{% endstepper %}

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

## Is it necessary to add the items that are inside the items.lua file to my inventory?

***

No, and it won’t work if you try to add them. The pet system has its own inventory already integrated with the <mark style="color:yellow;">**cdev\_pets**</mark> resource. So regarding the items, you don’t need to do any configuration or add them to your own inventory system, since it is completely separate and has its own inventory system.

The only item you _can_ add to your framework’s inventory if you want is the **baseball** item. For more information on how to add it, you can read the documentation at the link below.

{% content-ref url="misc-integrations/ox-inventory.md" %}
[ox-inventory.md](misc-integrations/ox-inventory.md)
{% endcontent-ref %}

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

## How do I change the colors of the menu ?

***

⚠ <mark style="color:red;">**Before making any changes, make a full backup of the cdev\_lib and cdev\_pets folders. If you don't have experience with development or modifying code, it is not**</mark>**&#x20;**<mark style="color:yellow;">**recommended**</mark>**&#x20;**<mark style="color:red;">**that you follow these steps.**</mark>

### Changing Bag Pets Menu `cdev_lib > dist > css > app.xxxx.css`



<div align="left"><figure><img src="../../.gitbook/assets/image (10).png" alt="" width="180"><figcaption></figcaption></figure></div>

***

{% hint style="info" %}
<mark style="color:red;">**(Header)**</mark> **`#1f1f22`**
{% endhint %}

Formatted CSS Search For

```css
.ct-container-menu .ct-menu-app .menu-app .ct-header-menu-app .header-menu-app
```

Minified CSS Search For&#x20;

<pre class="language-css"><code class="lang-css"><strong>padding:3rem;width:100%;background:#1f1f22;border-top-left-radius:2rem;border-top-right-radius:2rem;flex-direction:row;gap:1rem;align-items:center;justify-content:center
</strong></code></pre>



***

{% hint style="info" %}
<mark style="color:yellow;">**(Body)**</mark>**&#x20;`#161619`**
{% endhint %}

Formatted CSS Search For

```css
.ct-container-menu .ct-menu-app .menu-app .ct-body-menu-app .body-menu-app
```

Minified CSS Search For&#x20;

{% code fullWidth="false" %}
```css
width:100%;padding:2rem;flex-direction:column;gap:1.2rem;max-height:40rem;overflow:auto;background:#161619
```
{% endcode %}

***

{% hint style="info" %}
<mark style="color:green;">**(Footer)**</mark>**&#x20;`#1f1f22`**
{% endhint %}

Formatted CSS Search For

```css
.ct-container-menu .ct-menu-app .menu-app .ct-footer-menu-app .footer-menu-app
```

Minified CSS Search For&#x20;

```css
padding:2rem;width:100%;background:#1f1f22;border-bottom-left-radius:2rem;border-bottom-right-radius:2rem
```

***

### Changing Main Shop Pets Menu `cdev_lib > dist > css > app.xxxx.css`

<figure><img src="../../.gitbook/assets/image (13).png" alt=""><figcaption></figcaption></figure>

***

{% hint style="info" %}
<mark style="color:red;">(</mark><mark style="color:red;">**Side Bar Item Menu)**</mark>**&#x20;Selected `#7289da` Not Selected `#1f1f22`**
{% endhint %}

<mark style="color:yellow;">Selected</mark> Formatted CSS Search For

<pre class="language-css"><code class="lang-css"><strong>.ct-container-shop .ct-shop-app .shop-app .ct-body-shop-app .body-shop-app .ct-left-body-shop-app .left-body-shop-app .ct-menu-left-body-shop-app .menu-left-body-shop-app .ct-body-menu-left-body-shop-app .body-menu-left-body-shop-app .ct-item-menu-left-body-shop-app .item-menu-left-body-shop-app.selected
</strong></code></pre>

<mark style="color:yellow;">Selected</mark> Minified CSS Search For&#x20;

```css
background:#7289da!important
```

<mark style="color:$success;">Not Selected</mark> Formatted CSS Search For

```
.ct-container-shop .ct-shop-app .shop-app .ct-body-shop-app .body-shop-app .ct-left-body-shop-app .left-body-shop-app .ct-menu-left-body-shop-app .menu-left-body-shop-app .ct-body-menu-left-body-shop-app .body-menu-left-body-shop-app .ct-item-menu-left-body-shop-app .item-menu-left-body-shop-app
```

<mark style="color:$success;">Not Selected</mark> Minified CSS Search For&#x20;

```css
display:flex;width:100%;height:-moz-fit-content;height:fit-content;align-items:center;padding:2rem;cursor:pointer;background:#1f1f22
```

***

{% hint style="info" %}
<mark style="color:yellow;">**(Side Bar Background)**</mark> **`#d9d9d9`**
{% endhint %}

Formatted CSS Search For

```css
.ct-container-shop .ct-shop-app .shop-app .ct-body-shop-app .body-shop-app .ct-left-body-shop-app .left-body-shop-app .ct-menu-left-body-shop-app .menu-left-body-shop-app
```

Minified CSS Search For&#x20;

```css
display:flex;width:100%;height:100%;background:#d9d9d9;flex-direction:column
```

***

{% hint style="info" %}
<mark style="color:orange;">**(Background)**</mark> **`#161619`**
{% endhint %}

Formatted CSS Search For

```css
.ct-container-shop .ct-shop-app .shop-app
```

Minified CSS Search For&#x20;

```css
display:flex;width:100%;height:100%;align-items:center;background:#161619;padding:2rem 4rem;gap:2rem;flex-direction:column
```

***

{% hint style="info" %}
<mark style="color:blue;">**(Text Hrizontal menu)**</mark>**&#x20;Selected `#7289da` Not Selected `#000`**
{% endhint %}

<mark style="color:yellow;">Selected</mark> Formatted CSS Search For

```css
 p.text-title-item-sub-menu-top-right-body-shop-app.selected
```

<mark style="color:yellow;">Selected</mark> Minified CSS Search For&#x20;

```css
p.text-title-item-sub-menu-top-right-body-shop-app.selected{color:#7289da}
```

<mark style="color:$success;">Not Selected</mark> Formatted CSS Search For

```
p.text-title-item-sub-menu-top-right-body-shop-app
```

<mark style="color:$success;">Not Selected</mark> Minified CSS Search For&#x20;

```css
p.text-title-item-sub-menu-top-right-body-shop-app{font-size:1.5rem;text-transform:uppercase;color:#000}
```

***

{% hint style="info" %}
<mark style="color:green;">**(Background Horizontal Bar)**</mark>`#d9d9d9`
{% endhint %}

Formatted CSS Search For

```css
top-right-body-shop-app
```

Minified CSS Search For&#x20;

```css
right-body-shop-app{display:flex;width:100%;height:100%;align-items:center;padding:2rem 3rem;background:#d9d9d9}
```

***

{% hint style="info" %}
**(Pagination Menu)**  **Selected `#`**`7289da`  Not Selected `No Background`
{% endhint %}

Formatted CSS Search For

```css
item-pagination actualPage
```

Minified CSS Search For&#x20;

```css
.item-pagination.actualPage{border-color:transparent;background:#7289da}
```

***

## How can i buy a K9 pet and K9 items ?

***

To buy the <mark style="color:yellow;">K9</mark> pet and the exclusive <mark style="color:yellow;">K9</mark> **accessories** and **items** in the shop, you need to have the <mark style="color:yellow;">police</mark> job set in your **framework**.

After that, when you click to buy the pet, if it is a <mark style="color:yellow;">K9 type</mark>, you will see an extra <mark style="color:red;">checkbox</mark> appear in the purchase menu, just like in the example below.

<figure><img src="../../.gitbook/assets/FiveM_GTAProcess_C7AZyPNlqE.gif" alt=""><figcaption></figcaption></figure>

If you want to change the required job or add more jobs allowed to buy the K9 and its accessories, follow this tutorial: [Here](faq.md#how-can-i-add-another-job-to-use-the-k9-pet)

## How to use the K9 pet's Sniff action ?

***

{% hint style="success" %}
**The Sniff action can be used on both&#x20;**<mark style="color:yellow;">**players**</mark>**&#x20;and&#x20;**<mark style="color:yellow;">**vehicles**</mark>**. For players, it will search only the player's&#x20;**<mark style="color:yellow;">**inventory**</mark>**, while for vehicles, it will search both the&#x20;**<mark style="color:yellow;">**glovebox**</mark>**&#x20;and the&#x20;**<mark style="color:yellow;">**trunk**</mark>**.**
{% endhint %}

⚠ <mark style="color:red;">**To use the**</mark>**&#x20;**<mark style="color:yellow;">**Sniff**</mark>**&#x20;**<mark style="color:red;">**feature, you first need to have a**</mark>**&#x20;**<mark style="color:yellow;">**K9 category pet**</mark><mark style="color:red;">**. You can see how to get a**</mark>**&#x20;**<mark style="color:yellow;">**K9**</mark>**&#x20;**<mark style="color:red;">**pet**</mark> [**HERE**](https://docs.cdev.shop/fivem/pet-system/faq#how-can-i-buy-a-k9-pet-and-k9-items)<mark style="color:red;">**.**</mark>

<figure><img src="../../.gitbook/assets/FiveM_GTAProcess_wrVKoMGHQm-_online-video-cutter.com_.gif" alt=""><figcaption></figcaption></figure>

### How to configure the items that the dog will sniff?

Access the file `config.lua` located in the folder `cdev_pets > public > config > config.lua`.

First, enable the `SearchEnabled` function so that everything works correctly on <mark style="color:yellow;">line 382</mark>:

```lua
SearchEnabled = true
```

Now, go to <mark style="color:yellow;">lines</mark> <mark style="color:yellow;">390</mark> to <mark style="color:yellow;">398</mark> and configure the items for each category as shown in the example below. These will be the items that the dog will search for and identify as <mark style="color:yellow;">illegal</mark>.

<pre class="language-lua"><code class="lang-lua">DrugItems = {
    "phone",
<strong>},
</strong>MoneyItems = {
    "water_bottle",
},
WeaponItems = {
    "sandwich",
},
</code></pre>

### How Sniff system work and Sniff Skill Level?

**The level determines the chance you have to perform the Sniff action successfully so lets use image bellow to example:**

<div align="left"><figure><img src="../../.gitbook/assets/Sniff Level.png" alt=""><figcaption></figcaption></figure></div>

In this case, I have a 20% chance for the K9 dog to successfully find the items. You can change the <mark style="color:yellow;">`DefaultLevel`</mark>and <mark style="color:yellow;">`MinLevel`</mark> in the `config.lua` file located in the folder `cdev_pets > public > config > config.lua` (<mark style="color:yellow;">lines 314</mark> and <mark style="color:yellow;">317</mark>), as shown below.

```lua
sniff = {
    -- Level the k9 starts at
    DefaultLevel = 20,
    -- Minimum level the k9 can be at
    -- if 0 then it will be impossible to sniff
    MinimiumLevel = 1,
    -- How much the sniff level increases per successful sniff
    LevelIncrease = 5,
    -- How much of the skill it will take out
    TakeOut = 5,
},
```

**Now lets explain how the Sniff System Works to better understand the Sniff system, here’s a step-by-step explanation:**

1. **First** – When you trigger the Sniff action near a vehicle, the system will start scanning the **DrugItems** configuration we set up earlier, regardless of where you clicked to activate Sniff.
   * It will first check the **GloveBox**, reading the vehicle’s plate and verifying in the database if any of the configured items are stored there.
   * If it finds an item, it will trigger the **Try Sniff** action, which determines success based on your pet’s level (as explained earlier).
   * If nothing is found in the GloveBox, it will proceed to search the **Trunk** for the configured **DrugItems**.
   * If it finds something in the Trunk, the dog will bark and perform a spinning animation.
2. **Second** – If no items from the **DrugItems** list are found, the system will then check the **MoneyItems** list, following the same process:
   * First, it searches the **GloveBox**, then the **Trunk**.
   * If an item is found, the dog will sit and bark.
3. **Third** – If no items from either the **DrugItems** or **MoneyItems** lists are found, the system will move on to check the **WeaponItems** list.
4. **Four** **and final -** The system works the same way if you use the Sniff action on a player, but it will only check the player's inventory.

***

Do you want me to also **add formatting for code examples** in the documentation so it’s easier for developers to configure the item lists? That would make it even more user-friendly.

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

<div><figure><img src="../../.gitbook/assets/image (5) (1).png" alt=""><figcaption></figcaption></figure> <figure><img src="../../.gitbook/assets/Pool Size.png" alt=""><figcaption></figcaption></figure></div>

This happen because you got limit addons texture or other limit you can have in one server for fix this you have some options

1. Remove some others texture like cars , new maps , clothes ..
2. Increase TxdStore inside sever.cfg ( This is not recommend) `increase_pool_size "TxdStore" 26000`

3.Use different games force build to receive more space for addons we recomended use 3258 `sv_enforceGameBuild 3258`

You can check more about Game Build [here](https://docs.fivem.net/docs/server-manual/server-commands/#sv_enforcegamebuild-build)

You can read more inside this documentation and check all limits [here](https://docs.fivem.net/docs/server-manual/server-commands/#increase_pool_size-poolname-increase)

⚠ <mark style="color:red;">**Changing the gamebuild won’t necessarily free up more space, but it will remove updates, which can help allocate more addons. Keep in mind that by using an older gamebuild version, any GTA V updates included in that build will be lost, and clothing slots as well as other limits in GTA V will change, which can negatively affect other resources on your server.**</mark>

{% hint style="info" %}
**You can also access the&#x20;**<mark style="color:red;">**tool**</mark>**&#x20;that&#x20;**<mark style="color:yellow;">**FiveM**</mark>**&#x20;provides to check how much&#x20;**<mark style="color:yellow;">**%**</mark>**&#x20;is being used in the&#x20;**<kbd>**TxDStore Pool**</kbd>**, which is related to textures, by following the image below. Also remember that a large portion, at least&#x20;**<mark style="color:red;">**15 to 20%**</mark>**, comes from the default&#x20;**<mark style="color:yellow;">**GTA V**</mark>**.**\
\
**The full list of pet assets below uses a total of&#x20;**<mark style="color:yellow;">**7.29%**</mark>**&#x20;of the&#x20;**<kbd>**TxDStore**</kbd>**:**

* cdev\_petshop
* cdev\_pets\_assets
* cdev\_pets\_assets2
* cdev\_dog\_pets
* cdev\_cat\_pets
{% endhint %}

Press the <mark style="color:yellow;">F8</mark> key to open the Client console in order to access the tool below.

<div align="left"><figure><img src="../../.gitbook/assets/image (6).png" alt=""><figcaption></figcaption></figure></div>

⚠ <mark style="color:red;">**If you don’t have this option in the**</mark>**&#x20;**<mark style="color:yellow;">**F8 menu**</mark><mark style="color:red;">**, you need to change your FiveM**</mark>**&#x20;version**<mark style="color:red;">**. Go to the**</mark>**&#x20;**<mark style="color:yellow;">**gear**</mark>**&#x20;**<mark style="color:red;">**icon right after opening**</mark>**&#x20;**<kbd>**FiveM Settings > Game > Update Channel**</kbd>**&#x20;**<mark style="color:red;">**and switch it to**</mark>**&#x20;**<mark style="color:yellow;">**Latest (Unstable)**</mark><mark style="color:red;">**.**</mark>

<figure><img src="../../.gitbook/assets/image (8).png" alt=""><figcaption></figcaption></figure>

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

<div align="center"><figure><img src="../../.gitbook/assets/image (3) (1) (1).png" alt=""><figcaption></figcaption></figure></div>

{% hint style="danger" %}
If you have an anti-cheat, it may be blocking the pet events, please check with your AC provider on how you can resolve this
{% endhint %}

## After I updated cdev\_pets to version 2.9.3 or (Higher), I can no longer open the store manager how can i fix?

***

<figure><img src="../../.gitbook/assets/Error When Try open Manager.png" alt=""><figcaption></figcaption></figure>

✅ <mark style="color:yellow;">**Please note: if you’re not yet using the resource on your production server, and it’s not an issue for you to delete all the cdev\_pets tables, the best practice is to remove them entirely and recreate the shop. This will fix all existing problems and help avoid any future issues.**</mark>\


### List of all tables to delete <mark style="color:red;">(Only delete everything if you have no problem losing all previously recorded data.)</mark>

* cdev\_pets
* cdev\_pets\_petshops
* cdev\_pets\_petshops\_employees
* cdev\_pets\_petshops\_sales
* cdev\_pets\_petshops\_sell\_prices
* cdev\_pets\_petshops\_stock

\
\
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
