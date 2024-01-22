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
