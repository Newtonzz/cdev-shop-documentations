# How Setup qbx\_radialmenu

This guide walks you through adding **cdev\_pets** actions to [**qbx\_radialmenu**](https://github.com/Qbox-project/qbx_radialmenu) — the radial menu used with **Qbox** (`qbx_core`) and **ox\_lib**.

After completing these steps, players will have a **Pet** submenu in the radial with follow, menu, cuddle, bag, stand, cancel, and put/remove pet from vehicle options.

***

### Prerequisites

Make sure these resources are installed and started **before** `qbx_radialmenu` in your `server.cfg`:

```cfg
ensure ox_lib
ensure qbx_core
ensure cdev_lib
ensure cdev_pets
ensure qbx_radialmenu
```

| Resource         | Role                                             |
| ---------------- | ------------------------------------------------ |
| `ox_lib`         | Radial UI, locales, `lib.getClosestVehicle`      |
| `qbx_core`       | Player data, notifications                       |
| `cdev_lib`       | Required dependency of `cdev_pets`               |
| `cdev_pets`      | Pet system (events & exports used by the radial) |
| `qbx_radialmenu` | Radial menu configuration                        |

***

### Step 1 — Configure cdev\_pets

Open `cdev_pets/public/config/config.lua` and confirm these settings:

```lua
Keybinds = {
    -- REQUIRED for radial quick actions (follow, cuddle, menu, stand, cancel)
    Enabled = true,

    QuickAction_Bubbles = true,   -- optional: set false to hide on-screen bubbles
    QuickAction_UseTarget = false, -- optional: set true to show quick actions only on target
},

Range = 5.0, -- used by follow/cuddle/menu quick actions
```

> **Important:** `Keybinds.Enabled` must stay `true` even if players only use the radial menu. If it is `false`, quick actions triggered from the radial will silently fail.

Vehicle interaction inside `cdev_pets` is independent of the radial. You can keep the default target/drawtext or disable it:

```lua
PetVehicleInteractionTarget = true,  -- false = use drawtext + X key instead of target
```

When using the radial for vehicles, players can use **Put Pet In Car** / **Remove Pet From Car** from the menu instead.

***

### Step 2 — Add the Pet menu to config

Open `qbx_radialmenu/config/client.lua`.

Inside the `menuItems` table, add the **Pet** block at the top (or anywhere inside `menuItems`):

```lua
menuItems = {
    {
        id = 'pet',
        icon = 'dog',
        label = 'Pet',
        items = {
            {
                id = 'pet-follow',
                icon = 'person-walking',
                label = 'Follow',
                event = 'cdev_pets:quickAction:follow',
            },
            {
                id = 'pet-menu',
                icon = 'bars',
                label = 'Menu',
                event = 'cdev_pets:quickAction:menu',
            },
            {
                id = 'pet-cuddle',
                icon = 'heart',
                label = 'Cuddle',
                event = 'cdev_pets:quickAction:cuddle',
            },
            {
                id = 'pet-cancel',
                icon = 'ban',
                label = 'Cancel',
                event = 'cdev_pets:quickAction:cancel',
            },
            {
                id = 'pet-bag',
                icon = 'bag-shopping',
                label = 'Bag',
                event = 'cdev_pets:quickAction:bag',
            },
            {
                id = 'pet-stand',
                icon = 'arrow-up',
                label = 'Stand',
                event = 'cdev_pets:quickAction:stand',
            },
            {
                id = 'pet-in-car',
                icon = 'car-side',
                label = 'Put Pet In Car',
                event = 'cdev:pets:client:insertPetIntoVehicle',
            },
            {
                id = 'pet-out-car',
                icon = 'car-side',
                label = 'Remove Pet From Car',
                event = 'cdev:pets:client:removePetFromVehicle',
            },
        },
    },
    -- ... your existing menu items (citizen, general, etc.)
},
```

#### Menu item reference

| ID            | Label               | Event                                   | Description                     |
| ------------- | ------------------- | --------------------------------------- | ------------------------------- |
| `pet-follow`  | Follow              | `cdev_pets:quickAction:follow`          | Toggle follow / stay            |
| `pet-menu`    | Menu                | `cdev_pets:quickAction:menu`            | Open pet stats / inventory menu |
| `pet-cuddle`  | Cuddle              | `cdev_pets:quickAction:cuddle`          | Cuddle with pet                 |
| `pet-cancel`  | Cancel              | `cdev_pets:quickAction:cancel`          | Cancel current pet action       |
| `pet-bag`     | Bag                 | `cdev_pets:quickAction:bag`             | Store pet in bag                |
| `pet-stand`   | Stand               | `cdev_pets:quickAction:stand`           | Stand up from bed               |
| `pet-in-car`  | Put Pet In Car      | `cdev:pets:client:insertPetIntoVehicle` | Custom handler (Step 3)         |
| `pet-out-car` | Remove Pet From Car | `cdev:pets:client:removePetFromVehicle` | Custom handler (Step 3)         |

Icons use [Font Awesome 5](https://fontawesome.com/v5/search?o=r\&m=free) names (no `fa-` prefix), as required by qbx\_radialmenu.

***

### Step 3 — Create the vehicle client script

`qbx_radialmenu` loads every file in `client/` automatically (`client/*.lua` in `fxmanifest.lua`). You do **not** need to edit the manifest.

Create a new file:

**`qbx_radialmenu/client/pets.lua`**

```lua
local function notify(message, nType)
    exports.qbx_core:Notify(message, nType or 'error')
end

local function getClosestVehicle(maxDistance)
    local coords = GetEntityCoords(cache.ped)
    return lib.getClosestVehicle(coords, maxDistance or 5.0, false)
end

RegisterNetEvent('cdev:pets:client:insertPetIntoVehicle', function()
    local bones = {
        seat_pside_f = 1,
        seat_dside_r = 2,
        seat_pside_r = 3,
    }
    local playerCoords = GetEntityCoords(cache.ped)
    local closestVehicle = getClosestVehicle(5.0)

    if not closestVehicle or closestVehicle == 0 then
        return notify(locale('error.pet_no_vehicle_nearby'))
    end

    if GetResourceState('cdev_pets') ~= 'started' then
        return notify(locale('error.pet_resource_missing'))
    end

    if not exports.cdev_pets:CanEnterVehicle(closestVehicle) then
        return notify(locale('error.pet_cant_enter_vehicle'))
    end

    local closestBone
    local closestDistance = 5.0

    for bone, door in pairs(bones) do
        local boneIndex = GetEntityBoneIndexByName(closestVehicle, bone)
        if boneIndex ~= -1 then
            local boneCoords = GetWorldPositionOfEntityBone(closestVehicle, boneIndex)
            local distance = #(playerCoords - boneCoords)

            if distance < closestDistance then
                closestBone = bone
                closestDistance = distance
            end
        end
    end

    if not closestBone then
        return notify(locale('error.pet_no_valid_door'))
    end

    TriggerEvent('cdev_pets:onTargetPlaceVehicle', {
        entity = closestVehicle,
        payload = {
            door = bones[closestBone],
            doorname = closestBone,
        },
    })
end)

RegisterNetEvent('cdev:pets:client:removePetFromVehicle', function()
    local closestVehicle = getClosestVehicle(5.0)

    if not closestVehicle or closestVehicle == 0 then
        return notify(locale('error.pet_no_vehicle_nearby'))
    end

    if GetResourceState('cdev_pets') ~= 'started' then
        return notify(locale('error.pet_resource_missing'))
    end

    if exports.cdev_pets:CanExitVehicle(closestVehicle) then
        TriggerEvent('cdev_pets:onTargetTakeVehicle', { entity = closestVehicle })
    else
        notify(locale('error.pet_cant_exit_vehicle'))
    end
end)
```

#### Why this file is needed

Quick actions (follow, menu, bag, etc.) call **cdev\_pets events directly** — no extra code required.

Vehicle actions need a small bridge script because:

1. The radial must find the closest vehicle and seat bone.
2. `exports.cdev_pets:CanEnterVehicle` / `CanExitVehicle` validate the action.
3. The actual placement uses `TriggerEvent('cdev_pets:onTargetPlaceVehicle', ...)` and `TriggerEvent('cdev_pets:onTargetTakeVehicle', ...)`.

There is no `PutPetInVehicle` export in cdev\_pets — see **Vehicle Integration & External Menus** for details.

***

### Step 4 — Add locale strings

Open `qbx_radialmenu/locales/en.json` and add these keys inside the `"error"` object:

```json
"pet_no_vehicle_nearby": "No vehicle nearby.",
"pet_cant_enter_vehicle": "Your pet cannot enter this vehicle.",
"pet_no_valid_door": "Could not find a valid door for your pet.",
"pet_cant_exit_vehicle": "Your pet cannot exit right now. Try getting in and out of the vehicle.",
"pet_resource_missing": "Pet system (cdev_pets) is not running."
```

Repeat for any other locale files you use (e.g. `locales/pt.json`) with translated strings.

***

### Step 5 — Restart the resource

In your server console or txAdmin:

```
restart qbx_radialmenu
```

Or restart the full server. Players already connected should reconnect or restart `qbx_radialmenu` to load the new menu.

***

### How players use the radial

| Action                     | How                                                                                                             |
| -------------------------- | --------------------------------------------------------------------------------------------------------------- |
| **Open radial menu**       | Default key **Z** (ox\_lib keybind). Changeable in **ESC → Settings → Key Bindings → FiveM → Open radial menu** |
| **Open Pet submenu**       | Radial → **Pet** (dog icon)                                                                                     |
| **Follow / Cuddle / Menu** | Pet must be **spawned** (out of bag), player **on foot**, within **5 m** of pet                                 |
| **Bag**                    | Stores the spawned pet                                                                                          |
| **Stand**                  | Only works when the pet is on a bed                                                                             |
| **Put Pet In Car**         | Pet spawned, stand near a vehicle door (\~5 m), valid seat bone on the model                                    |
| **Remove Pet From Car**    | Pet must be inside the nearby vehicle                                                                           |

***

### File checklist

After setup, you should have changed or added these files:

| File                                 | Action                                                        |
| ------------------------------------ | ------------------------------------------------------------- |
| `cdev_pets/public/config/config.lua` | Verify `Keybinds.Enabled = true`                              |
| `qbx_radialmenu/config/client.lua`   | Add `pet` menu block to `menuItems`                           |
| `qbx_radialmenu/client/pets.lua`     | **Create** — vehicle bridge script                            |
| `qbx_radialmenu/locales/en.json`     | Add pet error strings                                         |
| `qbx_radialmenu/fxmanifest.lua`      | **No change** — `client/*.lua` loads `pets.lua` automatically |

***

### Troubleshooting

| Problem                              | Solution                                                                                                                      |
| ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| Pet menu does not appear             | Restart `qbx_radialmenu` after editing config. Ensure player is logged in (menu registers on `QBCore:Client:OnPlayerLoaded`). |
| Follow / Cuddle / Menu do nothing    | Set `Keybinds.Enabled = true` in `cdev_pets` config. Pet must be spawned and within range.                                    |
| Put Pet In Car does nothing          | Pet must be out of bag. Stand closer to a door. Check vehicle class (bikes/boats blocked).                                    |
| "No vehicle nearby"                  | Move within 5 m of a vehicle.                                                                                                 |
| "Your pet cannot enter this vehicle" | Pet may be dead, already in a vehicle, or vehicle class not allowed.                                                          |
| "Could not find a valid door"        | Vehicle model may lack seat bones; try another side of the car.                                                               |
| Remove from car fails                | Use **Remove Pet From Car** while standing next to the vehicle the pet is in. Enter/exit the vehicle once and retry.          |
| Notifications in wrong language      | Set ox\_lib locale in server.cfg: `setr ox:locale en`                                                                         |

***
