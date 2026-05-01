---
icon: messages-question
---

# FAQs

<details>

<summary><strong>🪓 The target or hatchet item does nothing when I use it</strong></summary>

* Confirm item **names** match **`AxeThrowingConfig.Item.Target.name`** and **`Item.Hatchet.name`** in `public/shared/config.lua` (defaults: `axe_throwing_target`, `axe_throwing_hatchet`).
* Ensure **`AxeThrowingConfig.Item.enabled = true`**.
* **ox\_inventory:** both items need **`server.export`** → `cdev_axethrowing.useAxeThrowingTarget` / `cdev_axethrowing.useAxeThrowingHatchet`.
* **QBCore / ESX / QS:** items must be **`useable`**; the resource registers handlers — **no** export line in the item for QB/ESX.
* Start order: **framework** and **inventory** must start **before** `cdev_axethrowing`.
* Enable **`AxeThrowingConfig.Debug = true`** and watch **F8** / server console for errors.

</details>

<details>

<summary><strong>🗄️ Database tables are not created</strong></summary>

* Ensure **oxmysql** is running and your MySQL connection in **server.cfg** is valid.
*   The resource creates (among others):

    * **`cdev_axethrowing_players`**
    * **`cdev_axethrowing_tournaments`**

    on first successful connection.

</details>

<details>

<summary><strong>👀 I placed a board but others don’t see interaction / target</strong></summary>

**Target mode:**

* **ox\_target** or **qb-target** must be installed and started **before** `cdev_axethrowing`.
* Check **`InteractionOptions.Target.TargetSyncRadius`** and **`TargetRescanMs`** — far players or slow rescans can delay options appearing.

**DrawText mode:**

* Players must be within **`InteractionOptions.DrawText.maxDistance`** (default \~2.8 m).

**General:**

* Same **routing bucket / dimension** as the board.
* New joiners may need a few seconds for sync — see **`TargetSyncPullDebounceMs`**.

</details>

<details>

<summary><strong>🧩 Board / axe models do not load</strong></summary>

* Ensure **`stream/props/`** contains the **`.ytyp`** and **`.ydr`** referenced in **`AxeThrowingConfig.Props`** (default board: **`cdev_axetarget`**).
* Keep **`fxmanifest.lua`** `data_file` and `files` entries aligned with your stream assets.
* Do **not** rename stream files without updating config and the **ytyp** registration.

</details>

<details>

<summary><strong>📤 I cannot pick up the board</strong></summary>

* Only allowed flows (host / rules) can return the item — use the **pickup** interaction shown in DrawText or target options when the UI allows it.
* Active tournaments may restrict pickup — finish or leave the match per UI rules.

</details>

<details>

<summary><strong>🔐 Admin commands do nothing</strong></summary>

Add ACE to **`server.cfg`** or **`permissions.cfg`**:

```cfg
add_ace group.admin cdev_axethrowing.admin allow
```

Restart the server. Verify your identifier/group matches the ACE line.

</details>

<details>

<summary><strong>🎯 Throws never score / HUD stuck</strong></summary>

* If **`Item.Hatchet.requiredToThrow`** is **true**, ensure the player has the **hatchet** item when throwing.
* Check **`ThrowAnimation`** dict/name match your **`stream/anim/*.ycd`** if you use a custom clip.
* Enable **Debug** and check for client errors during throw phases.

</details>

<details>

<summary><strong>🎨 UI colors don’t change after editing themes.json</strong></summary>

* Restart **`cdev_axethrowing`** after editing **`public/shared/themes.json`**.
* **`Theme`** in config must be **`default`**, **`cdev`**, or **`custom`**.
* For **`custom`**, only values that look like **CSS colors** (hex, `rgba`, gradients, `px` sizes) override **`default`** — plain documentation text keeps **`default`** colors.

</details>
