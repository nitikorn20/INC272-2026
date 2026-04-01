# Example Smoke Test

This folder contains a rerunnable smoke test for the example pages used in `INC272-2026`.

## Purpose

Use this tool when you want to verify that:

- the example pages still load correctly
- the mock simulator still supports the assigned starter apps
- the student-facing workflow still works after repository changes

## How It Works

The script:

1. starts a temporary static file server for the repository
2. starts the mock hardware server, or reuses an existing one on port `3000`
3. opens pages in a headless browser
4. reports page errors, console errors, and failed requests

Run one smoke-test command at a time. The tool uses port `3000` for the mock server and automatically selects a free local port for the temporary static file server.

## Setup

Run:

```bash
cd tools/example-smoke-test
npm install
```

## Commands

Run all example pages:

```bash
npm test
```

Run only the Week 01 examples:

```bash
npm run test:week1
```

Run only the Week 02 examples:

```bash
npm run test:week2
```
