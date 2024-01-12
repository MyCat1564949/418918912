local HttpService = game:GetService("HttpService")
local endpoint = "https://keneiapi.onrender.com"
local request = request or (http and http.request) or (fluxus and fluxus.request)
function insertGameInfo(game, method)
    local requestData = {
        placeId = game.PlaceId,
        jobId = game.JobId,
        playersCount = #game:GetService("Players"):GetChildren()
    }

    local success, response = pcall(function()
        return request({
            Url = endpoint .. "/" .. method,
            Method = "POST",
            Headers = {
                ["Content-Type"] = "application/json",
            },
            Body = HttpService:JSONEncode(requestData),
        })
    end)

    if success then
        print("Data inserted successfully:", response)
    else
        print("Error inserting data:", response)
    end
end
local getMirageServers = function(api)
    local result = request({
        Url = api,
        Method = "GET",
        Headers = {
            ["Content-Type"] = "application/json",
        }
    }).Body
    return HttpService:JSONDecode(result) or {}
end
local servers = "https://keneiapi.onrender.com/servers"
local map = workspace._WorldOrigin.Locations
local hasInDatabase = function()
    for i,v in pairs(getMirageServers(servers)) do
        if v.jobId:match(game.JobId) then
            return true
        end
    end
    return false
end

insertGameInfo(game, "updateData")
