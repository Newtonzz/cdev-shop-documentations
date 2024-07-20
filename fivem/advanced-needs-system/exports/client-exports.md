# Client Exports

<details>

<summary>show</summary>

_Description:_ Displays the UI.

</details>

<details>

<summary>hide</summary>

_Description:_ Hides the UI.

</details>

<details>

<summary>toggle</summary>

_Description:_ Toggles the UI visibility.

</details>

<details>

<summary>notify</summary>

* **\_type**
  * _Type_: <mark style="color:purple;">String</mark>
  * _Description:_ The type of notification. Can be `success`, `error`, or `information`.

<!---->

* **title**
  * _Type_: <mark style="color:purple;">String</mark>
  * _Description:_ The title of the notification.

<!---->

* **description**
  * _Type_: <mark style="color:purple;">String</mark>
  * _Description:_ The description of the notification.

<!---->

* **duration**
  * _Type_: <mark style="color:purple;">Number</mark>
  * _Description:_ The duration in milliseconds for which the notification should be displayed.

</details>

<details>

<summary>getStats</summary>

* **Description:** Obtain the player stats.

<!---->

* **Return:**&#x20;
  * _Type_: <mark style="color:purple;">Table</mark>
  * _Structure:_ \
    {\
    &#x20;   hunger: <mark style="color:purple;">number</mark>, \
    &#x20;   thirst: <mark style="color:purple;">number</mark>, \
    &#x20;   energy: <mark style="color:purple;">number</mark>,\
    &#x20;   stress: <mark style="color:purple;">number</mark>, \
    &#x20;   pee: <mark style="color:purple;">number</mark>, \
    &#x20;   poop: <mark style="color:purple;">number</mark>, \
    &#x20;   hygiene: <mark style="color:purple;">number</mark>, \
    &#x20;   social: <mark style="color:purple;">number</mark> \
    }    &#x20;

</details>
