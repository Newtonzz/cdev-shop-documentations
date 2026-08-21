---
icon: database
---

# Server

#### `useLudusBoard` (ox\_inventory)

Primary entry for **ox\_inventory** usable items.

**Item setup:**

```lua
['ludus_board'] = {
    label = 'Ludus Board',
    weight = 500,
    stack = true,
    close = true,
    consume = 0,
    description = 'Use to place a Ludus table.',
    server = {
        export = 'cdev_ludus.useLudusBoard'
    }
},
```

```lua
exports('useLudusBoard', function(event, item, inventory, slot, data)
    -- ox_inventory usable-item callback
    -- Triggers client placement when event == 'usingItem'
end)
```

{% hint style="danger" %}
Always keep **`consume = 0`**. The resource removes the item when placement starts and returns it on cancel.
{% endhint %}

***

**Public server API (`public/server/api.lua`)**

Buyer-editable helpers used by core (do not remove; you may adapt bridges behind them):

| Function                            | Purpose                             |
| ----------------------------------- | ----------------------------------- |
| `Api.IsAdmin(source)`               | ACE check (`LudusConfig.ACE.Admin`) |
| `Api.GetCitizenId(source)`          | Persistent character id             |
| `Api.GetCash` / `Api.GetBank`       | Balances                            |
| `Api.AddMoney` / `Api.RemoveMoney`  | Economy                             |
| `Api.Notify(source, message, type)` | Single notify path to client bridge |
