# Troubleshooting

This page covers common problems students encounter during setup and use of the course materials.

* * *

## Mock Hardware Server

### Port 3000 is already in use

Symptom: running `npm start` shows an error like `EADDRINUSE: address already in use :::3000`.

Cause: another process is using port 3000.

Fix on Windows (PowerShell):

```powershell
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

Fix on macOS / Linux:

```bash
lsof -i :3000
kill -9 <PID>
```

Replace `<PID>` with the process ID shown in the output. Then run `npm start` again.

---

### Server starts but the browser cannot connect

Symptom: the simulator starts successfully, but the web app shows a WebSocket connection error.

Common causes and fixes:

| Cause | Fix |
|-------|-----|
| Wrong WebSocket URL in the web app | Confirm the app uses `ws://127.0.0.1:3000/ecclab` |
| Opening `index.html` as a file | Use Live Server or a static file server instead of double-clicking the file |
| Firewall blocking localhost | Temporarily disable firewall, or add an exception for port 3000 |
| Mock server not running | Open a separate terminal, navigate to `simulator/mock-hardware-server`, and run `npm start` |

---

### `npm install` fails inside the simulator folder

Symptom: running `npm install` produces errors about package resolution or network timeouts.

Fixes:

- Check internet connection.
- Try running `npm install --prefer-offline` if you have a previous cache.
- If behind a proxy, configure npm: `npm config set proxy http://your-proxy:port`
- Delete `node_modules` and `package-lock.json`, then run `npm install` again.

* * *

## Node.js

### `node` or `npm` command not found

Symptom: terminal shows `command not found` or `'node' is not recognized`.

Fixes:

- Confirm Node.js is installed at [https://nodejs.org](https://nodejs.org) (choose the LTS version).
- After installation, close and reopen the terminal completely.
- On Windows, check that the Node.js installer added Node to the PATH. You can verify in System Properties → Environment Variables.

---

### Wrong Node.js version

Symptom: `node -v` shows a version lower than `v18`.

Fix: download and install the current LTS release from [https://nodejs.org](https://nodejs.org). The LTS version is recommended for this course.

* * *

## Static File Server / Live Server

### Live Server does not start

Symptom: right-clicking `index.html` in VS Code does not show the `Open with Live Server` option.

Fixes:

- Confirm the Live Server extension is installed in VS Code (search for `Live Server` by Ritwick Dey in the Extensions panel).
- Reload VS Code after installing the extension.

---

### Live Server opens but the page is blank or broken

Symptom: the browser opens but the page shows errors or nothing loads.

Common causes and fixes:

| Cause | Fix |
|-------|-----|
| Wrong file opened with Live Server | Open the specific `index.html` for the example you want |
| JavaScript errors in browser console | Open DevTools (F12) and check the Console tab for details |
| Mock server not running | Start the mock server before opening WebSocket-based apps |

* * *

## Browser

### WebSocket error in the browser console

Symptom: browser console shows `WebSocket connection to 'ws://127.0.0.1:3000/ecclab' failed`.

Fixes:

- Confirm the mock server is running in a separate terminal.
- Confirm the WebSocket URL in the app matches `ws://127.0.0.1:3000/ecclab` exactly.
- Try reloading the page after the server is fully started.

---

### Example pages show no output or frozen values

Symptom: ADC gauges or switch indicators do not update.

Fixes:

- Confirm the mock server is running.
- Check the browser console for errors.
- Reload the page to restart the WebSocket connection.

* * *

## General Tips

- Always start the mock server before opening WebSocket-dependent apps.
- Keep two terminal windows open: one for the mock server, one for anything else.
- Use Chrome or Edge for best compatibility with the example apps.
- If something breaks unexpectedly, reload the page and check the browser console (F12) first.
- If `npm install` leaves a broken `node_modules`, delete the folder and run `npm install` again.
