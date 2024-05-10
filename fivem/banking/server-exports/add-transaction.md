# Add Transaction

### AddPersonalTransactionByPlayerSource <a href="#getitemcount" id="getitemcount"></a>

Add Personal Transaction by Player Source

```lua
exports.cdev_banking:AddPersonalTransactionByPlayerSource(source, name, type, amount, to?)
```

* source: `PlayerId`
* name: `string`
* type: `string`
* amount: `number`
* to?: `number` (accountid)

***

### AddPersonalTransactionByPlayerIdentifier <a href="#getitemcount" id="getitemcount"></a>

Add Personal Transaction by Player Identifier

```lua
exports.cdev_banking:AddPersonalTransactionByPlayerIdentifier(cid, name, type, amount, to?)
```

* cid: `CitizenId`
* name: `string`
* type: `string`
* amount: `number`
* to?: `number` (accountid)

***

### AddTransactionByAccountId <a href="#getitemcount" id="getitemcount"></a>

Add Transaction by Account ID

```lua
exports.cdev_banking:AddBankBalanceByAccountId(id, name, type, amount, to?)
```

* id: `number`
* name: `string`
* type: `string`
* amount: `number`
* to?: `number` (accountid)
