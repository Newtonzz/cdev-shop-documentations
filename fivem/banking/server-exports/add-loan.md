# Add Loan

### CreatePersonalLoanByPlayerSource <a href="#getitemcount" id="getitemcount"></a>

Create Personal Loan by Player Source

```lua
exports.cdev_banking:CreatePersonalLoanByPlayerSource(source, amount, time, onPaid, onNotPaid)
```

* id: `PlayerId`
* amount: `number`
* time: `number` <mark style="color:green;">-- seconds</mark>
* onPaid: {event: `string`, args: `table`}
* onNotPaid: {event: `string`, args: `table`}

***

### CreatePersonalLoanByPlayerIdentifier <a href="#getitemcount" id="getitemcount"></a>

Create Personal Loan by Player Identifier

```lua
exports.cdev_banking:CreatePersonalLoanByPlayerIdentifier(cid, amount, time, onPaid, onNotPaid)
```

* cid: `CitizenId`
* amount: `number`
* time: `number` <mark style="color:green;">-- seconds</mark>
* onPaid: {event: `string`, args: `table`}
* onNotPaid: {event: `string`, args: `table`}

***

### CreateLoanByAccountId <a href="#getitemcount" id="getitemcount"></a>

Create Loan by Account ID

```lua
exports.cdev_banking:CreatePersonalLoanByPlayerIdentifier(id, amount, time, onPaid, onNotPaid)
```

* id: `number`
* amount: `number`
* time: `number` <mark style="color:green;">-- seconds</mark>
* onPaid: {event: `string`, args: `table`}
* onNotPaid: {event: `string`, args: `table`}

***

**Example using** [**CreatePersonalLoanByPlayerSource**](add-loan.md#getitemcount)

```lua
local src = source
local amount = 100000 -- Money he needs to pay
local time = 100000 -- Time in Seconds
local onPaid = {
        event = "cdev_banking:LoanTest", -- This server event will Trigger if they pay
        args = {
            test = "This is a test"
        }
    }
local onNotPaid = {
        event = "cdev_banking:LoanTest",  -- This server event will Trigger if the time ends and they dont pay successfully
        args = {
            test = "This is a test"
        }
    }

exports.cdev_banking:CreatePersonalLoanByPlayerSource(src, amount, time, onPaid, onNotPaid)
```

**Example Server Event**

```lua
RegisterNetEvent('cdev_banking:LoanTest', function (data)
    print(data.test) -- This would print "This is a test"
end)
```
