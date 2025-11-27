# 🗺️ Show Blip on Map

## 🗺️ Show Blip on Map <a href="#pet-transfer-system" id="pet-transfer-system"></a>

{% hint style="success" %}
**NEW FEATURE!** This feature is fully compatible with existing shops. Old shops will maintain their blips by default.
{% endhint %}

### 📋 Overview

The Show Blip on Map feature gives you complete control over pet shop blip visibility. You can now choose whether each shop displays a map marker, allowing for hidden locations, secret shops, or cleaner map interfaces.

**Perfect for:**

* 🗺️ Controlling pet shop blip visibility on the map
* 🎨 Creating cleaner map interfaces with fewer markers
* 🔒 Managing secret or hidden pet shops
* 🎮 Enhancing role-play experiences with discoverable locations

***

### ✨ Key Features

<table data-view="cards"><thead><tr><th>Feature</th><th>Description</th></tr></thead><tbody><tr><td>🖥️ <strong>Per-Shop Blip Control</strong></td><td>Toggle blip visibility individually for each pet shop with easy checkbox control</td></tr><tr><td><strong>✅ Smart Value Preservation</strong></td><td>Blip settings (ID, Size, Color) are saved even when disabled, allowing easy re-activation</td></tr><tr><td>🔄 <strong>Full Backward Compatibility</strong></td><td>Existing shops automatically keep their blips visible without manual migration</td></tr><tr><td>🔔 <strong>Instant Updates</strong></td><td><p>Blip changes apply immediately to all nearby players when saved</p><p></p></td></tr></tbody></table>

#### Complete Feature List

* ✅ **Per-Shop Blip Toggle** – Control blip visibility individually for each shop
* ✅ **Value Preservation** – Blip settings saved even when disabled
* ✅ **Backward Compatibility** – Old shops automatically maintain visible blips
* ✅ **Smart Validation** – Blip fields only required when enabled
* ✅ **Instant Synchronization** – Changes apply immediately to all nearby players
* ✅ **Clean Delete Handling** – Blips properly removed when shops are deleted
* ✅ **Separate Handle Storage** – Prevents blip ID conflicts and duplication
* ✅ **Flexible Configuration** – Easy to enable/disable per shop without data loss



***

### 🎮 How to Use

{% tabs %}
{% tab title="Creating a Pet Shop with Blip Control" %}
## Accessing the Menu

<figure><img src="../../../.gitbook/assets/FiveM_GTAProcess_fVTYcaLOEa.gif" alt=""><figcaption></figcaption></figure>

### Command:

`/pscreator`

### What Happens:

**1️⃣ Permission Check**

* System verifies you have `PermCreatePetShop` permission
* If denied, you'll see "No permission" notification
* Menu will not open without proper permissions

**2️⃣ Menu Opens**

* Pet Shop Creator menu appears with CDEV logo
* Select **New Shop** option

**3️⃣ Basic Information**\
Configure shop details:

* **Shop Name** - Enter your shop name
* **Shop Logo** - Enter logo URL (optional)

**4️⃣ Blip Configuration**\
Set blip appearance values:

* **Blip ID** - Sprite number (default: 273)
* **Blip Size** - Scale value (default: 1)
* **Blip Color** - Color ID (default: 0)
* **Blip Location** - Click to set shop center coordinates with your current position

**5️⃣ Blip Visibility Control**\
Choose if shop appears on map:

* **Show Blip on Map** checkbox:
  * ☐ Unchecked = Hidden shop (no map marker) - **Default for new shops**
  * ✅ Checked = Visible shop (appears on map)

**6️⃣ Additional Setup**

* **Setup Management** - Configure management tablet locations
* Review all settings

**7️⃣ Create Shop**

* Click **Create** button
* System validates all required fields:
  * Shop name must be filled
  * Blip Location is required (even if blip disabled)
  * If blip enabled: validates Blip ID, Size, and Color
* If blip enabled: Appears on all nearby players' maps
* Success notification shown

