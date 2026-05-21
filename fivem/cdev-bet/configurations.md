---
icon: wrench
---

# Configurations

## Configuration

**All server-owner settings live in one file. You do not need to edit Lua code elsewhere for normal setup.**

{% hint style="warning" %}
**For every change you make, you will need to restart the resource. Some configuration changes may also require a full server restart to take effect.**
{% endhint %}

### File location

| Item       | Value                                                                    |
| ---------- | ------------------------------------------------------------------------ |
| Path       | `public/shared/config.lua`                                               |
| Scope      | Shared loaded on client and server (`shared_script` in `fxmanifest.lua`) |
| Table name | `BetConfig`                                                              |

***

### Before you edit (read this)

{% hint style="warning" %}
Money: players vs config

* In-game (player UI): players type normal dollar amounts (`50` = $50.00).
* In this config file (`Betting`, `Treasury`): limits use cents (integers).
  * `MinBetCents = 100` → minimum bet $1.00
  * `MaxBetCents = 50000000` → maximum bet $500,000.00
  * `10000` in config = $100.00, not $10,000

Use a dot for decimals (`0.05`), never a comma (`0,05`).
{% endhint %}

***

### Related files (not in `config.lua`)

| File                                             | Purpose                                                       |
| ------------------------------------------------ | ------------------------------------------------------------- |
| `public/shared/locales/en.json` (and `pt`, `es`) | UI text — controlled by `BetConfig.Locale`                    |
| `public/shared/themes.json`                      | Panel colors — controlled by `BetConfig.Theme`                |
| `images/`                                        | Optional local images for profile (URL vs local picker in UI) |

***

### Quick reference

| Section          | Keys                                                                                        |
| ---------------- | ------------------------------------------------------------------------------------------- |
| General          | `Debug`, `Locale`, `Theme`, `DefaultTeamLogoUrl`                                            |
| Bet history      | `BetHistory.MaxEntriesPerPlayer`                                                            |
| Player UI        | `UI.*` (refresh, tablet, sidebar)                                                           |
| Bet limits       | `Betting.MinBetCents`, `Betting.MaxBetCents`                                                |
| Admin permission | `ACE.Admin`                                                                                 |
| Commands         | `Commands.OpenPlayerPanel`, `Commands.OpenAdminPanel`                                       |
| Odds / rake      | `Odds.DisplayHouseEdge`, `Odds.SettlementHouseEdge`                                         |
| Framework        | `Bridge.Framework`, `Bridge.Notify`                                                         |
| Treasury         | `Treasury.MinWithdrawCents`, `Treasury.MaxWithdrawCents`, `Treasury.LedgerPageSize`         |
| Leaderboard      | `Leaderboard.ShowProfitToPlayers`, `Leaderboard.DefaultPageSize`, `Leaderboard.MaxPageSize` |

***

### General

| Option               | Type      | Default     | Description                                                                                                                    |
| -------------------- | --------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `Debug`              | `boolean` | `true`      | `true` = extra messages in the server console (support). `false` = production (recommended when stable).                       |
| `Locale`             | `string`  | `'en'`      | UI language. File must exist: `public/shared/locales/<code>.json`. Included: `en`, `pt`, `es`.                                 |
| `Theme`              | `string`  | `'default'` | Visual theme id in `public/shared/themes.json`. Examples: `default`, `cdev`, `custom` (fill `custom` colors in `themes.json`). |
| `DefaultTeamLogoUrl` | `string`  | Pixabay URL | Fallback team logo when admin does not set one. Direct HTTPS link to PNG/JPG.                                                  |

***

### Bet history

| Option                | Type     | Default | Description                                                                                 |
| --------------------- | -------- | ------- | ------------------------------------------------------------------------------------------- |
| `MaxEntriesPerPlayer` | `number` | `20`    | Max stored bets per player. Oldest removed first. Does not affect open bets in the sidebar. |

***

### Player UI (`UI`)

| Option                 | Type      | Default | Description                                                                                                                                             |
| ---------------------- | --------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `MyBetsVisibleCount`   | `number`  | `2`     | Open bets shown in My bets sidebar before “see more”. Full history page is separate.                                                                    |
| `AutoRefreshSeconds`   | `number`  | `120`   | While the panel is open, refresh odds, balances, and match list every N seconds. `0` = disabled (data only on reopen / manual refresh).                 |
| `ShowAutoRefreshTimer` | `boolean` | `true`  | `true` = show countdown chip (“next refresh in …”) when `AutoRefreshSeconds > 0`. `false` = auto-refresh still runs, timer hidden.                      |
| `LifecyclePollSeconds` | `number`  | `15`    | Server interval to move matches `scheduled` → `open` → `live` → `waiting_settled`. Players with the panel open get instant UI updates on status change. |

