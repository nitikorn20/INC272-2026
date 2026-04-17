# Project Examples

This page describes example project ideas that fit the course scope. Use these as a reference when forming and scoping your group project.

These are descriptions only. No code is provided. Each example shows what a well-scoped, passing project looks like.

* * *

## What a Good Project Looks Like

A passing project:

- has one clear goal
- works end-to-end during the demo
- uses HTML, CSS, and JavaScript
- connects to the mock simulator or another approved data source
- includes at least one monitoring element and at least one control element
- can be explained clearly in the demo

A failing project is one that is too ambitious to finish, does not work during the demo, or cannot be explained by the team.

* * *

## Example A: LED Control Panel

**Goal:** A browser-based panel that lets a user turn individual LEDs on and off and see their current states.

**Interface:**

- four LED indicator icons, one per channel
- four toggle buttons, one per LED
- a status area showing the last command sent and the response received

**Monitoring element:** LED state indicators that update to reflect the actual simulator state after each command.

**Control element:** Toggle buttons that send `led,<id>,2` (toggle) to the simulator.

**What makes this a good scope:**

- one screen, one clear purpose
- straightforward command and response cycle
- easy to demonstrate: press a button, see the indicator change

**What would make this too big:**

- adding a scheduling system
- adding user authentication
- adding logging to a backend database

* * *

## Example B: ADC Monitor Dashboard

**Goal:** A dashboard that continuously reads and displays ADC values from multiple channels.

**Interface:**

- four gauge or chart elements, one per ADC channel
- channel labels and current value readouts
- a simple start/stop polling button

**Monitoring element:** Gauges or charts that update at a fixed interval using values from `adc,<id>` responses.

**Control element:** Start/stop button that begins or pauses the polling loop.

**What makes this a good scope:**

- uses the continuous ADC behavior of the simulator naturally
- demonstrates real-time update patterns
- clear and readable output

**What would make this too big:**

- adding data export to CSV or a database
- adding configurable alert thresholds per channel
- building a login and user management system

* * *

## Example C: Mixed Control and Monitoring Interface

**Goal:** A single-screen interface that combines LED control, switch monitoring, and one ADC readout.

**Interface:**

- a switch status area showing the state of push switches
- an ADC value display for one channel
- LED control buttons for two channels
- a connection status indicator

**Monitoring elements:** Switch state display and ADC value readout.

**Control elements:** LED toggle buttons.

**What makes this a good scope:**

- demonstrates multiple device types in one view
- shows how a real IoT dashboard combines monitoring and control
- still fits on one screen with a clear layout

**What would make this too big:**

- adding all four switch channels, all four ADC channels, and all four LED channels with additional controls
- building a multi-page application with navigation
- adding backend persistence or user accounts

* * *

## Scope Decision Guide

Use this to check whether your project idea is appropriately sized.

| Question | Acceptable Answer |
|----------|------------------|
| Can you describe the project goal in one sentence? | Yes |
| Does the demo fit within a few minutes? | Yes |
| Does the project require only HTML, CSS, and JavaScript? | Yes |
| Can the project be completed within the onsite implementation period? | Yes |
| Does the project include at least one monitoring element? | Yes |
| Does the project include at least one control element? | Yes |

If any answer is "no", reconsider the scope before confirming with the instructor.

* * *

## Reminder

Confirm your project scope with the instructor during Week 04. A smaller project with a reliable demo is better than an ambitious project that does not work on demo day.
