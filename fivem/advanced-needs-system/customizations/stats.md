# Stats

Each stat can be fully customized, including:

* Decay frequency
* Animation settings
* Disabling specific stats

**Example Configuration:**

```lua
hygiene = {
    Enabled = true,  -- Set to 'false' to disable this stat
    Options = {
        DecreaseEverySeconds = 60 * 10,  -- Frequency in seconds (default: 10 minutes)
        DecreaseAmount = 1  -- Amount decreased per tick
    }
},
```



