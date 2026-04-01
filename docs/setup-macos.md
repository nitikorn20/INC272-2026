# macOS Setup

## 1. Install Node.js

Official download page:

- https://nodejs.org/en/download

Recommended path:

1. Open the official Node.js download page.
2. Download the current `LTS` macOS installer, typically the macOS `.pkg`.
3. Run the installer.
4. Follow the default installation steps unless you have a specific reason to change them.
5. Close and reopen Terminal after installation.

## 2. Verify Node.js

Open Terminal and run:

```bash
node -v
npm -v
```

Expected result:

- both commands print version numbers

## 3. Install Visual Studio Code

Official download page:

- https://code.visualstudio.com/Download

Install VS Code for macOS and move it to `Applications` if needed.

## 4. Install the Live Server extension

Official marketplace page:

- https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer

Inside VS Code:

1. Open the Extensions panel.
2. Search for `Live Server`.
3. Install the extension by `Ritwick Dey`.

## 5. Start the mock hardware server

Open Terminal in the repository root and run:

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
python3 -m http.server 8000
```

## 7. Test the examples

Start with:

- `examples/html/ex01_html_structure/index.html`
- `examples/css/ex03_css_external/index.html`
- `examples/js/ex02_extjs/index.html`
- `examples/apps/web_apps/web01_getting_started/index.html`
- `examples/apps/web_apps/web03_psw_led_indicators/index.html`
- `examples/apps/web_apps/web04_adc_gauges/index.html`

## 8. Expected result

- the basic examples open without browser errors
- the web app examples connect while the mock server is running
- switch and ADC examples show changing values or states over time
