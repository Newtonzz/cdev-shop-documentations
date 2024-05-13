# Get Account

### GetPersonalAccountByPlayerSource <a href="#getitemcount" id="getitemcount"></a>

Gets Personal Account from the Player Source that was provided

```lua
exports.cdev_banking:GetPersonalAccountByPlayerSource(source)
```

* source: `PlayerId`

Return:

* Account: [`Account`](../types-definitions.md#account)

***

### GetPersonalAccountByPlayerIdentifier <a href="#getitemcount" id="getitemcount"></a>

Gets Personal Account from the Player Identifier that was provided

```lua
exports.cdev_banking:GetPersonalAccountByPlayerIdentifier(cid)
```

* cid: `CitizenId`

Return:

* Account: [`Account`](../types-definitions.md#account)

***

### GetAccountByAccountId <a href="#getitemcount" id="getitemcount"></a>

Gets Account from the Account ID that was provided

```lua
exports.cdev_banking:GetAccountByAccountId(id)
```

* id: `CitizenId`

Return:

* Account: [`Account`](../types-definitions.md#account)

***

### GetJobAccountByJob <a href="#getitemcount" id="getitemcount"></a>

Gets Job Account from the Job that was provided

```lua
exports.cdev_banking:GetJobAccountByJob(jobname)
```

* jobname: `string`

Return:

* Account: [`Account`](../types-definitions.md#account)

***

### GetGangAccountByGang <a href="#getitemcount" id="getitemcount"></a>

Gets Gang Account from the Job that was provided

```lua
exports.cdev_banking:GetGangAccountByGang(gangname)
```

* gangname: `string`

Return:

* Account: [`Account`](../types-definitions.md#account)
