# Auto Moderation

## automod info

Display an information about auto moderation settings.

* **query**:STRING (optional) — A type of auto moderation.

## automod reset

Reset specific or all server configuration. (BETA)

* **query**:STRING (optional) — A type of server settings.

## automod toggle

Toggle specific settings.

* **query**:STRING (optional) — A type of server settings.

## automod alt\_prevention set

Activate the Discord account alt prevention. Calculates based on their created date.

* **age**:INTEGER (optional) — An account age to be declared as a limit to join the server. (\[Number] in day)
* **type**:STRING (optional) — The execution.

## automod anti spam

Prevent users from "spamming" in your server. (Concept: don't send X messages in Y time)

* **message\_allowed**:INTEGER (optional) — A message threshold until it hits and classified as spam.
* **interval**:INTEGER (optional) — A cooldown before the next messages are no longer classified as spam. (in seconds)
* **action**:STRING (optional) — The action after spam classification.
* **mute\_interval**:STRING — Mute timeout for "deleteMessageAndMute" action, if chosen. (e.g: 1 hour 42 minutes)
* **warning**:BOOLEAN — Give a warning/success embed after execution.
* **warning\_via\_dm**:BOOLEAN — DM the user about the reason of getting muted.
