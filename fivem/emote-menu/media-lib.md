# Media Lib

{% hint style="info" %}
**cdev\_medialib** <mark style="color:yellow;">is a tool for developers. With this tool, you can create GIF previews of new animations you add or of animations that are missing a preview in the emote menu.</mark>
{% endhint %}

{% hint style="danger" %}
**The&#x20;**<mark style="color:yellow;">**cdev\_medialib**</mark>**&#x20;resource does&#x20;**<mark style="color:yellow;">**not need to be started**</mark>**&#x20;on a production server. The&#x20;**<mark style="color:yellow;">**cdev\_lib**</mark>**&#x20;and&#x20;**<mark style="color:yellow;">**cdev\_emotemenu**</mark>**&#x20;resources do not depend on&#x20;**<mark style="color:yellow;">**cdev\_medialib**</mark>**&#x20;to work. Additionally, the&#x20;**<mark style="color:yellow;">**medialib**</mark>**&#x20;resource will only work if the server is running on&#x20;**<mark style="color:yellow;">**localhost**</mark>**.**
{% endhint %}

## How setup and use Media Lib

{% stepper %}
{% step %}
### Enable DevTools Mode

The <mark style="color:red;">DevTools</mark> mode needs to be enabled in the <mark style="color:yellow;">cdev\_emotemenu</mark> configuration file for you to access the <mark style="color:red;">DevTools</mark> options inside the in-game emote menu.

To enable DevTools mode, go to the file:\
`cdev_emotemenu > public > shared > config.lua` (Line 4) as shown in the example below.

```lua
 DevTools = true,  
```
{% endstep %}

{% step %}
### Ensure Resources and Their Order in `server.cfg`

Now you will start the <mark style="color:yellow;">cdev\_medialib</mark> resource in your `server.cfg` file, and it needs to be in exactly the same order as shown in the example below.

```
ensure cdev_lib
ensure cdev_emotemenuassets
ensure cdev_emotemenu
ensure cdev_medialib
```
{% endstep %}

{% step %}
### Record the desired animation in-game

Now you will use the new <mark style="color:yellow;">DevTools</mark> options in the in-game emote menu to record the <mark style="color:red;">GIF</mark> of the new animation. Below is a video showing an example of a recording.

<figure><img src="../../.gitbook/assets/chrome_MP36LnYLe3.gif" alt=""><figcaption></figcaption></figure>
{% endstep %}

{% step %}
### Using the Recorded GIF

First, locate the recorded <mark style="color:yellow;">GIF</mark>, which will be saved in the `cdev_medialib/data/videos` folder. After finding the recorded <mark style="color:yellow;">GIF</mark>, you will have two options. Below, I will explain both.

### Option #1&#x20;

**Use the GIF from a local folder:**\
\
First, you will copy the <mark style="color:yellow;">GIF</mark> found in the `cdev_medialib/data/videos` folder and paste it into the `cdev_emotemenu/data/previews` folder.

Now, go to the desired animation inside the `Animations.lua` file located at `cdev_emotemenu/public/shared/Animations.lua` and set the file name you saved in the animation’s configuration. Remember, the file needs to be in <mark style="color:red;">WEBP</mark> format. Below is an example.

```lua
{
    category = "generalanimations",
    id = "airguitar",
    thumbnail  = "airguitar.webp",
    label = "Air Guitar",
    firstperson = {
    
        anim = "air_guitar",
        dict = "anim@mp_player_intcelebrationfemale@air_guitar",
    },
    vip = true,
 },
```

{% hint style="danger" %}
**Since you are using the GIF from a local folder, it is necessary that in the animation configuration you use `thumbnail` instead of `thumbnailcdn`.**
{% endhint %}

### Option #2&#x20;

**Use the CDN GIF:**

You will upload your recorded <mark style="color:yellow;">GIF</mark> created with the medialib tool to a <mark style="color:yellow;">CDN</mark> and then configure the animation preview as shown in the example below.

```lua
 {
    category = "generalanimations",
    id = "airguitar",
    thumbnailcdn = "https://yourCDNLink.com/animations/airguitar.webp",
    label = "Air Guitar",
    firstperson = {
    
        anim = "air_guitar",
        dict = "anim@mp_player_intcelebrationfemale@air_guitar",
    },
    vip = true,
  },
```

{% hint style="danger" %}
**Remember that since you are using a CDN, the thumbnail variable should be `thumbnailcdn` instead of `thumbnail`.**
{% endhint %}


{% endstep %}
{% endstepper %}
