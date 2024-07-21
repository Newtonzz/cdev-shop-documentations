# Server



```lua
-- types
---@alias SoccerPlayer { serverId: number, playMode: GameplayMode, role: SoccerFieldPosition, team: number, goaleeMode: number, lastPickupInsideGoal?: boolean, inArea?: boolean }

--- @param gameKey string
--- @param players SoccerPlayer[]
AddEventHandler("cdev_soccer:server:api:onMatchStart", function(gameKey, players)

end)

--- @param gameKey string
--- @param sourcePlayerServerId number
--- @param scoringTeamId number
AddEventHandler("cdev_soccer:server:api:onGoal", function(gameKey, sourcePlayerServerId, scoringTeamId)

end)

--- @param gameKey string
--- @param sourcePlayerServerId number
AddEventHandler("cdev_soccer:server:api:onShot", function(gameKey, sourcePlayerServerId)

end)

--- @param sourcePlayerServerId number
--- @param gameKey string
--- @param targetPlayerServerId number
AddEventHandler("cdev_soccer:server:api:onTackle", function(sourcePlayerServerId, gameKey, targetPlayerServerId)

end)

--- @param gameKey string
--- @param winningTeamId number
--- @param losingTeamId number
AddEventHandler("cdev_soccer:server:api:onGameEnd", function(gameKey, winningTeamId, losingTeamId)

end)

--- @param gameKey string
--- @param playerServerId number
AddEventHandler("cdev_soccer:server:api:onSave", function(gameKey, playerServerId)

end)


--- @param gameKey string
--- @param sourcePlayerServerId number
--- @param targetPlayerServerId number
AddEventHandler("cdev_soccer:server:api:onPass", function(gameKey, sourcePlayerServerId, targetPlayerServerId)

end)
```
