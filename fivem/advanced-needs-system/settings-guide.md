# Settings Guide

### Where you will find the Settings

The configuration file is located at `cdev_needs/public/settings.`

<details>

<summary>Disable Components of the HUD</summary>

Disable components from UI, allowing you to use any HUD.

* Indicators
  * _Type:_ <mark style="color:purple;">Boolean</mark>
  * _Description:_ Disable the indicators.
* Informations
  * _Type:_ <mark style="color:purple;">Boolean</mark>
  * _Description:_ Disable the informations.

<!---->

* Speedometer
  * _Type:_ <mark style="color:purple;">Boolean</mark>
  * _Description:_ Disable the speedometer.
* Notifys
  * _Type:_ <mark style="color:purple;">Boolean</mark>
  * _Description:_ Disable the notifys.

</details>

### Part 1: Configuring Needs and Their Effects

{% hint style="warning" %}
**Important Notes**

* **Status Values**: When hunger, thirst, puke, stress, and poop statuses are at 0, the ped is in optimal condition with no needs. Adverse conditions arise as these needs increase.
* **Good Condition Indicators**: Hygiene, social, and energy values indicate a ped's good condition. Lower values increase the ped's vulnerability to their effects.
{% endhint %}

<details>

<summary>Clothing Settings</summary>

You can modify and define the player's clothing to ensure they appear naked while peeing or using the shower. \
\
Lines 70 to 98 specify each part of the body and the corresponding numbers to change.

</details>

## Needs and their effects

<details>

<summary>HUNGER</summary>

&#x20;    <mark style="color:blue;">✨</mark><mark style="color:purple;">**Effects:**</mark> when hunger is defined (line 112), two main effects occur:

* The ped rubs their belly and stomach growling sounds occur periodically.
* These effects can be intensified by adjusting the frequency (line 114) and the damage received (line 113) when hunger reaches 100.\
  \
  ⚙️ <mark style="color:purple;">**Configuration**</mark><mark style="color:purple;">:</mark>\

* **Line 111**: Set the time interval for hunger warnings.
* **Line 112**: Set the threshold for hunger notifications.
* **Line 113**: Set the damage value at maximum hunger.
* **Line 114**: Set the damage frequency at maximum hunger.



</details>

<details>

<summary>THIRST</summary>

<mark style="color:blue;">✨</mark><mark style="color:purple;">**Effects:**</mark> when thirst is defined (line 118), two main effects occur:

* The ped walks with a drunken animation (line 117).
* To prevent bypassing this mechanic, the ped reverts to the animation periodically (line 119) if conditions persist (line 118).

\
⚙️ <mark style="color:purple;">**Configuration**</mark><mark style="color:purple;">:</mark>

* **Line 117**: Set the animation for severe thirst.
* **Line 118**: Set the threshold for thirst warnings.
* **Line 119**: Set the condition to reset the walking animation.
* **Line 120**: Set the damage value at maximum thirst.
* **Line 121**: Set the damage frequency at maximum thirst.

</details>

<details>

<summary>PUKE</summary>

<mark style="color:blue;">✨</mark><mark style="color:purple;">**Effects:**</mark> Puking resets hunger and thirst to values set in lines 124 and 125, respectively. Adjust these values with caution to avoid excessive damage.

\
⚙️ <mark style="color:purple;">**Configuration**</mark><mark style="color:purple;">:</mark>

* **Line 124**: Set the hunger reset value after puking.
* **Line 125**: Set the thirst reset value after puking.

</details>

<details>

<summary>STRESS</summary>

<mark style="color:blue;">✨</mark><mark style="color:purple;">**Effects:**</mark> Stress effects trigger when the ped's stress exceeds the value set in line 128. The intensity of these effects can be adjusted.

\
⚙️ <mark style="color:purple;">**Configuration**</mark><mark style="color:purple;">:</mark>

* **Line 128**: Set the stress threshold.
* **Line 129**: Set the frequency of stress effects.
* **Line 131**: Set the intensity of stress effects.

</details>

<details>

<summary>HYGIENE</summary>

<mark style="color:blue;">✨</mark><mark style="color:purple;">**Effects:**</mark> when hygiene falls below the value set in line 135, the ped periodically receives warnings and performs a self-sniffing animation.

\
⚙️ <mark style="color:purple;">**Configuration**</mark><mark style="color:purple;">:</mark>

* **Line 134**: Set the frequency of hygiene warnings.
* **Line 135**: Set the hygiene threshold for warnings.

</details>

<details>

<summary>SOCIAL</summary>

<mark style="color:blue;">✨</mark><mark style="color:purple;">**Effects:**</mark> Low social values increase food and drink consumption, exacerbating hunger and thirst based on multipliers in line 139.

\
⚙️ <mark style="color:purple;">**Configuration**</mark><mark style="color:purple;">:</mark>

* **Line 138**: Set the social threshold.
* **Line 139**: Set the multipliers for hunger and thirst consumption.

