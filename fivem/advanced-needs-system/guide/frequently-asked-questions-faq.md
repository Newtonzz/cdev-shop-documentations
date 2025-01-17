# Frequently Asked Questions (FAQ)

## 1. Will any custom prop like toilets, sinks, bathtubs, and showers work?

Yes, absolutely! To make custom props work, you simply need to add them to your configuration list. Navigate to the `/public/config/offset` file, where you will find sections for toilets, sinks, bathtubs, and showers within the code. You can easily add any custom prop here, and it will be recognized by the system.

## 2. My HUD is not recognizing the toilet in a bathroom inside an MLO. What should I do?

This issue is likely caused by the toilet being a custom prop that needs to be added to the custom prop list. You can do this by adding the prop to your configuration list. If the prop is "linked" to the entire building, you will need to manually add it to the `/public/config/config` file under the actions configuration. Once added, the HUD should properly recognize the toilet.

## 3. How do I add my food and drinks to the needs script?

The Needs v2 script integrates seamlessly with your inventory/framework. Simply create the food and drink items as you normally would in your framework, and they will automatically work with the script. If you'd like to see more detailed integrations, you can check out the[ integrations](../integrations.md) for examples and guidelines.

## 4. How can I disable specific needs like stress or other social needs?

If you'd like to disable specific needs, such as the stress social or others, simply go to the `/public/config/config` file and set `"Enable = false"` for the ones you want to turn off. This will disable that particular need without affecting the others.

## 5. My players are sleeping all the time. Is it possible to tweak this or make them sleep even more?

Yes! Our advanced needs system is fully configurable, allowing you to make any modifications you desire. You can adjust the time or make players sleep more frequently. To do so, open the `/public/config/config` file and look for the following lines: \
\
You can modify the values here to control how frequently the needs decrease and adjust the amount accordingly. This will give you full control over the sleep system.

```lua
Options = {
    DecreaseEverySeconds = 60 * 5,
    DecreaseAmount = 1
}

```

## 6. The shower is taking too long or too short. Can I change the duration of the animation for each need?

Yes, you can! To modify the duration of any animation for a specific need, go to the `/public/config/config` file and find the need you want to adjust. Under the "Actions" section, you can modify the animation duration to suit your preferences.

## 7. How do I make their social or stress levels go up?

To increase social or stress levels (i.e., make them more positive), follow these steps:

1. Go to the `/public/config/config` file and find the sections related to "stress" or "social."
2. There, you will be able to add new locations where stress or social levels can increase.
3. You can also use exports to trigger changes in the stress level or social need, such as when a player smokes, which would increase their stress level while reducing the bad effects of stress. This will require some coding to use our export functionality.

You can set the time, position, and radius for each location where these needs will be affected. Here’s an example:

```lua
stressAreas = {
    -- Increase stress (less stressed) stat by X amount per minute if the player is nearby the specified location
    Enabled = true,
    Options = {
        IncreasePerMinute = 0.1,
    },
    Locations = {
        {
            position = vector3(-1386.04, -1331.41, 4.15),
            radius = 35.0,
        }
    }
}
```

## 8. When the character goes to shower or pee/poop, they change clothes. How can I set them with the clothing/naked I want?

To customize the clothing or naked appearance during actions like showering or using the bathroom, go to the `/public/config/config` file and find the "Clothing Presets" section. There, you can adjust the slot numbers for the clothing you want to apply. Once you set up the correct slot numbers, the game will automatically apply your chosen clothing or naked presets during these actions.
