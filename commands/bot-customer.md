# Bot (Customer)

## bot reset\_cache

Useful for database fail troubleshoot. Do it if instructed, unless you know what are you doing.

## bot status

Modify current bot status, or set nothing for empty status.

* **status**:STRING — A name of the status.
* **type**:STRING — A type of the status.
* **activity**:INTEGER — A type of the activity.
* **url**:STRING — A streaming URL. (Only works on streaming status. Also, only supports twitch.tv/youtube.com)

## bot update

Update your Discord bot profile.

* **username**:STRING — New bot username. (max: 32 characters)
* **nickname**:STRING — New bot server nickname. (max: 32 characters, use "none" to reset the nickname)
* **profile\_picture**:undefined — New bot avatar. (supported PNG/JPEG/JPG/WEBP only
