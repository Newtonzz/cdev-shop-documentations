---
icon: sunglasses
---

# Features Preview

### Editor basics

#### Open the editor, freecam around, and place a prop from the catalog.

***

#### Move and rotate with the gizmo, snap to ground, and adjust height with Q / E while placing.

***

{% hint style="info" %}
CapsLock toggles free cursor vs noclip look. RMB look works while the cursor is visible. Hotkeys are remappable in `public/shared/config.lua` under `Keys`.
{% endhint %}

### Mass tools

#### Marquee select several props, then move or delete the group.

***

#### Area fill: draw a polygon, arm a catalog prop, preview with Shift, then fill.

***

#### Array: pick a placed prop, tune count / spacing / heading, preview ghosts, Apply with Enter.

***

{% hint style="warning" %}
While a number field is focused, Enter applies the array. A left click on the world only blurs the field so you do not accidentally re-pick a prop.
{% endhint %}

#### Brush paint and area delete for quick coverage or cleanup.

***

### World eraser and lights

#### Erase an original GTA world prop, then restore it from the Deleted tab if needed.

***

{% hint style="danger" %}
Erased world props stay hidden for players while that map is live. Clearing production or switching live maps can change what stays hidden. Official GTA props may need a reconnect to fully return in some cases.
{% endhint %}

#### Place point lights with presets, range, and intensity.

***

### Maps, save, and live world

#### Create maps, set one as Go Live, and watch nearby players pick up the revision.

***

#### Save to MySQL, toggle Auto Sync, and stream props by distance when the editor is closed.

***

{% hint style="info" %}
Maps live inside `cdev_mapeditor` (database + runtime streaming). There is no Export / Publish to YMAP or a standalone streamed resource — use Save, Auto Sync, and Go Live.
{% endhint %}

### Catalog and PropShot

#### Browse the catalog with images, CustomProps, and the optional Screenshots button.

***

Full PropShot workflow (greenscreen capture and Python post-process) lives on its own page: cdev-propshot.md.
