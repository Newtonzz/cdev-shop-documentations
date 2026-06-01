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

#### cdev\_pets:onTargetPlaceVehicle

Places the player's spawned owned pet into a vehicle seat.

**Trigger (client):**

```lua
TriggerEvent('cdev_pets:onTargetPlaceVehicle', {
    entity = vehicle, -- vehicle entity handle
    payload = {
        door = 1,                  -- seat/door index used by cdev_pets
        doorname = 'seat_pside_f', -- vehicle bone name
    },
})
```

**Payload fields:**

| Field              | Type     | Description                          |
| ------------------ | -------- | ------------------------------------ |
| `entity`           | `number` | Vehicle entity handle.               |
| `payload.door`     | `number` | Door/seat index: `1`, `2`, or `3`.   |
| `payload.doorname` | `string` | Vehicle bone name (see table below). |

**Supported seat bones:**

| `doorname`     | `door` | Seat                |
| -------------- | ------ | ------------------- |
| `seat_pside_f` | `1`    | Front passenger     |
| `seat_dside_r` | `2`    | Rear driver side    |
| `seat_pside_r` | `3`    | Rear passenger side |

**What happens internally:**

1. Resolves `PetManagerClient.ownedPet` (pet must be spawned and out).
2. Checks the pet is within **10 meters** of the player.
3. Calls server callback `cdev_pets:attemptVehicle` (e.g. stamina / tired checks).
4. On success, runs `pet:EnterVehicle(entity, door, doorname)`.

**Returns:** None (failures are handled silently or via in-game notifications from `cdev_pets`).

***

#### cdev\_pets:onTargetTakeVehicle

Removes the player's pet from a vehicle.

**Trigger (client):**

```lua
TriggerEvent('cdev_pets:onTargetTakeVehicle', {
    entity = vehicle, -- vehicle entity handle the pet is in
})
```

**Requirements:**

* Pet must be spawned (`ownedPet` exists).
* Pet state must be `VEHICLE`.
* Pet must be attached to the given `entity`.

**What happens internally:**

* Calls `pet:Idle()`, which plays the exit animation and detaches the pet.

**Returns:** None.

***

#### QBX\_radialmenu Example

{% content-ref url="how-setup-qbx_radialmenu.md" %}
[how-setup-qbx\_radialmenu.md](how-setup-qbx_radialmenu.md)
{% endcontent-ref %}

***

#### Example client-side code using the pet interaction events and vehicle exports.

Add this to **your** resource's client script example inside your `qbx_radialmenu` (not inside `cdev_pets`):

```lua
-- Seat bones used by cdev_pets for vehicle placement
local PET_VEHICLE_BONES = {
    seat_pside_f = 1, -- front passenger
    seat_dside_r = 2, -- rear driver side
    seat_pside_r = 3, -- rear passenger side
}

--- Returns the closest vehicle to the player within maxDistance meters.
local function getClosestVehicle(maxDistance)
    local ped = PlayerPedId()
    local coords = GetEntityCoords(ped)
    return GetClosestVehicle(coords.x, coords.y, coords.z, maxDistance or 5.0, 0, 71)
end

--- Finds the nearest valid seat bone on a vehicle to the player.
local function getClosestVehicleSeatBone(vehicle, maxBoneDistance)
    local ped = PlayerPedId()
    local playerCoords = GetEntityCoords(ped)
    local closestBone, closestDistance

    for boneName in pairs(PET_VEHICLE_BONES) do
        local boneIndex = GetEntityBoneIndexByName(vehicle, boneName)
        if boneIndex ~= -1 then
            local boneCoords = GetWorldPositionOfEntityBone(vehicle, boneIndex)
            local distance = #(playerCoords - boneCoords)
            if not closestDistance or distance < closestDistance then
                closestBone = boneName
                closestDistance = distance
            end
        end
    end

    if closestBone and closestDistance <= (maxBoneDistance or 5.0) then
        return closestBone, PET_VEHICLE_BONES[closestBone]
    end
end

--- Put the player's pet into the closest nearby vehicle (standalone).
function PutPetInClosestVehicle()
    if GetResourceState('cdev_pets') ~= 'started' then
        print('[pets] cdev_pets is not running')
        return false
    end

    local vehicle = getClosestVehicle(5.0)
    if vehicle == 0 or not DoesEntityExist(vehicle) then
        print('[pets] No vehicle nearby')
        return false
    end

    if not exports.cdev_pets:CanEnterVehicle(vehicle) then
        print('[pets] Pet cannot enter this vehicle')
        return false
    end

    local boneName, doorIndex = getClosestVehicleSeatBone(vehicle, 5.0)
    if not boneName then
        print('[pets] No valid seat bone found on this vehicle')
        return false
    end

    TriggerEvent('cdev_pets:onTargetPlaceVehicle', {
        entity = vehicle,
        payload = {
            door = doorIndex,
            doorname = boneName,
        },
    })

    return true
end

--- Remove the player's pet from the closest nearby vehicle (standalone).
function RemovePetFromClosestVehicle()
    if GetResourceState('cdev_pets') ~= 'started' then
        print('[pets] cdev_pets is not running')
        return false
    end

    local vehicle = getClosestVehicle(5.0)
    if vehicle == 0 or not DoesEntityExist(vehicle) then
        print('[pets] No vehicle nearby')
        return false
    end

    if not exports.cdev_pets:CanExitVehicle(vehicle) then
        print('[pets] Pet cannot exit this vehicle right now')
        return false
    end

    TriggerEvent('cdev_pets:onTargetTakeVehicle', {
        entity = vehicle,
    })

    return true
end

-- Optional: expose as net events so a radial menu can call them by name
RegisterNetEvent('my_pets:client:putInVehicle', PutPetInClosestVehicle)
RegisterNetEvent('my_pets:client:removeFromVehicle', RemovePetFromClosestVehicle)
```

**Usage from anywhere on the client:**

```lua
PutPetInClosestVehicle()
RemovePetFromClosestVehicle()
```

Replace `print()` with your notification system if desired.

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

#### QuickActionFollow

**Description:**\
Toggles follow/stay on the player's spawned owned pet from external menus (radial, custom UI). Uses the same logic as the in-game follow quick action but always targets `ownedPet` and skips the player whistle animation. Recommended for `qb-radialmenu`, `ox_lib` radial, and similar integrations.

Export Statement:

```lua
exports("QuickActionFollow", function() onQuickActionFollow(true) end)
```

Usage:

```lua
exports['cdev_pets']:QuickActionFollow()
```

**Parameters:**\
None

**Returns:**\
None

**Functionality:**

* Resolves the pet as `PetManagerClient.ownedPet` (or `currentPetTarget` if no owned pet is out).
* Validates `CanDrawQuickActions()` (requires `Keybinds.Enabled = true` in config, pet within `Range`, player on foot, etc.).
* If the pet is not following: triggers server callback `cdev_pets:attemptFollow`; on success, starts follow without player whistle animation.
* If the pet is already following: sets the pet to stay (`Idle`).
* Handles attack stand-down and bed/dead states the same way as the default follow keybind.
* Does nothing if no valid pet, cooldown is active, or conditions are not met (no error thrown).

Config requirements:

* `PublicSharedPetsConfig.Keybinds.Enabled` must be `true` (even when using only a radial menu).
* Pet must be spawned and within `PublicSharedPetsConfig.Range` (default `5.0`).

Related events (alternative to this export):

* `TriggerEvent('cdev_pets:quickAction:follow')` — same handler; may play player whistle animation when not called via this export.

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
