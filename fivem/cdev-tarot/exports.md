# Exports

#### **`createDeck`(Client-Side)**

**Description:** Creates a new Deck of the specified type.

**Parameters:**

* `type` (`string`): The type of deck to create. Accepted values:
  * `"major"`
  * `"minor"`

**Usage:**

```lua
exports['cdev_tarot']:createDeck("minor")
exports['cdev_tarot']:createDeck("major")
```
