# Embed

## embed build

Create a new embed.

* **channel**:CHANNEL — A specific text channel to send the embed.
* **description**:STRING — The description of the embed. (max. 4096 chars)
* **timestamp**:BOOLEAN — Include current time footer.
* **color**:STRING — Hex color. (e.g. #121112, 0x7289DA)
* **use\_message\_content**:BOOLEAN — Provide raw message.
* **use\_field**:BOOLEAN — Use embed field. (Only single field, due to Discord Limitations)
* **title\_text**:STRING — The title of the embed. (max. 256 chars)
* **title\_url**:STRING — Put a URL inside the "title".
* **footer\_text**:STRING — A footer text. (max. 2048 chars)
* **footer\_icon**:undefined — A footer icon.
* **footer\_icon\_url**:STRING — A footer icon URL. "footer\_icon" will be used if it was included.
* **author\_text**:STRING — An author text. (max. 256 chars)
* **author\_icon**:undefined — An author icon.
* **author\_icon\_url**:STRING — An author icon URL. "author\_icon" will be used if it was included.
* **thumbnail\_image**:undefined — A thumbnail of the embed.
* **thumbnail\_image\_url**:STRING — A thumbnail URL of the embed. "thumbnail\_image" will be used if it was included.
* **image**:undefined — An image of the embed.
* **image\_url**:STRING — An image URL of the embed. "image" will be used if it was included.

## embed edit

Modify existing embed. This will and can overwrite your old/monitored-by-CDev embed. Use it wisely.

* **discord\_embed\_url**:STRING (optional) — A message URL.
* **keep\_references**:BOOLEAN — Keep the old embed references, and modify the chosen only.
* **channel**:CHANNEL — A specific text channel to send the embed.
* **description**:STRING — The description of the embed. (max. 4096 chars)
* **timestamp**:BOOLEAN — Include current time footer.
* **color**:STRING — Hex color. (e.g. #121112, 0x7289DA)
* **use\_message\_content**:BOOLEAN — Provide raw message.
* **use\_field**:BOOLEAN — Use embed field. (Only single field, due to Discord Limitations)
* **title\_text**:STRING — The title of the embed. (max. 256 chars)
* **title\_url**:STRING — Put a URL inside the "title".
* **footer\_text**:STRING — A footer text. (max. 2048 chars)
* **footer\_icon**:undefined — A footer icon.
* **footer\_icon\_url**:STRING — A footer icon URL. "footer\_icon" will be used if it was included.
* **author\_text**:STRING — An author text. (max. 256 chars)
* **author\_icon**:undefined — An author icon.
* **author\_icon\_url**:STRING — An author icon URL. "author\_icon" will be used if it was included.
* **thumbnail\_image**:undefined — A thumbnail of the embed.
* **thumbnail\_image\_url**:STRING — A thumbnail URL of the embed. "thumbnail\_image" will be used if it was included.
* **image**:undefined — An image of the embed.
* **image\_url**:STRING — An image URL of the embed. "image" will be used if it was included.
