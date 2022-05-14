# Twitch Notification

## twitch list

Display Twitch notification subscription list.

## twitch subscribe

Subscribe Twitch streamer and notify the audience when the streamer is LIVE.

* **link**:STRING (optional) — Twitch Streamer profile. (twitch.tv/someStreamer)
* **channel**:CHANNEL (optional) — A Discord channel where you want the notification to be sent to.
* **user**:USER — A user who involved / own the stream. (For hoisting role system purposes)
* **role**:ROLE — A role that will be given when the streamer/\[user] is LIVE. (For hoisting role system purposes)
* **notify\_role**:ROLE — A role that will be mentioned when the streamer is online.
* **keyphrase**:STRING — Only notify if the streamer title includes specific keyphrase. (separated by whitespace)

## twitch unsubscribe

Unsubscribe Twitch streamer from notification.

* **username**:STRING (optional) — Twitch Streamer username.
