---
icon: user-hair
---

# Client

#### `useLudusBoard` (inventory fallback)

Used when inventory triggers the **client** export path (some setups). Starts placement mode for the local player.

```lua
-- Registered as:
exports('useLudusBoard', function(data, slotInfo)
    -- starts BoardHandler.StartPlacement(false)
end)
```

Prefer the **server** export with ox\_inventory (`server.export = 'cdev_ludus.useLudusBoard'`).

***

#### `Api.IsNearLudusTable(maxDist?)`

Public client helper in `public/client/api.lua`.

Returns `true` if the nearest tracked Ludus table is within `maxDist` (default `5.0`).

```lua
local near = Api.IsNearLudusTable(3.5)
-- or from another resource if you expose it via export wrapper
```

{% hint style="info" %}
`Api` is a global from the Ludus resource. For external resources, prefer calling while `cdev_ludus` is started, or wrap this helper in your own export if needed.
{% endhint %}
