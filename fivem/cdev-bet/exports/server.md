---
icon: database
---

# Server

## Server exports

Call from server-side scripts only. Always pass a valid player server id (`source`).

## OpenPlayerPanel

**Opens the full player sportsbook (matches, bet slip, history, wallet).**

### Parameters

| Name     | Type     | Required | Description      |
| -------- | -------- | -------- | ---------------- |
| `source` | `number` | Yes      | Player server id |

### Returns: `boolean` , `true` if the event was sent, `false` if `source` is invalid.

```lua
exports['cdev_bet']:OpenPlayerPanel(source)
```

### Example command wrapper

```lua
RegisterCommand('sportsbook', function(source)exports['cdev_bet']:OpenPlayerPanel(source)end, false)
```

### Example ox\_target (server)

```lua
exports.ox_target:addBoxZone({coords = vec3(-1193.0, -892.0, 13.0),size = vec3(2, 2, 2),options = {{name = 'cdev_bet_open',label = 'Open sportsbook',onSelect = function(data)exports['cdev_bet']:OpenPlayerPanel(data.source or source)end,},},})
```

***

## OpenAdminPanel

**Opens the admin management panel (categories, matches, settle, treasury).**

### Parameters

| Name     | Type     | Required | Description      |
| -------- | -------- | -------- | ---------------- |
| `source` | `number` | Yes      | Player server id |

### Returns: `boolean`

### Permission: The player still needs the ACE permission configured in `BetConfig.ACE.Admin` (default: `cdev_bet.admin`). Without it, the panel opens but bootstrap returns an access error.

```lua
exports['cdev_bet']:OpenAdminPanel(source)
```

***

## ClosePanel

**Closes the betting NUI and releases focus for that player.**

### Parameters

| Name     | Type     | Required | Description      |
| -------- | -------- | -------- | ---------------- |
| `source` | `number` | Yes      | Player server id |

### Returns: `boolean`

```lua
exports['cdev_bet']:ClosePanel(source)
```

### Example close on death

```lua
AddEventHandler('baseevents:onPlayerDied', function()exports['cdev_bet']:ClosePanel(source)end)
```

***

## IsPlayerPanelOpen

**Checks if the player currently has the betting panel open. Uses the synced state bag `cdevBetTablet`.**

### Parameters

| Name     | Type     | Required | Description      |
| -------- | -------- | -------- | ---------------- |
| `source` | `number` | Yes      | Player server id |

### Returns: `boolean`

```lua
local open = exports['cdev_bet']:IsPlayerPanelOpen(source)
if open thenexports['cdev_bet']:ClosePanel(source) end
```

## Automation Exports

{% hint style="info" %}
**All automation exports return a result table (not a bare boolean):**
{% endhint %}

| Field     | Type         | Description                                                                           |
| --------- | ------------ | ------------------------------------------------------------------------------------- |
| `success` | boolean      | `true` if the operation completed                                                     |
| `message` | string       | Human-readable English summary (for logs, Discord, your bridge)                       |
| `code`    | string       | Stable machine code (e.g. `match.created`, `validation.score_not_enabled`)            |
| `data`    | table \| nil | Payload on success, or extra context on failure (`match_id`, `status`, …)             |
| `debug`   | table \| nil | Only when `BetConfig.Debug = true` in `config.lua` (`invoking_resource`, `timestamp`) |

{% hint style="warning" %}
**Call from server only (another resource’s server script, not from client):**
{% endhint %}

```lua
local BET = 'cdev_bet'

local function logResult(label, result)
    if result.success then
        print(('[league][%s] OK: %s'):format(label, result.message))
        if result.data then
            print(('[league][%s] data: %s'):format(label, json.encode(result.data)))
        end
    else
        print(('[league][%s] FAIL: %s (%s)'):format(label, result.message, result.code))
        if result.data then
            print(('[league][%s] context: %s'):format(label, json.encode(result.data)))
        end
    end
end

-- usage:
-- local result = exports[BET]:CreateMatch({ ... })
-- logResult('create', result)
```

***

### Images: external URL vs local folder

Team logos and banners accept two formats (same as the admin panel):

