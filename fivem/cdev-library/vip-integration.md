# VIP Integration

In order to configure VIP integration for your server, you can add all relevant code that checks if your player is VIP in:

```
cdev_lib/public/server/api.lua
```

In the function "isVIP" you are able to integrate code of your own liking below

```lua
    IsVIP = function(source)
        return true // integrate your code here
    end
```

## Ace Permission Example

```lua
    IsVIP = function(source)
        return IsPlayerAceAllowed(source, "vip")
    end
```

## Automating the VIP process using zDiscord

For server owners using [zDiscord](https://github.com/zfbx/zdiscord/blob/djs/config.js#L58) you can head to the `config.js` file on Line 59 include the following;&#x20;

{% code title="zdiscord/config.js" %}
```javascript
const AutoAcePermissions = {
    "group.vip": "discordroleidhere", // You can create a VIP role and insert the role ID number here
};

```
{% endcode %}

Lastly you would add to your `server.cfg`

```tsconfig
add_ace group.vip vip allow
```

Congratz! Now your VIP feature is based off whether a user has a role or not!
