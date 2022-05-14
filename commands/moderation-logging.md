# Moderation Logging

## modlog event

Choose which events will be logged, or not.

* **type**:STRING (optional) — A type of session.

## modlog ignore\_channel

Choose which events will not be logged for a specific channel.

* **type**:STRING (optional) — A type of session.
* **channel**:CHANNEL — A guild channel. An alternative if specific channel doesn't appear in the select menu.

## modlog ignore\_role

Choose which events will not be logged for a specific user role.

* **type**:STRING (optional) — A type of session.
* **role**:ROLE — A role. An alternative if specific role doesn't appear in the select menu.

## modlog set

Set a text channel to store any moderation activities.

* **channel**:CHANNEL (optional) — A private channel to store any moderation activities.
