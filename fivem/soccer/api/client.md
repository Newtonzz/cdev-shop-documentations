# Client

```lua
repeat Wait(0) until statsInited

--- @param gameKey string
RegisterNetEvent("cdev_soccer:client:api:onMatchStart", function(gameKey)

end)

--- @param gameKey string
--- @param scoringTeamId number
RegisterNetEvent("cdev_soccer:client:api:onGoal", function(gameKey, scoringTeamId)

end)

--- @param gameKey string
RegisterNetEvent("cdev_soccer:client:api:onShot", function(gameKey)

end)

--- @param gameKey string
--- @param targetPlayerServerId number
RegisterNetEvent("cdev_soccer:client:api:onTackle", function(gameKey, targetPlayerServerId)

end)

--- @param gameKey string
RegisterNetEvent("cdev_soccer:client:api:onGameWin", function(gameKey)

end)

--- @param gameKey string
RegisterNetEvent("cdev_soccer:client:api:onGameLoss", function(gameKey)

end)

--- @param gameKey string
RegisterNetEvent("cdev_soccer:client:api:onSave", function(gameKey)

end)

--- @param gameKey string
RegisterNetEvent("cdev_soccer:client:api:onPass", function(gameKey)

end)
```
