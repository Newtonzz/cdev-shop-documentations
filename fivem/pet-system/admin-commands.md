# Admin Commands

`/addpet`

**Description:**\
Adds a new pet for a specified player with given attributes. This command is primarily used by administrators to assign pets to players manually.

**Command Syntax:**

```
/addpet <playerID> <petShopID> <isK9> <petName>
```

**Parameters:**

* `<playerID>` (number): **Required.** The server ID of the player who will receive the pet.
* `<petShopID>` (string): **Required.** The identifier of the pet shop from which the pet is being added. This corresponds to predefined pet shop entries.
* `<isK9>` (boolean): **Required.** Indicates whether the pet is a K9 (police dog). Use `true` for K9 pets or `false` for regular pets.
* `<petName>` (string): **Required.** The desired name for the pet.

**Usage Example:**

```
/addpet 23 k9_shop_01 true Rex
```

_This command assigns a K9 pet named "Rex" from the pet shop with ID "k9\_shop\_01" to the player with server ID `23`._

**Functionality:**

* **Validation:** Ensures all required parameters are provided and valid.
* **Pet Creation:** Inserts a new pet into the database with the specified attributes.
* **Skill Assignment:** Assigns default skills to the pet if it is designated as a K9.
* **Item Assignment:** Grants the pet a K9 activation item if applicable.
* **Notification:** Sends feedback to the administrator about the success or failure of the operation.

***

#### `/givepetitem`

**Description:**\
Gives a specified item to a player's pet's inventory. This command allows administrators to equip pets with items such as toys, treats, or accessories.

**Command Syntax:**

```
/givepetitem <playerID> <item> <quantity>
```

**Parameters:**

* `<playerID>` (number): **Required.** The server ID of the player whose pet will receive the item.
* `<item>` (string): **Required.** The identifier of the item to give to the pet.
* `<quantity>` (number): **Required.** The number of items to grant. Defaults to `1` if not specified.

**Usage Example:**

```
/givepetitem 23 chew_toys 2
```

_This command gives `2` "chew\_toys" to the pet owned by the player with server ID `23`._

**Functionality:**

* **Validation:** Checks if all required parameters are provided and valid.
* **Inventory Management:** Adds the specified item and quantity to the pet's inventory.
* **Notification:** Informs the administrator about the successful addition of the item or any errors encountered.

***

#### `/delpet`

**Description:**\
Deletes a pet associated with a player. This command is useful for removing pets that are no longer needed or were assigned incorrectly.

**Command Syntax:**

```
/delpet <playerID> <petID>
```

**Parameters:**

* `<playerID>` (number): **Required.** The server ID of the player who owns the pet.
* `<petID>` (number): **Required.** The unique identifier of the pet to delete.
