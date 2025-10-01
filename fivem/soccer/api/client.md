# Client

```lua
repeat Wait(0) until statsInited

--- @param gameKey string
RegisterNetEvent("cdev_soccer:client:api:onMatchStart", function(gameKey) end)

--- @param gameKey string
--- @param scoringTeamId number
RegisterNetEvent("cdev_soccer:client:api:onGoal", function(gameKey, scoringTeamId) end)

--- @param gameKey string
RegisterNetEvent("cdev_soccer:client:api:onShot", function(gameKey) end)

--- @param gameKey string
--- @param targetPlayerServerId number
RegisterNetEvent("cdev_soccer:client:api:onTackle", function(gameKey, targetPlayerServerId) end)

--- @param gameKey string
RegisterNetEvent("cdev_soccer:client:api:onGameWin", function(gameKey) end)

--- @param gameKey string
RegisterNetEvent("cdev_soccer:client:api:onGameLoss", function(gameKey) end)

--- @param gameKey string
RegisterNetEvent("cdev_soccer:client:api:onSave", function(gameKey) end)

--- @param gameKey string
RegisterNetEvent("cdev_soccer:client:api:onPass", function(gameKey) end)

-- UI / Management
RegisterNetEvent("cdev_soccer:openManagerMenu", function() end)
RegisterNetEvent("cdev_soccer:checkManagerPermission", function() end)

--- @param areaData table
RegisterNetEvent("cdev_soccer:setGoaleeArea", function(areaData) end)

-- Field presence
RegisterNetEvent("cdev_soccer:enteredField", function() end)
RegisterNetEvent("cdev_soccer:leftField", function() end)

--- @param role string
RegisterNetEvent("cdev_soccer:joinAsRole", function(role) end)
RegisterNetEvent("cdev_soccer:leaveRole", function() end)

--- @param role string|number
RegisterNetEvent("cdev_soccer:requestControl", function(role) end)

--- @param teamId number
RegisterNetEvent("cdev_soccer:goal", function(teamId) end)

--- @param power number
--- @param direction vector3
RegisterNetEvent("cdev_soccer:shoot", function(power, direction) end)

RegisterNetEvent("cdev_soccer:playKickSfx", function() end)
RegisterNetEvent("cdev_soccer:out", function() end)

--- @param targetPlayerServerId number
RegisterNetEvent("cdev_soccer:tacklePlayer", function(targetPlayerServerId) end)

--- @param enabled boolean
RegisterNetEvent("cdev_soccer:setGoaleeMode", function(enabled) end)

-- Fields & State
RegisterNetEvent("cdev_soccer:fetchFields", function() end)

--- @param fieldId number
--- @param active boolean
RegisterNetEvent("cdev_soccer:setFieldActive", function(fieldId, active) end)

--- @param fieldId number
--- @param started boolean
RegisterNetEvent("cdev_soccer:setFieldStarted", function(fieldId, started) end)

--- @param players table
RegisterNetEvent("cdev_soccer:updateFieldPlayers", function(players) end)

--- @param data table
RegisterNetEvent("cdev_soccer:getTackled", function(data) end)

--- @param message string
--- @param type string
RegisterNetEvent("cdev_soccer:sendNotification", function(message, type) end)

--- @param seconds number
RegisterNetEvent("cdev_soccer:setCountdown", function(seconds) end)

RegisterNetEvent("cdev_soccer:beginRound", function() end)

--- @param settings table
RegisterNetEvent("cdev_soccer:updateFieldSettings", function(settings) end)

--- @param seconds number
RegisterNetEvent("cdev_soccer:updateTimer", function(seconds) end)

--- @param teamScore number
RegisterNetEvent("cdev_soccer:updateTeamScores", function(homeScore, awayScore) end)

--- @param data table
RegisterNetEvent("cdev_soccer:updateScoreboard", function(data) end)

--- @param winnerTeamId number
RegisterNetEvent("cdev_soccer:winner", function(winnerTeamId) end)

RegisterNetEvent("cdev_soccer:reset", function() end)

--- @param ballEntity number
RegisterNetEvent("cdev_soccer:setBall", function(ballEntity) end)

--- @param fieldId number
RegisterNetEvent("cdev_soccer:preloadField", function(fieldId) end)

--- @param hasPermission boolean
RegisterNetEvent("cdev_soccer:getPermission", function(hasPermission) end)

-- History / Persistence
--- @param positions table
RegisterNetEvent("cdev_soccer:save_positions", function(positions) end)

--- @param history table
RegisterNetEvent("cdev_soccer:fetchHistory", function(history) end)

-- Match lifecycle (client notices)
--- @param gameKey string
RegisterNetEvent("cdev_soccer:newMatch", function(gameKey) end)

--- @param gameKey string
RegisterNetEvent("cdev_soccer:endGame", function(gameKey) end)

--- @param settings table
RegisterNetEvent("cdev_soccer:updateSettings", function(settings) end)

-- Physics
--- @param data table
RegisterNetEvent("cdev_soccer:physicsShoot", function(data) end)

-- Integrations
RegisterNetEvent("cdev_lib:api:playerLoaded", function() end)

--- @param jobData table
RegisterNetEvent("cdev_lib:api:jobUpdate", function(jobData) end)

--- @param message string
--- @param type string
RegisterNetEvent("cdev_lib:AddNotification", function(message, type) end)

```
