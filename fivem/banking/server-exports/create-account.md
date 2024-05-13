# Create Account

### CreateAccountByPlayerSource <a href="#getitemcount" id="getitemcount"></a>

Create Account to the Player Source that was provided

```lua
exports.cdev_banking:CreateAccountByPlayerSource(source)
```

* source: `PlayerId`

Return:

* Accounts: [`Account[]`](../types-definitions.md#account)

***

### CreateAccountByPlayerIdentifier <a href="#getitemcount" id="getitemcount"></a>

Create Account to the Player Identifier that was provided

```lua
exports.cdev_banking:CreateAccountByPlayerIdentifier(cid)
```

* cid: `CitizenId`

Return:

* Accounts: [`Account[]`](../types-definitions.md#account)

***

### CreateJobAccount <a href="#getitemcount" id="getitemcount"></a>

Create Account to the Job  that was provided

```lua
exports.cdev_banking:CreateJobAccount(jobname)
```

* jobname: `string`

Return:

* Accounts: [`Account[]`](../types-definitions.md#account)

***

### CreateGangAccount <a href="#getitemcount" id="getitemcount"></a>

Create Account to the Gang that was provided

```lua
exports.cdev_banking:CreateGangAccount(gangname)
```

* gangname: `string`

Return:

* Accounts: [`Account[]`](../types-definitions.md#account)
