# Guide

### Default Stats

The script includes the following stats by default:

* **health**
* **armor**
* **breath**
* **hunger**
* **thirst**
* **hygiene**
* **bladder**
* **poop**
* **energy**
* **stress**
* **social**

***

#### **Locales**

Translations can be modified or added in:

```
/public/config/locale
```

***

### Needs and their effects

<details>

<summary>HUNGER</summary>

✨ Effects:

* **Low Hunger Levels**:
  * When the character’s hunger is too low, they will perform a belly-rubbing animation, accompanied by stomach growling sounds and hunger-related audio cues at regular intervals.
* **Overeating**:
  * If the character consumes food while their hunger level is at 100, they will experience vomiting, complete with realistic animations and sounds for a fully immersive effect.

</details>

<details>

<summary>THIRST</summary>

#### ✨ Effects:

* **Thrist is Too Low**:
  * When the character's thirst level drops below 10, they will start stumbling and moving with an unsteady gait, simulating the physical weakness caused by severe dehydration. This is represented by a drunk-like movement animation. The effect persists until the thirst level rises above 10, at which point the character's movement returns to normal.
* **Overeating**:
  * If the character consumes a drink when their thirst level is already at 100, they will experience vomiting, complete with realistic animations and sounds for immersive gameplay.





</details>

<details>

<summary>HYGIENE</summary>

#### ✨ Effects:

* **Hygiene at 10%**: The character performs a self-sniffing animation accompanied by realistic sniffing sounds, indicating awareness of their hygiene.
* **Hygiene at 5%**: Flies begin to hover around the character, paired with buzzing sounds to enhance the immersive experience.

#### ⚙️ Props and Features:

* **Configurable Props**:
  * **Bath**: Used for full-body bathing.
  * **Shower**: Provides a quick and convenient option for cleansing.
  * **Water Bottle**: Enables hand washing on the go.
  * **Sinks**: Allows for stationary hand washing in designated locations.

</details>

<details>

<summary>BLADDER</summary>

#### ✨ Effects:

* **Bladder Levels at 1%-10%**: The character initiates a restroom desperation animation, signaling an urgent need to find relief.
* **Bladder Level at 0%**: The character experiences an accident, simulating the effect of peeing themselves for an immersive gameplay experience.

#### ⚙️ Props and Features:

* **Configurable Props**:
  * **Toilet**: A prop that can be placed to enable realistic restroom interactions.
  * **Pee Anywhere**: Allows players to trigger the action in any location, enhancing flexibility and immersion.



</details>

<details>

<summary>POOP</summary>

#### ✨ Effects:

* **Poop Levels at 5%-10%**: The character releases a quiet fart (low-range sound) and begins a restroom desperation animation, indicating discomfort.
* **Poop Levels at 1%-5%**: The character releases a loud fart (high-range sound) and continues the restroom desperation animation, showing heightened urgency.
* **Poop Level at 0%**: The character experiences an accident, simulating the effect of pooping themselves for a realistic gameplay interaction.

#### ⚙️ Props and Features:

* **Configurable Props**:
  * **Toilet**: A prop that can be placed to facilitate bathroom interactions.
  * **Poop Anywhere**: Allows players to trigger the action anywhere for an immersive experience.



</details>

<details>

<summary>ENERGY</summary>

#### ✨ Effects:

* **Energy Below 10%**: The character begins yawning, accompanied by realistic sounds and animations, signaling fatigue.
* **Energy at 1%**: The character starts to pass out, causing the screen to fade to black for an immersive experience.

#### ⚙️ Props and Features:

* **Configurable Props**:
  * **Sleeping Bag**: Can be utilized for rest and recovery.
  * **Sleep Anywhere**: Players can initiate sleep by pressing **E**, offering flexibility and immersion.



</details>

<details>

<summary>STRESS</summary>

#### ✨ Effects:

* **Energy Below 10%**: The character begins to breathe heavily as their energy depletes.
* **Energy at 5%-10%**: The character starts exhibiting erratic behavior through specific animations, reflecting a state of heightened stress or craziness.

#### ⚙️ Actions and Features:

* **Sleep Anywhere**: The character can lie down and rest without requiring the player to press **E**, providing a seamless and immersive experience.
* **Customizable Exports**: Developers can integrate exports into their own creations to include stress-reduction mechanics, enhancing gameplay flexibility.

</details>

<details>

<summary>SOCIAL</summary>

#### ✨ Effects:

* When energy levels drop to 3% or below, the character begins to hear loud, overwhelming voices.

#### ⚙️ Props and Interactions:

* **Social Boost by Location**: Players can enhance their social levels by visiting pre-defined locations set by the server owner.
* **Social Boost by Communication**: Social levels can also increase when players engage in voice chat through the microphone.

</details>

