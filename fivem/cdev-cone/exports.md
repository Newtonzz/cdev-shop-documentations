# Exports

## Client-Side Exports

#### **`createTable` (Client-Side)**

**Description:**\
Makes player go to Table Creation Mode!

**Usage:**

```lua
exports['cdev_cOne']:createTable()
```

***

#### **`isPlayerInMatch` (Client-Side)**

**Description:**\
Checks whether the player is currently participating in an active match.

**Usage:**

```lua
local inMatch = exports['cdev_cOne']:isPlayerInMatch()
if inMatch then
    print("You are in a match!")
else
    print("You are not in a match.")
end
```

***

#### **`isPlayerInTable` (Client-Side)**

**Description:**\
Determines if the player is seated at a game table.

**Usage:**

```lua
local inTable = exports['cdev_cOne']:isPlayerInTable()
if inTable then
    print("You are at a table.")
else
    print("You are not at any table.")
end
```

***

#### **`getPlayerTableId` (Client-Side)**

**Description:**\
Retrieves the ID of the table the player is currently seated at. Returns `nil` if the player is not at any table.

**Usage:**

```lua
local tableId = exports['cdev_cOne']:getPlayerTableId()
if tableId then
    print("You are at table ID: " .. tableId)
else
    print("You are not seated at any table.")
end
```

***

## Server-Side Exports

#### &#x20;**`getTableFromSrc` (Server-Side)**

**Description:**\
Fetches the table object associated with a specific player source.

**Usage:**

```lua
local src = source -- Example: Obtaining the player source from an event
local table = exports['cdev_cOne']:getTableFromSrc(src)
if table then
    print("Player is at table ID: " .. table.id)
else
    print("Player is not at any table.")
end
```

***

#### **`getOwnerSrcFromTableId` (Server-Side)**

**Description:**\
Retrieves the owner’s source of a table using its unique ID.

**Usage:**

```lua
local tableId = 1 -- Example table ID
local ownerSrc = exports['cdev_cOne']:getOwnerSrcFromTableId(tableId)
if ownerSrc then
    print("Owner Source: " .. ownerSrc)
else
    print("No owner found for table ID: " .. tableId)
end
```

***

#### **`isPlayerInTable` (Server-Side)**

**Description:**\
Determines whether a player, identified by their source, is currently seated at any table.

**Usage:**

```lua
local src = source -- Example: Obtaining the player source from an event
local inTable = exports['cdev_cOne']:isPlayerInTable(src)
if inTable then
    print("Player is seated at a table.")
else
    print("Player is not seated at any table.")
end
```
