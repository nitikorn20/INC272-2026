# Week 02: Online Simulator Familiarization

## Week Information

| Item | Information |
|------|-------------|
| Date | `13/04/2026` |
| Format | Online |
| Main Topic | mock simulator workflow and starter applications |
| Main Goal | finish the readiness task before the first onsite session |

* * *

## Learning Focus

- running the mock hardware server
- opening starter web applications
- understanding browser-to-simulator interaction
- collecting readiness evidence

* * *

## Required Preparation

Complete:

- [Week 01](../Week01/README.md)

Read:

- [Student Quick Start](../docs/student-quick-start.md)
- [Setup Guide](../docs/setup.md)
- [Mock Simulator Guide](../docs/mock-simulator.md)

* * *

## Required Learning Materials

- starter applications in `examples/apps/web_apps/`

* * *

## Required Work

### 1. Start the mock hardware server

Run:

```bash
cd simulator/mock-hardware-server
npm install
npm start
```

Expected result:

- the mock hardware server runs at `ws://127.0.0.1:3000/ecclab`
- the terminal shows `[CONNECT]`, `[RX]`, and `[TX]` lines when a browser connects and sends commands — use these to follow what is happening

### 2. Start a static file server

Use one of these approaches:

- VS Code Live Server
- `python -m http.server 8000` on Windows
- `python3 -m http.server 8000` on macOS

### 3. Open and test the assigned starter apps

Test at least:

- `examples/apps/web_apps/web01_getting_started/index.html`
- `examples/apps/web_apps/web03_psw_led_indicators/index.html`
- `examples/apps/web_apps/web04_adc_gauges/index.html`
- `examples/apps/web_apps/web05_adc_plotters/index.html`

### 4. Confirm expected behavior

Check that:

- the apps open without browser errors
- switch states or indicator states update correctly
- gauges update automatically
- plotters receive changing values over time

### 5. Make one small change

Modify one assigned example by changing one visible UI detail such as:

- a label
- a color
- a widget position
- a visible interaction detail

### 6. Save readiness evidence

Keep screenshots or notes that show:

- the simulator is running
- at least one starter app is running
- one small change was made successfully

* * *

## Readiness Task Reminder

The readiness task is checked in Week 03. If the required workflow is still not ready by the Week 03 onsite check, the readiness task receives `0`.

* * *

## Success Criteria

By the end of Week 02, students should be able to:

- run the mock hardware server
- open the assigned starter applications
- understand the basic browser-side workflow
- arrive onsite with a working local setup
