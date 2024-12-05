# Autoroles (Beta)

## autoroles revive toggle

Toggle an ability to save and give roles to users who previously left and have rejoined the server.

* **toggle:**&#x42;OOLEAN (required) - Allow the module to be turned on or off.

## autoroles add

Add a role that willing to give/remove upon joining the server.

* **role**:ROLE — Any role that to give/remove upon joining the server.
* **type**:STRING — A type of autorole action.
* **delay\_time**:STRING (optional) — Delay the adding/removing role action after period of time. (e.g: 10 minutes 15 seconds)
* **include\_bot**:BOOLEAN (optional) — Allow Discord bot to assign the specified role.

## autoroles edit

Edit the existing auto-assignable role configuration.

* **role**:ROLE — Any role that willing to give/remove upon joining the server.
* **type**:STRING — A type of autorole action.
* **delay\_time**:STRING (optional) — Delay the adding/removing role action after period of time. (e.g: 10 minutes 15 seconds)
* **include\_bot**:BOOLEAN (optional) — Allow Discord bot to assign the specified role.

## autoroles list

Display a list of auto-assignable roles.

## autoroles remove

Removes a role from being auto assigned.

* **role**:ROLE — Any role that to be removed from autoroles list.
