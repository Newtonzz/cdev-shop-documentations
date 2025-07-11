# 🧏 cDev ASL (American Sign Language)

<figure><img src="https://cdev.is-pretty.cool/4Px8wzG.gif" alt=""><figcaption></figcaption></figure>

### What is this resource?

The **Public ASL Script** is a powerful tool designed to enhance communication for ASL users (or anyone who prefers not to speak and uses sign language) within FiveM servers. This script allows seamless integration of text-to-sign language translation, making it easier to communicate in various sign languages, you can create your own country ASL and edit our script to work for your community.

<details>

<summary>Feature List</summary>



* **Customizable Command**: Easily accessible through the `/asl` command, ensuring it fits naturally into your server's existing interactions. It can be configurable to any that you prefer.
* **Text Display Configurations**: Customize the appearance of your text with configurable options for font, color, scale, outline, and shadow effects. Tailor the visibility and style to suit your server's needs.
* **Sign Language Translations**: Translate typed text into sign language animations. You can configure and integrate multiple sign languages, allowing users from around the world to communicate more effectively.
* **Animation Settings**: Adjust animation speeds, flags, and custom durations to fine-tune the visual representation of text being translated into sign language.
* **Visibility and Range**: Set the range at which translations can be seen by other players, with options to control how much of a sentence is shown at once.
* **Standalone or Integrated Mode**: Choose between a standalone mode or integrate with other scripts as needed for your server's configuration.
* **Version Check and Debugging**: Ensure that you always have the latest version of the script and enable debug mode for troubleshooting when necessary.

#### Configurable Options:

* **Text Appearance**: Control the color, font, scale, outline, and shadow effects of the translated text.
* **Animation Speed**: Customize the fade-in and fade-out velocity of the animation.
* **Visibility Settings**: Control how far away other players can see the translated signs, and whether full sentences or individual words are displayed.
* **Time and Completion Settings**: Set the time after translation completion before the script resets and choose whether to show the entire sentence at once or word by word.

</details>



{% embed url="https://youtu.be/1iDie0mm87s" %}

## Installation Guide

<details>

<summary>Step 1: Extract the files</summary>

1. Extract the contents of the cdev\_signlanguage folder and place the resulting folder in your server's resource directory.

</details>

<details>

<summary>Step 2: Ensure the files</summary>

Your ensure should look like this in your `server.cfg`

```lua
ensure cdev_signlanguage
```

</details>