| Type             | Format                            | Notes                                                                                                          |
| ---------------- | --------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| **External URL** | `https://i.imgur.com/AbCd123.png` | Direct HTTPS image link. Prefer `i.imgur.com` over gallery pages.                                              |
| **Local file**   | `local:eagles.png`                | File must exist in `cdev_bet/images/` (flat folder, no subfolders). **Restart `cdev_bet`** after adding files. |

Supported extensions: `.png`, `.jpg`, `.jpeg`, `.gif`, `.webp`, `.avif`, `.svg`, `.ico`

If logo fields are omitted, `BetConfig.DefaultTeamLogoUrl` from `config.lua` is used.

***

### Match lifecycle (automation)

Matches move automatically: **scheduled → open → live → waiting\_settled → end**.

Your bridge only needs to:

1. **Create** matches with correct datetimes.
2. Optionally **update score** while `live` (if `score_tracking = true`).
3. **Settle** when status is `waiting_settled` (after `event_ends_at`).

***

### CreateMatch

Creates a sportsbook card with the same validation as the admin UI.

**Parameters**

| Name      | Type  | Required | Description              |
| --------- | ----- | -------- | ------------------------ |
| `payload` | table | Yes      | Match fields (see below) |

**Payload fields**

| Name                 | Type    | Required | Description                                        |
| -------------------- | ------- | -------- | -------------------------------------------------- |
| `main_category_id`   | number  | Yes      | Main category id                                   |
| `sub_category_id`    | number  | Yes      | Sub category (must belong to main)                 |
| `team_home_label`    | string  | Yes      | Home team name                                     |
| `team_away_label`    | string  | Yes      | Away team name                                     |
| `betting_opens_at`   | string  | Yes      | When betting opens (ISO UTC `…Z` recommended)      |
| `event_starts_at`    | string  | Yes      | Kickoff / match start                              |
| `event_ends_at`      | string  | Yes      | Real end of competition                            |
| `team_home_logo_url` | string  | No       | Direct image URL or `local:filename.png`           |
| `team_away_logo_url` | string  | No       | Same as home logo                                  |
| `banner_bg_url`      | string  | No       | Card banner                                        |
| `is_featured`        | boolean | No       | Large featured card on player feed                 |
| `allow_draw`         | boolean | No       | Default `true` (1-X-2). `false` = home/away only   |
| `score_tracking`     | boolean | No       | Default `false`. `true` enables live score exports |

**Returns:** result table — `code` `match.created`, `data.match_id`

***

#### Example 1 — Minimal match (default logos, 1-X-2, no live score)

Use when you only care about team names and schedule. Logos fall back to `BetConfig.DefaultTeamLogoUrl`.

```lua
local BET = 'cdev_bet'

local result = exports[BET]:CreateMatch({
    main_category_id = 1,
    sub_category_id = 3,
    team_home_label = 'Eagles',
    team_away_label = 'Hawks',
    betting_opens_at = '2026-06-01T12:00:00.000Z',
    event_starts_at = '2026-06-01T20:00:00.000Z',
    event_ends_at = '2026-06-01T22:30:00.000Z',
    -- is_featured, allow_draw, score_tracking omitted = defaults
})

if result.success then
    print(('Match #%s created: %s vs %s'):format(
        result.data.match_id,
        'Eagles',
        'Hawks'
    ))
else
    print(result.message, result.code)
end
```

***

#### Example 2 — External image URLs (HTTPS)

Use Imgur direct links, your CDN, or any allowed HTTPS host. Good for logos hosted on the web.

```lua
local BET = 'cdev_bet'

local result = exports[BET]:CreateMatch({
    main_category_id = 1,
    sub_category_id = 3,
    team_home_label = 'Los Santos FC',
    team_away_label = 'Paleto United',
    team_home_logo_url = 'https://i.imgur.com/abc1234.png',
    team_away_logo_url = 'https://i.imgur.com/xyz9876.png',
    banner_bg_url = 'https://i.imgur.com/match_banner_wide.png',
    betting_opens_at = '2026-06-02T10:00:00.000Z',
    event_starts_at = '2026-06-02T18:00:00.000Z',
    event_ends_at = '2026-06-02T20:00:00.000Z',
    is_featured = true,
    allow_draw = true,
    score_tracking = false,
})

if not result.success then
    print(('[import] URL match failed: %s'):format(result.message))
    return
end

local matchId = result.data.match_id
print(('[import] Featured match #%s is on the board'):format(matchId))
```

