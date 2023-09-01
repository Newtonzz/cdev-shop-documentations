# Suggestions

## suggestion suggest

Create a suggestion. (Markdown supported)

## suggestion update

Update someone's suggestion. (Markdown supported)

* **link**:STRING (optional) — A suggestion embed message link.
* **type**:STRING (optional) — A type of update.

## suggestion config set-channel

Set a suggestion channel. (Leave it blank to reset)

* **channel**:CHANNEL (optional) — A channel to be used as a suggestions channel.

## suggestion config panel-channel

Set a specifix text channel for the suggestions panel.

* **channel**:CHANNEL (required) — A channel to be used as a suggestions channel.
* **embed\_description**:STRING (optional) — The description of the embed. (max. 4096 chars)
* **embed\_color**:STRING (optional) — Hex color. (e.g. #121112, 0x7289DA)
* **embed\_button\_color**:STRING (optional) — Hex color. (e.g. #121112, 0x7289DA)

<figure><img src="https://cdev.is-pretty.cool/3pNdFVo.png" alt=""><figcaption></figcaption></figure>

## suggestion config discuss

Enable discuss button below suggestions embed to create a new channel thread for discussions.&#x20;

* **query:** BOOLEAN - (required) - True/False
* **expiration:** TYPES - A duration (minutes) to to automatically archive the thread after recent activity. Default: 24 hours&#x20;

<figure><img src="https://cdev.is-pretty.cool/5f6vsvQ.png" alt=""><figcaption></figcaption></figure>
