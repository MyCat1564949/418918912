_G.Color = Color3.fromRGB(255, 0, 0)

Check_Map = function()
	if game.PlaceId == 2753915549 or
	game.PlaceId == 4442272183 or 
	game.PlaceId == 7449423635 then
		BFC________________ = true
	end
	return { 
		["BF"] = BFC________________,
	}
end

if not Check_Map()["BF"] then
	return
end

if game.PlaceId == 2753915549 then
	W1 = true
elseif game.PlaceId == 4442272183 then
	W2 = true
elseif game.PlaceId == 7449423635 then
	W3 = true
end

local Config = {}
local LocalPlayer = game:GetService("Players").LocalPlayer
Config.GetPlayer = {
	["Player"] = LocalPlayer,
}
Config.GetChar = {
	["Char"] = Config.GetPlayer["Player"].Character,
}
Config.Player = {
	["Humanoid"] = Config.GetChar["Char"].Humanoid,
	["HumanoidRootPart"] = Config.GetChar["Char"].HumanoidRootPart,
	["Mylevel"] = Config.GetPlayer["Player"].Data.Level
}
Config.Mon = {
	["Enemies"] = game:GetService("Workspace").Enemies
}

if game:GetService("Players").LocalPlayer.PlayerGui.Main:FindFirstChild("ChooseTeam") then
	repeat wait()
		if game:GetService("Players").LocalPlayer.PlayerGui:WaitForChild("Main").ChooseTeam.Visible == true then
			for i, v in pairs(getconnections(game:GetService("Players").LocalPlayer.PlayerGui.Main.ChooseTeam.Container.Pirates.Frame.TextButton.Activated)) do                                                                                                
				v.Function()
			end
		end
	until game.Players.LocalPlayer.Team ~= nil and game:IsLoaded()
end

if not workspace:FindFirstChild("EnemySpawns") then

	local EnemySpawns = Instance.new("Folder",workspace)
	EnemySpawns.Name = "EnemySpawns"

	for i, v in pairs(workspace._WorldOrigin.EnemySpawns:GetChildren()) do
		if v:IsA("Part") then
			local EnemySpawnsX2 = v:Clone()
			local result = string.gsub(v.Name, "Lv. ", "")
			local result2 = string.gsub(result, "[%[%]]", "")
			local result3 = string.gsub(result2, "%d+", "")
			local result4 = string.gsub(result3, "%s+", "")
			EnemySpawnsX2.Name = result4
			EnemySpawnsX2.Parent = workspace.EnemySpawns
			EnemySpawnsX2.Anchored = true
		end
	end
	for i, v in pairs(game:GetService("Workspace").Enemies:GetChildren()) do
		if v:IsA("Model") and v:FindFirstChild("HumanoidRootPart") then
			print(v.HumanoidRootPart.Parent)
			local EnemySpawnsX2 = v.HumanoidRootPart:Clone()
			local result = string.gsub(v.Name, "Lv. ", "")
			local result2 = string.gsub(result, "[%[%]]", "")
			local result3 = string.gsub(result2, "%d+", "")
			local result4 = string.gsub(result3, "%s+", "")

			EnemySpawnsX2.Name = result4
			EnemySpawnsX2.Parent = workspace.EnemySpawns
			EnemySpawnsX2.Anchored = true
		end
	end
	for i, v in pairs(game.ReplicatedStorage:GetChildren()) do
		if v:IsA("Model") and v:FindFirstChild("HumanoidRootPart") then
			local EnemySpawnsX2 = v.HumanoidRootPart:Clone()
			local result = string.gsub(v.Name, "Lv. ", "")
			local result2 = string.gsub(result, "[%[%]]", "")
			local result3 = string.gsub(result2, "%d+", "")
			local result4 = string.gsub(result3, "%s+", "")

			EnemySpawnsX2.Name = result4
			EnemySpawnsX2.Parent = workspace.EnemySpawns
			EnemySpawnsX2.Anchored = true
		end
	end
end

if not workspace:FindFirstChild("EnemyCDKSpawns") then
	local EnemyCDKSpawns = Instance.new("Folder", workspace)
	EnemyCDKSpawns.Name = "EnemyCDKSpawns"
	local processedNames = {}
	for i, v in 
		pairs(game.workspace.EnemySpawns:GetChildren()) do
		local name = v.Name
		if not processedNames[name] then
			processedNames[name] = true
			local existingChild = EnemyCDKSpawns:FindFirstChild(name)
			if not existingChild then
				local EnemySpawnsX2Clone = v:Clone()
				EnemySpawnsX2Clone.Parent = workspace.EnemyCDKSpawns
				EnemySpawnsX2Clone.Anchored = true
			end
		end
	end
end

local CameraShakerR = require(game.ReplicatedStorage.Util.CameraShaker)
CameraShakerR:Stop()

library = loadstring(game:HttpGet("https://raw.githubusercontent.com/NeaPchX2/FreeUI/main/ZeeHub"))()

foldername = "Zee Hub"
filename = game.Players.LocalPlayer.Name.." Config.json"

_G.Settings = {
	FastAttack = true,
	Brimob = true,
	Auto_Farm_Fast = true,

	HealthMs = 50,
};Settings = {}

function SaveSettings()
	local HttpService = game:GetService("HttpService")
	local json = HttpService:JSONEncode(_G.Settings)
	if (writefile) then
		if isfolder(foldername) then
			if isfile(foldername.."\\"..filename) then
				writefile(foldername.."\\"..filename, json)
			else
				writefile(foldername.."\\"..filename, json)
			end
		else
			makefolder(foldername)
			writefile(foldername.."\\"..filename, json)
		end
	end