***

#### Example 3 — Local images from `cdev_bet/images/`

1. Copy files into `cdev_bet/images/` (e.g. `eagles.png`, `hawks.png`, `stadium.jpg`)
2. Run `restart cdev_bet` on the server
3. Reference them with the `local:` prefix (filename only, no path)

```lua
local BET = 'cdev_bet'

-- Files on disk:
--   cdev_bet/images/eagles.png
--   cdev_bet/images/hawks.png
--   cdev_bet/images/stadium_night.jpg

local result = exports[BET]:CreateMatch({
    main_category_id = 1,
    sub_category_id = 3,
    team_home_label = 'Eagles',
    team_away_label = 'Hawks',
    team_home_logo_url = 'local:eagles.png',
    team_away_logo_url = 'local:hawks.png',
    banner_bg_url = 'local:stadium_night.jpg',
    betting_opens_at = '2026-06-03T14:00:00.000Z',
    event_starts_at = '2026-06-03T21:00:00.000Z',
    event_ends_at = '2026-06-03T23:00:00.000Z',
    is_featured = false,
    allow_draw = true,
    score_tracking = true, -- required if you plan to use SetMatchScore / UpdateMatchScore
})

if result.success then
    print(('Local-image match #%s created'):format(result.data.match_id))
else
    print(result.message)
end
```

***

#### Example 4 — Mixed: one local logo, one URL, no draw (moneyline only)

```lua
local BET = 'cdev_bet'

local result = exports[BET]:CreateMatch({
    main_category_id = 1,
    sub_category_id = 5,
    team_home_label = 'Vipers',
    team_away_label = 'Wolves',
    team_home_logo_url = 'local:vipers_crest.png',       -- from images/
    team_away_logo_url = 'https://i.imgur.com/wolves.png', -- external
    banner_bg_url = 'local:arena_banner.webp',
    betting_opens_at = '2026-06-04T08:00:00.000Z',
    event_starts_at = '2026-06-04T19:30:00.000Z',
    event_ends_at = '2026-06-04T21:45:00.000Z',
    is_featured = true,
    allow_draw = false,   -- players can only bet home or away
    score_tracking = true,
})
```

***

### CreateMatchesBulk

Creates up to **50** matches in one call. Useful for weekly league imports.

**Parameters**

| Name       | Type     | Required | Description                     |
| ---------- | -------- | -------- | ------------------------------- |
| `payloads` | table\[] | Yes      | Array of `CreateMatch` payloads |

***

#### Example 1 — Weekly sheet import (mixed payloads)

```lua
local BET = 'cdev_bet'

local week12Games = {
    {
        main_category_id = 1,
        sub_category_id = 3,
        team_home_label = 'Eagles',
        team_away_label = 'Hawks',
        team_home_logo_url = 'local:eagles.png',
        team_away_logo_url = 'local:hawks.png',
        betting_opens_at = '2026-06-01T12:00:00.000Z',
        event_starts_at = '2026-06-01T20:00:00.000Z',
        event_ends_at = '2026-06-01T22:30:00.000Z',
    },
    {
        main_category_id = 1,
        sub_category_id = 3,
        team_home_label = 'Sharks',
        team_away_label = 'Tigers',
        team_home_logo_url = 'https://i.imgur.com/sharks.png',
        team_away_logo_url = 'https://i.imgur.com/tigers.png',
        banner_bg_url = 'https://i.imgur.com/week12_banner.png',
        betting_opens_at = '2026-06-01T12:00:00.000Z',
        event_starts_at = '2026-06-01T22:45:00.000Z',
        event_ends_at = '2026-06-02T01:00:00.000Z',
        is_featured = true,
    },
    {
        main_category_id = 1,
        sub_category_id = 3,
        team_home_label = 'Minimal FC',
        team_away_label = 'Default SC',
        betting_opens_at = '2026-06-01T12:00:00.000Z',
        event_starts_at = '2026-06-02T02:00:00.000Z',
        event_ends_at = '2026-06-02T04:00:00.000Z',
        allow_draw = false,
        score_tracking = true,
    },
}

local result = exports[BET]:CreateMatchesBulk(week12Games)

print(result.message)
print(('Created: %d | Failed: %d | Total: %d'):format(
    result.data.created_count or 0,
    result.data.failed_count or 0,
    result.data.total or 0
))

if result.data.failed and #result.data.failed > 0 then
    for _, row in ipairs(result.data.failed) do
        print(('  Row #%s: %s — %s'):format(row.index, row.code, row.message))
    end
end
```

