# Setup Guide

Use the OS-specific guides for full instructions:

- [Windows Setup](./setup-windows.md)
- [macOS Setup](./setup-macos.md)

## Required Tools

- Node.js
- Visual Studio Code or equivalent
- Chrome 110+, Edge 110+, Firefox 110+, or another modern browser
- optional: VS Code Live Server

## Minimal Setup Path

### 1. Clone or download the repository

### 2. Verify Node.js

```bash
node -v
npm -v
```

### 3. Start the mock hardware server

```bash
cd simulator/mock-hardware-server
npm install
npm start
```

### 4. Open an example app

Use:

- VS Code Live Server, or
- a simple static server such as:
  - `python -m http.server 8000` on Windows
  - `python3 -m http.server 8000` on macOS

### 5. Test with a starter app

Recommended first app:

```text
examples/apps/web_apps/web01_getting_started
```

Then continue with:

```text
examples/apps/web_apps/web03_psw_led_indicators
examples/apps/web_apps/web04_adc_gauges
examples/apps/web_apps/web05_adc_plotters
```

## Default Teaching Assumption

Students do **not** need:

- Proteus
- Virtual Serial Port Driver
- Windows-only serial-bridge tools

Those may still exist in legacy materials, but they are not part of the default 2026 course path.
