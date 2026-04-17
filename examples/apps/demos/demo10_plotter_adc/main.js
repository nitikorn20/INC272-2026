// Demo 10 — Plotter Connected to ADC (via telemetry)
// Purpose: plot live ADC readings from all four channels using adcCallback.
// The simulator broadcasts each ADC channel separately — the Data array accumulates
// the latest value per channel, and the plotter is updated on every new broadcast.
// Note: addPoint is called once per channel per cycle, so the chart scrolls
// at the broadcast rate (every 500 ms × 4 channels = 4 points per broadcast cycle).

// Module-level globals so both init() and updatePlot() can access them
let Plot = null;
let Data = [0, 0, 0, 0]; // holds the latest value for each channel [ch0, ch1, ch2, ch3]

function init(link) {
    example1(link);
}

function example1(link) {
    Plot = createPlot();
}

// Create and return a Plotter widget
function createPlot() {
    const plotter = new Plotter({
        min: 0,
        max: 100,   // ADC values are scaled from 0–1023 to 0–100 before plotting
        samples: 30,
        step: 5
    });
    plotter.clear();
    return plotter;
}

// Called by adcCallback each time a new ADC value arrives from the simulator
function updatePlot(ch, val) {
    val = val * 100 / 1023; // scale ADC range 0–1023 to plotter range 0–100
    Data[ch] = val;         // update this channel's entry in the shared array
    Plot.addPoint(Data);    // plot the current snapshot of all four channels
}

function main(ui) {
    const link = new WSLink({
        conCallback: (ws) => { },
        datCallback: (ws, evt) => { },
        ledCallback: (ch, sts) => { },
        pswCallback: (ch, sts) => { },
        adcCallback: (ch, val, dif, dir) => { updatePlot(ch, val); }
    });
    init(link);
}
