# Web Apps

Six complete starter applications. Each app demonstrates one core browser-to-simulator interaction pattern.

Run the mock hardware server before opening any app that connects to the simulator.

```bash
cd simulator/mock-hardware-server
npm start
```

Open each `index.html` using VS Code Live Server or a static file server.

* * *

## App List

| App | Name | Simulator Features | What It Demonstrates |
|-----|------|--------------------|----------------------|
| [web01](./web01_getting_started/) | Getting Started | LED | Connect to simulator, auto-toggle LED 0 every 500 ms. Starting point to verify the setup works. |
| [web02](./web02_buttons_led_control/) | Buttons and LED Control | LED | Four buttons each toggle one LED. Shows button-to-command flow and `uid` mapping. |
| [web03](./web03_psw_led_indicators/) | PSW LED Indicators | PSW | Four LED indicators that reflect push-switch states from the simulator automatically. |
| [web04](./web04_adc_gauges/) | ADC Gauges | ADC | Four gauges displaying live ADC channel values via telemetry callback. |
| [web05](./web05_adc_plotters/) | ADC Plotters | ADC | One plotter showing all four ADC channels using manual polling. |
| [web06](./web06_knob_pwm/) | Knob and PWM Control | PWM | Four knobs controlling PWM duty ratio on four channels. |

* * *

## Suggested Study Order

Follow the apps in order. Each one introduces one new simulator feature:

```
web01 → web02 → web03 → web04 → web05 → web06
  LED     LED     PSW     ADC     ADC     PWM
(auto)  (button)         (gauge) (plot)  (knob)
```

* * *

## Notes

- All apps connect to `ws://127.0.0.1:3000/ecclab`
- The simulator terminal shows `[RX]` and `[TX]` lines for each command sent and received
- See [Mock Simulator Guide](../../../docs/mock-simulator.md) for the full command reference
