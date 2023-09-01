# Bot (Customer)

## bot check-for-update

Update the Discord bot version

## bot embed\_color

Set a global any embeds color.

* **color**:STRING — Hex color. (e.g. #121112, 0x7289DA)

## bot invite

Retrieve the current bot's invite link.

## bot reset\_cache

Useful for database fail troubleshoot. Do it if instructed, unless you know what are you doing.

## bot status

Modify current bot status, or set nothing for empty status.

* **status**:STRING (optional) — A name of the status.
* **type**:STRING (optional) — A type of the status.
* **activity**:INTEGER (optional) — A type of the activity.
* **url**:STRING (optional) — A streaming URL. (Only works on streaming status. Also, only supports twitch.tv/youtube.com)

## bot update

Update your Discord bot profile.

* **username**:STRING (optional) — New bot username. (max: 32 characters)
* **nickname**:STRING (optional) — New bot server nickname. (max: 32 characters, use "none" to reset the nickname)
* **profile\_picture**:ATTACHMENT (optional) — New bot avatar. (supported PNG/JPEG/JPG/WEBP only)
