---
icon: mobile-screen-button
---

# TGIANN Phone Accessories

Phone emotes in **cdev\_emotemenu** can use the phone the player customized in [tgiann-phone-accessories](https://tgiann.gitbook.io/tgiann/scripts/tgiann-phone-accessories) (case, color and pins) instead of the generic phone prop.

{% hint style="success" %}
There is nothing to turn on inside **cdev\_emotemenu**. If `tgiann-phone-accessories` is started, phone emotes swap the prop on their own. If that resource is stopped, emotes keep the default phone.
{% endhint %}

### Requirements

{% hint style="danger" %}
**cdev\_emotemenu** ^1.7.0

Update the resource in the [Cfx Portal](https://portal.cfx.re/) before following this page.
{% endhint %}

Install and configure **tgiann-phone-accessories** with its own dependencies, using the [TGIANN documentation](https://tgiann.gitbook.io/tgiann/scripts/tgiann-phone-accessories):

* `oxmysql`
* `ox_lib`
* `tgiann-core`
* `tgiann-phone-accessories-assets`
* `tgiann-phone-accessories`

Import the SQL file that ships with **tgiann-phone-accessories** (`sql_main.sql`) into your server database. Without those tables the accessories resource cannot load the player's phone.

### Installation

1. Update **cdev\_emotemenu** to **1.7.0** or newer.
2. Install **tgiann-phone-accessories** and its dependencies.
3. Import `sql_main.sql`.
4. Start the resources in `server.cfg`. **tgiann-phone-accessories** must be started before a player uses a phone emote. It does not have to start before **cdev\_emotemenu**.

```cfg
ensure oxmysql
ensure ox_lib
ensure tgiann-core
ensure tgiann-phone-accessories-assets
ensure tgiann-phone-accessories

ensure cdev_emotemenuassets
ensure cdev_lib
ensure cdev_emotemenu
```

5. Restart the server. Do not add a config block to `public/shared/Config.lua`.

{% hint style="info" %}
The check runs when the emote plays, with `GetResourceState("tgiann-phone-accessories") == "started"`. Starting or stopping the accessories resource does not require an edit in the emote menu.
{% endhint %}

### What the player sees

On a phone emote, the first prop whose model name contains `phone` or `cellphone` is replaced by the player's decorated phone. The emote still uses that animation's bone and offsets, so the phone stays in the same hand position.

Canceling the emote (default **X**) removes that phone.

{% hint style="warning" %}
The position selector preview and other cloned peds keep the generic phone prop. Only the real player ped uses the decorated phone.

If the player has not customized a phone yet, or `SpawnHandPhone` cannot create one, the emote falls back to the generic prop.
{% endhint %}

Other players see the decorated phone, because **tgiann-phone-accessories** creates it as a networked entity.