end
function LoadSettings()
	local HttpService = game:GetService("HttpService")
	if isfile(foldername.."\\"..filename) then
		_G.Settings = HttpService:JSONDecode(readfile(foldername.."\\"..filename))
	end
end

LoadSettings()

local res = request({
	Url = "https://httpbin.org/get",
	Method = "GET"
}).Body;

function ChackExploit(Exploit)
	local decode = game:GetService('HttpService'):JSONDecode(res)
	if decode.headers['User-Agent'] == Exploit then
		return true
	end
	return false
end;local __FunctionMain = {
	__IsFunction = function(self, x)
		return {
			CommF_ = function(self, value, Remote)
				if value then
					if Remote == "RemoteEvent" then
						game:GetService("ReplicatedStorage").Remotes.CommF_:FireServer(value)
					elseif Remote == "RemoteFunction" then
						game:GetService("ReplicatedStorage").Remotes.CommF_:InvokeServer(value)
					end
				end
			end,AutoHaki = function(self, value)
				local Char = game:GetService("Players").LocalPlayer.Character or Config.GetChar["Char"]
				if value == "Open" then
					if not Char:FindFirstChild("HasBuso") then
						self:CommF_("Buso","RemoteFunction")
					end
				elseif value == "OFF" then
					if Char:FindFirstChild("HasBuso") then
						self:CommF_("Buso","RemoteFunction")
					end
				end
			end,EquipTools = function(self, ToolSe)
				if game.Players.LocalPlayer.Backpack:FindFirstChild(ToolSe) then
					Tool = game.Players.LocalPlayer.Backpack:FindFirstChild(ToolSe)
					wait(.1)
					game.Players.LocalPlayer.Character.Humanoid:EquipTool(Tool)
				end
			end,UnEquipTools = function(self, Weapon)
				if game.Players.LocalPlayer.Character:FindFirstChild(Weapon) then
					_G.NotAutoEquip = true
					wait(.5)
					game.Players.LocalPlayer.Character:FindFirstChild(Weapon).Parent = game.Players.LocalPlayer.Backpack
					wait(.1)
					_G.NotAutoEquip = false
				end
			end,ToTarget = function(self, Point)
				_G.TweenSpeed = _G.Settings.TweenSpeed or 255
				TweenPlay = (Point.Position - game.Players.LocalPlayer.Character.HumanoidRootPart.Position).Magnitude
				if LocalPlayer.Character.Humanoid.Sit == true then 
					LocalPlayer.Character.Humanoid.Sit = false 
				end
				pcall(function() 
					tot = game:GetService("TweenService"):Create(LocalPlayer.Character.HumanoidRootPart,TweenInfo.new(TweenPlay/_G.TweenSpeed, Enum.EasingStyle.Linear),{CFrame = Point})
				end)
				if _G.StopTween == true then
					tot:Cancel()
				end
				if TweenPlay > 2000 and _G.Bypass_TP then
					pcall(function()
						pcall(function()
							tot:Cancel()
							game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame=Point
							game.Players.LocalPlayer.Character.Humanoid:ChangeState(15)
							return
						end)
					end)
				end
				tot:Play()
                task.spawn(function()
                    for _, v in pairs(LocalPlayer.Character:GetDescendants()) do
                        if v:IsA("BasePart") then
                            v.CanCollide = false    
                        end
                    end
                    game.Players.LocalPlayer.Character.Humanoid:ChangeState(11)
                    if not LocalPlayer.Character.HumanoidRootPart:FindFirstChild("BodyClip") then
                        local Noclip = Instance.new("BodyVelocity")
                        Noclip.Name = "BodyClip"
                        Noclip.Parent = LocalPlayer.Character.HumanoidRootPart
                        Noclip.MaxForce = Vector3.new(5,math.huge,5)
                        Noclip.Velocity = Vector3.new(0,0,0)
                    end
                end)
				if _G.StopTween then
					tot:Cancel()
				elseif game.Players.LocalPlayer.Character.Humanoid.Health > 0 then
					tot:Play()
				end
			end,EquipBloxFruit = function(self)
				local Player = game.Players.LocalPlayer
				local Char = game:GetService("Players").LocalPlayer.Character or Config.GetChar["Char"]
				for i ,v in pairs(Player.Backpack:GetChildren()) do
					if v.ToolTip == "Blox Fruit" then
						if Player.Backpack:FindFirstChild(tostring(v.Name)) then
							self:EquipTools(v.Name)
						end
					end
				end
			end,StopTween = function(self,target)
            if not target then
                _G.StopTween = true
                game:GetService("ReplicatedStorage").Remotes.CommF_:InvokeServer("AbandonQuest")
                game.Players.LocalPlayer.Character.Humanoid:ChangeState(18)
                if LocalPlayer.Character.HumanoidRootPart:FindFirstChild("BodyClip") then
                    LocalPlayer.Character.HumanoidRootPart:FindFirstChild("BodyClip"):Destroy()
                end
                wait(.2)
                _G.StopTween = false
            end
        end
		}
	end,
};local __FunctionMain__ = __FunctionMain:__IsFunction()
;local __FunctionMain__ = __FunctionMain:__IsFunction()
local __Main = { __IsFunction = function(self, x)
	return { __MainC = function(self)
		local CofingQ = {}
		CofingQ.Mylevel = Config.Player["Mylevel"].Value
		local s = tostring;local r = require;local stringtaxt = string
		local TableQuests = {
			["GuideModule"] = r(game:GetService("ReplicatedStorage").GuideModule),
			["Quests"] = r(game:GetService("ReplicatedStorage").Quests)
		}
		if CofingQ.Mylevel >= 1 and CofingQ.Mylevel <= 9 then
			if s(game.Players.LocalPlayer.Team) == "Marines" then
				MobName = "Trainee"
				QuestName = "MarineQuest"
				QuestLevel = 1
				Mon = "Trainee"
				NPCPosition = CFrame.new(-2709.67944, 24.5206585, 2104.24585, -0.744724929, -3.97967455e-08, -0.667371571, 4.32403588e-08, 1, -1.07884304e-07, 0.667371571, -1.09201515e-07, -0.744724929)
			elseif s(game.Players.LocalPlayer.Team) == "Pirates" then
				MobName = "Bandit"
				Mon = "Bandit"
				QuestName = "BanditQuest1"
				QuestLevel = 1
				NPCPosition = CFrame.new(1059.99731, 16.9222069, 1549.28162, -0.95466274, 7.29721794e-09, 0.297689587, 1.05190106e-08, 1, 9.22064114e-09, -0.297689587, 1.19340022e-08, -0.95466274)
			end
			return {[1] = QuestLevel,[2] = NPCPosition,[3] = MobName,[4] = QuestName,[5] = LevelRequire,[6] = Mon,[7] = MobCFrame}
		end;if CofingQ.Mylevel >= 210 and CofingQ.Mylevel <= 249 then
			MobName = "Dangerous Prisoner"
			QuestName = "PrisonerQuest"
			QuestLevel = 2
			Mon = "Dangerous Prisoner"
			NPCPosition = CFrame.new(5308.93115, 1.65517521, 475.120514, -0.0894274712, -5.00292918e-09, -0.995993316, 1.60817859e-09, 1, -5.16744869e-09, 0.995993316, -2.06384709e-09, -0.0894274712)
			local matchingCFrames = {}
			local result = stringtaxt.gsub(MobName, "Lv. ", "")
			local result2 = stringtaxt.gsub(result, "[%[%]]", "")
			local result3 = stringtaxt.gsub(result2, "%d+", "")
			local result4 = stringtaxt.gsub(result3, "%s+", "")

			for i,v in pairs(game.workspace.EnemySpawns:GetChildren()) do
				if v.Name == result4 then
					table.insert(matchingCFrames, v.CFrame)
				end
				MobCFrame = matchingCFrames
			end
			return {[1] = QuestLevel,[2] = NPCPosition,[3] = MobName,[4] = QuestName,[5] = LevelRequire,[6] = Mon,[7] = MobCFrame}
		end;for i,v in 
			pairs(TableQuests["GuideModule"]["Data"]["NPCList"]) do
			for i1,v1 in 
				pairs(v["Levels"]) do
				if CofingQ.Mylevel >= v1 then
					if not LevelRequire then
						LevelRequire = 0
					end
					if v1 > LevelRequire then
						NPCPosition = i["CFrame"]
						QuestLevel = i1
						LevelRequire = v1
					end
					if #v["Levels"] == 3 and QuestLevel == 3 then
						NPCPosition = i["CFrame"]
						QuestLevel = 2
						LevelRequire = v["Levels"][2]
					end
				end
			end
		end;if CofingQ.Mylevel >= 375 and CofingQ.Mylevel <= 399 then
			if _G.Auto_Farm_Level and (NPCPosition.Position - game.Players.LocalPlayer.Character.HumanoidRootPart.Position).Magnitude > 3000 then
				game:GetService("ReplicatedStorage").Remotes.CommF_:InvokeServer("requestEntrance",Vector3.new(61163.8515625, 11.6796875, 1819.7841796875))
			end
		end;if CofingQ.Mylevel >= 400 and CofingQ.Mylevel <= 449 then
			if _G.Auto_Farm_Level and (NPCPosition.Position - game.Players.LocalPlayer.Character.HumanoidRootPart.Position).Magnitude > 3000 then
				game:GetService("ReplicatedStorage").Remotes.CommF_:InvokeServer("requestEntrance",Vector3.new(61163.8515625, 11.6796875, 1819.7841796875))
			end
		end
		for i,v in 
			pairs(TableQuests["Quests"]) do
			for i1,v1 in 
				pairs(v) do
				if v1["LevelReq"] == LevelRequire and i ~= "CitizenQuest" then
					QuestName = i
					for i2,v2 in 
						pairs(v1["Task"]) do
						MobName = i2
						Mon = string.split(i2," [Lv. ".. v1["LevelReq"] .. "]")[1]
					end
				end
			end
		end;if QuestName == "MarineQuest2" then QuestName = "MarineQuest2"
			QuestLevel = 1;MobName = "Chief Petty Officer"
			Mon = "Chief Petty Officer";LevelRequire = 120
		elseif QuestName == "ImpelQuest" then
			QuestName = "PrisonerQuest";QuestLevel = 2
			MobName = "Dangerous Prisoner";Mon = "Dangerous Prisoner"
			LevelRequire = 210;NPCPosition = CFrame.new(5310.60547, 0.350014925, 474.946594, 0.0175017118, 0, 0.999846935, 0, 1, 0, -0.999846935, 0, 0.0175017118)
		elseif QuestName == "SkyExp1Quest" then
			if QuestLevel == 1 then
				NPCPosition = CFrame.new(-4721.88867, 843.874695, -1949.96643, 0.996191859, -0, -0.0871884301, 0, 1, -0, 0.0871884301, 0, 0.996191859)
			elseif QuestLevel == 2 then
				NPCPosition = CFrame.new(-7859.09814, 5544.19043, -381.476196, -0.422592998, 0, 0.906319618, 0, 1, 0, -0.906319618, 0, -0.422592998)
			end
		elseif QuestName == "Area2Quest" and QuestLevel == 2 then
			QuestName = "Area2Quest";QuestLevel = 1
			MobName = "Swan Pirate";Mon = "Swan Pirate"
			LevelRequire = 775
		end
		MobName = MobName:sub(1,#MobName)
		--[[if not MobName:find("Lv") then
			for i,v in 
				pairs(game:GetService("Workspace").Enemies:GetChildren()) do
				MonLV = string.match(v.Name, "%d+")
				if v.Name:find(MobName) and #v.Name > #MobName and tonumber(MonLV) <= CofingQ.Mylevel + 50 then
					MobName = v.Name
				end
			end
		end;if not MobName:find("Lv") then
			for i,v in 
				pairs(game:GetService("ReplicatedStorage"):GetChildren()) do
				MonLV = string.match(v.Name, "%d+")
				if v.Name:find(MobName) and #v.Name > #MobName and tonumber(MonLV) <= CofingQ.Mylevel + 50 then
					MobName = v.Name
					Mon = a
				end
			end
		end]]if not game.workspace:FindFirstChild("EnemySpawns") then
			local EnemySpawns = Instance.new("Folder",workspace)
			EnemySpawns.Name = "EnemySpawns"

			for i, v in 
				pairs(workspace._WorldOrigin.EnemySpawns:GetChildren()) do
				if v:IsA("Part") then
					local EnemySpawnsX2 = v:Clone()
					local result = string.gsub(v.Name, "Lv. ", "")
					local result2 = string.gsub(result, "[%[%]]", "")
					local result3 = string.gsub(result2, "%d+", "")
					local result4 = string.gsub(result3, "%s+", "")
					EnemySpawnsX2.Name = result4
					EnemySpawnsX2.Parent = workspace.EnemySpawns
					EnemySpawnsX2.Anchored = true
				end
			end
			for i, v in 
				pairs(game:GetService("Workspace").Enemies:GetChildren()) do
				if v:IsA("Model") and v:FindFirstChild("HumanoidRootPart") then
					local EnemySpawnsX2 = v.HumanoidRootPart:Clone()
					local result = string.gsub(v.Name, "Lv. ", "")
					local result2 = string.gsub(result, "[%[%]]", "")
					local result3 = string.gsub(result2, "%d+", "")
					local result4 = string.gsub(result3, "%s+", "")
					EnemySpawnsX2.Name = result4
					EnemySpawnsX2.Parent = workspace.EnemySpawns
					EnemySpawnsX2.Anchored = true
				end
			end
			for i, v in 
				pairs(game.ReplicatedStorage:GetChildren()) do
				if v:IsA("Model") and v:FindFirstChild("HumanoidRootPart") then
					local EnemySpawnsX2 = v.HumanoidRootPart:Clone()
					local result = string.gsub(v.Name, "Lv. ", "")
					local result2 = string.gsub(result, "[%[%]]", "")
					local result3 = string.gsub(result2, "%d+", "")
					local result4 = string.gsub(result3, "%s+", "")
					EnemySpawnsX2.Name = result4
					EnemySpawnsX2.Parent = workspace.EnemySpawns
					EnemySpawnsX2.Anchored = true
				end
			end

			local EnemyCDKSpawns = Instance.new("Folder", workspace)
			EnemyCDKSpawns.Name = "EnemyCDKSpawns"
			local processedNames = {}
			for i, v in 
				pairs(game.workspace.EnemySpawns:GetChildren()) do
				local name = v.Name
				if not processedNames[name] then
					processedNames[name] = true
					local existingChild = EnemyCDKSpawns:FindFirstChild(name)
					if not existingChild then
						local EnemySpawnsX2Clone = v:Clone()
						EnemySpawnsX2Clone.Parent = workspace.EnemyCDKSpawns
						EnemySpawnsX2Clone.Anchored = true
					end
				end
			end
		end
		local matchingCFrames = {}
        local result = string.gsub(MobName, "Lv. ", "")
        local result2 = string.gsub(result, "[%[%]]", "")
        local result3 = string.gsub(result2, "%d+", "")
        local result4 = string.gsub(result3, "%s+", "")
        for i,v in 
            pairs(game.workspace.EnemySpawns:GetChildren()) do
            if v.Name == result4 then
                table.insert(matchingCFrames, v.CFrame)
            else
                table.insert(matchingCFrames, nil)
            end
            MobCFrame = matchingCFrames
        end
		if CofingQ.Mylevel >= 2500 and CofingQ.Mylevel <= 2524 then 
			MobName="Sun-kissed Warrior"
			Mon="Sun-kissed Warriors"
		end
		return {
			[1] = QuestLevel,[2] = NPCPosition,[3] = MobName,[4] = QuestName,[5] = LevelRequire,[6] = Mon,[7] = MobCFrame,[8] = MonQ,[9] = MobCFrameNuber
		}
	end;}
end,};local _Main_ = setmetatable({}, { __index = __Main })

Utilities = {
	Priority = isfile("Quarterly Hub File/LocalPriority") and base64.dec(readfile("Quarterly Hub File/LocalPriority")) or game:HttpGet('https://raw.githubusercontent.com/NeaPchX2/NetworkAndPriority/main/Priority.lua');
	Network = isfile("Quarterly Hub File/LocalNetwork") and base64.dec(readfile("Quarterly Hub File/LocalNetwork")) or game:HttpGet('https://raw.githubusercontent.com/NeaPchX2/NetworkAndPriority/main/Network.lua');
}

for i,v in pairs(Utilities) do
	Utilities[i] = loadstring(v)()
end

Players = game.Players

repeat 
	Client = Players.LocalPlayer
	wait()
until Client


do
	Map = workspace:WaitForChild("Map")
	MainUI = Client.PlayerGui:WaitForChild("Main")
	WorldData = workspace._WorldOrigin
	Locations = WorldData.Locations
	Char = Client.Character
	Backpack = Client.Backpack
	ClientData = Client.Data
end

do
	UserInputService = game:GetService("UserInputService")
	RunService = game:GetService("RunService")
	vim = game:GetService('VirtualInputManager')
	CollectionService = game:GetService("CollectionService")
	CoreGui = game:GetService("CoreGui")
end

do
	PC = require(Client.PlayerScripts.CombatFramework.Particle)
	RL = require(game:GetService("ReplicatedStorage").CombatFramework.RigLib)
	DMG = require(Client.PlayerScripts.CombatFramework.Particle.Damage)
	RigC = getupvalue(require(Client.PlayerScripts.CombatFramework.RigController),2)
	Combat =  getupvalue(require(Client.PlayerScripts.CombatFramework),2)
end

local Char = Client.Character
local Root = Char.HumanoidRootPart

do
	CurrentAllMob = {}
	recentlySpawn = 0
	StoredSuccessFully = 0
	canHits = {}
	RecentCollected = 0
	FruitInServer = {}
	RecentlyLocationSet = 0
	lastequip = tick()
end

do
	task.spawn(function()
		local stacking = 0
		local printCooldown = 0
		local OldPriority = Priority.Recently
		while wait(.075) do
			nearbymon = false
			table.clear(CurrentAllMob)
			table.clear(canHits)
			local mobs = CollectionService:GetTagged("ActiveRig")
			for i=1,#mobs do local v = mobs[i]
				local Human = v:FindFirstChildOfClass("Humanoid")
				if Human and Human.Health > 0 and Human.RootPart and v ~= Char then
					local IsPlayer = game.Players:GetPlayerFromCharacter(v)
					local IsAlly = IsPlayer and CollectionService:HasTag(IsPlayer,"Ally"..Client.Name)
					if not IsAlly then
						CurrentAllMob[#CurrentAllMob + 1] = v
						if not nearbymon and dist(Human.RootPart.Position) < 65 then
							nearbymon = true
						end
					end
				end
			end

			if nearbymon then
				local Enemies = workspace.Enemies:GetChildren()
				local Players = Players:GetPlayers()
				for i=1,#Enemies do local v = Enemies[i]
					local Human = v:FindFirstChildOfClass("Humanoid")
					if Human and Human.RootPart and Human.Health > 0 and dist(Human.RootPart.Position) < 65 then
						canHits[#canHits+1] = Human.RootPart
					end
				end
				for i=1,#Players do local v = Players[i].Character
					if not Players[i]:GetAttribute("PvpDisabled") and v and v ~= Client.Character then
						local Human = v:FindFirstChildOfClass("Humanoid")
						if Human and Human.RootPart and Human.Health > 0 and dist(Human.RootPart.Position) < 65 then
							canHits[#canHits+1] = Human.RootPart
						end
					end
				end
			end

			if OldPriority ~= Priority.Recently then
				OldPriority = Priority.Recently
				stacking = tick()
			end
			if tick() - stacking > 60 and OldPriority and OldPriority.Class == Priority.Class then
				Priority:clear()
			elseif tick() - printCooldown > 5 then
				printCooldown = tick()
			end
		end
	end)

	dist = function(a,b,noHeight)
		if not b then
			b = Root.Position
		end
		return (Vector3.new(a.X,not noHeight and a.Y,a.Z) - Vector3.new(b.X,not noHeight and b.Y,b.Z)).magnitude
	end

	_hasTag = function(TAG,OBJ)
		return CollectionService:HasTag(OBJ or game.Players.LocalPlayer.Character,TAG)
	end

	getHits = function(Size)
		local Hits = {}
		if nearbymon then
			local Enemies = workspace.Enemies:GetChildren()
			local Characters = workspace.Characters:GetChildren()
			for i=1,#Enemies do local v = Enemies[i]
				local Human = v:FindFirstChildOfClass("Humanoid")
				if Human and Human.RootPart and Human.Health > 0 and dist(Human.RootPart.Position) < Size+5 then
					table.insert(Hits,Human.RootPart)
				end
			end
			for i=1,#Characters do local v = Characters[i]
				if v ~= Client.Character then
					local Human = v:FindFirstChildOfClass("Humanoid")
					if Human and Human.RootPart and Human.Health > 0 and dist(Human.RootPart.Position) < Size+5 then
						table.insert(Hits,Human.RootPart)
					end
				end
			end
		end
		return Hits
	end
	function OnChar(Char)
		Root = Char:WaitForChild("HumanoidRootPart")
		Char:WaitForChild("Energy").Changed:Connect(function()
			if Settings.InfStam then
				-- changeValue(Char.Energy,"Value",Char.Energy.MaxValue)
				Char.Energy.Value = Char.Energy.MaxValue
			end
		end)
		Char:WaitForChild("Busy").Changed:Connect(function()
			if Settings.NoStun and Char.Busy.Value then
				Char.Busy.Value = false
			end
		end)
		for i,v in pairs({"Soru","Geppo","KenUpgrade","Buso"}) do
			if Settings["Semi"..v] then
				CollectionService:AddTag(Char,v)
			end
		end
		Char:WaitForChild("Humanoid").HealthChanged:Connect(function()
			if Settings.NoBountyLoss then
				local MaxHealth = Char.Humanoid.MaxHealth
				local OldChar = Char
				if Char.Humanoid.Health > 0 and Char.Humanoid.Health <= MaxHealth*(Settings.NoBountyLossHealth/100) then
					if OldChar == Char then
						if not _C("SetTeam",Client.Team.Name) then
							Char.Head:Destroy()
						end
					end
				end
			end
		end)
		if Settings.Invisible then pcall(invisible) end
	end
end

do
	function IsLava(v)
		if v:IsA("Script") and v.Name == "LavaDamage" then
			task.wait()
			v.Parent:Destroy()
		end
	end
	workspace.DescendantAdded:Connect(IsLava)
	for i,v in pairs(workspace:GetDescendants()) do
		IsLava(v)
	end
	function DestroyBusy(v)
		if v.Name:find("Body") and not v:IsA("BodyVelocity") and not v:IsA("BodyGyro") and Settings.NoStun then
			game.Debris:AddItem(v,0)
		end
		if v.Name == "KenDisabled" then
			wait()
			game.Debris:AddItem(v,0)
		end
		if v.Name == "GeppoCount" then
			wait()
			game.Debris:AddItem(v,0)
		end
		if v.Name == "Cooldown" and gun_cd_obj ~= v then
			gun_cd_obj = v
			v.Value = 0.15
		end
	end
	OnChar(Char)
	Client.CharacterAdded:Connect(function(Chr)
		Char = Chr
		recentlySpawn = tick()
		Chr.DescendantAdded:Connect(DestroyBusy)
		Chr.ChildAdded:Connect(DestroyBusy)
		OnChar(Chr)
	end)
end

Function = setmetatable({}, {})
Function.BringEnemies = function(RootEnemiesCFrame)
    local Success,Error = pcall(function()
        for _, _v in pairs(game.Workspace.Enemies:GetChildren()) do
            while not string.find(_v.Name,"Boss") and (_v.HumanoidRootPart.Position - RootEnemiesCFrame.Position).magnitude <= 250 do task.wait()
                _v.HumanoidRootPart.CFrame = RootEnemiesCFrame
                _v.Humanoid.JumpPower = 0
                _v.Humanoid.WalkSpeed = 0
                _v.HumanoidRootPart.Transparency = 1
                _v.HumanoidRootPart.CanCollide = false
                _v.Head.CanCollide = false
                _v.Humanoid:ChangeState(11)
                _v.Humanoid:ChangeState(14)
                setscriptable(game.Players.LocalPlayer, "SimulationRadius", true)
                sethiddenproperty(game.Players.LocalPlayer, "SimulationRadius", math.huge)
            end
        end
        if setscriptable then
			setscriptable(game.Players.LocalPlayer, "SimulationRadius", true)
		end
		if sethiddenproperty then
			sethiddenproperty(game.Players.LocalPlayer, "SimulationRadius", math.huge)
		end
    end)
    if not Success then
        print(Error)
    end
end

Function.toSpawn = function(v, Expression)
    for i, Value in pairs(game.workspace.EnemySpawns:GetChildren()) do
        if not Expression then
            break
        end
        if Value.Name == tostring(v) then
            repeat
                wait(0.1)
                if not Expression then
                    break
                end
                __FunctionMain__:ToTarget(Value.CFrame * CFrame.new(0, 50, 0))
            until not Expression or (Value.CFrame.Position - LocalPlayer.Character:WaitForChild("HumanoidRootPart").Position).magnitude <= 100
        end
        wait()
    end
end

local __Main_Farm = { __IsFunction = function(self,x)
	return {
        EnemiesAttack = function(self,Value,Expression)
            local Success,Error = pcall(function()
                for __i, __v in pairs(game:GetService("Workspace").Enemies:GetChildren()) do
                    if table.find(__v.Name,Value) then
                        if __v:FindFirstChild("Humanoid") and __v:FindFirstChild("HumanoidRootPart") and __v.Humanoid.Health > 0 then
                            repeat task.wait()
                                task.spawn(function() Function.BringEnemies(__v.HumanoidRootPart.CFrame) end)
                                __v.HumanoidRootPart.CanCollide = false
                                __v.Humanoid.WalkSpeed = 0
                                __v.Head.CanCollide = false
                                BringMobFarm = true
                                __FunctionMain__:EquipTools(_G.Select_Weapon)
                                __v.HumanoidRootPart.Transparency = 1
                                __FunctionMain__:ToTarget(__v.HumanoidRootPart.CFrame * CFrame.new(0, 30, 5))
                                if (__v.HumanoidRootPart.CFrame.Position - game:GetService("Players").LocalPlayer.Character.HumanoidRootPart.Position).Magnitude <= 50 then
                                    game:GetService("VirtualUser"):CaptureController()
                                    game:GetService("VirtualUser"):Button1Down(Vector2.new(1280,672))
                                end
                            until not Expression or not __v.Parent or __v.Humanoid.Health <= 0 or QuestC.Visible == false or not __v:FindFirstChild("HumanoidRootPart")
                        end
                    else
                        if String == "v" then end;if String == "i" then end;if String == "v" then end;if String == "i" then end
                        if String == "_v" then end;if String == "_i" then end;if String == "_v1" then end;if String == "_i1" then end
                        if String == "x" then end;if String == "y" then end;if String == "x" then end;if String == "y" then end
                        if String == "_x" then end;if String == "_y" then end;if String == "_x1" then end;if String == "_y1" then end
                        return {
                            GetCFrameEnemies = function()
                                if String == "v" then end;if String == "i" then end;if String == "v" then end;if String == "i" then end;
                                if String == "_v" then end;if String == "_i" then end;if String == "Fluxus" then end;if String == "_Fluxus" then end
                                if String == "_v" then end;if String == "_i" then end;if String == "_v1" then end;if String == "_i1" then end
                                if String == "x" then end;if String == "y" then end;if String == "x" then end;if String == "y" then end
                                if String == "_x" then end;if String == "_y" then end;if String == "_x1" then end;if String == "_y1" then end
                                return {
                                    "CFrame" = (n^2 + b^2) / (e^2) * math.sqrt(n * b / e) 
                                }
                            end
                        }
                    end
                end
            end)
        end,AutoFarm = function(self)
			local SetCFarme = 1
			while _G.Settings.Auto_Farm_Level do task.wait()
				local Success,Error = pcall(function()
					local MyLevel = LocalPlayer.Data.Level.Value
					local QuestC = LocalPlayer.PlayerGui.Main.Quest
					local AutoUpdate = _Main_:__IsFunction():__MainC()
					if not (MyLevel >= 2500 and MyLevel <= 2525) and not string.find(game:GetService("Players").LocalPlayer.PlayerGui.Main.Quest.Container.QuestTitle.Title.Text, AutoUpdate[6]) then
                        game:GetService("ReplicatedStorage").Remotes.CommF_:InvokeServer("AbandonQuest")
                    end
                    if QuestC.Visible == true then
                        if game:GetService("Workspace").Enemies:FindFirstChild(AutoUpdate[3]) then
                            self:EnemiesAttack({
                                AutoUpdate[3],
                            },
                                _G.Settings.Auto_Farm_Level
                            )
                        else
                            __FunctionMain__:UnEquipTools(_G.Select_Weapon)
                            __FunctionMain__:ToTarget(AutoUpdate[7][SetCFarme] * CFrame.new(0,30,5))
                            if (AutoUpdate[7][SetCFarme].Position - game:GetService("Players").LocalPlayer.Character.HumanoidRootPart.Position).Magnitude <= 50 then
                                if SetCFarme >= #AutoUpdate[7] then
                                    SetCFarme = 1
                                    return
                                end
                                SetCFarme =  SetCFarme + 1
                                wait(0.5)
                            end
                        end
                    else
                        __FunctionMain__:ToTarget(AutoUpdate[2])
                        if (AutoUpdate[2].Position - game:GetService("Players").LocalPlayer.Character.HumanoidRootPart.Position).Magnitude <= 1 then
                            BringMobFarm = false
                            wait(0.2)
                            game:GetService('ReplicatedStorage').Remotes.CommF_:InvokeServer("StartQuest", AutoUpdate[4], AutoUpdate[1]) wait(0.5)
                            __FunctionMain__:ToTarget(AutoUpdate[7][1] * CFrame.new(0,30,20))
                        end
                    end
				end)
                if not Success then
                    print(Error)
                end
			end
		end,
	}
end,}

local Win = library:XoxHi()
local MainTab = Win:CreateTab("Home")

__CofigsUI = { __IsFunction = function(self,x)
	if x == "Toggle" then
		return {
			__AddToggle = function(self, Text, Values, callback , page)
				page:AddToggle({Name = Text,Flag = "",Value = _G.Settings[Values],Callback = callback or function() end})			
			end,
		}
	elseif x == "Lable" then
		return {
			__AddLabel = function( self, Text, page)
				page:AddLabelX({Name = Text})
			end,
		}
	end
end}

local MainSection = MainTab:CreateSection({
	Name = "🌍 General 🌍",
	Side = "Left"
})

MainSection:AddLabelX({
	Name = "🌍 Main Funtion 🌍"
})

__CofigsUI:__IsFunction("Toggle"):__AddToggle("Auto Farm Level \n ออโต้ฟาร์ม", "Auto_Farm_Level", function(value)
    _G.Auto_Farm_Level = value;_G.Settings.Auto_Farm_Level = value;
    task.spawn(function() __Main_Farm:__IsFunction():AutoFarm() end);__FunctionMain__:StopTween(_G.Auto_Farm_Level)
    SaveSettings()
end,MainSection)


local SettingSection = MainTab:CreateSection({
	Name = "Settings",
	Side = "Right"
})


local SelectWeapon
local Weapon = {
	"Melee",
	"Sword",
	"Fruit"
}

task.spawn(function()
	while wait() do
		pcall(function()
			if SelectWeapon == "Melee" then
				for i ,v in pairs(game.Players.LocalPlayer.Backpack:GetChildren()) do
					if v.ToolTip == "Melee" then
						if game.Players.LocalPlayer.Backpack:FindFirstChild(tostring(v.Name)) then
							_G.Select_Weapon = v.Name
						end
					end
				end
			elseif SelectWeapon == "Sword" then
				for i ,v in pairs(game.Players.LocalPlayer.Backpack:GetChildren()) do
					if v.ToolTip == "Sword" then
						if game.Players.LocalPlayer.Backpack:FindFirstChild(tostring(v.Name)) then
							_G.Select_Weapon = v.Name
						end
					end
				end
			elseif SelectWeapon == "Fruit" then
				for i ,v in pairs(game.Players.LocalPlayer.Backpack:GetChildren()) do
					if v.ToolTip == "Blox Fruit" then
						if game.Players.LocalPlayer.Backpack:FindFirstChild(tostring(v.Name)) then
							_G.Select_Weapon = v.Name
						end
					end
				end
			else
				for i ,v in pairs(game.Players.LocalPlayer.Backpack:GetChildren()) do
					if v.ToolTip == "Melee" then
						if game.Players.LocalPlayer.Backpack:FindFirstChild(tostring(v.Name)) then
							_G.Select_Weapon = v.Name
						end
					end
				end
			end
		end)
	end
end)

SettingSection:AddDropdown({
	Name = "Select Weapon \n เลือกอาวุธ",
	Flag = "Select_Weapon",
	Value = _G.Settings.SelectWeapon,
	List = Weapon,
	Callback = function(value)
		SelectWeapon = value
		_G.Settings.SelectWeapon = value
		SaveSettings()
	end
})

_G.TweenSpeed = _G.Settings.TweenSpeed or 300
SettingSection:AddSlider({
	Name = "Select Speed Tween \n ความเร็วการบิน",
	Value = _G.TweenSpeed,
	Min = 1,
	Max = 500,
	Textbox = true,
	Format = function(value)
		_G.Settings.TweenSpeed = value
		SaveSettings()
	end
})


_G.FastAttack = true
SettingSection:AddToggle{
	Name = "Fast Attack \n ตีเร็ว",
	Flag = "Fast_Attack",
	Value = _G.Settings.FastAttack,
	Callback  = function(value)
		_G.FastAttack = value
		Settings.FastAttack = value
		Settings.NewFastAttack = value
		Settings.NoAttackAnimation = not value
		Settings.DamageAura = value
		_G.Settings.FastAttack = value
		SaveSettings()
	end
}

task.spawn(function()
	local v28 = getupvalue(require(Client.PlayerScripts.CombatFramework), 2);
	local v29 = function()
	end;
	local v30 = game:GetService("ReplicatedStorage").RigControllerEvent;
	local v31 = Instance.new("Animation");
	local v32 = 0;
	local v33 = 0;
	local v34;
	local v35 = 0;
	local v36 = 350;
	local TryLag = 0;
	local v37 = function()
		local v48 = v34.currentWeaponModel.Name;
		local v49 = {combat=0.01};
		v33 = tick() + ((0.01 and v49[v48:lower()]) or 0.01 or 0.285) + ((TryLag / v36) * 0.3);
		v30.FireServer(v30, "weaponChange", v48);
		TryLag += 1
		task.delay((0.01 or 0.285) + ((TryLag + (0.1 / v36)) * 0.3), function()
			TryLag -= 1
		end);
	end;
	if not shared.orl then
		shared.orl = RL.wrapAttackAnimationAsync;
	end
	if not shared.cpc then
		shared.cpc = PC.play;
	end
	if not shared.dnew then
		shared.dnew = DMG.new;
	end
	if not shared.attack then
		shared.attack = RigC.attack;
	end
	RL.wrapAttackAnimationAsync = function(v50, v51, v52, v53, v54)
		if Settings.NoAttackAnimation then
			PC.play = shared.cpc;
			return shared.orl(v50, v51, v52, 65, v54);
		end
		local v55 = (Settings.DamageAura and Settings.DamageAuraRadius) or 65;
		if (canHits and (#canHits > 0)) then
			PC.play = function()
			end;
			v50:Play(0.00075, 0.01, 0.01);
			v54(canHits);
			wait(v50.length * 0.5);
			v50:Stop();
		end
	end;
	while task.wait() do
		if (#canHits > 0) then
			v34 = v28.activeController;
			if (v34 and v34.equipped and (not Char.Busy.Value or Client.PlayerGui.Main.Dialogue.Visible) and (Char.Stun.Value < 1) and v34.currentWeaponModel) then
				if Settings.DamageAura then
					if (Settings.NewFastAttack and (tick() > v33)) then
						v37();
					end
					if (((tick() - v35) > 0.5) or not Settings.FastAttack) then
						v34.timeToNextAttack = -math.huge;
						v34.hitboxMagnitude = 100;
						pcall(task.spawn, v34.attack, v34);
						v35 = tick();
						continue;
					end
					local v69 = v34.anims.basic[3];
					local v70 = v34.anims.basic[2];
					local v71 = v69 or v70;
					v31.AnimationId = v71;
					local v73 = v34.humanoid:LoadAnimation(v31);
					v73:Play(0.00075, 0.01, 0.01);
					v30.FireServer(v30, "hit", canHits, (v69 and 3) or 2, "");
					delay(1, function()
						v73:Stop();
					end);
				end
			end
		end
	end
end);

SettingSection:AddToggle{
	Name = "Bring Mob \n ดึงมอน",
	Flag = "Bring_Mob",
	Value = _G.Settings.Brimob,
	Callback  = function(value)
		_G.Brimob = value
		_G.Settings.Brimob = value
		SaveSettings()
	end
}
