# Server Exports

<details>

<summary>getStats</summary>

* **Description:** Obtain the player stats.
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
    }     \

* **Parameters:**
  * **src**
    * _Type_: <mark style="color:purple;">Number</mark>
    * _Description:_ Player source.

</details>

<details>

<summary>updateStats</summary>

* **Description:** Update the player's stats.

<!---->

* **Return:**&#x20;
  * _Type_: <mark style="color:purple;">Boolean</mark>&#x20;

<!---->

* **Parameters:**
  * **src**
    * _Type_: <mark style="color:purple;">Number</mark>
    * _Description:_ Player source.
  * **stats**
    * _Type_: <mark style="color:purple;">Table</mark>
    * _Description:_ A table containing the following keys and their respective values.
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
