# Ticket (BETA)

## ticket help

Display a guide on how to setup a tickets.

## ticket action assign

Assign and claim the current ticket's channel to someone else.

* **user**:USER (optional) — A user to be assigned.

## ticket action claim

Claim the current ticket's channel.

## ticket action close

Close (delete/archive) the current ticket's channel.

* **reason**:STRING — A reason why the channel is deleted.
* **type**:STRING — Defines ticket channels behaviour after closing. This will override the 'archiveScheme' option.

## ticket action delete

Delete the current ticket's channel.

* **reason**:STRING — A reason why the channel is deleted.

## ticket action rename

Rename the current ticket's channel name or topic.

* **name**:STRING — A new name to be renamed.
* **topic**:STRING — A new topic name to be renamed.

## ticket action reopen

Reopen/unarchive the current ticket's channel.

* **reason**:STRING — A reason why the channel is reopened.

## ticket action role

Modify some role in the current ticket channel.

* **type**:STRING (optional) — A type.
* **query**:ROLE (optional) — A role.

## ticket action transcript

Creates a bundled transcript with .txt in a specified channel up to 500 messages.

* **channel**:CHANNEL (optional) — A channel for the transcript to be generated. Regardless if it's a ticket or not.
* **total\_message**:INTEGER (optional) — Fetch total message from the newest.
* **via**:STRING (optional) — Defines where those transcript should be delivered.

## ticket action unclaim

Unclaim the current ticket's channel.

## ticket action user

Modify some user in the current ticket channel.

* **type**:STRING (optional) — A type.
* **query**:USER (optional) — A user.

## ticket category add

Add a ticket category.

* **name**:STRING (optional) — The name of the ticket's category.
* **description**:STRING — A description about the ticket's category.
* **emoji**:STRING — An emoji to be put beside the label.
* **allowed\_role**:ROLE — A role that is required to open a specific category.
* **allowed\_roles\_id**:STRING — Same concept with "allowed\_role" parameter, but accepts multiple role IDs. (separated by whitespace)

## ticket category remove

Remove an existing ticket's category.

## ticket channel logging

Set a secure channel to store user's ticket logs.

* **channel**:CHANNEL (optional) — A text channel.

## ticket channel reset

Reset.

* **type**:STRING (optional) — A type of ticket's channel.

## ticket channel tickets

Set a specific channel category for tickets.

* **channel**:CHANNEL (optional) — A text channel.

## ticket scheme archive

Defines ticket channels behaviour after closing.

* **type**:STRING (optional) — A type.

## ticket config auto\_transcript

Defines auto-transcript after ticket's getting deleted/closed.

* **query**:BOOLEAN (optional) — A query of boolean. True means yes, False means no.

## ticket config close\_react

Defines closing ticket with "X" reaction.

* **query**:BOOLEAN (optional) — A query of boolean. True means yes, False means no.
* **limit\_to\_privileged\_user**:BOOLEAN — Limit the close reaction for staff/highest-as-possible permissions only.

## ticket config customer\_support

Modify customer support to have a responsibility to handle a user's ticket.

* **type**:STRING (optional) — A type.
* **query**:MENTIONABLE (optional) — A user/role.

## ticket config limit

Control how much tickets can be opened by a user. Default is 1 (one)

* **limit**:INTEGER (optional) — A number of tickets limit.

## ticket config naming\_scheme

Defines how the ticket channels should be named.

* **type**:STRING (optional) — A type.

## ticket config publish

Create/publish a new ticket panel to specific channel.

* **channel**:CHANNEL (optional) — A text channel for a ticket panel.
* **placeholder**:STRING — A placeholder text for a ticket panel menu.

## ticket config update

Update the existing ticket panel select menu.
