# 💎 Custom Currency in Pet Shop

## &#x20;💎Custom Currency in Pet Shop <a href="#pet-transfer-system" id="pet-transfer-system"></a>

{% hint style="success" %}
**NEW FEATURE!** This feature is fully compatible with existing shops. Old shops will maintain their pet placed by default.
{% endhint %}

### 📋 Overview

The **Custom Currency** system lets you define shop items that are paid **only** with a currency of your choice (e.g. `crypto` from Qbox, or your own VIP/points). When an item uses `customCurrency`, the player pays **only** that currency—no cash is charged. The pet shop **(NPC shop / Tab Shop)** displays the custom currency balance in the header next to cash, with a diamond icon (or your own icon), and shows “Buy \[Currency Name]” on the button.

**Perfect for:**

*   💎 VIP-only or premium items paid with a custom currency


* 🪙 Crypto or other in-game currencies
* 💰 Have profit on your server using our pet system.





***

### ✨ Key Features

<table data-view="cards"><thead><tr><th>Feature</th><th>Description</th></tr></thead><tbody><tr><td>📁 <strong>Custom currency per item</strong></td><td>In <code>shop.lua</code>, set <code>customCurrency = { crypto = 50 }</code> (or your key). Item is paid only with that currency.</td></tr><tr><td>💰 <strong>Header balance</strong></td><td>When the shop has custom-currency items, the header shows cash + custom currency balance (with icon).</td></tr><tr><td> 📝 <strong>Single language key</strong></td><td>The name shown (e.g. “Crypto”, “VIP Coins”) comes from <code>vip_coins</code> in <code>data/languages</code>—one key for all.</td></tr><tr><td>🔧 <strong>Optional custom icon</strong></td><td>Use default diamond SVG or your own image via <code>Shop.CustomCurrencyIcon</code> in config.</td></tr><tr><td>🔃 <strong>Balance refresh after purchase</strong></td><td>After a successful purchase, the shop reopens with updated cash and custom currency balance.</td></tr></tbody></table>

***

### &#x20;🔧 How Setup Custom Currency & Preview

***

{% tabs %}
{% tab title="How Setup" %}
#### **1.** Open the file `api.lua` located at: `cdev_lib > public > server > api.lua`

#### **2.** Inside this file, we will modify the three functions shown below.

{% hint style="warning" %}
**Note:** Since I am using **QBox/QBCore**, no changes are required. If you are using another VIP currency system, configure it correctly for **QBCore/QBox** or **ESX**.
{% endhint %}

```lua
-- 💎 Custom currency (e.g. crypto, vip_coins) for shop systems.
-- Used when shop items have customCurrency in config; implement per currencyType in the blocks below.
-- QBCore/Qbox: money types beyond cash/bank (e.g. crypto) are read from PlayerData.money[currencyType].
GetCustomCurrencyFromSource = function(source, currencyType)
    if clib_Config.isQBCore then
        local player = clib.frameworks.QBCore.Functions.GetPlayer(source)
        if not player or not player.PlayerData.money then return 0 end
        local amount = player.PlayerData.money[currencyType]
        return (type(amount) == "number" and amount >= 0) and amount or 0
    elseif clib_Config.isESX then
        -- 🔧 ESX: add accounts or custom logic per currencyType (e.g. "crypto")
        return 0
    else
        -- 🔧 If using custom, implement your own code here
        return 0
    end
end,
AddCustomCurrencyForSource = function(source, currencyType, amount)
    if clib_Config.isQBCore then
        local player = clib.frameworks.QBCore.Functions.GetPlayer(source)
        if player and amount > 0 then
            player.Functions.AddMoney(currencyType, amount)
        end
    elseif clib_Config.isESX then
        -- 🔧 ESX: add account or custom logic per currencyType
    else
        -- 🔧 If using custom, implement your own code here
    end
end,
RemoveCustomCurrencyFromSource = function(source, currencyType, amount)
    if clib_Config.isQBCore then
        local player = clib.frameworks.QBCore.Functions.GetPlayer(source)
        if player and amount > 0 then
            player.Functions.RemoveMoney(currencyType, amount)
        end
    elseif clib_Config.isESX then
        -- 🔧 ESX: remove from account or custom logic per currencyType
    else
        -- 🔧 If using custom, implement your own code here
    end
end,
```

#### **3.** Now open the file `config.lua` located at: `cdev_pets > public > config > config.lua`

We will add a pet-type product to be sold using a custom currency. Locate the product you want to edit.

{% hint style="info" %}
**Note:** In this example, I am using the **crypto** currency available in **QBCore/QBox**.
{% endhint %}

