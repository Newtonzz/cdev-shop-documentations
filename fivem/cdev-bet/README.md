# 🎲 cDev Bet

<figure><img src="../../.gitbook/assets/Cdev Image Upadate.png" alt=""><figcaption></figcaption></figure>

## Introduction

{% hint style="info" %}
CDEV Bet — A sportsbook for FiveM with parimutuel pool odds, live match lifecycle, admin match management, house treasury, and multi framework support.

Browse real sports markets (1 · X · 2), build singles or express slips, track open bets and full history, and compete on a profit leaderboard. Payouts come from the player pool after settlement. Supports QBox, QBCore, ESX Legacy, oxmysql, and configurable framework notify bridges.
{% endhint %}

## Purchase the Script

{% embed url="https://fivem.cdev.shop/package/7458477" %}

## Showcase

<mark style="color:blue;">**Video soon**</mark>

## **Features**

<details>

<summary>Features List</summary>

* ⚽ Sportsbook player panel — Full NUI betting desk: category navigation (Live, main sports, sub leagues), search, match cards with live status badges, bet slip (cash or bank), and wallet balances in the top bar. Open with `/betpanel` (configurable).
* 🎯 Parimutuel pool odds (1 · X · 2) — Home, draw, or away markets where displayed odds move as players stake on each side. Slip shows an estimate before confirm; placed odds lock at bet time. After admin settlement, winners share the pool minus configurable house rake. Not fixed bookmaker pricing.
* 📋 Singles and express combos — One pick per match is a single. Players can combine legs into an express slip; combined odds multiply and one losing leg loses the combo. One bet per outcome per match (no duplicate side on the same event).
* 🔄 Match lifecycle automation — Scheduled → open for betting → live (no new bets) → awaiting settlement → settled. Server thread advances statuses on a timer; admins set results and scores when settling.
* 🏆 Featured and popular markets — Admins can flag a featured match (large hero card at top of feed). Most popular ranks matches by total wagers and shows up to three cards with pagination when more qualify.
* 📊 My bets, bet history, and filters — Sidebar preview of open slips; full All my bets screen with filters (All, Open, Pending, Live, Settled) and pagination. Bet history block plus profile shortcut to the full list. Cancel open wagers before kickoff when rules allow.
* 📈 Performance chart and profile — Net P\&L chart (day / week / month / year), this month summary, display name and avatar URL for leaderboard identity. Built in How to bet guide in the profile menu.
* 🥇 Leaderboard — Rankings from settled bets: name, bets played, wins, losses, profit. Sortable columns and pagination. Optional profit masking for regular players (`BetConfig.Leaderboard.ShowProfitToPlayers`); admins always see real values.
* 🏅 Last winning bet card — Sidebar highlight of the player’s most recent won wager with match visuals, stake, return, and net profit.
* 🛠 Admin sportsbook panel — `/betadmin` (ACE: `cdev_bet.admin`): create and edit main / sub categories, build matches (teams, logos, banner, schedule, draw toggle, score tracking), preview cards, settle results, delete catalog entries, and read the in panel How to create guide.
* 💰 House treasury — Settlement rake accumulates in a tracked house balance. Admin treasury tab: balance, paginated ledger, deposits and withdrawals within configured limits. Winners are paid from the parimutuel pool, not from treasury float.
* 🖼 Team and league images — HTTPS URLs (with optional server image proxy for strict hosts) or local folder images under `cdev_bet/images/` for admins. URL validation and preview in admin forms.
* 🔌 Multi framework compatibility — Supports QBox (qbx\_core), QBCore, and ESX Legacy with automatic detection (`BetConfig.Bridge.Framework`). Cash and bank stakes via framework money APIs. Notifications via framework or ox\_lib when available.
* 🌐 Locales and themes — Player and admin UI strings in `public/shared/locales/` (en, pt, es). Visual themes `default`, `cdev`, or `custom` in `public/shared/themes.json` (`BetConfig.Theme`).
* 📱 Optional tablet RP — While the panel is open, nearby players can see a tablet prop and idle animation (`BetConfig.UI.Tablet`). Toggle off for a lightweight UI only setup.
* ⏱ Auto refresh — Configurable interval refreshes odds, balances, open bets, and match status while the panel stays open (`BetConfig.UI.AutoRefreshSeconds`). Optional countdown chip near search.
* 🗄 Persistent data (oxmysql) — Wagers, matches, categories, player profiles, ledger, treasury, and leaderboard stats stored in SQL with indexes for list and count queries.
* 📖 In game guides — How to bet (players) and How to create (admins) explain pool rules, lifecycle, treasury, and best practices without leaving the panel.

</details>

## Installation Guide & Others

{% content-ref url="features-preview.md" %}
[features-preview.md](features-preview.md)
{% endcontent-ref %}

{% content-ref url="installation-guide.md" %}
[installation-guide.md](installation-guide.md)
{% endcontent-ref %}

{% content-ref url="configurations.md" %}
[configurations.md](configurations.md)
{% endcontent-ref %}

{% content-ref url="exports/" %}
[exports](exports/)
{% endcontent-ref %}

{% content-ref url="integrations.md" %}
[integrations.md](integrations.md)
{% endcontent-ref %}

{% content-ref url="faqs.md" %}
[faqs.md](faqs.md)
{% endcontent-ref %}
