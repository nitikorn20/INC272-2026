# [Project Title]

> Copy this file into your project folder and rename it `README.md`.
> Fill in every section. Remove this instruction line before submitting.

* * *

## Group Information

| | |
|---|---|
| Group name | |
| Member 1 | Name — Student ID |
| Member 2 | Name — Student ID |
| Member 3 | Name — Student ID |
| Course | INC272: Web-Based IoT Applications (2026) |

* * *

## Project Goal

Write one or two sentences describing what this application does.
Be specific: what does it monitor, what does it control, and for what purpose?

* * *

## Simulator Features Used

Check every feature your project actually uses. **At least 2 features are required.**

- [ ] LED — 4 channels, toggle on/off
- [ ] PSW — 4 push switches, read state
- [ ] ADC — 4 analog channels, read sensor values
- [ ] PWM — 4 channels, control duty ratio

* * *

## Interface Features

### Monitoring Elements

List each element that reads and displays data from the simulator.

| Element | What It Shows | Simulator Feature |
|---------|--------------|-------------------|
| e.g. Gauge | ADC channel 0 voltage level | ADC ch.0 |

### Control Elements

List each element that sends a command to the simulator.

| Element | What It Does | Command Sent |
|---------|-------------|--------------|
| e.g. Toggle button | Turn LED 0 on or off | `led,0,2` |

* * *

## How to Run

1. Start the mock hardware server:
   ```bash
   cd simulator/mock-hardware-server
   npm start
   ```
2. Open `index.html` using VS Code Live Server.
3. Check the browser console — a WebSocket connection message should appear.
4. Check the server terminal — `[CONNECT]` should be printed.

* * *

## File Structure

List the main files in your project and briefly describe each one.

```
project-folder/
├── index.html      — main page
├── main.js         — application logic
└── ...
```

* * *

## Known Limitations

List anything that does not work as intended, or features you planned but did not complete.
If everything works, write "None".

* * *

## Screenshots

Add one or two screenshots of the running application.
In Markdown, use: `![description](path/to/image.png)`
