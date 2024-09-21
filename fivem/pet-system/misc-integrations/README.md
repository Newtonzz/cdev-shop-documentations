# Misc Integrations

## Vehicle interaction

By default the script uses the target system to interact with the vehicle in order to seat the pet. If you disabled that in the config file you can use the following events from your own script:

* Check if your pet can be placed in a vehicle
  * `exports["cdev_pets"]:CanEnterVehicle(vehicle)`
* Check if your pet can be taken out of a vehicle
  * `exports["cdev_pets"]:CanExitVehicle(vehicle)`&#x20;
* Request to place your pet in a vehicle
  * `TriggerEvent("cdev_pets:onTargetPlaceVehicle", { entity = vehicle })`&#x20;
* &#x20;Request to take your pet out of a vehicle
  * `TriggerEvent("cdev_pets:onTargetTakeVehicle", { entity = vehicle })`&#x20;

### Example for QBCore Framework

{% code title="Snippet provided by @MikeyB" lineNumbers="true" %}
```etlua
RegisterNetEvent("putpetincar", function()
    local playerPed = PlayerPedId()
    local playerCoords = GetEntityCoords(playerPed)
    local closestVehicle = QBCore.Functions.GetClosestVehicle(playerCoords)
    local vehicle = closestVehicle
    if exports["cdev_pets"]:CanEnterVehicle(vehicle) then
        TriggerEvent("cdev_pets:onTargetPlaceVehicle", { entity = vehicle })
    else
        QBCore.Functions.Notify("Can not enter, try getting in and out of the vehicle..", "error")
    end
  end)
  
  RegisterNetEvent("removepetincar", function()
    local playerPed = PlayerPedId()
    local playerCoords = GetEntityCoords(playerPed)
    local closestVehicle = QBCore.Functions.GetClosestVehicle(playerCoords)
    local vehicle = closestVehicle
    if exports["cdev_pets"]:CanExitVehicle(vehicle) then
      TriggerEvent("cdev_pets:onTargetTakeVehicle", { entity = vehicle })
    else
        QBCore.Functions.Notify("Can not enter, try getting in and out of the vehicle..", "error")
    end
  end)
```
{% endcode %}

## Quick Actions Keybinds

If you opt to disable keybinds for quick actions, you can use the following events from your own script:

```lua
TriggerEvent("cdev_pets:quickAction:follow")
TriggerEvent("cdev_pets:quickAction:menu")
TriggerEvent("cdev_pets:quickAction:cuddle")
TriggerEvent("cdev_pets:quickAction:cancel")
TriggerEvent("cdev_pets:quickAction:bag")
TriggerEvent("cdev_pets:quickAction:stand")
```

## Attacking

If you opt to disable attacking automatically when aiming at a ped, you can use the following export to start attacking a target:

<pre class="language-lua"><code class="lang-lua"><strong>exports["cdev_pets"]:Attack(entity)
</strong></code></pre>

## K9

To determine what players can purchase K9s, you can modify the integration in cdev\_pets/public/server/api.lua in the function:

```lua
PetResourceAPI.IsPlayerAllowedToBuyK9
```

By default it checks for players who have the police job.

### Bark

```lua
TriggerEvent("cdev_pets:barkAt", { entity = 0 }) 
```

## Play Emote

If you opt to disable the target resource or for other reason you can trigger pet emotes from your own script with the following event:

```lua
TriggerEvent("cdev_pets:useEmote", { payload = { dict = "", anim = "" } }
```

The built in emotes that the pets play are Sit and Lay Down:

```
Sit:
creatures@rottweiler@tricks@                sit_loop

Lay Down:
creatures@rottweiler@amb@sleep_in_kennel@   sleep_in_kennel
```

## AddPet EXPORT

The `addpet` function adds a pet for a player or character, supporting both regular pets and K9 units.

### Parameters

* `PlayerId` (optional): Player's source ID.
* `CharacterId` (optional): Character ID if PlayerId is not provided.
* `petShopId` (required): ID of the pet from the pet shop.
* `isK9` (optional, boolean): `true` if the pet is a K9 unit, `false` otherwise (default: `false`).
* `petName` (required): Name of the pet.

### Function Workflow

1. Checks if data exists.
2. Verifies that either `PlayerId` or `CharacterId` is provided.
3. Looks up the pet's details from `petShopId`.
4. If the pet is a K9, it assigns K9 skills like sniff and attack.
5. Adds the pet to the database.
6. If the pet is a K9, it gives the player a K9-related item.

### Example

```javascript
exports.addpet({
    PlayerId = 2,
    petShopId = "pet_hottweiler",
    isK9 = true,
    petName = "Buddy"
})
```

This will add a K9 pet named "Buddy" for the player with `PlayerId` 2.
