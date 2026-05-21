---
icon: messages-question
---

# FAQs

<details>

<summary>🎲 The betting panel does not open (/betpanel or export)</summary>

* Confirm `cdev_bet` is started and listed after `oxmysql` and your framework (`qb-core`, `qbx_core`, or `es_extended`).
* Default command: `/betpanel` — name is set in `BetConfig.Commands.OpenPlayerPanel` 1.
* From another resource (server): `exports['cdev_bet']:OpenPlayerPanel(source)` — player must be online and `source` valid.
* Check F8 (client) and server console for errors; set `BetConfig.Debug = true`, restart, try again.
* If the UI flashes and closes, verify oxmysql connection and that SQL tables were created (`sql/install.sql`).

</details>

<details>

<summary>🔐 Admin panel says “no access”</summary>

Add ACE to `server.cfg` or `permissions.cfg`:

add\_ace group.admin cdev\_bet.admin allow

* Permission name must match `BetConfig.ACE.Admin` (default: `cdev_bet.admin`).
* Restart the server (or refresh ACE), then use `/betadmin` or `exports['cdev_bet']:OpenAdminPanel(source)`.
* Being in a “staff” job is not enough — CDEV Bet uses ACE, not job name.

</details>

<details>

<summary>🗄️ Database tables are not created</summary>

* Ensure oxmysql is running and MySQL credentials in server.cfg are correct.
* After DB fixes: `restart cdev_bet`.

</details>

<details>

<summary>💵 Min / max bet or treasury limits seem wrong</summary>

* In `public/shared/config.lua`, `Betting` and `Treasury` amounts are in cents, not dollars.
  * `MinBetCents = 100` → $1.00 minimum in the UI
  * `MaxBetCents = 50000000` → $500,000.00 maximum
* Players still type normal dollars in the panel (`50` = $50.00).
* Use a dot for decimals in config (`0.05`), never a comma (`0,05`).

</details>

<details>

<summary>📊 Odds look strange (e.g. 99.00 or very low on one side)</summary>

CDEV Bet uses parimutuel (pool) odds — prices depend on how much money is on 1 / X / 2, not fixed bookmaker lines.

* Empty or tiny pool on a side → displayed odds can be very high.
* Heavy money on one side → odds on that side drop.
* `BetConfig.Odds.DisplayHouseEdge` slightly lowers shown odds; `SettlementHouseEdge` is the real rake on payout.

</details>

<details>

<summary>⏱️ Match status wrong (OPEN / LIVE / AWAITING SETTLEMENT too early or late)</summary>

* Status is driven by timestamps set when the admin creates the match:
  * Betting opens → `open`
  * Match start → betting closes, `live`
  * Event end → `waiting_settled` (admin must settle → `end`)
* Server checks lifecycle every `BetConfig.UI.LifecyclePollSeconds` (default 15 seconds).
* Players with the panel open get live patches; others refresh on `AutoRefreshSeconds` or reopening the panel.
* Wrong times in admin create form = wrong badges — fix dates, not just status labels.

</details>

<details>

<summary>🏆 Admin settled the match but my bet card still shows “Awaiting settlement”</summary>

* Reopen the panel or wait for auto-refresh if enabled.
* After settlement, the server broadcasts updates; if it still sticks, `restart cdev_bet` and ensure you are on the latest build.
* Full history: open View all history — sidebar preview can lag until refresh.
* Bet result (WIN / LOST) comes from wager `status` after settle, not only match badge.

</details>

<details>

<summary>🖼️ Team or banner images do not load in-game</summary>

* Use direct HTTPS image URLs (PNG/JPG). Some hosts block FiveM CEF or hotlinking.
* ESPN / combiner URLs may need the in-game proxy — if preview works in admin but fails in feed, try another CDN (Imgur, your CDN, GitHub raw, etc.).
* `BetConfig.DefaultTeamLogoUrl` is the fallback when a team logo is empty.
* Profile avatar: player can pick URL or local image from the `images/` folder (no UI rebuild — drop files in `images/` and restart resource).

</details>

<details>

<summary>🎨 UI language or colors don’t change</summary>

* `BetConfig.Locale` → file must exist: `public/shared/locales/<code>.json` (`en`, `pt`, `es`).
* `BetConfig.Theme` → id must exist in `public/shared/themes.json` (`default`, `cdev`, `custom`).
* For `custom`, fill color keys in `themes.json` under `"custom"`.
* Always `restart cdev_bet` after editing locale/theme files.

</details>

<details>

<summary>📱 Tablet prop / animation issues</summary>

* Controlled by `BetConfig.UI.Tablet`:
  * `Enabled = false` → panel works, no prop/anim.
  * `PropModel` must be a valid GTA prop (`prop_cs_tablet`, etc.).
  * `AnimDict` / `AnimName` must match the prop you use.
* Other players see the tablet via synced state when enabled.

</details>

<details>

<summary>🗑️ Cannot delete a match in admin</summary>

* Delete is only allowed while match status is `open` (betting window).
* If any player has placed a bet (pool > 0 or wagers exist), delete is blocked — refund/settle flow applies instead.
* Use settle after event end when status is waiting settlement.

</details>

<details>

<summary>❌ “Betting closed” when placing a wager</summary>

* Bets only in `open` phase, between betting opens and match start time.
* One open bet per outcome (1/X/2) per player per match — duplicate side shows as already taken.
* `MinBetCents` / `MaxBetCents` and cash/bank balance must cover the stake.
* Match may have moved to `live` — check match card badge and schedule.

</details>

<details>

<summary>📈 Leaderboard profit shows ##########</summary>

* `BetConfig.Leaderboard.ShowProfitToPlayers = false` hides profit from normal players.
* Admins (ACE) always see real profit values.
* Leaderboard only reflects settled bets (`won` / `lost`).

</details>

<details>

<summary>🔄 Auto-refresh timer missing but data still updates</summary>

* `BetConfig.UI.ShowAutoRefreshTimer = false` hides the countdown chip; `AutoRefreshSeconds` can still run.
* `AutoRefreshSeconds = 0` disables automatic refresh entirely (manual refresh / reopen only).
* Lifecycle status changes (OPEN → LIVE, etc.) use `LifecyclePollSeconds`, separate from auto-refresh.

</details>

<details>

<summary>📤 Exports from another resource don’t work</summary>

* Resource name: `cdev_bet`
* Start order: `ensure cdev_bet` before scripts that call exports.
* Server: `OpenPlayerPanel`, `OpenAdminPanel`, `ClosePanel`, `IsPlayerPanelOpen` — need valid `source`.
* Client: `OpenPlayerPanel`, `OpenAdminPanel`, `ClosePanel`, `IsPanelOpen` — local player only.
* See the Exports page for examples. Admin export does not bypass ACE on admin bootstrap.

</details>

<details>

<summary>🏦 Treasury balance / withdrawal issues</summary>

* Treasury receives `SettlementHouseEdge` rake when admin settles matches.
* Withdraw limits use cents in `BetConfig.Treasury` (`MinWithdrawCents`, `MaxWithdrawCents`).
* Withdrawals go through your framework money system (same bridge as player bets).

</details>

***



<br>
