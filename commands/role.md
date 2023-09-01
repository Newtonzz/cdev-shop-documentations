# Role

## role create

Create a new role

* **color**:STRING — Hex color. (e.g. #121112, 0x7289DA)
* **hoist**:BOOLEAN (optional) — Set true or false to hoist the role
* **mentionable**:BOOLEAN (optional) — Set true or false to allow mentioning the role
* **icon**:undefined — A role icon (must be at least Boost Level 2) w/ format (JP\[E]G, PNG, GIF), compression available.

## role give

Give a role to a user

* **user**:USER — A user.
* **role**:ROLE (optional) — A role to be given
* **duration**:STRING — Role expiration. (e.g: 1 hour 21 minutes)

## role take

Take a role from a user

* **user**:USER — A user.
* **role**:ROLE (required) — A role to be given

## role delete

Delete a specified role.&#x20;

* **role**:ROLE (required) — A role to be deleted
