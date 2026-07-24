---
icon: messages-question
---

# FAQs

<details>

<summary>The editor does not open (/mapeditor or F7)</summary>

* Confirm `cdev_mapeditor` starts **after** `oxmysql`.
* ACE: `add_ace group.admin command.mapeditor allow` (or your license ACE). On Qbox prefer `permissions.cfg`.
* Default command is `/mapeditor`. Name comes from `MapEditorConfig.Command`.
* From another resource (client): `exports['cdev_mapeditor']:OpenEditor()`.
* From server: `exports['cdev_mapeditor']:OpenEditorFor(source)` with a valid online player.
* Set `MapEditorConfig.Debug = true`, restart, and check F8 plus the server console.

</details>

<details>

<summary>Permission denied / no access</summary>

* ACE must match `command.<Command>` unless you set a custom `MapEditorServerConfig.Permissions.ace`.
* Framework admin alone works only when `useFrameworkAdmin = true`.
* Job name alone is not enough. This resource uses ACE (and optional framework admin flags).

</details>

<details>

<summary>Database tables missing</summary>

* oxmysql must be running with valid MySQL credentials.
* Tables are created automatically on boot. There is no SQL file to import.
* After fixing the database: `ensure cdev_mapeditor` or restart the server.

</details>

<details>

<summary>Other players do not see my props</summary>

* Set the map to **Go Live** / production in the Maps panel.
* Players need to be within live sync / runtime distance of the map content.
* With the editor closed, runtime streams by `spawnRadius` / `despawnRadius`.
* Check server console for WorldSync / bundle errors with Debug on.

</details>

<details>

<summary>A GTA world prop I erased came back</summary>

* Erased props use model hide. They reapply when you enter the area again.
* Opening the editor far away, then closing, used to clear hides without restamping. Current builds reapply loaded hides on close.
* Clearing production or switching live maps changes what stays hidden.
* Some official props only fully return after a reconnect.

</details>

<details>

<summary>Loading / unloading toasts spam or never show</summary>

* Controlled by `MapEditorConfig.Runtime.showLoadToast`, `showObjectsToast`, `showUnloadToast`, `showHideApplyToast`.
* Set them to `false` for a quieter live server.
* Soft-cache revive still counts for the objects toast when that flag is on.

</details>

<details>

<summary>Array Enter or click feels wrong</summary>

* Enter applies while Array is active (including inside Count / Spacing / Heading).
* Clicking the world while a field is focused only blurs the input. It does not pick a prop.
* You must click a **placed** map prop first so selection is not empty.

</details>

<details>

<summary>Catalog images blank</summary>

* Check `Catalog.imagePath`, `fallbackImagePath`, and `defaultImage`.
* Custom props can set their own `image` URL or local resource path.
* Pleb Masters fallback needs network access from the client CEF.

</details>

<details>

<summary>PropShot button missing</summary>

* Start `cdev_propshot` and restart or reopen the map editor.
* See cdev-propshot.md for capture permissions and screenshot resource requirements.

</details>

<details>

<summary>Exports from another resource fail</summary>

* Resource name: `cdev_mapeditor`
* Start order: ensure map editor before scripts that call it.
* Server exports need a valid `source` where required.
* See the Exports pages for client vs server examples.

</details>

***