***

#### Example 2 — All local crests (server-owned assets)

```lua
local BET = 'cdev_bet'

local payloads = {}
local pairs = {
    { home = 'alpha', away = 'beta', fileH = 'alpha.png', fileA = 'beta.png' },
    { home = 'gamma', away = 'delta', fileH = 'gamma.png', fileA = 'delta.png' },
}

for _, g in ipairs(pairs) do
    payloads[#payloads + 1] = {
        main_category_id = 1,
        sub_category_id = 3,
        team_home_label = g.home,
        team_away_label = g.away,
        team_home_logo_url = ('local:%s'):format(g.fileH),
        team_away_logo_url = ('local:%s'):format(g.fileA),
        betting_opens_at = '2026-06-05T10:00:00.000Z',
        event_starts_at = '2026-06-05T18:00:00.000Z',
        event_ends_at = '2026-06-05T20:00:00.000Z',
    }
end

local result = exports[BET]:CreateMatchesBulk(payloads)
```

***

#### Example 3 — Safe re-import (skip if teams already exist)

```lua
local BET = 'cdev_bet'

local function importGame(payload)
    local existing = exports[BET]:FindMatchByTeams(
        payload.team_home_label,
        payload.team_away_label,
        payload.sub_category_id,
        1
    )
    if existing.success and existing.data.count > 0 then
        local id = existing.data.matches[1].id
        print(('Skip duplicate: match #%s already exists'):format(id))
        return existing.data.matches[1].id
    end

    local created = exports[BET]:CreateMatch(payload)
    if created.success then
        return created.data.match_id
    end
    print(created.message)
    return nil
end

importGame({
    main_category_id = 1,
    sub_category_id = 3,
    team_home_label = 'Eagles',
    team_away_label = 'Hawks',
    team_home_logo_url = 'local:eagles.png',
    team_away_logo_url = 'local:hawks.png',
    betting_opens_at = '2026-06-01T12:00:00.000Z',
    event_starts_at = '2026-06-01T20:00:00.000Z',
    event_ends_at = '2026-06-01T22:30:00.000Z',
})
```

***

### GetMatch

Returns one decorated match (odds, UI-friendly datetimes, wager counts).

**Parameters**

| Name      | Type   | Required | Description |
| --------- | ------ | -------- | ----------- |
| `matchId` | number | Yes      | Match id    |

***

#### Example 1 — Read status and odds before placing automation logic

```lua
local BET = 'cdev_bet'
local matchId = 42

local result = exports[BET]:GetMatch(matchId)
if not result.success then
    print(result.message)
    return
end

local m = result.data.match
print(('Match #%s [%s] %s vs %s'):format(m.id, m.status, m.team_home_label, m.team_away_label))
print(('Odds: H=%s X=%s A=%s'):format(m.odds_home, m.odds_draw, m.odds_away))
print(('Opens: %s | Kickoff: %s | Ends: %s'):format(
    m.betting_opens_at,
    m.event_starts_at,
    m.event_ends_at
))
```

***

#### Example 2 — Poll until match is `live` (then push score)

```lua
local BET = 'cdev_bet'
local matchId = 42

CreateThread(function()
    while true do
        local result = exports[BET]:GetMatch(matchId)
        if result.success and result.data.match.status == 'live' then
            exports[BET]:SetMatchScore(matchId, 1, 0)
            break
        end
        Wait(15000)
    end
end)
```

