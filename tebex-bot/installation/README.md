---
description: Detailed guide.
---

# Installation

{% hint style="danger" %}
## **REQUIREMENTS**

* Discord Bot (click below for how-to)

[Broken link](broken-reference "mention")&#x20;

* A Tebex store & secret key

[https://tebex.io/](https://tebex.io/)

[https://docs.tebex.io/store/faq](https://docs.tebex.io/store/faq)

* Node JS

[https://nodejs.org/en/download/](https://nodejs.org/en/download/)
{% endhint %}

{% hint style="info" %}
## Download & NPM Install

1. You can view the repository & download the files [here](https://github.com/cdevshop/tebex-bot) &#x20;
2. Unzip the rar file in any folder.&#x20;
3. Open terminal & `cd` to the directory path of the above folder.&#x20;
4. type `npm` install if you are using npm. `pnpm install` for pnpm.&#x20;
5. Create an `.env` file using

`BOT_TOKEN=`\
`TEBEX_SECRET=`&#x20;

Paste your bot token and Tebex Secret there.&#x20;

6. Open `src/storage/config.json and update the following;`

Update your Guild ID, Bot ID, Developer(s) ID & server ID ([Enable Discord Developer mode](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-))

Paste Discord user ID's for the `couponperms` and `giftcardperms` permission, do this with caution if you trust them!

7. Invite your bot to your Discord server (follow the requirement steps)
8. Open terminal (in same directory of files) & type `node init.js` and wait.&#x20;
9. Test the bot by mentioning the bot.




{% endhint %}
