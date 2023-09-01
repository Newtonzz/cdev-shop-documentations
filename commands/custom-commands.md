# Custom Commands

## custom\_cmd help

Display more information about custom commands.

## custom\_cmd config add

Create a new custom command (up to 25 commands)

* **command**:STRING (optional) — Name of the command. It's CASE-SENSITIVE. (e.g. !ping)
* **description**:STRING — Description of the command.
* **response\_channel**:CHANNEL — The channel that the bot will respond in.
* **cooldown**:STRING — A time of the user must wait before running the command again. (max: 1 hour, e.g. 30 seconds)
* **delete\_after**:INTEGER — Delete the command response after a number of seconds. (max: 60)
* **delete\_request**:BOOLEAN — Delete the user's command request after uses.
* **quiet**:BOOLEAN — No command response from the bot.
* **via\_dm**:BOOLEAN — The response will be sent to the user who used the command.
* **disable\_pings**:BOOLEAN — Disable ping triggers, including: @everyone, @here, @anyRole
* **reply\_to\_source**:BOOLEAN — Use reply feature.
* **embed**:BOOLEAN - Use Embedding

## custom\_cmd config edit

Update/edit the existing custom command.

* **command**:STRING (optional) — Name of the command. It's CASE-SENSITIVE. (e.g. !ping)
* **description**:STRING — Description of the command.
* **response\_channel**:CHANNEL — The channel that the bot will respond in.
* **cooldown**:STRING — A time of the user must wait before running the command again. (max: 1 hour, e.g. 30 seconds)
* **delete\_after**:INTEGER — Delete the command response after a number of seconds. (max: 60)
* **delete\_request**:BOOLEAN — Delete the user's command request after uses.
* **quiet**:BOOLEAN — No command response from the bot.
* **via\_dm**:BOOLEAN — The response will be sent to the user who used the command.
* **disable\_pings**:BOOLEAN — Disable ping triggers, including: @everyone, @here, @anyRole
* **reply\_to\_source**:BOOLEAN — Use reply feature.
* **embed**:BOOLEAN - Use Embedding

## custom\_cmd config info

Display an information about specified custom command.

* **command**:STRING (optional) — Name of the command. It's CASE-SENSITIVE.

## custom\_cmd config list

Display a list of custom command(s).

## custom\_cmd config remove

Delete a custom command.

* **command**:STRING (optional) — Name of the command. It's CASE-SENSITIVE.
