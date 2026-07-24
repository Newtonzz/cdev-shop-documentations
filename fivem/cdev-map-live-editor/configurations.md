---
icon: wrench
---

# Configurations

All day to day server settings live in one shared file.

{% hint style="warning" %}
Restart the resource after config changes. Some options may need a full server restart.
{% endhint %}

#### File location

| Item       | Value                      |
| ---------- | -------------------------- |
| Path       | `public/shared/config.lua` |
| Table name | `MapEditorConfig`          |

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

<table data-search="false"><thead><tr><th>Section</th><th>Keys</th></tr></thead><tbody><tr><td>General</td><td><code>Debug</code>, <code>Locale</code>, <code>Command</code>, <code>Keybind</code></td></tr><tr><td>Camera</td><td><code>Camera.*</code></td></tr><tr><td>Placement</td><td><code>Placement.*</code>, <code>Snap.*</code>, <code>ObjectDefaults.*</code></td></tr><tr><td>Tools</td><td><code>Brush</code>, <code>AreaFill</code>, <code>Array</code>, <code>AreaDelete</code>, <code>Eraser</code>, <code>Lights</code></td></tr><tr><td>Live / world</td><td><code>LiveSync.*</code>, <code>Runtime.*</code></td></tr><tr><td>Catalog</td><td><code>Catalog.*</code>, <code>CustomProps</code></td></tr><tr><td>Limits</td><td><code>Limits.*</code></td></tr><tr><td>Bridge</td><td><code>Bridge.Framework</code></td></tr><tr><td>Hotkeys</td><td><code>Keys.*</code></td></tr><tr><td>Server</td><td><code>MapEditorServerConfig.Permissions</code>, <code>Webhook</code></td></tr></tbody></table>

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

<table data-search="false"><thead><tr><th>Option</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>moveSpeed</code></td><td><code>number</code></td><td><code>14.0</code></td><td>Base freecam speed</td></tr><tr><td><code>fastMultiplier</code></td><td><code>number</code></td><td><code>6.0</code></td><td>Held with Shift</td></tr><tr><td><code>slowMultiplier</code></td><td><code>number</code></td><td><code>0.25</code></td><td>Held with Alt</td></tr><tr><td><code>pixelLookBase</code></td><td><code>number</code></td><td><code>0.12</code></td><td>RMB look sensitivity with cursor visible</td></tr><tr><td><code>controlLookBase</code></td><td><code>number</code></td><td><code>8.0</code></td><td>Look while cursor is locked (noclip)</td></tr><tr><td><code>fov</code></td><td><code>number</code></td><td><code>50.0</code></td><td>Field of view</td></tr><tr><td><code>maxPitch</code></td><td><code>number</code></td><td><code>85.0</code></td><td>Pitch clamp</td></tr></tbody></table>

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

<table data-search="false"><thead><tr><th>Option</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>spawnRadius</code> / <code>despawnRadius</code></td><td><code>150</code> / <code>180</code></td><td>Create vs park hysteresis (despawn should stay larger)</td></tr><tr><td><code>despawnDelayMs</code></td><td><code>5000</code></td><td>Wait before parking to soft-cache</td></tr><tr><td><code>entityCacheMax</code></td><td><code>96</code></td><td>Soft-cache LRU size</td></tr><tr><td><code>nearWaitMs</code> / <code>idleWaitMs</code></td><td><code>150</code> / <code>750</code></td><td>Stream thread sleeps</td></tr><tr><td><code>maxSpawnsPerTick</code></td><td><code>8</code></td><td>CreateObject budget per tick</td></tr><tr><td><code>showLoadToast</code></td><td><code>true</code></td><td>Toast while the map bundle downloads</td></tr><tr><td><code>showObjectsToast</code></td><td><code>true</code></td><td>Toast while objects spawn or revive near you</td></tr><tr><td><code>showUnloadToast</code></td><td><code>true</code></td><td>Toast while objects park after leaving the radius</td></tr><tr><td><code>showHideApplyToast</code></td><td><code>true</code></td><td>Toast when world hides are stamped on area enter</td></tr></tbody></table>

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
