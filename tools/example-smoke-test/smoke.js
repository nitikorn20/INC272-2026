const fs = require("fs");
const http = require("http");
const net = require("net");
const path = require("path");
const { spawn } = require("child_process");
const { chromium } = require("playwright");

const repoRoot = path.resolve(__dirname, "..", "..");
const examplesRoot = path.join(repoRoot, "examples");
const mockServerDir = path.join(repoRoot, "simulator", "mock-hardware-server");
const mockPort = 3000;
const mode = process.argv[2] || "all";
const listedPaths = process.argv.slice(3);

function walkIndexFiles(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walkIndexFiles(full));
    if (entry.isFile() && entry.name === "index.html") out.push(full);
  }
  return out;
}

function getMimeType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const map = {
    ".css": "text/css; charset=utf-8",
    ".html": "text/html; charset=utf-8",
    ".js": "application/javascript; charset=utf-8",
    ".json": "application/json; charset=utf-8",
    ".png": "image/png",
    ".svg": "image/svg+xml",
    ".txt": "text/plain; charset=utf-8"
  };
  return map[ext] || "application/octet-stream";
}

function startStaticServer() {
  return new Promise((resolve, reject) => {
    const server = http.createServer((req, res) => {
      const requestPath = decodeURIComponent((req.url || "/").split("?")[0]);
      const cleanPath = requestPath === "/" ? "/index.html" : requestPath;
      const fullPath = path.join(repoRoot, cleanPath);

      if (!fullPath.startsWith(repoRoot)) {
        res.writeHead(403);
        res.end("Forbidden");
        return;
      }

      fs.readFile(fullPath, (err, content) => {
        if (err) {
          res.writeHead(404);
          res.end("Not found");
          return;
        }
        res.writeHead(200, { "Content-Type": getMimeType(fullPath) });
        res.end(content);
      });
    });

    server.on("error", reject);
    server.listen(0, "127.0.0.1", () => {
      const address = server.address();
      resolve({
        server,
        port: typeof address === "object" && address ? address.port : 8000
      });
    });
  });
}

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function canConnect(port) {
  return new Promise(resolve => {
    const socket = net.createConnection({ host: "127.0.0.1", port }, () => {
      socket.destroy();
      resolve(true);
    });

    socket.on("error", () => {
      socket.destroy();
      resolve(false);
    });
  });
}

async function startMockServer() {
  if (await canConnect(mockPort)) {
    return { child: null, reused: true };
  }

  const child = spawn(process.execPath, ["server.js"], {
    cwd: mockServerDir,
    stdio: "ignore"
  });

  await wait(1500);
  if (child.exitCode !== null) {
    throw new Error("Mock server exited before tests started.");
  }
  return { child, reused: false };
}

async function testPage(relPath, staticPort) {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  const errors = [];
  const requestFailures = [];
  const url = `http://127.0.0.1:${staticPort}/${relPath.replace(/\\\\/g, "/")}`;

  page.on("pageerror", err => errors.push(`pageerror: ${err.message}`));
  page.on("console", msg => {
    if (msg.type() === "error") errors.push(`console: ${msg.text()}`);
  });
  page.on("requestfailed", req => {
    requestFailures.push(`requestfailed: ${req.url()} :: ${req.failure()?.errorText || "unknown"}`);
  });

  const response = await page.goto(url, { waitUntil: "load", timeout: 15000 });
  if (!response) errors.push("no response");
  else if (response.status() >= 400) errors.push(`http ${response.status()}`);
  await page.waitForTimeout(1200);
  await browser.close();

  return {
    relPath,
    ok: errors.length === 0 && requestFailures.length === 0,
    errors,
    requestFailures
  };
}

function getTargets() {
  if (mode === "list") return listedPaths;
  return walkIndexFiles(examplesRoot).map(file => path.relative(repoRoot, file));
}

async function main() {
  const staticServer = await startStaticServer();
  let mockServer;

  try {
    mockServer = await startMockServer();
    const targets = getTargets();
    const results = [];

    for (const target of targets) {
      results.push(await testPage(target, staticServer.port));
    }

    const failed = results.filter(result => !result.ok);
    console.log(JSON.stringify({
      total: results.length,
      passed: results.length - failed.length,
      failed,
      mockServerReused: mockServer.reused,
      staticPort: staticServer.port
    }, null, 2));

    if (failed.length > 0) process.exitCode = 1;
  } finally {
    if (mockServer && mockServer.child && mockServer.child.exitCode === null) {
      mockServer.child.kill();
    }
    await new Promise(resolve => staticServer.server.close(resolve));
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
