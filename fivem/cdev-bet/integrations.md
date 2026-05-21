---
icon: head-side-gear
---

# Integrations

#### Supported integrations

> If a resource is not listed below, it is not officially supported out of the box. Custom stacks can be adapted via files under **`public/bridge/`**.

***

### Frameworks

| Framework                     | Status          | Notes                                                              |
| ----------------------------- | --------------- | ------------------------------------------------------------------ |
| **QBox (qbx\_core)**          | Supported       | Uses qb-core compatibility layer for shared APIs where applicable. |
| **QBCore**                    | Supported       | Native item registration and money helpers.                        |
| **ESX Legacy (es\_extended)** | Supported       | `identifier`-based persistence for DB rows.                        |
| **Custom**                    | Bridge required | Implement or extend `public/bridge/framework/`.                    |

***

### Notifications

| System      | Status                   | Notes                                           |
| ----------- | ------------------------ | ----------------------------------------------- |
| **ox\_lib** | Preferred when available | Often chosen automatically on QBox / ox stacks. |
| **QBCore**  | Supported                | `QBCore:Notify` style.                          |
| **ESX**     | Supported                | `showNotification` path via bridge.             |
| **Native**  | Fallback                 | Basic notify when nothing else matches.         |

***

### Bridge configuration reference

Override auto-detection in **`public/shared/config.lua`**:

```lua
Bridge = {
    --- Your server framework. 'auto' detects QBCore, QBX, or ESX (recommended).
    --- Change only if you know which you use: 'qb' | 'qbx' | 'esx'
    Framework = 'auto',

    --- In-game notification style for bet success/errors.
    --- 'auto' uses your framework's notify system when possible.
    Notify = 'auto',
},
```

Restart **`cdev_bet`** after changes.