{% hint style="warning" %}
⚠️ **Important:** The variable passed inside the `customCurrency` object will be the variable used by the functions in **cdev\_lib**. e.g ( I use **crypto** from QBCore/Qbox )

Set **`price = 0`** (recommended so it’s clear the item is custom-currency only).
{% endhint %}

```lua
-- [[ CUSTOM CURRENCY ]]
-- Item is paid ONLY with the currency defined here. Set price = 0.
--
-- • The KEY inside customCurrency is the name used to read/write in the database (e.g. "crypto" = money.crypto column in Qbox).
--   That key must exist in cdev_lib (GetCustomCurrencyFromSource / RemoveCustomCurrencyFromSource).
--
-- • To change the DISPLAY name (what the player sees: "Crypto", "VIP Coins", etc.), edit "vip_coins" in data/languages (en.lua, pt.lua, etc.).
--   One language key for the currency name; no need to create one per type.
{
    PetShopId = "pet_hottweiler",
    key = "pet_chop",
    label = "Hottweiler",
    hasFemale = true,
    price = 0, -- (Optional) but recommended
    category = "pet_category_pets",
    description = "A Hottweiler",
    vip = true, -- Enable this if you want only VIP can Buy this product
    customCurrency = { crypto = 50 }, -- Add this line
    canBeK9 = true,
},
```

#### **4. (Optional) Change the Custom Currency name**

⚠️ **Attention:** I will use the `en.lua` file as an example, but you can use any file inside `cdev_pets/data/languages`. After opening it, simply search for the variable named `vip_coins`.

***

{% hint style="info" %}
If you want to change the diamond icon in the Shop header, simply access the configuration file at:

`cdev_pets > public > config > config.lua` (Line 461)

```lua
-- Custom currency icon in shop header. If empty, the default diamond SVG is used. If set (e.g. "nui://cdev_pets/html/icons/vip.png"), that image is used instead.
CustomCurrencyIcon = "",
```
{% endhint %}
{% endtab %}

{% tab title="Shop Preview" %}
{% hint style="warning" %}
⚠️ **Attention:** In the gift below, I only added it for one item, which is the **Hotweiller pet**, but you can apply this system to any pet or item (accessories).
{% endhint %}

<figure><img src="../../../.gitbook/assets/FiveM_GTAProcess_aerheDmenP.gif" alt=""><figcaption></figcaption></figure>
{% endtab %}
{% endtabs %}

***

#### ❓ Frequently Asked Questions

<details>

<summary><strong>Q1: Can an item use both cash and custom currency?</strong></summary>

No. With the current design, if an item has \`customCurrency\`, it is paid \*\*only\*\* with that currency. Set \`price = 0\` so the item is clearly “custom currency only.” If you set both \`price\` and \`customCurrency\`, only the custom currency is charged; the cash price is ignored.

</details>

<details>

<summary><strong>Q2: Where does the custom currency balance appear?</strong></summary>

Only in the \*\*NPC Pet Shop\*\* (the one opened from the ped). The header shows cash and, when the shop has at least one custom-currency item, the custom currency balance with the diamond (or custom) icon. Player-owned pet shops do not show or use this.

</details>

<details>

<summary><strong>Q3: How do I change the name “VIP Coins” (or “Crypto”) that the player sees?</strong></summary>

Edit the \*\*\`vip\_coins\`\*\* key in your language files under \`cdev\_pets/data/languages/\` (e.g. \`en.lua\`, \`pt.lua\`). One key is used for the display name everywhere (button, price, header). You do not need a separate language key per currency type.

</details>

<details>

<summary><strong>Q4: I use Qbox; how do I use “crypto” from players.money?</strong></summary>

Ensure your framework exposes \`money.crypto\` (e.g. in \`PlayerData.money.crypto\` when the player is loaded). cdev\_lib’s default implementation for QBCore/Qbox reads and writes \`PlayerData.money\[currencyType]\`, so \`customCurrency = { crypto = 50 }\` in \`shop.lua\` will use that. Set \`vip\_coins\` in languages to the label you want (e.g. “Crypto”).

</details>

<details>

<summary><strong>Q5: Can I use my own icon instead of the diamond?</strong></summary>

Yes. In \`public/config/config.lua\`, under \`Shop\`, set \`CustomCurrencyIcon\` to your image URL (e.g. \`"nui://cdev\_pets/html/icons/vip.png"\`). If empty, the default diamond SVG is used.

</details>

<details>

<summary><strong>Q6: Does the balance update after I buy an item?</strong></summary>

Yes. After a successful purchase, the shop reopens and both cash and custom currency balances are refreshed before the shop is shown again.

</details>
