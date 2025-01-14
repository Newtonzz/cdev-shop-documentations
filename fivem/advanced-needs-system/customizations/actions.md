# Actions

Actions can be customized in:

```
/public/config.lua
```

or directly in:

```
/public/client/interactions
```

***



<details>

<summary>Actions with Animations</summary>

These actions include:

* **peeOnFloor**
* **peeInToilet**
* **poopOnFloor**
* **poopInToilet**
* **sleep**
* **bathtub**
* **washHands**

</details>



**Customization Options:**

* Enable/Disable specific actions
* Configure animation duration
* Add "Locations" for actions in areas without props (e.g., MLO shells)

**Example Configuration:**

```lua
poopInToilet = {
    Enabled = true,  -- Set to 'false' to disable
    Options = {
        AnimationDuration = 8000,  -- Duration of animation in milliseconds
    },
    Locations = {
        vector4(-1335.05, -1312.41, 4.27, 286.00),  -- Add specific locations
    }
},
```

***



## OTHER ACTIONS

<details>

<summary>Passive Actions</summary>

Passive actions include:

* **socialTalking**
* **socialAreas**
* **stressAreas**

</details>



**Social Talking**

Utilizes Mumble Voip to monitor player speech:

* **DecreasePerMinuteNotTalking**: Reduces "social" stat per minute of silence (default: 0.02).
* **IncreasePerTenSecondsTalking**: Increases "social" stat per 10 seconds of talking (default: 0.5).



**Social Areas**

Areas where the "social" stat increases passively.

Example:

```lua
socialAreas = {
    Enabled = true,
    Options = {
        IncreasePerMinute = 0.1,
    },
    Locations = {
        {
            position = vector3(-1386.04, -1331.41, 4.15),
            radius = 35.0,  -- Area radius in meters
        }
    }
}
```

**Stress Areas**

Areas where the "stress" stat increases passively.

Example:

```lua
stressAreas = {
    Enabled = true,
    Options = {
        IncreasePerMinute = 0.1,
    },
    Locations = {
        {
            position = vector3(-1386.04, -1331.41, 4.15),
            radius = 35.0,
        }
    }
}
```

