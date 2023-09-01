# Moderation

## mod ban

Ban a user from the server.

* **user**:USER — A user.
* **reason**:STRING (optional) — A reason why this user is banned (displayed in Audit Log)
* **delete\_history\_message**:INTEGER (optional) — Delete history messages after ban, up to 7 days. Type "0" for none.
* **warning\_via\_dm**:BOOLEAN (optional) — DM the user about the reason of getting banned.

## mod hackban

Ban a user from outside the server

* **user\_id:**USERID- A discord user ID
* **reason**:STRING (optional) — A reason why this user is banned (displayed in Audit Log)
* **duration**:STRING — Mute expiration. (e.g: 1 hour 21 minutes)

## mod dm

DM a user with a bot.

* **user**:USER — A user.

## mod lock

Lock a specific text channel.

* **channel**:CHANNEL (optional) — A text channel you want to lock.&#x20;
* **duration**:STRING — Lock expiration. (e.g: 1 hour 21 minutes)
* **message:**STRING - A message/announcement for the channel lockdown.

## mod unlock

Unlock a specific text channel.

## mod mass-unban

Unban members in a mass.

## mod disable\_entrance

Prevent any users joining the server by pausing the server invites.&#x20;

## mod kick

Kick a user from the server.

* **user**:USER — A user.
* **reason**:STRING (optional) — A reason why this user is kicked (displayed in Audit Log)
* **warning\_via\_dm**:BOOLEAN (optional) — DM the user about the reason of getting kicked.

## mod mute

Mute a user (disabling permission to talk/speak), with timeout feature.

* **user**:USER — A user to be muted.
* **time**:STRING — Mute expiration. (e.g: 1 hour 21 minutes)
* **reason**:STRING (optional) — A reason why this user is muted (displayed in Audit Log)
* **warning\_via\_dm**:BOOLEAN (optional) — DM the user about the reason of getting muted.

## mod unmute

Unmute a timed-out user

## mod nickname

Change user's server nickname.

* **nickname**:STRING — A value to set user's nickname to. (max: 32 characters, use "none" to reset the nickname)
* **user**:USER (optional) — A user, or self.

## mod poll

Create a poll.

* **question**:STRING — The question. (e.g. Favourite color?)
* **options**:STRING — The options. Separated with comma and space, max 10. (e.g. red, green, blue)

## mod prune

Mass-delete messages in a specified/current channel (up to 14 days)

* **total\_messages**:INTEGER — Total messages you want to purge.
* **channel**:CHANNEL (optional) — A text channel you want to purge. (Optional)
* **user**:USER (optional) — Delete messages for a user in the channel.
* **match**:STRING (optional) — Delete messages that is containing specified text. (Can be separated with commas/whitespace)
* **not\_match**:STRING (optional) — Delete messages that is not containing specified text. (Can be separated with commas/whitespace)
* **startswith**:STRING (optional) — Delete messages that starts with specified text. Any symbol/whitespace will be sliced/removed.
* **endswith**:STRING (optional) — Delete messages that ends with specified text. Any symbol/whitespace will be sliced/removed.
* **links**:BOOLEAN (optional) — Delete messages that contains URL.
* **invites**:BOOLEAN (optional) — Delete messages that contains Discord invite URL.
* **attachments**:BOOLEAN (optional) — Delete messages that contains images/videos/audios/files.
* **mentions**:BOOLEAN (optional) — Delete messages that contains user/bot mentions.
* **embeds**:BOOLEAN (optional) — Delete messages that contains embeds.
* **humans**:BOOLEAN (optional) — Delete messages that contains humans chat.
* **bots**:BOOLEAN (optional) — Delete messages that contains bots chat.

## mod say

Say something in a plain text with bot. (Moderator only, markdown supported)

* **channel**:CHANNEL (optional) — A text channel for the message.

## mod slowmode

Apply a built-in slowmode to the specified channel.

* **channel**:CHANNEL — A text channel.
* **time-query**:STRING — A duration of the slowmode. Type "off" to disable the slowmode. (e.g. 2 hours 24 minutes)
* **reason**:STRING (optional) — A reason why the channel is getting slowmode.

## mod transcript

Create a transcript in a specified channel up to 500 messages.

* **total\_message**:INTEGER — Fetch total message from the newest.
* **channel**:CHANNEL (optional) — A channel for the transcript to be generated.

## mod role create

Create a new role.

* **name**:STRING — The name of the role.
* **color**:STRING (optional) — A specified hex color of the role. (e.g. #121112, 0x7289DA)
* **hoist**:BOOLEAN (optional) — Choosewhether the role should be displayed separately in the sidebar/member list.
* **mentionable**:BOOLEAN (optional) — Choose whether the role should be mentionable.
* **icon**:ATTACHMENT (optional) — A role icon (must be at least Boost Level 2) w/ format (JP\[E]G, PNG, GIF), compression available.

## mod role delete

Delete specified role.

* **role**:ROLE — Any role.

## mod role give

Give mentioned user a specified role.

* **user**:USER — User mention.
* **role**:ROLE — A role to assigned.

## mod role take

Take specified role from mentioned user.

* **user**:USER — User mention.
* **role**:ROLE — A role to remove.

## mod warn add

Add a warning to the user.

* **user**:USER — A user to be given a warning.
* **reason**:STRING (optional) — A reason why this user is given a warning.
* **warning\_via\_dm**:BOOLEAN (optional) — DM the user about the reason of getting warned.

## mod warn list

Display an infraction list of specific user.

* **user**:USER — A user.

## mod warn remove

Remove warning from the user.

* **user**:USER — A user to remove a warning.
* **warn\_id**:NUMBER — A case ID from the user.
* **reason**:STRING (optional) — A reason why this user warning is removed.
