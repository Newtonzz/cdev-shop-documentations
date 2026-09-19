---
icon: plane-landing-gear
---

# cDev Citytour

<figure><img src="../../.gitbook/assets/CityTour Banner.png" alt=""><figcaption></figcaption></figure>

### Introduction

{% hint style="info" %}
**CDEV City Tour  board game with Fun, Real, and Singleplayer modes, VIP stakes, ranking, luck cards, and spectator sync for FiveM.**

Place a 32-space world board, sit 2–4 players (or one human vs AI), buy cities and beaches, collect rent, upgrade houses and hotels, and finish with last standing or a host-selected win condition. Supports QBox, QBCore, ESX Legacy, and multiple inventories.
{% endhint %}

### Purchase the Script

### Showcase Video

<mark style="color:$warning;">Soon</mark>

### **Features**

<details>

<summary>Features List</summary>

* 🏙️ **Custom City Tour Props** — Board, colored pawns, dice, city houses 1–3, hotel, and beach house (`cdev_citygame_*`) with `stream/` + `cdev_citygame.ytyp`.
* 🪑 **Furniture Kit Mode** — Place board-only or with a full table + chairs kit (toggle with **G** while placing).
* 🏁 **Physical Boards** — Place tables using the `citytour_board` inventory item or via admin commands (`/citytourplace`).
* 🎮 **Pre-Game Lobby** — Host picks Fun / Real / Singleplayer, seat count (2–4), color, timer, luck deck, bail-roll toggle, and win-condition toggles. Joiners pick color and pay the Real entry when enabled.
* 💰 **Fun, Real & Singleplayer** — Fun uses in-game capital only. Real takes an entry (cash / bank / VIP) into a pot split 1st / 2nd / 3rd. Singleplayer is one human vs AI, no rank and no real money.
* 💎 **VIP Currency Bridge** — Real mode can charge `vip` via `public/bridge/vip/server.lua` (default Qbox/QB `crypto`).
* 🏠 **Cities, Beaches & Hotels** — Buy land, build houses, hotels on cities, house 1 on paradise beaches. Full color set doubles rent. After paying rent on a rival **city**, you can repurchase it (not beaches, not hotels).
* 🃏 **Luck Cards** — Chance spaces draw from an equal-weight deck. Host can use Default or Custom cards. Holdable cards (rent ×2, rent ÷2, Freed from Lost Island, Protection) play on your turn.
* 🏝️ **Lost Island, Tax & Specials** — Three doubles or landing on the island space sends you to Lost Island. Tax charges **10%** of cash + property value (configurable). World Championships collects 50,000 from each other player. World Tour lets you pick any other space and travel there.
* 🤖 **AI Opponents** — NPC bots with configurable names, ped models, think delay, and buy/upgrade aggression. Used in Singleplayer and as fillers in Fun/Real.
* 🏆 **Rating & Badge System** — Competitive points (default 1000–6000) with win / loss / forfeit deltas and rank badges (Rookie → Grandmaster). Fun and Real change rating. Singleplayer does not.
* 📊 **Gaming Hub** — Profile (display name + avatar), paginated ranking, match history, money stats, and in-hub rules via `/citytourgaming`.
* 🎬 **Cinema Camera** — Free orbit cam while playing: **W/S** elevate, **A/D** rotate, **scroll** zoom. Ped stays visible at the table. Match windows use header arrows (not the mouse wheel).
* 👀 **Spectator Sync** — Nearby players (interest radius) see pawns, dice, cash stacks, buildings, and lobby dress without opening the NUI.
* 💵 **Cash Stacks** — In-match cash piles spawn at seats by capital tiers (`prop_cash_pile_02`).
* ⏱ **Turn Timer** — Optional host-enabled turn timeout with presets (30–120s by default) and disconnect pause. Timeout rolls and buys empty land only.
* 🔌 **Multi-Framework Compatibility** — QBox (`qbx_core`), QBCore, and ESX Legacy with automatic detection. Inventories, target, and notifications via bridges or custom bridge .
* 🎯 **Flexible Interaction** — `ox_target` / `qb-target` or built-in DrawText (`[E]` play · `[G]` pick up).
* 🎨 **UI Themes** — Official `default` look + documented `custom` overrides via `public/shared/themes.json`.
* 🛠 **Admin Tools** — `/citytouradmin` panel (list / teleport / delete), `/citytourplace`, `/citytourdelete`, and `/citytourbalance` layout calibrator.
* 🌐 **Locales** — English and Portuguese out of the box (`en`, `pt`).
* 📐 **Buyer Economy File** — Prices, rent, and repurchase live in `public/shared/property_economy.lua` (numbers only).

</details>

### Installation Guide & Others

{% content-ref url="features-preview.md" %}
[features-preview.md](features-preview.md)
{% endcontent-ref %}

{% content-ref url="installation-guide.md" %}
[installation-guide.md](installation-guide.md)
{% endcontent-ref %}

{% content-ref url="configurations.md" %}
[configurations.md](configurations.md)
{% endcontent-ref %}

{% content-ref url="commands.md" %}
[commands.md](commands.md)
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

***
