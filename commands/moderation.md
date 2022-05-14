# Moderation

## mod ban

Ban a user from the server.

* **user**:USER (optional) — A user.
* **reason**:STRING — A reason why this user is banned (displayed in Audit Log)
* **delete\_history\_message**:BOOLEAN — Delete history message after ban (up to 7 days)
* **warning\_via\_dm**:BOOLEAN — DM the user about the reason of getting banned.

## mod dm

DM a user with a bot.

* **user**:USER (optional) — A user.
* **message**:STRING (optional) — A message that will be delivered to the user.

## mod kick

Kick a user from the server.

* **user**:USER (optional) — A user.
* **reason**:STRING — A reason why this user is kicked (displayed in Audit Log)
* **warning\_via\_dm**:BOOLEAN — DM the user about the reason of getting kicked.

## mod mute

Mute a user (disabling permission to talk/speak), with timeout feature.

* **user**:USER (optional) — A user to be muted.
* **time**:STRING (optional) — Mute expiration. (e.g: 1 hour 21 minutes)
* **reason**:STRING — A reason why this user is muted (displayed in Audit Log)
* **warning\_via\_dm**:BOOLEAN — DM the user about the reason of getting muted.

## mod nickname

Change user's server nickname.

* **nickname**:STRING (optional) — A value to set user's nickname to. (max: 32 characters, use "none" to reset the nickname)
* **user**:USER — A user, or self.

## mod poll

Create a poll.

* **question**:STRING (optional) — The question. (e.g. Favourite color?)
* **options**:STRING (optional) — The options. Separated with comma and space, max 10. (e.g. red, green, blue)

## mod prune

Mass-delete messages in a specified/current channel (up to 14 days)

* **total\_messages**:INTEGER (optional) — Total messages you want to purge.
* **channel**:CHANNEL — A text channel you want to purge. (Optional)
* **user**:USER — Delete messages for a user in the channel.
* **match**:STRING — Delete messages that is containing specified text. (Can be separated with commas/whitespace)
* **not\_match**:STRING — Delete messages that is not containing specified text. (Can be separated with commas/whitespace)
* **startswith**:STRING — Delete messages that starts with specified text. Any symbol/whitespace will be sliced/removed.
* **endswith**:STRING — Delete messages that ends with specified text. Any symbol/whitespace will be sliced/removed.
* **links**:BOOLEAN — Delete messages that contains URL.
* **invites**:BOOLEAN — Delete messages that contains Discord invite URL.
* **attachments**:BOOLEAN — Delete messages that contains images/videos/audios/files.
* **mentions**:BOOLEAN — Delete messages that contains user/bot mentions.
* **embeds**:BOOLEAN — Delete messages that contains embeds.
* **humans**:BOOLEAN — Delete messages that contains humans chat.
* **bots**:BOOLEAN — Delete messages that contains bots chat.

## mod say

Say something in a plain text with bot. (Moderator only, markdown supported)

* **channel**:CHANNEL — A text channel for the message.

## mod slowmode

Apply a built-in slowmode to the specified channel.

* **channel**:CHANNEL (optional) — A text channel.
* **time-query**:STRING (optional) — A duration of the slowmode. Type "off" to disable the slowmode. (e.g. 2 hours 24 minutes)
* **reason**:STRING — A reason why the channel is getting slowmode.

## mod role add

Give mentioned user a specified role.

* **user**:USER (optional) — User mention.
* **role**:ROLE (optional) — A role to assigned.

## mod role remove

Remove a specified role from mentioned user.

* **user**:USER (optional) — User mention.
* **role**:ROLE (optional) — A role to remove.

## mod warn add

Add a warning to the user.

* **user**:USER (optional) — A user to be given a warning.
* **reason**:STRING — A reason why this user is given a warning.

## mod warn list

Display an infraction list of specific user.

* **user**:USER (optional) — A user.

## mod warn remove

Remove warning from the user.

* **user**:USER (optional) — A user to remove a warning.
* **warn\_id**:NUMBER (optional) — A case ID from the user.
* **reason**:STRING — A reason why this user warning is removed.
