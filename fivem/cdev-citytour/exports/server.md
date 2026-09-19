---
icon: database
---

# Server

#### `useCityTourBoard` (ox\_inventory)

Primary entry for **ox\_inventory** usable items.

**Item setup:**

```lua
['citytour_board'] = {
    label = 'City Tour Board',
    weight = 500,
    stack = false,
    close = true,
    consume = 0,
    description = 'Place a City Tour table in the world',
    server = {
        export = 'cdev_citytour.useCityTourBoard',
    },
},
```

```lua
exports('useCityTourBoard', function(event, item, inventory, slot, data)
    -- ox_inventory usable-item callback
    -- Triggers client placement when event == 'usingItem'
end)
```

{% hint style="danger" %}
Always keep **`consume = 0`**. The resource removes the item when placement starts and returns it on cancel.
{% endhint %}

***

#### Public server API (`public/server/api.lua`)

Buyer-editable helpers used by core (do not remove; you may adapt bridges behind them):

| Function                                     | Purpose                                     |
| -------------------------------------------- | ------------------------------------------- |
| `Api.IsAdmin(source)`                        | ACE check (`CityTourConfig.ACE.Admin`)      |
| `Api.GetCitizenId(source)`                   | Persistent character id                     |
| `Api.GetCash` / `Api.GetBank` / `Api.GetVip` | Balances                                    |
| `Api.GetBalance(source, account)`            | `cash` / `bank` / `vip`                     |
| `Api.AddMoney` / `Api.RemoveMoney`           | Economy (`vip` goes through the VIP bridge) |
| `Api.Notify(source, message, type)`          | Single notify path to client bridge         |

***

#### VIP bridge (`public/bridge/vip/server.lua`)

Required API used by Real-mode `vip` account:

| Function                             | Returns |
| ------------------------------------ | ------- |
| `Vip.GetBalance(source)`             | number  |
| `Vip.Remove(source, amount, reason)` | boolean |
| `Vip.Add(source, amount, reason)`    | boolean |

Default mode is `qbox_crypto` (QB/Qbox `players.money` JSON key, usually `crypto`). Switch `VIP_CFG.Mode` to `"export"` or `"custom"` for another economy.
