---
icon: messages-question
---

# FAQs

<details>

<summary><strong>🐴 I don’t see the shop prompt or I can’t open the catalog</strong></summary>

**DrawText mode (`Bridge.Interaction = "drawtext"` or `"auto"` without ox\_target):**

* Stand within **`InteractionDistance`** (default **2.0 m**) of the shop desk coords.
* Default key is **R** (RedM) — see `InteractionOptions.DrawText` in `public/shared/config.lua`.
* The branch owner may have turned **3D interaction labels** off in **Business settings**; staff still use management points separately.

**Target mode (`ox_target` running + `Interaction`** **`target` or `auto`):**

* Ensure **`ox_target`** is **started** and loads **before or with** `cdev_horseshop`.
* If you use the **clerk NPC**, targets may be on the NPC — stand next to them.

**General:**

* Restart the resource after config changes.
* Enable **`Debug = true`** and watch **F8** for client errors.

</details>

<details>

<summary><strong>🧾 Management says I have no permission</strong></summary>

Management is **not** the same as the creator ACE.

* Your character must be in **`cdev_horseshop_employees`** for that **branch** (hired in-game by a boss), with a role that has **`canOpenManagement`** (see `Roles` in `config.lua`).
* The server links you by **`Framework.GetCitizenId`** (VORP: character id), not by server id.

If you are the **shop owner**, ensure the creator flow stored your character as owner / employee for that branch.

</details>

<details>

<summary><strong>🛠️ `/horseshopcreate` or `/horseshopmanager` does nothing (or no UI)</strong></summary>

Both tools require the **ACE** from `Creator.AcePermission` (default **`cdev_horseshop.creator`**).

Add to **`server.cfg`** / **`permissions.cfg`**, then **restart the server**:

```cfg
add_ace group.admin cdev_horseshop.creator allow
```

Command names can be renamed in `HorseShopConfig.Creator` (`Command`, `AdminManagerCommand`) — use the names you configured.

</details>

<details>

<summary><strong>🎠 I bought a horse but it never appears in stables</strong></summary>

* **`vorp_core`** must be running; for the default DB path, **`vorp_stables`** / compatible **`stables`** table and workflow should match your server.
* Check **`Bridge.HorseDelivery`** and optional **`HorseDeliveryExport`** in Configurations.
* If you use a **custom** stable script, set up **`HorseDeliveryExport`** so your export returns **`true`** on success, or extend `public/bridge/horse_delivery/server.lua`.
* Watch **server console** for MySQL errors when purchasing.

</details>

<details>

<summary><strong>🗄️ Database tables are missing or MySQL errors on start</strong></summary>

* Ensure **`oxmysql`** is installed and **`@oxmysql/lib/MySQL.lua`** runs (see `fxmanifest.lua`).
* Verify the MySQL connection string in **`server.cfg`** (`mysql_connection_string` / your host’s equivalent).

On **first start**, the resource creates (if not present), among others:

* `cdev_horseshop_shops`
* `cdev_horseshop_employees`
* `cdev_horseshop_vaults`
* `cdev_horseshop_pending_deliveries`
* `cdev_horseshop_sales`
* `cdev_horseshop_stock`
* `cdev_horseshop_catalog`

**Note:** There are **no automatic ALTER migrations** for old schemas — a very outdated DB may need manual SQL or a rebuild (see comments in `server/classes/db.lua`).

</details>

<details>

<summary><strong>📋 The catalog is empty in the NUI</strong></summary>

* Horses for sale come from **`cdev_horseshop_catalog`** in MySQL, not from `config.lua`.
* On a fresh install, the resource **seeds** default rows when the catalog table is empty.
* If you wiped the table, re-run seed logic or insert rows manually (model names must match RedM horse models).

</details>

<details>

<summary><strong>📍 Map blip is wrong / still shows after a shop was deleted</strong></summary>

* Clients only get live updates inside **`SettingsSyncRadius`** (or when the server notifies nearby players). Walk near the old area or **reconnect**.
* Optional: set **`ShopsListResyncIntervalMs`** to a positive value so distant players periodically refetch shop lists (see Configurations).

</details>

<details>

<summary><strong>📦 Staff restock: crate spawned but stock didn’t increase</strong></summary>

* With **`UseCrateDelivery = true`**, stock is applied when the **right player** collects the crate at the **delivery point** (buyer or eligible staff — see in-game messages).
* Check **company vault** balance and **inventory weight** if the purchase failed earlier.
* Ensure **`vorp_inventory`** is running if you rely on item checks.

</details>

<details>

<summary><strong>🌐 Language / locale doesn’t change</strong></summary>

* Set **`Locale`** in `public/shared/config.lua` to a code that matches a file: `public/shared/locales/<Locale>.json` (e.g. `en`, `pt`).
* **Restart** the resource after edits.
* Don’t rename JSON **keys** — only translate **values**.

</details>

<details>

<summary><strong>🎯 ox_target zones overlap or duplicate after edits</strong></summary>

* **Restart `cdev_horseshop`** after changing shop coordinates or interaction settings so zones are rebuilt.
* Avoid running multiple copies of the resource or hot-reloading in ways that skip `onResourceStop` cleanup.

</details>

<details>

<summary><strong>💰 Purchase says vault doesn’t have enough (or customer can’t pay)</strong></summary>

* If **`BuyFromVault = true`**, the **company vault** pays — deposit cash/gold in management first.
* If **`BuyFromVault = false`**, the **customer** needs enough **cash or gold** on the character (VORP currency types).
* **`VaultCurrency`** affects default wallet debits when the bridge uses it without an explicit currency — see Configurations.

</details>

***
