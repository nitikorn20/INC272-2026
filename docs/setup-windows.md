# Windows Setup

## 1. Install Node.js

Official download page:

- https://nodejs.org/en/download

Recommended path:

1. Open the official Node.js download page.
2. Download the current `LTS` Windows installer for your machine, typically `Windows Installer (.msi)` and `x64`.
3. Run the installer.
4. Accept the default installation unless you have a specific reason to change it.
5. Close and reopen PowerShell after installation.

## 2. Verify Node.js

Open PowerShell and run:

```bash
node -v
npm -v
```

Expected result:

- both commands print version numbers

## 3. Install Visual Studio Code

Official download page:

- https://code.visualstudio.com/Download

Install VS Code using the Windows installer.

## 4. Install the Live Server extension

Official marketplace page:

- https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer

Inside VS Code:

1. Open the Extensions panel.
2. Search for `Live Server`.
3. Install the extension by `Ritwick Dey`.

## 5. Start the mock hardware server

Open PowerShell in the repository root and run:

```bash
cd simulator/mock-hardware-server
npm install
npm start
```

Expected result:

- the terminal shows the mock WebSocket endpoint

## 6. Start a static file server

Option A: VS Code Live Server

1. Open the repository in VS Code.
2. Open an `index.html` file.
3. Right-click and choose `Open with Live Server`.

Option B: Python simple server

```bash
python -m http.server 8000
```

## 7. Confirm browser version

Use Chrome 110+, Edge 110+, or Firefox 110+. Check your version at `Settings → About`.

Older browsers may not support the WebSocket and DOM APIs used in the course examples.

## 8. Test the examples

Start with:

- `examples/html/ex01_html_structure/index.html`
- `examples/css/ex03_css_external/index.html`
- `examples/js/ex02_extjs/index.html`
- `examples/apps/web_apps/web01_getting_started/index.html`
- `examples/apps/web_apps/web03_psw_led_indicators/index.html`
- `examples/apps/web_apps/web04_adc_gauges/index.html`

## 9. Expected result

- the basic examples open without browser errors
- the web app examples connect while the mock server is running
- switch and ADC examples show changing values or states over time
