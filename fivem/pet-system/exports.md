# Exports

### Client-Side Exports

#### TakeInPet

**Description:**\
Hides the player's current pet if it's within a certain range.

**Export Statement:**

```lua
exports("TakeInPet", TakeInPet)
```

**Usage:**

```lua
exports.cdev_pets:TakeInPet()
```

**Parameters:**

* None

**Returns:**

* None

**Functionality:**

* Checks if the player owns a pet.
* Verifies if the pet is within a 10-unit distance from the player.
* If conditions are met, it triggers a server callback to hide the pet.
* Notifies the player about the action's success or failure.

***

#### ForceTakeInPet

**Description:**\
Forcefully hides the player's current pet, regardless of its position.

**Export Statement:**

```lua
exports("ForceTakeInPet", ForceTakeInPet)
```

**Usage:**

```lua
exports.cdev_pets:ForceTakeInPet()
```

**Parameters:**

* None

**Returns:**

* None

**Functionality:**

* Checks if the player owns a pet.
* Triggers a server callback to hide the pet without checking the distance.
* Closes any open pet-related menus.

***

#### Attack

**Description:**\
Commands the player's pet to attack a specified target.

**Export Statement:**

```lua
exports("Attack", Attack)
```

**Usage:**

```lua
exports.cdev_pets:Attack(targetPed)
```

**Parameters:**

* `targetPed` (Entity): The entity the pet should attack.

**Returns:**

* None

**Functionality:**

* Ensures the player owns a pet.
* Checks if the pet is not already in an attack state.
* Initiates the attack sequence on the target entity.

***

#### CanEnterVehicle

**Description:**\
Checks if the player's pet can enter a specific vehicle.

**Export Statement:**

```lua
exports("CanEnterVehicle", function(vehicle) ... end)
```

**Usage:**

```lua
local canEnter = exports.cdev_pets:CanEnterVehicle(vehicle)
```

**Parameters:**

* `vehicle` (Entity): The vehicle entity to check.

**Returns:**

* `boolean`: `true` if the pet can enter the vehicle, `false` otherwise.

**Functionality:**

* Determines if the player owns a pet.
* Invokes the pet's method to verify if it can enter the specified vehicle.

***

#### CanExitVehicle

**Description:**\
Checks if the player's pet can exit a specific vehicle.

**Export Statement:**

```lua
exports("CanExitVehicle", function(vehicle) ... end)
```

**Usage:**

```lua
local canExit = exports.cdev_pets:CanExitVehicle(vehicle)
```

**Parameters:**

* `vehicle` (Entity): The vehicle entity to check.

**Returns:**

* `boolean`: `true` if the pet can exit the vehicle, `false` otherwise.

**Functionality:**

* Determines if the player owns a pet.
* Checks if the pet is currently in the specified vehicle.
* Returns the pet's ability to exit based on its current state.

***

#### spawnPet

**Description:**\
Spawns a pet with a specified ID at the player's location or custom coordinates.

**Export Statement:**

```lua
exports("spawnPet", function(id, customCoords) ... end)
```

**Usage:**

```lua
exports.cdev_pets:spawnPet(petId, customCoordinates)
```

**Parameters:**

* `id` (number): The unique identifier of the pet to spawn.
* `customCoords` (table, optional): Coordinates to spawn the pet at. If not provided, spawns at the player's current location.

**Returns:**

* None

**Functionality:**

* Determines the spawn location based on provided coordinates or the player's current position.
* Requests the server to spawn the pet.
* Loads the pet's model and customization settings.
* Adds the pet to the client's pet manager and sets up necessary interactions.

***

### Server-Side Exports

#### addpet

**Description:**\
Adds a new pet for a specified player with given attributes.

**Export Statement:**

```lua
exports("addpet", function (data) ... end)
```

**Usage:**

```lua
exports.cdev_pets:addpet({
    PlayerId = playerId,
    petShopId = "pet_hottweiler", -- Example
    isK9 = true,
    petName = "Rex"
})
```

**Parameters:**

* `data` (table): Contains the following keys:
  * `PlayerId` (number): The player's server ID.
  * `petShopId` (string): **Pet Identification for the Pet Shop**\
    You can find each pet's `PetShopId` in the `shop.lua` file, located at:\
    `cdev_pets/public/config/shop.lua`.
  * `isK9` (boolean): Indicates if the pet is a K9 (police dog).
  * `petName` (string): Name of the pet.

**Returns:**

* None

**Functionality:**

* Validates the provided data.
* Inserts the new pet into the database with specified attributes.
* Assigns skills if the pet is designated as a K9.
* Provides the pet with a K9 activation item if applicable.

***

#### givepetitem

**Description:**\
Gives an item to a player's pet's inventory.

**Export Statement:**

```lua
exports("givepetitem", function (data) ... end)
```

**Usage:**

```lua
exports.cdev_pets:givepetitem({
    PlayerId = playerId,
    item = "ball",
    quantity = 3
})
```

**Parameters:**

* `data` (table): Contains the following keys:
  * `PlayerId` (number): The player's server ID.
  * `item` (string): The identifier of the item to give.
  * `quantity` (number): The quantity of the item to give.

**Returns:**

* None

**Functionality:**

* Validates the provided data.
* Adds the specified item to the pet's inventory.
* Notifies the player of the successful addition.

***

#### delpet

**Description:**\
Deletes a pet associated with a player.

**Export Statement:**

```lua
exports("delpet", function (data) ... end)
```

**Usage:**

```lua
exports.cdev_pets:delpet({
    PlayerId = playerId,
    petId = 101
})
```

**Parameters:**

* `data` (table): Contains the following keys:
  * `PlayerId` (number): The player's server ID.
  * `petId` (number): The unique identifier of the pet to delete.

**Returns:**

* None

**Functionality:**

* Validates the provided data.
* Removes the pet from the player's ownership.
* Deletes the pet from the database.
* Notifies the player of the successful deletion.

***

#### isPetOutBySource

**Description:**\
Checks if a player currently has a pet out (active).

**Export Statement:**

```lua
exports("isPetOutBySource", function (source) ... end)
```

**Usage:**

```lua
local isOut = exports.cdev_pets:isPetOutBySource(playerId)
```

**Parameters:**

* `source` (number): The player's server ID.

**Returns:**

* `boolean`: `true` if the player has a pet out, `false` otherwise.

**Functionality:**

* Retrieves the pet associated with the player.
* Returns whether the pet is currently active and out.

***
