---
icon: wrench
---

# Configurations

{% hint style="warning" %}
All primary configuration is in \*\*\`public/shared/config.lua\`\*\*. Restart the resource after changing values.
{% endhint %}

{% hint style="info" %}
UI theme tokens (optional) are in **`public/shared/themes.json`** — see **Theme** below.
{% endhint %}

***

#### General

| Option   | Type    | Default     | Description                                                                            |
| -------- | ------- | ----------- | -------------------------------------------------------------------------------------- |
| `Debug`  | boolean | `false`     | Extra logs in F8 and server console. Use `false` on production.                        |
| `Locale` | string  | `"en"`      | Language file under `public/shared/locales/` (e.g. `en`, `pt`).                        |
| `Theme`  | string  | `"default"` | UI palette id: `"default"`, `"cdev"`, or `"custom"` (see `public/shared/themes.json`). |

***

#### Bridge

| Option               | Type   | Options                                                              | Description                                                                                         |
| -------------------- | ------ | -------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `Bridge.Framework`   | string | `"auto"` \| `"qb-core"` \| `"qbx_core"` \| `"es_extended"`           | Framework. `"auto"` detects a running core.                                                         |
| `Bridge.Inventory`   | string | `"auto"` \| `"ox_inventory"` \| `"qb-inventory"` \| `"qs-inventory"` | Inventory integration.                                                                              |
| `Bridge.Interaction` | string | `"drawtext"` \| `"target"`                                           | How players open the lane UI near a placed board.                                                   |
| `Bridge.Target`      | string | `"auto"` \| `"ox_target"` \| `"qb-target"` \| `"custom"`             | Target resource when `Interaction = "target"`. `"custom"` → edit `public/bridge/target/client.lua`. |
| `Bridge.Notify`      | string | `"auto"` \| `"ox_lib"` \| `"qbcore"` \| `"esx"` \| `"native"`        | Notification backend.                                                                               |

***

#### Interaction options

**DrawText (`Bridge.Interaction = "drawtext"`)**

| Option                                         | Type          | Default | Description                                           |
| ---------------------------------------------- | ------------- | ------- | ----------------------------------------------------- |
| `InteractionOptions.DrawText.maxDistance`      | number        | `2.8`   | Max distance (m) for 3D hints.                        |
| `InteractionOptions.DrawText.keyDisplay`       | string        | `"E"`   | Shown in the hint.                                    |
| `InteractionOptions.DrawText.controlId`        | number        | `38`    | Control id (38 = E).                                  |
| `InteractionOptions.DrawText.label`            | string \| nil | `nil`   | Override text; `nil` uses locale `axe.interact_lane`. |
| `InteractionOptions.DrawText.pickupKeyDisplay` | string        | `"G"`   | Pickup hint key label.                                |
| `InteractionOptions.DrawText.pickupControlId`  | number        | `47`    | Pickup control (47 = G).                              |

**Target (`Bridge.Interaction = "target"`)**

| Option                                               | Type   | Default             | Description                              |
| ---------------------------------------------------- | ------ | ------------------- | ---------------------------------------- |
| `InteractionOptions.Target.maxDistance`              | number | `2.8`               | Range for target options.                |
| `InteractionOptions.Target.label`                    | string | `"Axe Throwing"`    | Main target label.                       |
| `InteractionOptions.Target.icon`                     | string | `"fas fa-bullseye"` | Font Awesome class (ox\_target).         |
| `InteractionOptions.Target.pickupLabel`              | string | `"Pick up target"`  | Pickup option label.                     |
| `InteractionOptions.Target.pickupIcon`               | string | `"fas fa-box"`      | Pickup icon.                             |
| `InteractionOptions.Target.TargetSyncRadius`         | number | `80.0`              | Bubble (m) for syncing nearby boards.    |
| `InteractionOptions.Target.TargetSyncPullDebounceMs` | number | `4500`              | Min interval between server sync checks. |
| `InteractionOptions.Target.TargetRescanMs`           | number | `8000`              | World rescan interval for target mode.   |

***

#### Items

| Option                         | Type    | Default                  | Description                                                                    |
| ------------------------------ | ------- | ------------------------ | ------------------------------------------------------------------------------ |
| `Item.enabled`                 | boolean | `true`                   | If `false`, inventory item exports / ESX-QB registration are skipped.          |
| `Item.Target.name`             | string  | `"axe_throwing_target"`  | Inventory item name for placing the board.                                     |
| `Item.Target.label`            | string  | `"Axe Throwing Target"`  | Display label (also for notifications where used).                             |
| `Item.Hatchet.name`            | string  | `"axe_throwing_hatchet"` | Hatchet item name.                                                             |
| `Item.Hatchet.label`           | string  | `"Throwing Hatchet"`     | Display label.                                                                 |
| `Item.Hatchet.requiredToThrow` | boolean | `true`                   | If `true`, players need the hatchet item to register throws (economy servers). |

***

#### Tournament (lobby rules)

| Option                                          | Type    | Default | Description                                                  |
| ----------------------------------------------- | ------- | ------- | ------------------------------------------------------------ |
| `Tournament.MaxPlayers`                         | number  | `5`     | Max competitors in a tournament.                             |
| `Tournament.MinPlayersToStart`                  | number  | `2`     | Minimum players to allow start (unless rules say otherwise). |
| `Tournament.RequireFullLobby`                   | boolean | `false` | If `true`, host cannot start until lobby is full.            |
| `Tournament.PaidPlaces`                         | number  | `3`     | How many ranks split the prize pool in UI.                   |
| `Tournament.MinPrizePool`                       | number  | `100`   | Minimum prize pool to create (use `0` to disable floor).     |
| `Tournament.TieBreakRevealMs`                   | number  | `8400`  | Duration of tie-break reveal animation in end UI.            |
| `Tournament.DivisionJoinRules.Enabled`          | boolean | `true`  | Enforce division join limits by rating points.               |
| `Tournament.DivisionJoinRules.AmateurMaxPoints` | number  | `1999`  | Amateur division max rating points.                          |
| `Tournament.DivisionJoinRules.ProMinPoints`     | number  | `2000`  | Pro division minimum rating points.                          |

***

#### Props & streaming

| Option                    | Description                                                                            |
| ------------------------- | -------------------------------------------------------------------------------------- |
| `Props.TargetBoard.model` | Board archetype (must match streamed `.ydr` / `.ytyp`). Default `cdev_axetarget`.      |
| `Props.Axe`               | Hatchet model attach offsets, stick tuning, TTL — change carefully if you swap `.ydr`. |

{% hint style="info" %}
Addon props live under **`stream/props/`**; animations under **`stream/anim/*.ycd`**. Keep **`fxmanifest.lua`** `data_file` / `files` entries in sync when adding assets.
{% endhint %}

***

#### Placement

| Option                            | Default | Description                                                       |
| --------------------------------- | ------- | ----------------------------------------------------------------- |
| `Placement.raycastDistance`       | `20.0`  | Max placement ray length.                                         |
| `Placement.maxDistanceFromPlayer` | `6.0`   | Max distance from player to hit surface.                          |
| `Placement.surfaceOffsetM`        | `0.045` | Push board along wall normal.                                     |
| `Placement.Keybinds.*`            | —       | Controls for place / cancel / rotate / fine rotate (control IDs). |

***

#### Fault line (ground)

{% hint style="info" %}
`FaultLineDisplay` controls RGBA colors, half-width, stand zone, max draw distance, and whether the line follows tournament fault rules only.
{% endhint %}

***

#### Match controls

{% hint style="info" %}
`MatchControls` — killshot toggle, begin throw, cancel practice, forfeit, spectator mouse toggle, practice aim difficulty page keys. Values are **FiveM control IDs**.
{% endhint %}

***

#### Strength meter & aim

| Block                   | Description                                                                           |
| ----------------------- | ------------------------------------------------------------------------------------- |
| `StrengthMeter`         | Oscillation speed, confirm key (Space default), movement lock, aim dot smoothing.     |
| `AimDifficulty.Presets` | `fixed` / `easy` / `medium` / `ultra` drift for practice and tournament rule presets. |

***

#### Throw animation

{% hint style="info" %}
`ThrowAnimation` — anim dict/name (custom `.ycd`), blend, flag, `syncAxeReleaseMs` delay before spawning the flying axe.
{% endhint %}

***

#### Flight (visual)

{% hint style="info" %}
`Flight` — duration, spins, arc, miss distance, camera vs ped rotation, model spin offsets.
{% endhint %}

***

#### Realistic mode tuning

{% hint style="info" %}
`ThrowRealism` applies when match rules use **`throwMode == "realistic"`** (ideal power vs distance, green window, short throw, bounce).
{% endhint %}

***

#### Rating (ELO)

| Option                      | Default | Description                                               |
| --------------------------- | ------- | --------------------------------------------------------- |
| `Rating.DefaultELO`         | `1000`  | Starting rating.                                          |
| `Rating.KFactor`            | `32`    | Base K for rating updates.                                |
| `Rating.KFactorByPlacement` | table   | Multipliers for 1st / 2nd / 3rd / others.                 |
| `Rating.MinRating`          | `100`   | Floor.                                                    |
| `Rating.MaxRating`          | `3000`  | Ceiling.                                                  |
| `Rating.Badges`             | table   | `{ min, badge, label, color }` tiers for UI (hex colors). |

***

#### Themes (`public/shared/themes.json`)

| Theme id  | Purpose                                                                                                                                                            |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `default` | Baseline colors.                                                                                                                                                   |
| `cdev`    | CDEV / Discord-style dark + blue accents.                                                                                                                          |
| `custom`  | Same keys as default; values can be short **documentation strings** until you replace them with real CSS colors — non-CSS text falls back to `default` at runtime. |

{% hint style="info" %}
Restart the resource after editing JSON.
{% endhint %}

***