</details>

<details>

<summary>POOP</summary>

<mark style="color:blue;">✨</mark><mark style="color:purple;">**Effects:**</mark> when the poop value exceeds the threshold set in line 142, the ped randomly farts based on the percentage chance set in line 143.

\
⚙️ <mark style="color:purple;">**Configuration**</mark><mark style="color:purple;">:</mark>

* **Line 142**: Set the poop threshold.
* **Line 143**: Set the percentage chance of farting.

</details>

<details>

<summary>ENERGY</summary>

<mark style="color:blue;">✨</mark><mark style="color:purple;">**Effects:**</mark> when energy falls below the value set in line 147, the screen flashes black periodically.

\
⚙️ <mark style="color:purple;">**Configuration**</mark><mark style="color:purple;">:</mark>

* **Line 146**: Set the blackscreen interval.
* **Line 147**: Set the energy threshold for low energy effects.
* **Line 148**: Set the blackscreen duration in milliseconds.

</details>



## CONSUMPTION CONFIGURATION

| Fruit Configuration                                                                                                          | Generic Fruits                                                                          | Beverage Configuration                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| (Lines 161 to 170)                                                                                                           | (Lines 173 to 221)                                                                      | <h4>(Line 228)</h4>                                                                                   |
| A generic fruit status affecting all listed fruits, with durations specified in milliseconds (1000 milliseconds = 1 second). | Specific effects for apples, pears, and plums, based on settings from lines 161 to 170. | A base status for "water\_bottle," with customizable effects and animation durations in milliseconds. |
|                                                                                                                              |                                                                                         |                                                                                                       |

### Configuring Interactions and Durations

#### Interaction Durations \[Line 152]

{% tabs %}
{% tab title="Shower" %}
**Line 154**: Set the duration for the shower action (in seconds).
{% endtab %}

{% tab title="Pee" %}
**Line 155**: Set the duration for the pee action (in seconds).
{% endtab %}

{% tab title="Poop" %}
**Line 156**: Set the duration for the poop action (in seconds).
{% endtab %}

{% tab title="Wash Hands" %}
**Line 157**: Set the duration for the washHands action (in seconds).
{% endtab %}

{% tab title="Sleep" %}
**Line 158**: Set the duration for the sleep action (in seconds).
{% endtab %}
{% endtabs %}

**Consumption Interval** \[Line 100]

{% tabs %}
{% tab title="Hunger [103]" %}
Defines the time interval to decrease 1 of the hunger, thirst, social or energy (In seconds).
{% endtab %}

{% tab title="Thirst [104]" %}
Defines the time interval to decrease 1 of the hunger, thirst, social or energy (In seconds).
{% endtab %}

{% tab title="Social [105]" %}
Defines the time interval to decrease 1 of the hunger, thirst, social or energy (In seconds).
{% endtab %}

{% tab title="Energy [106]" %}
Defines the time interval to decrease 1 of the hunger, thirst, social or energy (In seconds).
{% endtab %}
{% endtabs %}

<details>

<summary>🪐 Action Consequences</summary>

Actions and their respective status effects.

</details>

<details>

<summary>💫 Socialization Areas (Lines 295 to 311)</summary>

Define socialization areas to drastically reduce social needs.

* <mark style="color:purple;">**Line 297**</mark><mark style="color:purple;">:</mark> Set the interval for the effects of the socialization area.

<!---->

* <mark style="color:purple;">**Line 301**</mark><mark style="color:purple;">:</mark> Set the radius of the socialization area.

<!---->

* <mark style="color:purple;">**Line 303**</mark><mark style="color:purple;">:</mark> Set the amount of stress reduction within the socialization area.

<!---->

* <mark style="color:purple;">**Line 304**</mark><mark style="color:purple;">:</mark> Set the amount of social increase within the socialization area.

</details>

### Player CONFIG MENU in Game: (Press I (i) on keyboard)

<table data-view="cards"><thead><tr><th></th><th></th><th></th></tr></thead><tbody><tr><td><h4><mark style="color:purple;">Cinematic Timecycle</mark></h4></td><td>Remove sun and shadow effects to increase FPS.</td><td></td></tr><tr><td><h4><mark style="color:purple;">Default Timecycle</mark></h4></td><td>Return to the default timecycle settings.</td><td></td></tr><tr><td><h4><mark style="color:purple;">Toggle HUD</mark></h4></td><td>Show or hide the needs HUD.</td><td></td></tr><tr><td><h4><mark style="color:purple;">Toggle Street Names</mark></h4></td><td>Show or hide street names in the top right corner.</td><td></td></tr><tr><td><h4><mark style="color:purple;">Toggle Clock</mark></h4></td><td>Show or hide the clock in the top right corner.</td><td></td></tr></tbody></table>

{% hint style="info" %}
By following this comprehensive guide, you can effectively configure the "Needs" script to suit your specific requirements and enhance the gaming experience.
{% endhint %}
