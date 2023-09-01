# Counter Feature

## counter channel

Select a type of counter for (voice/text) channels.

**type**:STRING (required) defined below

* **Total Channels (All in 1) -** counts all the text and voice channels
* **Total Text Channels -** counts all the text channels
* **Total Voice Channels -** counts all the voice channels
* **Total Category Channels -** counts all the category channels
* **channel**:CHANNEL (optional) — A voice channel
* **counter\_name**:NAME (optional) - Counter prefix naming customization, followed by {count} string, example: `Total Channels: {count}`

## counter role member

Set a total member roles count system.

* **role**:ROLE (required) — The role you want to count
* **channel**:CHANNEL (optional) — A voice channel
* **counter\_name**:NAME (optional) - Counter prefix naming customization, followed by {count} string, example: `Total Members: {count}`&#x20;

## counter role total

Set a total server roles count system.

* **channel**:CHANNEL (optional) — A voice channel
* **counter\_name**:NAME (optional) - Counter prefix naming customization, followed by {count} string, example: `Total Server Roles: {count}`&#x20;

## counter user

**type**:STRING (required) defined below

* **Total Members (All-in-1) -** count all members and bots
* **Total Human** - only count actual members, non bots
* **Total Bots -** only count bots, not actual members
* **Total Offline Users -** only count the offline users (members)
* **Total Online Users -** only count the online users (members)

<figure><img src="https://cdev.is-pretty.cool/9ew6XUo.png" alt=""><figcaption><p>Total Members: {count}</p></figcaption></figure>