{% hint style="danger" %}
**Blip Location is Always Required:** Even for hidden shops, you must set a Blip Location. It's used for internal distance calculations and proximity detection.
{% endhint %}
{% endtab %}

{% tab title="Editing Shop Blip Settings" %}
#### Accessing the Menu

<figure><img src="../../../.gitbook/assets/FiveM_GTAProcess_iv5wOPUT33.gif" alt=""><figcaption></figcaption></figure>

### Command:

`/pscreator`

### What Happens:

**1️⃣ Permission Check**

* System verifies you have `PermCreatePetShop` permission
* Menu opens if permission granted

**2️⃣ Select Shop to Edit**

* Choose **Manage Shops** from main menu
* List of all existing shops displays
* Select the shop you want to edit

**3️⃣ Current Settings Displayed**\
Menu shows all current configuration:

* Shop Name and Logo
* **Blip ID** - Current sprite number
* **Blip Size** - Current scale
* **Blip Color** - Current color ID
* **Blip Location** - Current center coordinates
* **Show Blip on Map** - Current checkbox state:
  * ✅ Checked = Blip currently visible
  * ☐ Unchecked = Blip currently hidden

**4️⃣ Modify Blip Settings**\
You can change:

* Any blip value (ID, Size, Color)
* Blip Location (click to update with current position)
* Toggle **Show Blip on Map** checkbox

**5️⃣ Toggle Blip Visibility**\
To enable/disable blip:

* Click **Show Blip on Map** checkbox
* Checkbox toggles immediately
* **No automatic save** - you must click Update

**6️⃣ Save Changes**

* Click **Update** button
* System validates changes:
  * If blip enabled: validates ID, Size, Color values
  * If blip disabled: preserves all values for future use
* Changes saved to database

**7️⃣ Changes Applied Instantly**\
After clicking Update:

* All nearby players receive update
* If blip **enabled**: Appears on everyone's map immediately
* If blip **disabled**: Removed from everyone's map immediately
* Shop functionality unchanged (purchases, management, etc. still work)

***

{% hint style="success" %}
**Value Preservation:** When you disable the blip, all your settings (ID, Size, Color) are saved. Re-enabling the blip later will use the same values!
{% endhint %}

{% hint style="danger" %}
**Important:** You must click **Update** after toggling the checkbox. The checkbox only marks your preference - changes aren't saved until you update!
{% endhint %}
{% endtab %}
{% endtabs %}

***

### ❓  Frequently Asked Questions (FAQ)

<details>

<summary><strong>Q1: Can I hide the blip but keep the shop functional?</strong></summary>

Yes! Disabling the blip only removes the map marker. All shop functionality (management, purchases, veterinary, etc.) remains fully operational.

</details>

<details>

<summary><strong>Q2: What happens to my blip settings when I disable the blip?</strong></summary>

All your blip settings (ID, Size, Color, Location) are **preserved**. When you re-enable the blip, it will use the same values.

</details>

<details>

<summary><strong>Q3: Do I need to reconfigure existing shops?</strong></summary>

No. Existing shops automatically maintain their blips. The feature only applies when you choose to disable blips manually.

</details>

<details>

<summary><strong>Q4: Can I have some shops with blips and others without?</strong></summary>

Yes! The setting is **per-shop**. Each shop can independently have its blip enabled or disabled.

</details>

<details>

<summary><strong>Q5: What if I forget to set Blip Location?</strong></summary>

Blip Location is **required** for all shops, even if the blip is disabled. It's used for internal distance calculations and shop proximity detection.

</details>

<details>

<summary><strong>Q6: Will players see the blip disappear immediately after I disable it?</strong></summary>

Yes. When you click Update, all nearby players will have the blip removed from their map instantly.

</details>

<details>

<summary><strong>Q7: Does disabling the blip affect performance?</strong></summary>

Yes, positively! Fewer blips on the map means slightly better client performance, especially on servers with many shops.

</details>

<details>

<summary><strong>Q8: What happens if I delete a shop with a blip?</strong></summary>

The blip is automatically removed from all players' maps when the shop is deleted. No manual cleanup needed.

</details>
