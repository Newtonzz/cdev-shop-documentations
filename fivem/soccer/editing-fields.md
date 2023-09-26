# Editing Fields

New and existing fields can be edited in:

`cdev_soccer/public/config/fields.lua`

## Field Structure

```lua
{
    Key = "default_field", 
    Middle = vector3(771.279, -233.283, 65.214),
    FieldZone = createBoxZone(vector3(771.29, -233.41, 66.11), 77.600000000001, 119.6, {
        name="default_field",
        heading=333,
        minZ=30.91,
        maxZ=95.91,
    }),
    AreaZone = createBoxZone(vector3(771.02, -233.89, 66.11), 39.4, 69.0, {
        name="default_field_area",
        heading=333,
        minZ=30.91,
        maxZ=95.91,
    }),
    GoaleeZoneRed = createBoxZone(vector3(744.67, -220.58, 66.11), 20.6, 8.8, {
        name="default_field_goaleered",
        heading=334,
        minZ=65.11,
        maxZ=69.11,
        }),
    GoaleeZoneBlue = createBoxZone(vector3(798.15, -247.13, 66.11), 20.0, 7.6, {
        name="default_field_goaleeblue",
        heading=333,
        minZ=65.11,
        maxZ=69.11
    }),
    BlueTeamGoalZone = createBoxZone(vector3(740.98, -218.68, 66.11), 7.4, 0.4, {
        name="default_field_goalblue",
        heading=334,
        minZ=64.11,
        maxZ=68.11
    }),
    RedTeamGoalZone = createBoxZone(vector3(801.7, -248.6, 66.11), 7.4, 0.4, {
        name="default_field_goalred",
        heading=333,
        minZ=64.11,
        maxZ=68.11
    }),
    ManagerNPC = {
        coords = vector3(772.376, -211.728, 65.114),
        heading = 166.779,
        model = "ig_djsolrobt"
    },
    Positions = {
        { index = SoccerFieldPosition.GOALEE, team = RED_TEAM, position = vector3(741.93737792969, -219.08222961426, 66.114501953125), heading = 243.72 },
        { index = SoccerFieldPosition.RIGHT_PULLBACK, team = RED_TEAM, position = vector3(746.72015380859, -228.20501708984, 66.114501953125), heading = 243.72 },
        ...
    },
    TouchlinePositions = {
        { coords = vector4(735.550, -237.454, 66.116, 355.507 ) },
        { coords = vector4(738.542, -239.043, 66.117, 0.788) },
        ...
        { coords = vector4(792.475, -266.479, 66.107, 43.26), corner = true, team = BLUE_TEAM },
        { coords = vector4(809.908, -232.213, 66.114, 123.743), corner = true, team = BLUE_TEAM },
    },
```

{% hint style="info" %}
For setting up polyzones, please follow the official Polyzone script guide [here](https://github.com/mkafrin/PolyZone/wiki/Using-the-creation-script).
{% endhint %}

* `Key` - Field identifier, must be unique to each field
* `Middle` - Origin position of the ball, the middle of the field.
* `FieldZone` - Polyzone for the field, this area must be bigger than the actual field and cover the NPC location, everything will load when the player is inside this area
* `AreaZone` - Polyzone for the area of the soccer field, if the ball leaves this area then it's "out"
* `GoaleeZoneRed` - Polyzone for the red team's goalee area, where the goalee is able to use their hands.
* `GoaleeZoneBlue` - Same as above, for blue team.
* `BlueTeamGoalZone` - Polyzone for the blue team goal, must fit exactly the inside of the goal so whenever the ball enters this zone it's considered a goal, avoid overly thin zones as there may be detection problems depending on hardware.
* `RedTeamGoalZone` - Same as above, for red team.
* `ManagerNPC` - NPC that players can interact with to start games, configure, etc.
  * `coords` - Position of the NPC
  * `heading` - Heading angle of the NPC
  * `model` - Model name of the NPC
* `Positions` - Positions for all player spots, must be generated using the command /setupfield
* `TouchlinePositions` - A list of positions that cover all the edge of the field, you can space those however you want, the script will automatically choose the closer position to where the ball left the area. Cover all the left and right side of the field, and on the front and back side of the field only add the corners with the special properties as indicated below.
  * `coords` - vector4 containing x, y, z, and heading
  * `corner` - Specify `true` if this is a corner of the field
  * `team` - If this is a corner, specify the team that it belongs to

## Using the /setupfield command

{% embed url="https://youtu.be/MNhq_ySjTjo" %}

1. Position yourself in one side of the field, at the goalee's place (avoid being too close to the goal as that will make the goalee do an own-score unintentionally), move your camera until the spots are aligned with the other side of the field
2. Right click to lock the spots in position, you may right click again if you need to re-align but keep in mind it will move the goalee spot to where you are standing at the time.
3. Head to the opposite side of the field, and use "CTRL + Scroll Wheel" to adjust the adjacent goalee's position to match the other spot.
4. Use "SHIFT + Scroll Wheel" to adjust the vertical offset of all spots and adjust their distance to your liking, ideally equally close to the center ring.
5. Use "Scroll Wheel" to adjust the horizontal offset of all spots to your liking.
6. Press "Enter" to save the generated positions to "positions.txt" in your server's root directory.
