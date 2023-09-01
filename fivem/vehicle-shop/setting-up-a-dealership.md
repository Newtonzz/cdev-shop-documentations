---
description: >-
  Setting up a dealership is a simple and straightforward process that can be
  done in-game with ease.
---

# Setting up a Dealership

{% hint style="warning" %}
You will need to have at least **admin** permission in QBCore/ESX to open the creator menu
{% endhint %}

## Creating a shop

1. Go where you want to set up your shop
2. Run the command `/cvshop` to open the creator menu
3. Press "**New Shop**" and start filling out the shop details
4. Press "**Set Blip Location**" to set the shop's blip location to where you are at
5. By pressing "**Setup Tablets**", "**Setup Spawns**", "**Setup Showroom**" and "**Setup Management**" you will open our in-game car placers and prop selectors. Follow the on-screen instructions to proceed.
6. Once finishing the setup press "**Create**"

{% hint style="info" %}
Click [here](https://docs.fivem.net/docs/game-references/blips/#blips) for a list of valid blip IDs and [here](https://docs.fivem.net/docs/game-references/blips/#blip-colors) for blip color IDs.
{% endhint %}

## Managing Employees

Once the shop is created, you can add employees using the creator menu by navigating to "Manage Shops" selecting your desired shop, and selecting "Employees". You can input their server id or use our in-game picker.

To use the native `/setjob` command in your framework, you can use the name of the shop in lowercase with no spaces, and add "shop" in front of it. For example:

* If your shop is called "Volkswagen", the job handle would be "shopvolkswagen".
* If your shop is called "Premium Motors", the job handle would be "shoppremiummotors".

Keep in mind that the job handle should not include any spaces.

The job grades are:

| Job Label  | Grade Level |
| ---------- | ----------- |
| Boss/Owner | 100         |
| Employee   | 0           |

{% hint style="info" %}
If you are trying out the shop, make sure to add yourself as the owner to have access to all management features.
{% endhint %}

{% hint style="warning" %}
Always make sure to press **Update** when doing any changes to an existing shop, as those changes will not be saved until you do so
{% endhint %}

## Shop Settings

As an owner, you can modify a few settings unique to that dealership. You can do that by interacting with any **Management** prop you've set and choosing the option "Shop Settings".

* **Resale Margin**\
  To maintain a balanced economy and fair profit margin, all vehicles in the dealership stock will be priced at a certain percentage higher than their purchase price. This setting allows you to adjust that percentage as needed.
* **Sale Employee Bonus**\
  For every sale an employee makes they will get paid this percentage out of the vehicle's total cost, while the remaining amount goes to the company vault.

## Miscellaneous Information

### Test Drives

In order to return a test drive vehicle, the employee must run the command `/returnvehicle` near the vehicle, or if it's a free shop the customer can do it themselves.



Next, you should start adding stock to the shop in order to see the showroom fill with vehicles.
