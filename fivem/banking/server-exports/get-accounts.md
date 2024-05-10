---
description: Here are all the exports to getAccounts
---

# Get Accounts

### GetAccountsByPlayerSource <a href="#getitemcount" id="getitemcount"></a>

Get All Accounts from the Player Source that was provided

```lua
exports.cdev_banking:GetAccountsByPlayerSource(source)
```

* source: `PlayerId`

Return:

* Accounts: [`Account[]`](../types-definitions.md#account)

***

### GetAccountsByPlayerIdentifier <a href="#getitemcount" id="getitemcount"></a>

Get All Accounts from the Player Identifier that was provided

```lua
exports.cdev_banking:GetAccountsByPlayerIdentifier(cid)
```

* cid: `CitizenID`

Return:

* Accounts: [`Account[]`](../types-definitions.md#account)

***

### GetAllAccounts <a href="#getitemcount" id="getitemcount"></a>

Gets All Accounts

```
exports.cdev_banking:GetAllAccounts()
```

Return:

* Accounts: [`Account[]`](../types-definitions.md#account)