***

#### Example 3 — Invalid id / not found handling

```lua
local BET = 'cdev_bet'

local result = exports[BET]:GetMatch(0)
if not result.success then
    -- message: "Invalid match id." or "Match not found."
    print(result.code, result.message)
    if result.data then
        print(json.encode(result.data))
    end
end
```

***

### FindMatchByTeams

Finds the latest match(es) by **exact** team labels (optional sub category filter).

**Parameters**

| Name            | Type   | Required | Description                  |
| --------------- | ------ | -------- | ---------------------------- |
| `homeLabel`     | string | Yes      | Home team name (exact match) |
| `awayLabel`     | string | Yes      | Away team name (exact match) |
| `subCategoryId` | number | No       | Filter by sub category       |
| `limit`         | number | No       | Default `5`, max `25`        |

***

#### Example 1 — Latest match in a sub category

```lua
local BET = 'cdev_bet'

local result = exports[BET]:FindMatchByTeams('Eagles', 'Hawks', 3, 1)
if result.success and result.data.count > 0 then
    local m = result.data.matches[1]
    print(('Found match #%s status=%s'):format(m.id, m.status))
end
```

***

#### Example 2 — Search any sub category (broader)

```lua
local BET = 'cdev_bet'

local result = exports[BET]:FindMatchByTeams('Eagles', 'Hawks', nil, 5)
for _, m in ipairs(result.data.matches or {}) do
    print(m.id, m.sub_name, m.status)
end
```

***

#### Example 3 — Resolve id from simulator row before settle

```lua
local BET = 'cdev_bet'

local function resolveMatchId(simRow)
    local r = exports[BET]:FindMatchByTeams(simRow.home, simRow.away, simRow.sub_id, 1)
    if r.success and r.data.count > 0 then
        return r.data.matches[1].id
    end
    return nil
end

local matchId = resolveMatchId({ home = 'Eagles', away = 'Hawks', sub_id = 3 })
if matchId then
    exports[BET]:SettleMatch(matchId, 'home')
end
```

***

### ListActiveMatches

Lists matches in **scheduled**, **open**, or **live**.

***

#### Example 1 — All active matches on the book

```lua
local BET = 'cdev_bet'

local result = exports[BET]:ListActiveMatches(nil, 100)
if result.success then
    for _, m in ipairs(result.data.matches) do
        print(('#%s [%s] %s vs %s'):format(m.id, m.status, m.team_home_label, m.team_away_label))
    end
end
```

***

#### Example 2 — Only one league (sub category)

```lua
local BET = 'cdev_bet'
local SUB_WEEK_12 = 3

local result = exports[BET]:ListActiveMatches(SUB_WEEK_12, 50)
print(('Week 12 active games: %d'):format(result.data.count or 0))
```

***

#### Example 3 — Discord webhook summary of open games

```lua
local BET = 'cdev_bet'

local result = exports[BET]:ListActiveMatches(3, 20)
if not result.success then return end

local lines = { '**Open for betting:**' }
for _, m in ipairs(result.data.matches) do
    if m.status == 'open' then
        lines[#lines + 1] = ('• %s vs %s (match #%s)'):format(
            m.team_home_label,
            m.team_away_label,
            m.id
        )
    end
end
-- send lines to your webhook...
```

***

### ListMatchesAwaitingSettlement

Lists matches in **waiting\_settled** (event ended, ready to settle).

***

#### Example 1 — Settle every pending match as home win (demo)

```lua
local BET = 'cdev_bet'

local pending = exports[BET]:ListMatchesAwaitingSettlement(nil, 100)
if not pending.success then return end

for _, m in ipairs(pending.data.matches) do
    local settled = exports[BET]:SettleMatch(m.id, 'home')
    print(m.id, settled.message)
end
```

***

#### Example 2 — Filter by sub category

```lua
local BET = 'cdev_bet'

local result = exports[BET]:ListMatchesAwaitingSettlement(3, 50)
for _, m in ipairs(result.data.matches or {}) do
    print(('Awaiting settlement: #%s %s-%s'):format(
        m.id,
        m.display_score_home or '-',
        m.display_score_away or '-'
    ))
end
```

