---
icon: share-all
---

# Shared

No shared exports are required for normal use.

Configuration is loaded from `public/shared/config.lua` as the global **`CityTourConfig`** table (shared script).

Related shared files (all escrow-ignored under `public/`):

| File                                                | Role                                 |
| --------------------------------------------------- | ------------------------------------ |
| `public/shared/config.lua`                          | Tunables                             |
| `public/shared/property_economy.lua`                | Buy / rent / repurchase numbers      |
| `public/shared/board.lua`                           | 32-space ring, groups, luck deck ids |
| `public/shared/layout.lua` + `layout_override.json` | Visual layout                        |
| `public/shared/locales/*.json`                      | Strings (`en`, `pt`)                 |
| `public/shared/themes.json`                         | NUI theme tokens                     |
