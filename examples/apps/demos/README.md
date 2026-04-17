# Demos

Twelve incremental teaching demos, organized as a step-by-step progression.

Demos 01–06 cover LED and button widgets. Demos 07–10 cover gauges and plotters. Demos 11–12 cover knobs and grid layout.

Each demo folder contains `index.html` and `main.js`. The top comment in `main.js` explains what the demo covers and which demo to look at next.

* * *

## Demo List

### LED and Button Widgets (Demos 01–06)

| Demo | Name | Simulator | What It Demonstrates |
|------|------|-----------|----------------------|
| [demo01](./demo01_create_leds/) | Create LEDs | No | Create Led widgets, toggle state in the browser with `setStatus` and `toggleStatus` |
| [demo02](./demo02_control_leds/) | Control LEDs | Yes — LED | Read and write LED state on the simulator using `ledGet` and `ledWrt` |
| [demo03](./demo03_create_buttons/) | Create Buttons | No | Create Button widgets, handle click events with callbacks |
| [demo04](./demo04_control_buttons/) | Control Buttons | Yes — LED | Connect button callbacks to `ledInv` to toggle simulator LEDs |
| [demo05](./demo05_led_indicator/) | LED Indicator | Yes — LED | Combine LED indicators with control buttons, read back state after each toggle |
| [demo06](./demo06_led_monitor/) | LED Monitor | Yes — LED | Add continuous round-robin polling to keep indicators in sync with the simulator |

### Gauge and Plotter Widgets (Demos 07–10)

| Demo | Name | Simulator | What It Demonstrates |
|------|------|-----------|----------------------|
| [demo07](./demo07_create_gauges/) | Create Gauges | No | Create Gauge widgets, update values with `setValue` using random data |
| [demo08](./demo08_gauges_adc/) | Gauges and ADC | Yes — ADC | Connect gauges to live ADC values using `adcCallback`, scale 0–1023 to 0–100 |
| [demo09](./demo09_create_plotter/) | Create Plotter | No | Create a Plotter widget, feed it data points with `addPoint`, use synthetic sine data |
| [demo10](./demo10_plotter_adc/) | Plotter and ADC | Yes — ADC | Connect the plotter to live ADC values using `adcCallback` |

### Knob and Layout Widgets (Demos 11–12)

| Demo | Name | Simulator | What It Demonstrates |
|------|------|-----------|----------------------|
| [demo11](./demo11_create_knobs/) | Create Knobs | No | Create Knob widgets, link knob position to gauge values. See `web06` for PWM control. |
| [demo12](./demo12_grids/) | Grid Layout | No | Use the Grids widget to arrange other widgets in rows and columns |

* * *

## Progression Map

```
UI only ─────────────────────────────── with simulator
   │                                         │
demo01  →  demo02   LED control
demo03  →  demo04   button control
           demo05   LED + button together
           demo06   + continuous polling

demo07  →  demo08   gauge + ADC
demo09  →  demo10   plotter + ADC

demo11              knob (UI) → see web06 for PWM
demo12              grid layout
```

* * *

## Notes

- Demos with simulator require the mock hardware server running at `ws://127.0.0.1:3000/ecclab`
- Each demo has multiple numbered examples (`example1`, `example2`, …) — only one is active by default
- Switch examples by commenting/uncommenting the calls inside `init()`
- See [web_apps](../web_apps/README.md) for complete starter applications using the same patterns
