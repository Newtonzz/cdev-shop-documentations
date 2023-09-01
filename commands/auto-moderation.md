# Auto Moderation

## automod phishing enable

Enable auto mod phishing feature.

## automod phishing disable

Disable auto mod phishing feature.

## automod alt\_prevention enable

Activate the Discord account alt prevention. Calculates based on their created date.

* **age**:INTEGER (optional) — An account age to be declared as a limit to join the server. (\[Number] in day)
* **type**:STRING (optional) — The execution.
* **type**:STRING (optional) - Logging the execution
* **channel**:CHANNEL — A guild channel. An alternative if specific channel doesn't appear in the select menu.

## automod alt\_prevention disable

Disable the Discord account alt prevention feature.

## automod spam enable

Prevent users from "spamming" in your server. (Concept: don't send X messages in Y time)

* **message\_allowed**:INTEGER (optional) — A message threshold until it hits and classified as spam.
* **interval**:INTEGER (optional) — A cooldown before the next messages are no longer classified as spam. (in seconds)
* **action**:STRING (optional) — The action after spam classification.
* **mute\_interval**:STRING — Mute timeout for "deleteMessageAndMute" action, if chosen. (e.g: 1 hour 42 minutes)
* **warning**:BOOLEAN — Give a warning/success embed after execution.
* **warning\_via\_dm**:BOOLEAN — DM the user about the reason of getting muted.

## automod spam disable

Disable the auto mod spam feature.