#### Tablet (`UI.Tablet`)

RP tablet prop + animation while `/betpanel` or `/betadmin` is open.

| Option      | Type      | Default          | Description                                                             |
| ----------- | --------- | ---------------- | ----------------------------------------------------------------------- |
| `Enabled`   | `boolean` | `true`           | `false` = UI only, no prop/animation.                                   |
| `PropModel` | `string`  | `prop_cs_tablet` | GTA prop name (must exist in your build). Example: `prop_cs_tablet_02`. |
| `AnimDict`  | `string`  | (see config)     | Animation dictionary for the prop.                                      |
| `AnimName`  | `string`  | `idle_a`         | Animation name. Change both dict/name if you change the prop.           |

***

### Bet limits (`Betting`)

| Option        | Type     | Default    | Description                          |
| ------------- | -------- | ---------- | ------------------------------------ |
| `MinBetCents` | `number` | `100`      | Minimum stake per bet ($1.00).       |
| `MaxBetCents` | `number` | `50000000` | Maximum stake per bet ($500,000.00). |

***

### Admin permission (`ACE`)

| Option  | Type     | Default          | Description                                                                  |
| ------- | -------- | ---------------- | ---------------------------------------------------------------------------- |
| `Admin` | `string` | `cdev_bet.admin` | ACE permission for admin panel, create/settle matches, categories, treasury. |

***

### Chat commands (`Commands`)

| Option            | Type     | Default    | Description                                         |
| ----------------- | -------- | ---------- | --------------------------------------------------- |
| `OpenPlayerPanel` | `string` | `betpanel` | Player command → `/betpanel` (one word, no spaces). |
| `OpenAdminPanel`  | `string` | `betadmin` | Admin command → `/betadmin`. Still requires ACE.    |

***

### Odds and payouts (`Odds`)

{% hint style="info" %}
Parimutuel (pool) betting — displayed odds change with pool size (1 / X / 2). Not fixed bookmaker prices.
{% endhint %}

| Option                | Type     | Default | Range          | Description                                                                                                                 |
| --------------------- | -------- | ------- | -------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `DisplayHouseEdge`    | `number` | `0.05`  | `0.0` – `0.5`  | Margin on shown odds (5% = slightly lower display). Does not move money by itself.                                          |
| `SettlementHouseEdge` | `number` | `0.05`  | `0.0` – `0.45` | Real rake on settlement. 5% of total pool → house treasury before winners are paid. Example: $1,000 pool → $950 to winners. |

***

### Server integration (`Bridge`)

| Option      | Type     | Default  | Description                                                               |
| ----------- | -------- | -------- | ------------------------------------------------------------------------- |
| `Framework` | `string` | `'auto'` | `auto` = detect QBCore / QBX / ESX. Or force: `qb`, `qbx`, `esx`.         |
| `Notify`    | `string` | `'auto'` | Bet success/error notifications. `auto` = framework notify when possible. |

Requires oxmysql. Optional: `ox_lib`, `qb-core`, `qbx_core`, `es_extended`.

***

### House treasury (`Treasury`)

Rake from `SettlementHouseEdge` accumulates here. Admins withdraw in the admin panel.

Amounts in cents.

| Option             | Type     | Default    | Description                           |
| ------------------ | -------- | ---------- | ------------------------------------- |
| `MinWithdrawCents` | `number` | `100`      | Minimum per withdrawal ($1.00).       |
| `MaxWithdrawCents` | `number` | `50000000` | Maximum per withdrawal.               |
| `LedgerPageSize`   | `number` | `20`       | Rows per page in treasury ledger tab. |

***

### Leaderboard (`Leaderboard`)

| Option                | Type      | Default | Description                                                                                             |
| --------------------- | --------- | ------- | ------------------------------------------------------------------------------------------------------- |
| `ShowProfitToPlayers` | `boolean` | `true`  | `true` = all players see profit column. `false` = masked (`##########`); admins always see real values. |
| `DefaultPageSize`     | `number`  | `10`    | Players per page by default.                                                                            |
| `MaxPageSize`         | `number`  | `50`    | Hard cap per request (performance).                                                                     |

***

### Troubleshooting

| Issue                   | Check                                                       |
| ----------------------- | ----------------------------------------------------------- |
| Admin panel “no access” | `ACE.Admin` in `server.cfg`                                 |
| UI still in English     | `Locale` + matching `locales/<code>.json` + restart         |
| Theme not applied       | `Theme` id exists in `themes.json`                          |
| Min/max bet wrong       | Remember cents in `Betting`                                 |
| No tablet prop          | `UI.Tablet.Enabled = false` or invalid `PropModel`          |
| Status slow to update   | Lower `LifecyclePollSeconds` (not below \~5 without reason) |
