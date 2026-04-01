# Mock Hardware Simulator

## Purpose

The mock simulator replaces the default `Proteus + VSPD` workflow for the 2026 teaching path.

Its job is simple:

- behave like a small device service
- expose a WebSocket endpoint
- respond to the same style of commands expected by the legacy example apps

## Endpoint

```text
ws://127.0.0.1:3000/ecclab
```

## Simulated Channels

- `4 LEDs`
- `4 push switches`
- `4 ADC channels`
- `4 PWM channels`
- `1 buzzer state`

## Supported Commands

### LED

```text
led,<id>,0
led,<id>,1
led,<id>,2
led,<id>,3
```

Expected behavior:

- `0` clear
- `1` set
- `2` toggle
- `3` read

Typical response:

```text
ok: led,<id>,<state>
```

### Push Switch

```text
psw,<id>
```

Typical response:

```text
ok: psw,<id>,<state>
```

### ADC

```text
adc,<id>
```

Typical response:

```text
ok: adc,<id>,<value>
```

### PWM

```text
pwm,<id>,0,<frequency>
pwm,<id>,1,<duty>
pwm,<id>,2,<phase>
pwm,<id>,3,<enable>
```

Typical response:

```text
ok: pwm,<id>,<mode>,<value>
```

### Buzzer

```text
buz,<args...>
```

Typical response:

```text
ok: buz
```

## Behavioral Model

- ADC values move continuously using slow sine-like motion plus light noise.
- Push switches toggle themselves periodically so students can observe state changes.
- LED and PWM commands update internal simulator state.
- The simulator favors predictability and teaching clarity over physical realism.

## Instructor Guidance

- Use this simulator as the default demo backend.
- Keep the protocol stable unless there is a strong reason to change it.
- If protocol behavior changes, update the legacy-compatible examples and this document together.
