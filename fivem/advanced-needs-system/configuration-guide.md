# Configuration Guide

### Introduction

This guide provides detailed instructions for configuring the "Needs" script, ensuring optimal performance and user experience. The configuration is divided into two main parts: setting up the needs and their effects, and configuring interactions and durations.

### Part 1: Configuring Needs and Their Effects

#### Important Notes

* **Status Values**: When hunger, thirst, puke, stress, and poop statuses are at 0, the ped is in optimal condition with no needs. Adverse conditions arise as these needs increase.
* **Good Condition Indicators**: Hygiene, social, and energy values indicate a ped's good condition. Lower values increase the ped's vulnerability to their effects.

**Clothing on PED (For showers and bathroom use)**

You can modify and define the player's clothing to ensure they appear naked while peeing or using the shower. Lines 70 to 98 specify each part of the body and the corresponding numbers to change.

#### Needs and Their Effects

**Hunger**

* **Effects**: When hunger is defined (line 112), two main effects occur:
  * The ped rubs their belly and stomach growling sounds occur periodically.
  * These effects can be intensified by adjusting the frequency (line 114) and the damage received (line 113) when hunger reaches 100.
* **Configuration**:
  * **Line 111**: Set the time interval for hunger warnings.
  * **Line 112**: Set the threshold for hunger notifications.
  * **Line 113**: Set the damage value at maximum hunger.
  * **Line 114**: Set the damage frequency at maximum hunger.

**Thirst**

* **Effects**: When thirst is defined (line 118), two main effects occur:
  * The ped walks with a drunken animation (line 117).
  * To prevent bypassing this mechanic, the ped reverts to the animation periodically (line 119) if conditions persist (line 118).
* **Configuration**:
  * **Line 117**: Set the animation for severe thirst.
  * **Line 118**: Set the threshold for thirst warnings.
  * **Line 119**: Set the condition to reset the walking animation.
  * **Line 120**: Set the damage value at maximum thirst.
  * **Line 121**: Set the damage frequency at maximum thirst.

**Puke**

* **Effects**: Puking resets hunger and thirst to values set in lines 124 and 125, respectively. Adjust these values with caution to avoid excessive damage.
* **Configuration**:
  * **Line 124**: Set the hunger reset value after puking.
  * **Line 125**: Set the thirst reset value after puking.

**Stress**

* **Effects**: Stress effects trigger when the ped's stress exceeds the value set in line 128. The intensity of these effects can be adjusted.
* **Configuration**:
  * **Line 128**: Set the stress threshold.
  * **Line 129**: Set the frequency of stress effects.
  * **Line 131**: Set the intensity of stress effects.

**Hygiene**

* **Effects**: When hygiene falls below the value set in line 135, the ped periodically receives warnings and performs a self-sniffing animation.
* **Configuration**:
  * **Line 134**: Set the frequency of hygiene warnings.
  * **Line 135**: Set the hygiene threshold for warnings.

**Social**

* **Effects**: Low social values increase food and drink consumption, exacerbating hunger and thirst based on multipliers in line 139.
* **Configuration**:
  * **Line 138**: Set the social threshold.
  * **Line 139**: Set the multipliers for hunger and thirst consumption.

**Poop**

* **Effects**: When the poop value exceeds the threshold set in line 142, the ped randomly farts based on the percentage chance set in line 143.
* **Configuration**:
  * **Line 142**: Set the poop threshold.
  * **Line 143**: Set the percentage chance of farting.

**Energy**

* **Effects**: When energy falls below the value set in line 147, the screen flashes black periodically.
* **Configuration**:
  * **Line 146**: Set the blackscreen interval.
  * **Line 147**: Set the energy threshold for low energy effects.
  * **Line 148**: Set the blackscreen duration in milliseconds.

#### Consumption Configuration

**Line 100: Setting Consumption per Second**

Define consumption rates for hunger, thirst, puke, and stress on lines 102, 103, 104, and 105. The values represent the number of seconds per decrement (total of 100 maximum).

### Part 2: Configuring Interactions and Durations

#### Interaction Durations (from Line 152)

* **Line 154**: Set the duration for the shower action (in seconds).
* **Line 155**: Set the duration for the pee action (in seconds).
* **Line 156**: Set the duration for the poop action (in seconds).
* **Line 157**: Set the duration for the washHands action (in seconds).
* **Line 158**: Set the duration for the sleep action (in seconds).

#### Fruit Configuration (Lines 161 to 170)

* A generic fruit status affecting all listed fruits, with durations specified in milliseconds (1000 milliseconds = 1 second).

#### Generic Fruits (Lines 173 to 221)

* Specific effects for apples, pears, and plums, based on settings from lines 161 to 170.

#### Beverage Configuration (Line 228)

* A base status for "water\_bottle," with customizable effects and animation durations in milliseconds.

#### Action Consequences (Lines 258 to 291)

* Actions and their respective status effects.

#### Socialization Areas (Lines 295 to 311)

* Define socialization areas to drastically reduce social needs.
* **Line 297**: Set the interval for the effects of the socialization area.
* **Line 301**: Set the radius of the socialization area.
* **Line 303**: Set the amount of stress reduction within the socialization area.
* **Line 304**: Set the amount of social increase within the socialization area.

### Player CONFIG MENU in Game: (Press I (i) on keyboard)

#### Cinematic Timecycle

* Remove sun and shadow effects to increase FPS.

#### Default Timecycle

* Return to the default timecycle settings.

#### Toggle HUD

* Show or hide the needs HUD.

#### Toggle Street Names

* Show or hide street names in the top right corner.

#### Toggle Clock

* Show or hide the clock in the top right corner.

By following this comprehensive guide, you can effectively configure the "Needs" script to suit your specific requirements and enhance the gaming experience.
