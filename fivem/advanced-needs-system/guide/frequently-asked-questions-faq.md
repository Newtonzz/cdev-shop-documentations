# Frequently Asked Questions (FAQ)

## 1. Will any custom prop like toilets, sinks, bathtubs, and showers work?

Yes, absolutely! To make custom props work, you simply need to add them to your configuration list. Navigate to the `/public/config/offset` file, where you will find sections for toilets, sinks, bathtubs, and showers within the code. You can easily add any custom prop here, and it will be recognized by the system.

## 2. My HUD is not recognizing the toilet in a bathroom inside an MLO. What should I do?

This issue is likely caused by the toilet being a custom prop that needs to be added to the custom prop list. You can do this by adding the prop to your configuration list. If the prop is "linked" to the entire building, you will need to manually add it to the `/public/config/config` file under the actions configuration. Once added, the HUD should properly recognize the toilet.

## 3. How do I add my food and drinks to the needs script?

The Needs v2 script integrates seamlessly with your inventory/framework. Simply create the food and drink items as you normally would in your framework, and they will automatically work with the script. If you'd like to see more detailed integrations, you can check out the[ integrations](../integrations.md) for examples and guidelines.

## 4. How can I disable specific needs like stress or other social needs?

If you'd like to disable specific needs, such as the stress social or others, simply go to the `/public/config/config` file and set `"Enable = false"` for the ones you want to turn off. This will disable that particular need without affecting the others.