***

#### Example 3 — Build settle queue for external simulator

```lua
local BET = 'cdev_bet'

local function buildSettleQueue()
    local result = exports[BET]:ListMatchesAwaitingSettlement(nil, 200)
    if not result.success then return {} end

    local queue = {}
    for _, m in ipairs(result.data.matches) do
        queue[#queue + 1] = {
            match_id = m.id,
            home = m.team_home_label,
            away = m.team_away_label,
            -- your simulator looks up winner by team names
        }
    end
    return queue
end
```

***

### UpdateMatchScore

Adds or subtracts goals while **live** + **score\_tracking** enabled at creation.

**Parameters**

| Name      | Type   | Required | Description                   |
| --------- | ------ | -------- | ----------------------------- |
| `matchId` | number | Yes      | Match id                      |
| `side`    | string | Yes      | `'home'` or `'away'`          |
| `delta`   | number | Yes      | Integer change (`1`, `-1`, …) |

***

#### Example 1 — Home team scores (+1)

```lua
local BET = 'cdev_bet'
local matchId = 42

local result = exports[BET]:UpdateMatchScore(matchId, 'home', 1)
if result.success then
    print(('Score now %s-%s'):format(result.data.score_home, result.data.score_away))
else
  -- e.g. "Cannot update score: match must be in Live status..."
    print(result.message)
end
```

***

#### Example 2 — VAR correction (-1 away goal)

```lua
local BET = 'cdev_bet'

exports[BET]:UpdateMatchScore(42, 'away', -1)
```

***

#### Example 3 — Goal-by-goal feed from simulator events

```lua
local BET = 'cdev_bet'

local function onSimulatorGoal(matchId, teamSide)
    local result = exports[BET]:UpdateMatchScore(matchId, teamSide, 1)
    if not result.success then
        print(('[score] %s'):format(result.message))
        if result.data then
            print(('  match #%s status=%s score_tracking=%s'):format(
                result.data.match_id,
                result.data.status,
                tostring(result.data.score_tracking)
            ))
        end
    end
end

-- onSimulatorGoal(42, 'home')
```

***

### SetMatchScore

Sets absolute score (e.g. simulator sends full time `2-1`).

***

#### Example 1 — Set full-time score from API

```lua
local BET = 'cdev_bet'
local matchId = 42

local result = exports[BET]:SetMatchScore(matchId, 2, 1)
if result.success then
    print(result.message)
else
    print(result.message) -- score_tracking / not live
end
```

***

#### Example 2 — Sync score every 30s while live

```lua
local BET = 'cdev_bet'
local matchId = 42

CreateThread(function()
    while true do
        local snap = exports[BET]:GetMatch(matchId)
        if snap.success and snap.data.match.status == 'live' then
            local home = 2 -- from your simulator
            local away = 1
            exports[BET]:SetMatchScore(matchId, home, away)
        elseif snap.success and snap.data.match.status == 'waiting_settled' then
            break
        end
        Wait(30000)
    end
end)
```

***

#### Example 3 — Failure when score tracking was not enabled

```lua
local BET = 'cdev_bet'

-- Match created with score_tracking = false
local result = exports[BET]:SetMatchScore(99, 1, 0)
if not result.success then
    print(result.message)
    -- "Cannot update score: this match was not created with live score tracking enabled."
end
```

***

### SettleMatch

Settles the pool and pays winners. Match must be **waiting\_settled**.

**Parameters**

| Name      | Type   | Required | Description                                             |
| --------- | ------ | -------- | ------------------------------------------------------- |
| `matchId` | number | Yes      | Match id                                                |
| `outcome` | string | Yes      | `home`, `draw`, `away` — also `1`, `x`, `2`, `w1`, `w2` |

***

#### Example 1 — Home win

```lua
local BET = 'cdev_bet'

local result = exports[BET]:SettleMatch(42, 'home')
if result.success then
    print(('Paid %d cents to %d winners'):format(
        result.data.paid_cents or 0,
        result.data.winners or 0
    ))
end
```

