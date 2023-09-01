---
description: Right now only QBCore framework has a known conflict with this script.
---

# Known Errors

{% hint style="danger" %}
**QBCore**

[qb-smallresources](https://github.com/qbcore-framework/qb-smallresources/blob/main/client/handsup.lua) Please remove the following exports

1. `exports['qb-smallresources']:addDisableControls(disableHandsupControls)`
2. `exports['qb-smallresources']:removeDisableControls(disableHandsupControls)`
{% endhint %}

