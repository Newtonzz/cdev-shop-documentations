---
icon: wrench
---

# Configurations

## Configurations

### Configuration

All day to day server settings live in one shared file. You do not need to edit escrowed Lua for normal setup.

{% hint style="warning" %}
Restart the resource after config changes. Some options may need a full server restart.
{% endhint %}

#### File location

| Item       | Value                                                              |
| ---------- | ------------------------------------------------------------------ |
| Path       | `public/shared/config.lua`                                         |
| Scope      | Shared on client and server (`shared_scripts` in `fxmanifest.lua`) |
| Table name | `MapEditorConfig`                                                  |

Server only permissions and webhook live in `public/server/config.lua` (`MapEditorServerConfig`).

***

#### Related files

| File                                              | Purpose                                  |
| ------------------------------------------------- | ---------------------------------------- |
| `public/shared/locales/en.json` (also `pt`, `es`) | UI strings (`MapEditorConfig.Locale`)    |
| `public/data/props.json`                          | Catalog models shipped with the resource |
| `public/bridge/**`                                | Framework / notify adaptations           |
| `public/server/config.lua`                        | ACE, ownerOnly, Discord webhook          |

***

#### Quick reference

| Section      | Keys                                                           |
| ------------ | -------------------------------------------------------------- |
| General      | `Debug`, `Locale`, `Command`, `Keybind`                        |
| Camera       | `Camera.*`                                                     |
| Placement    | `Placement.*`, `Snap.*`, `ObjectDefaults.*`                    |
| Tools        | `Brush`, `AreaFill`, `Array`, `AreaDelete`, `Eraser`, `Lights` |
| Live / world | `LiveSync.*`, `Runtime.*`                                      |
| Catalog      | `Catalog.*`, `CustomProps`                                     |
| Limits       | `Limits.*`                                                     |
| Bridge       | `Bridge.Framework`                                             |
| Hotkeys      | `Keys.*`                                                       |
| Server       | `MapEditorServerConfig.Permissions`, `Webhook`                 |

***

#### General

| Option    | Type      | Default       | Description                                                        |
| --------- | --------- | ------------- | ------------------------------------------------------------------ |
| `Debug`   | `boolean` | `false`       | Extra `[cdev_mapeditor]` console logs. Keep `false` in production. |
| `Locale`  | `string`  | `'en'`        | UI language. File must exist under `public/shared/locales/`.       |
| `Command` | `string`  | `'mapeditor'` | Chat command and ACE base (`command.mapeditor`).                   |
| `Keybind` | `string`  | `'F7'`        | Default open key (players can rebind in GTA settings).             |

***

#### Camera (`Camera`)

| Option            | Type     | Default | Description                              |
| ----------------- | -------- | ------- | ---------------------------------------- |
| `moveSpeed`       | `number` | `14.0`  | Base freecam speed                       |
| `fastMultiplier`  | `number` | `6.0`   | Held with Shift                          |
| `slowMultiplier`  | `number` | `0.25`  | Held with Alt                            |
| `pixelLookBase`   | `number` | `0.12`  | RMB look sensitivity with cursor visible |
| `controlLookBase` | `number` | `8.0`   | Look while cursor is locked (noclip)     |
| `fov`             | `number` | `50.0`  | Field of view                            |
| `maxPitch`        | `number` | `85.0`  | Pitch clamp                              |

***

#### Placement and snap

**`Placement`:** ray distance, ghost alpha, Q/E height step and hold rate, scroll rotate step.

**`Snap`:** grid on/off and size, surface align, angle snap and step.

**`ObjectDefaults`:** lod, alpha, collision, frozen, visible for newly placed props.

***

#### Tools

| Table        | What it controls                                                            |
| ------------ | --------------------------------------------------------------------------- |
| `Brush`      | Radius, spacing, scatter count, random yaw/tilt                             |
| `AreaFill`   | Spacing limits, layout, heading mode, max points/objects, preview ghost cap |
| `Array`      | Default count, spacing, heading, max count                                  |
| `AreaDelete` | Circle radius for deleting placed editor objects                            |
| `Eraser`     | Model hide precision for original world props                               |
| `Lights`     | Default/max range and intensity, color presets                              |

***

