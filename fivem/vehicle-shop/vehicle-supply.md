---
description: >-
  The vehicle supply is a pool of vehicles available for all shops to buy from
  and add to their own stock
---

# Vehicle Supply

{% hint style="info" %}
All initial vehicles are obtained from your framework's configuration (Currently supported ESX and QBCore)
{% endhint %}

{% hint style="info" %}
If you are using a custom framework, you will need to add your own supply of vehicles following the instructions below
{% endhint %}

{% hint style="warning" %}
You will need to have at least **admin** permission in QBCore/ESX to open the creator menu
{% endhint %}

## Managing Supply

1. Run the command `/cvshop` to open the creator menu
2. Press "**Manage Vehicle Supply**"
3. Press "Add Vehicle" or any of the existing vehicles if you wish to change them
4. Fill out the vehicle information such as Model (spawn code), Price, Thumbnail URL, or take a screenshot using our built-in tool.

## Screenshot Tool

Making thumbnails was made easier with a click of a button.&#x20;

When adding/editing vehicle supply, press the "**Take Screenshot**" button after typing in the vehicle model, you will be transported to a clean room and all the necessary adjustments will be made in your camera for the perfect screenshot, after 3 seconds that task will be done and you can simply add your new vehicle to the supply without any extra work.

This tool may not be suitable for larger vehicles as the dimensions may not be compatible with our setup. However, you can modify the offsets in the exposed API code to customize it for your specific needs.

{% hint style="info" %}
This tool works by uploading a screenshot of the vehicle to your FiveM server. To ensure security, the thumbnail is requested from our secure proxy server, which then routes the request to your server and returns the thumbnail to the client over HTTPS. Despite being served from within your server, the request is made to our proxy server due to Cross-Origin rules.
{% endhint %}

{% hint style="danger" %}
If you are not seeing any thumbnails, make sure to open your server port (usually 30120). This is necessary even when running a local development server, as it allows the thumbnails to be routed through our proxy.
{% endhint %}

## Extra Settings

To quickly adjust the prices of all the vehicles in your stock at once, you can use the "Vehicle Supply Price Multiplier" setting in the "Settings" menu of the creator.&#x20;

The default value for this setting is 1, which means that the prices of the vehicles will not be changed. If you increase the value to 1.5, for example, the prices of all the vehicles will be increased by 50%. Similarly, if you set the value to 2, the prices of all the vehicles will be doubled.

## Miscellaneous Information

### Updating Initial Supply

We recommend using our in-game menu for making any adjustments for vehicle supply, but if it suits you more to use your framework vehicles file, you will need to manually run the `/refreshsupply` command in order to update the database with the latest data from the file. This process takes a few seconds and you should see the live progress on your server's console.