***

#### Example 2 — Draw (1-X-2 match)

```lua
local BET = 'cdev_bet'

local result = exports[BET]:SettleMatch(42, 'draw')
-- alias also works:
-- exports[BET]:SettleMatch(42, 'x')
```

***

#### Example 3 — Away win + map simulator result string

```lua
local BET = 'cdev_bet'

local function settleFromSimulator(matchId, simWinner)
    local outcome = 'home'
    if simWinner == 'away' or simWinner == '2' or simWinner == 'w2' then
        outcome = 'away'
    elseif simWinner == 'draw' or simWinner == 'x' or simWinner == '0' then
        outcome = 'draw'
    end

    local result = exports[BET]:SettleMatch(matchId, outcome)
    if not result.success then
        print(('[settle] #%s: %s'):format(matchId, result.message))
        return false
    end
    return true
end

settleFromSimulator(42, 'away')
```

***

### DeleteMatch

Deletes only if **open** and **no bets / pool**.

***

#### Example 1 — Successful delete (bad import)

```lua
local BET = 'cdev_bet'

local result = exports[BET]:DeleteMatch(42)
if result.success then
    print(result.message) -- "Match deleted successfully."
else
    print(result.message, result.code)
end
```

***

#### Example 2 — Cannot delete (players already bet)

```lua
local BET = 'cdev_bet'

local result = exports[BET]:DeleteMatch(42)
if not result.success and result.code == 'validation.match_has_wagers' then
    print(result.message)
  -- data may include wager_count, pool_total_cents
    print(json.encode(result.data))
end
```

***

#### Example 3 — Wrong lifecycle status

```lua
local BET = 'cdev_bet'

local check = exports[BET]:GetMatch(42)
if check.success and check.data.match.status ~= 'open' then
    print(('Cannot delete: status is %s (must be open)'):format(check.data.match.status))
else
    exports[BET]:DeleteMatch(42)
end
```

***

### CreateMainCategory

Creates a main category and auto-adds a **General** sub category.

***

#### Example 1 — New league

```lua
local BET = 'cdev_bet'

local result = exports[BET]:CreateMainCategory('Sunday League')
if result.success then
    print(('Main category id=%s name=%s'):format(result.data.id, result.data.name))
end
```

***

#### Example 2 — Duplicate name

```lua
local BET = 'cdev_bet'

local r1 = exports[BET]:CreateMainCategory('Sunday League')
local r2 = exports[BET]:CreateMainCategory('Sunday League')
if not r2.success then
    print(r2.message) -- duplicate main
end
```

***

#### Example 3 — Setup + create sub in one flow

```lua
local BET = 'cdev_bet'

local main = exports[BET]:CreateMainCategory('City Championship')
if not main.success then return end

local sub = exports[BET]:CreateSubCategory(main.data.id, 'Week 1', 'local:league_icon.png')
if sub.success then
    print(('Use sub_category_id=%s in CreateMatch'):format(sub.data.id))
end
```

***

### CreateSubCategory

Creates a sub category under a main category.

***

#### Example 1 — Sub with external icon URL

```lua
local BET = 'cdev_bet'

local result = exports[BET]:CreateSubCategory(
    1,
    'Week 12',
    'https://i.imgur.com/league12.png'
)
```

***

#### Example 2 — Sub with local icon from `images/`

```lua
local BET = 'cdev_bet'

-- cdev_bet/images/league_crest.png must exist (restart cdev_bet after add)

local result = exports[BET]:CreateSubCategory(1, 'Playoffs', 'local:league_crest.png')
if result.success then
    print(('Sub id %s ready for matches'):format(result.data.id))
end
```

***

#### Example 3 — Sub without icon (optional)

```lua
local BET = 'cdev_bet'

local result = exports[BET]:CreateSubCategory(1, 'Friendly Cup', nil)
```

***

### GetCategoryTree

Returns full tree for mapping simulator → ids.

***

#### Example 1 — Print all categories

