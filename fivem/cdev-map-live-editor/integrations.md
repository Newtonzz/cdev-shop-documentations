---
icon: lightbulb-gear
---

# Integrations

## Integrations

**Supported integrations**

> If a resource is not listed below, it is not officially supported out of the box. Custom stacks can be adapted under **`public/bridge/`**.

***

#### Frameworks

| Framework                     | Status          | Notes                                            |
| ----------------------------- | --------------- | ------------------------------------------------ |
| **QBox (qbx\_core)**          | Supported       | Auto detect or force `Bridge.Framework = 'qbox'` |
| **QBCore**                    | Supported       | Admin / god style checks through the bridge      |
| **ESX Legacy (es\_extended)** | Supported       | Identifier based ownership when enabled          |
| **Custom**                    | Bridge required | Extend `public/bridge/framework/`                |

***

#### Notifications

| System               | Status                   | Notes                          |
| -------------------- | ------------------------ | ------------------------------ |
| **ox\_lib**          | Preferred when available | Optional dependency            |
| **Framework notify** | Supported                | QB / ESX paths via bridge      |
| **Fallback**         | Built in                 | Used when nothing else matches |

***

#### Database

| System      | Status   | Notes                                          |
| ----------- | -------- | ---------------------------------------------- |
| **oxmysql** | Required | Tables are created on boot (`DB.EnsureTables`) |

***

#### Optional companion: PropShot

| Resource           | Status   | Notes                                                                                                                |
| ------------------ | -------- | -------------------------------------------------------------------------------------------------------------------- |
| **cdev\_propshot** | Optional | Greenscreen catalog captures. Map Editor shows a Screenshots button when it is started. Full guide: cdev-propshot.md |

PropShot reads `cdev_mapeditor` `props.json` and `GetCustomProps` when the map editor resource is running.

***

#### Bridge configuration

In `public/shared/config.lua`:

```lua
MapEditorConfig.Bridge = {
    Framework = 'auto', -- 'auto' | 'qbox' | 'qbcore' | 'esx' | 'custom'
}
```

Restart **`cdev_mapeditor`** after changes.
