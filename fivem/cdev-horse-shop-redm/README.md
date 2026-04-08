# 🐴 cDev Horse Shop (RedM)

<figure><img src="../../.gitbook/assets/RedM cowboy and horse shop scene.png" alt=""><figcaption></figcaption></figure>

## Introduction

{% hint style="info" %}
**Cdev Hrose Shop**\
\
**multi-framework support for RedM**: player horse shops with **catalog**, **company vault** (cash + gold), **employees**, **stock**, **showroom floor horses**, **supplier restock** (optional physical crates), and **management NUI**. Data is stored in **MySQL** via **oxmysql, auto configs , VORP , OX Target**.
{% endhint %}

## Purchase the Script

## Showcase

**Video Soon**

## **Features**

<details>

<summary>Features List</summary>

* 🐴 Full horse commerce for RedM — Shop desk, company vault, stock, showroom floor horses, staff roles, and admin workflows in one resource built for VORP.
* 🏪 Shop & economy\
  Multi-branch shops from the database: catalog and prices in MySQL, configurable default shops, per-shop vault (cash / gold depending on bridge), optional “buy from vault” for customer purchases, and supplier restock with optional physical crate delivery to the shop’s delivery point.
* 👔 Management NUI\
  Bosses and permitted staff open a management interface for the branch: overview, employees (hire / fire / promote against configurable roles & permission flags), vault deposit/withdraw, stock and sale prices, pending deliveries, sales history, and per-shop business settings (e.g. 3D labels and map blip toggles).
* 🌍 World integration\
  Shop clerk NPCs (optional) at main coordinates with outfit/heading support; showroom horses spawned from DB placements inside a configurable radius; stock display placement flow for floor horses; drawtext / NUI proximity hints or ox\_target for desk, management, vault, and delivery — with configurable labels, icons, distances, and interaction mode (`drawtext`, `target`, or `auto`).
* 📡 Sync & performance\
  Settings sync radius so clients only pull shop settings and updates when relevant; staggered polling (near / mid / far) to reduce idle CPU; optional periodic shop list resync for map blips when branches change off-screen; staff branch cache for who sees staff-only prompts.
* 🎨 Themes & locales\
  JSON themes for the NUI and locale files so server owners can ship their own language and branding without editing core logic.
* 🔌 VORP-first, bridge-friendly\
  Designed around vorp\_core + oxmysql; bridges for inventory and notifications (with auto / explicit resource names); horse delivery hooks toward vorp\_stables or vorp\_core when stables aren’t used; optional ox\_target as a drop-in interaction layer.
* 🛠 Creator & admin\
  Creator command to place shops in the world; “my shops” style command for owners/employees; admin manager command (ACE-gated) to list shops, revenue, and delete branches with DB cleanup — aligned with how you document permissions on your other products.
* ⚙️ Config surface\
  Single shared config for bridges, interaction options, showroom, clerk NPC, sync radii, drawtext vs target tuning, crate delivery, vault currency defaults, role matrix, and creator camera/placement keys — similar spirit to your “Fully configurable…” blocks on Chess.

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

{% content-ref url="integrations.md" %}
[integrations.md](integrations.md)
{% endcontent-ref %}

{% content-ref url="faqs.md" %}
[faqs.md](faqs.md)
{% endcontent-ref %}