```lua
local BET = 'cdev_bet'

local result = exports[BET]:GetCategoryTree()
if not result.success then return end

for _, main in ipairs(result.data.tree) do
    print(('Main #%s: %s'):format(main.id, main.name))
    for _, sub in ipairs(main.sub_categories or {}) do
        print(('  Sub #%s: %s (general=%s)'):format(sub.id, sub.name, tostring(sub.is_general)))
    end
end
```

***

#### Example 2 — Resolve sub id by name

```lua
local BET = 'cdev_bet'

local function findSubId(mainName, subName)
    local tree = exports[BET]:GetCategoryTree()
    if not tree.success then return nil end
    for _, main in ipairs(tree.data.tree) do
        if main.name == mainName then
            for _, sub in ipairs(main.sub_categories or {}) do
                if sub.name == subName then
                    return sub.id, main.id
                end
            end
        end
    end
    return nil
end

local subId, mainId = findSubId('Sunday League', 'Week 12')
```

***

#### Example 3 — Cache tree on resource start

```lua
local BET = 'cdev_bet'
local CategoryCache = nil

CreateThread(function()
    Wait(3000)
    local result = exports[BET]:GetCategoryTree()
    if result.success then
        CategoryCache = result.data.tree
    end
end)

local function getSubId(name)
    if not CategoryCache then return nil end
    for _, main in ipairs(CategoryCache) do
        for _, sub in ipairs(main.sub_categories or {}) do
            if sub.name == name then return sub.id end
        end
    end
end
```

***

### Full league bridge example

End-to-end: categories → create (local images) → live score → settle.

```lua
-- server/main.lua in YOUR resource (e.g. my_league_bridge)
local BET = 'cdev_bet'

local MAIN_ID = 1
local SUB_ID = 3

CreateThread(function()
    Wait(5000)

    -- 1) Optional: ensure teams file exists in cdev_bet/images/ (restart cdev_bet first)

    -- 2) Create featured match with local logos
    local created = exports[BET]:CreateMatch({
        main_category_id = MAIN_ID,
        sub_category_id = SUB_ID,
        team_home_label = 'Eagles',
        team_away_label = 'Hawks',
        team_home_logo_url = 'local:eagles.png',
        team_away_logo_url = 'local:hawks.png',
        banner_bg_url = 'local:stadium_night.jpg',
        betting_opens_at = '2026-06-01T12:00:00.000Z',
        event_starts_at = '2026-06-01T20:00:00.000Z',
        event_ends_at = '2026-06-01T22:30:00.000Z',
        is_featured = true,
        allow_draw = true,
        score_tracking = true,
    })

    if not created.success then
        print(created.message, created.code)
        return
    end

    local matchId = created.data.match_id

    -- 3) When simulator says live: set score
    CreateThread(function()
        while true do
            local info = exports[BET]:GetMatch(matchId)
            if info.success and info.data.match.status == 'live' then
                exports[BET]:SetMatchScore(matchId, 2, 1)
                break
            end
            if info.success and info.data.match.status == 'waiting_settled' then
                break
            end
            Wait(10000)
        end
    end)

    -- 4) When waiting_settled: settle home win
    CreateThread(function()
        while true do
            local info = exports[BET]:GetMatch(matchId)
            if info.success and info.data.match.status == 'waiting_settled' then
                local settled = exports[BET]:SettleMatch(matchId, 'home')
                print(settled.message)
                break
            end
            if info.success and info.data.match.status == 'end' then
                break
            end
            Wait(10000)
        end
    end)
end)
```

***

### Datetime format

Prefer **ISO-8601 UTC** with `Z` suffix:

`2026-06-01T20:00:00.000Z`

Local `YYYY-MM-DDTHH:MM` is also accepted.

**Order rules**

1. `betting_opens_at` **<** `event_starts_at`
2. `event_starts_at` **<** `event_ends_at`

***

### Debug mode

In `public/shared/config.lua`:

```lua
BetConfig.Debug = true
```

Automation exports add `debug.invoking_resource` and `debug.timestamp`.

***

### Security note

{% hint style="danger" %}
**Exports are server-side only. Any server resource can call them. Restrict in production with a future whitelist if needed.**
{% endhint %}
