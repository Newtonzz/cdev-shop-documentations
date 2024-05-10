# Add Invoice

### CreatePersonalInvoiceByPlayerSource <a href="#getitemcount" id="getitemcount"></a>

Remove Bank Balance to Personal Account by Player Source

```lua
exports.cdev_banking:CreatePersonalInvoiceByPlayerSource(source, amount, time, onPaid, onNotPaid)
```

* id: `PlayerId`
* amount: `number`
* time: `number` <mark style="color:green;">-- seconds</mark>
* onPaid: {event: `string`, args: `table`}
* onNotPaid: {event: `string`, args: `table`}

***

### CreatePersonalInvoiceByPlayerIdentifier <a href="#getitemcount" id="getitemcount"></a>

Remove Bank Balance to Personal Account by Player Source

```lua
exports.cdev_banking:CreatePersonalInvoiceByPlayerIdentifier(cid, amount, time, onPaid, onNotPaid)
```

* cid: `CitizenId`
* amount: `number`
* time: `number` <mark style="color:green;">-- seconds</mark>
* onPaid: {event: `string`, args: `table`}
* onNotPaid: {event: `string`, args: `table`}

***

### CreateInvoiceByAccountId <a href="#getitemcount" id="getitemcount"></a>

Remove Bank Balance to Personal Account by Account Id

```lua
exports.cdev_banking:CreateInvoiceByAccountId(id, amount, time, onPaid, onNotPaid)
```

* id: `number`
* amount: `number`
* time: `number` <mark style="color:green;">-- seconds</mark>
* onPaid: {event: `string`, args: `table`}
* onNotPaid: {event: `string`, args: `table`}

***

**Example using** [**CreatePersonalInvoiceByPlayerSource**](add-invoice.md#getitemcount)

```lua
local src = source
local amount = 100000 -- Money he needs to pay
local time = 100000 -- Time in Seconds
local onPaid = {
        event = "cdev_banking:Invoice", -- This server event will Trigger if they pay
        args = {
            test = "This is a test"
        }
    }
local onNotPaid = {
        event = "cdev_banking:Invoice",  -- This server event will Trigger if the time ends and they dont pay successfully
        args = {
            test = "This is a test"
        }
    }

exports.cdev_banking:CreatePersonalInvoiceByPlayerSource(src, amount, time, onPaid, onNotPaid)
```

**Example Server Event**

```lua
RegisterNetEvent('cdev_banking:Invoice', function (data)
    print(data.test) -- This would print "This is a test"
end)
```
