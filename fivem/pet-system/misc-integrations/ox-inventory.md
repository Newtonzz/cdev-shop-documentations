---
description: Integration for ox_inventory throwing the pet ball
---

# OX Inventory

### When using OX Inventory and the ball does not spawn please execute the following integration:

1. Head to `cdev_pets/public/client/api.lua` file and add the following code at the end

```etlua
exports("IsHoldingBall", function()
    local pet = PetManagerClient.ownedPet
    return pet ~= nil and pet.state == PetState.FETCH
end
```

2. Next, navigate to ox\_inventory resource and locate the line `'client.interval = SetInterval(function',` then replace that function with the following code:

```etlua
client.interval = SetInterval(function()
        if invOpen == false then
            playerCoords = GetEntityCoords(playerPed)

            if currentWeapon and IsPedUsingActionMode(playerPed) then
                SetPedUsingActionMode(playerPed, false, -1, 'DEFAULT_ACTION')
            end

        elseif invOpen == true then
            if not canOpenInventory() then
                client.closeInventory()
            else
                playerCoords = GetEntityCoords(playerPed)

                if currentInventory and not currentInventory.ignoreSecurityChecks then
                    if currentInventory.type == 'otherplayer' then
                        local id = GetPlayerFromServerId(currentInventory.id)
                        local ped = GetPlayerPed(id)
                        local pedCoords = GetEntityCoords(ped)

                        if not id or #(playerCoords - pedCoords) > 1.8 or not (client.hasGroup(shared.police) or canOpenTarget(ped)) then
                            client.closeInventory()
                            lib.notify({ id = 'inventory_lost_access', type = 'error', description = locale('inventory_lost_access') })
                        else
                            TaskTurnPedToFaceCoord(playerPed, pedCoords.x, pedCoords.y, pedCoords.z, 50)
                        end

                    elseif currentInventory.coords and (#(playerCoords - currentInventory.coords) > (currentInventory.distance or 2.0) or canOpenTarget(playerPed)) then
                        client.closeInventory()
                        lib.notify({ id = 'inventory_lost_access', type = 'error', description = locale('inventory_lost_access') })
                    end
                end
            end
        end

        if client.parachute and GetPedParachuteState(playerPed) ~= -1 then
            Utils.DeleteEntity(client.parachute)
            client.parachute = false
        end

        if EnableWeaponWheel then return end

        local weaponHash = GetSelectedPedWeapon(playerPed)

        if currentWeapon then
            if weaponHash ~= currentWeapon.hash and currentWeapon.timer then
                local weaponCount = Items[currentWeapon.name]?.count

                if weaponCount > 0 then
                    SetCurrentPedWeapon(playerPed, currentWeapon.hash, true)
                    SetAmmoInClip(playerPed, currentWeapon.hash, currentWeapon.metadata.ammo)
                    SetPedCurrentWeaponVisible(playerPed, true, false, false, false)

                    weaponHash = GetSelectedPedWeapon(playerPed)
                end

                if weaponHash ~= currentWeapon.hash then
                    if not exports["pug-paintball"]:IsInPaintball() then 
                        if not exports["pug-battleroyale"]:IsInBattleRoyale() then
                            if not exports["cdev_pets"]:IsHoldingBall() then
                                currentWeapon = Weapon.Disarm(currentWeapon, true)
                            end
                        end
                    end
                end
            end
        elseif client.weaponmismatch and not client.ignoreweapons[weaponHash] then
            local weaponType = GetWeapontypeGroup(weaponHash)

            if weaponType ~= 0 and weaponType ~= `GROUP_UNARMED` then
                if not exports["pug-paintball"]:IsInPaintball() then 
                    if not exports["pug-battleroyale"]:IsInBattleRoyale() then
                        if not exports["cdev_pets"]:IsHoldingBall() then
                            Weapon.Disarm(currentWeapon, true)
                        end
                    end
                end
            end
        end
    end, 200)
```