#### Live sync (`LiveSync`)

| Option       | Type      | Default | Description                                                     |
| ------------ | --------- | ------- | --------------------------------------------------------------- |
| `enabled`    | `boolean` | `true`  | Nearby players receive live revisions                           |
| `autoSave`   | `boolean` | `false` | When false, sync mainly on Save (can be toggled in the Save UI) |
| `debounceMs` | `number`  | `2000`  | Diff batching delay when auto sync is on                        |
| `radius`     | `number`  | `300.0` | Players within this distance of the map receive hot updates     |

***

#### Runtime streaming (`Runtime`)

Used when the editor is closed and a map is live in the world.

| Option                          | Default       | Description                                            |
| ------------------------------- | ------------- | ------------------------------------------------------ |
| `spawnRadius` / `despawnRadius` | `150` / `180` | Create vs park hysteresis (despawn should stay larger) |
| `despawnDelayMs`                | `5000`        | Wait before parking to soft-cache                      |
| `entityCacheMax`                | `96`          | Soft-cache LRU size                                    |
| `nearWaitMs` / `idleWaitMs`     | `150` / `750` | Stream thread sleeps                                   |
| `maxSpawnsPerTick`              | `8`           | CreateObject budget per tick                           |
| `showLoadToast`                 | `true`        | Toast while the map bundle downloads                   |
| `showObjectsToast`              | `true`        | Toast while objects spawn or revive near you           |
| `showUnloadToast`               | `true`        | Toast while objects park after leaving the radius      |
| `showHideApplyToast`            | `true`        | Toast when world hides are stamped on area enter       |

Set the toast flags to `false` in production if you want a quieter HUD.

***

#### Catalog (`Catalog`)

Image resolve order: entry `image` → `imagePath` → `fallbackImagePath` → `defaultImage`.

| Option              | Default (summary)       | Description                     |
| ------------------- | ----------------------- | ------------------------------- |
| `imagePath`         | CDEV CDN `{model}.webp` | Primary template or folder      |
| `fallbackImagePath` | `'plebmasters'`         | Second source, or empty to skip |
| `defaultImage`      | CDN fallback            | Last resort thumbnail           |
| `categories`        | houses, props, …        | Catalog filter chips            |

Add streamed props with `MapEditorConfig.CustomProps` (`model`, `label`, `category`, optional `image`).

***

#### Limits (`Limits`)

Server revalidates these: max objects, lights, blips, layers, prefab objects, and name length per map.

***

#### Bridge (`Bridge`)

| Option      | Default  | Description                                       |
| ----------- | -------- | ------------------------------------------------- |
| `Framework` | `'auto'` | `auto` \| `qbox` \| `qbcore` \| `esx` \| `custom` |

***

#### Hotkeys (`Keys`)

Remappable NUI keys (WASD, Q/E, tools, Ctrl+Z/Y, CapsLock free cursor, Esc, and more). Mouse buttons stay fixed. The on-screen hint bar follows these values.

***

#### Server config (`public/server/config.lua`)

| Option                          | Default                     | Description                             |
| ------------------------------- | --------------------------- | --------------------------------------- |
| `Permissions.ace`               | `nil` → `command.mapeditor` | Primary ACE                             |
| `Permissions.aceFallback`       | `'group.admin'`             | Extra ACE that also counts              |
| `Permissions.useFrameworkAdmin` | `true`                      | Allow framework admins                  |
| `Permissions.ownerOnly`         | `false`                     | When true, only overwrite your own maps |
| `Webhook.url` / `Webhook.name`  | empty                       | Optional Discord logging                |

***

#### Troubleshooting

| Issue                           | Check                                                                                             |
| ------------------------------- | ------------------------------------------------------------------------------------------------- |
| Editor will not open            | ACE `command.mapeditor`, start order after oxmysql, F8/server errors                              |
| UI language stuck               | `Locale` + matching JSON + restart                                                                |
| Props missing for other players | Map set to Go Live, player inside `LiveSync.radius` / runtime spawn radius                        |
| World dumpster came back        | Live map active, hide reapplied on enter; avoid ForceRemove without reapply after editor sessions |
| Toasts too noisy                | Set `Runtime.show*Toast` flags to `false`                                                         |
