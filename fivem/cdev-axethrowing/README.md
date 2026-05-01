# 🪓 cDev Axethrowing

<figure><img src="../../.gitbook/assets/ChatGPT Image May 1, 2026, 09_24_19 AM.png" alt=""><figcaption></figcaption></figure>

## Introduction

{% hint style="info" %}
**CDEV Axe Throwing — WATL-inspired hatchet throws with strength timing, spinning axe flight, tournaments, ELO & badges, and multi-framework support for FiveM.**

**Place a physical target on a wall, throw with an oscillating power meter, compete in hosted tournaments with configurable rules (rings, killshots, divisions), and climb the leaderboard. Supports QBox, QBCore, ESX Legacy, oxmysql, and multiple inventories / targets / notify backends.**
{% endhint %}

## Purchase the Script

{% embed url="https://fivem.cdev.shop/package/7422517" %}

## Showcase

<mark style="color:blue;">**Video soon**</mark>

## **Features**

<details>

<summary>Features List</summary>



* 🪓 **High-quality streamed props** — Custom **target board** and **throwing hatchet** models registered via `.ytyp` / `stream/props` (tunable attach offsets, stick-in-board visuals, flight spin).
* 🎯 **WATL-style scoring (hatchet ruleset)** — Five rings **1–5** from outside to center, plus **killshot (blue)** zones worth **8** when **called** before the throw — host selects rule presets when creating a tournament; solo practice uses server defaults.
* 🏁 **Physical lanes** — Players place a **target** on a wall using the **`axe_throwing_target`** item (configurable name) **or** admins use **`/axethrowing place`**. Pickup / interaction respects DrawText or eye-target modes.
* ⚡ **Strength meter & spinning flight** — Oscillating **power bar**; lock strength with **Space**, then the throw animation runs and the axe flies with configurable **arc, spin, and duration** (visual); server-side scoring validates hits.
* 🎮 **Tournament lobby & browser** — **Host** configures **prize pool**, **paid ranks**, **max players**, **division** (Rec / Amateur / Pro with rating gates), **throw mode** (e.g. arcade vs realistic), **killshot limits**, **aim sway preset**, and more. Others join from the **tournament browser**; **pre-start lobby** shows players, rules, and readiness.
* 🏆 **ELO rating & badge system** — Competitive rating based on an **ELO-style** update with configurable **K-factor** and **placement multipliers** (1st / 2nd / 3rd / others). Ratings are **clamped** between **min** and **max**. Includes:
  * 🎖 **Rank badges** tied to rating thresholds (labels & colors configured in `AxeThrowingConfig.Rating.Badges`)
  * 🎨 **Badge colors** in lobby, HUD, leaderboard, and end-of-tournament UI
  * 📊 **Rating & badge** visible in match flow and standings
  * ⚙️ **Configurable** default rating, K-factor, limits, and badge tiers
* 🔌 **Multi-framework compatibility** — Supports **QBox (qbx\_core)**, **QBCore**, and **ESX Legacy** with **automatic detection** (override in `Bridge.Framework`). Integrates with **ox\_inventory**, **qb-inventory**, and **qs-inventory**, plus **ox\_target** / **qb-target** and **ox\_lib** / framework notifications — all configurable with fallbacks.
* 🎯 **Flexible interaction modes** — Configurable interaction with each placed board:
  * **DrawText** — Floating 3D text + key (e.g. `[E] Axe Throwing`, `[G]` pickup)
  * **Target** — **ox\_target** or **qb-target** with custom **labels**, **icons**, **distances**, **sync radius**, and **rescan** intervals for performance
* 📏 **Fault line (throw line)** — Optional **on-ground fault line** during matches (valid / invalid side), colors & stand zone tunable; can follow tournament rules or always-on depending on config.
* 🎛 **Realistic throw mode (optional rules)** — When the host selects **realistic** rules, **ideal power** shifts with **distance** to the board; short throws, loose axe, and bounce tuning available in config.
* 🎨 **Profile-ready UI flow** — Lobby and tournament UIs show **player names**, **ratings**, **badges**, and **match settings** so players know divisions and stakes before start.
* 🎨 **UI themes** — Server owners choose **`default`**, **`cdev`** (dark + blue), or **`custom`** in `public/shared/themes.json` (`AxeThrowingConfig.Theme`). The **`custom`** block can list documentation strings per token until replaced with real CSS values.
* 🛠 **Admin tools** — **`/axethrowing admin`** (ACE: `cdev_axethrowing.admin`) — list placed lanes, **teleport**, **delete** single or bulk history where supported; **`/axethrowing delete`** removes the closest lane; **`/axethrowing place`** places without the item.
* 📊 **Leaderboard & history** — **`/axethrowing leaderboard`** (aliases: `ranking`, `lb`) opens the **leaderboard**; tournament results and stats persist via **oxmysql** (`cdev_axethrowing_players`, `cdev_axethrowing_tournaments`).
* 🪓 **Economy-friendly hatchet item** — Optional **`axe_throwing_hatchet`** requirement before throws (`Item.Hatchet.requiredToThrow`) for servers that want item-gated gameplay.

</details>

## Installation Guide & Others

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
