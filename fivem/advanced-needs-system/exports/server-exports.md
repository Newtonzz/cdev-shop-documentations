# Server Exports

### `getStats(number src)`

Returns a table with the following values:

```lua
{
  hunger: number,
  thirst: number,
  energy: number,
  stress: number,
  pee: number,
  poop: number,
  hygiene: number,
  social: number
}
```

**Parameters:**

* `src`: The source number.

#### `updateStats(number src, table<number> stats)`

Updates the player's stats.

**Parameters:**

* `src`: The source number.
*   `stats`: A table containing the following keys and their respective values:

    ```lua
    {
      hunger: number,
      thirst: number,
      energy: number,
      stress: number,
      pee: number,
      poop: number,
      hygiene: number,
      social: number
    }
    ```

**Returns:**

* `boolean`: Whether the update was successful.
