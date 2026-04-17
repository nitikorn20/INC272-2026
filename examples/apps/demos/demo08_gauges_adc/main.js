// Demo 08 — Gauges Connected to ADC (via telemetry)
// Purpose: display live ADC readings on gauge widgets using adcCallback.
// The simulator broadcasts ADC values automatically every 500 ms — no polling needed.
// ADC range 0–1023 is scaled to 0–100 before being applied to the gauge.

// Gauges array is declared at module scope so UpdateGauge() can access it
let Gauges = [];

function init(link, ui) {
    example1(link, ui);
}

function example1(link, ui) {
    Gauges = createGauges(link, ui);
}

// Called by adcCallback each time a new ADC value arrives from the simulator
function UpdateGauge(ch, val) {
    val = val * 100 / 1023; // scale ADC range 0–1023 to gauge range 0–100
    Gauges[3-ch].setValue(val); // ch=0 → Gauges[3], ch=1 → Gauges[2], etc.
}

// Create four gauge widgets — one per ADC channel
function createGauges(link, ui) {
    const classes = ['danger', 'warning', 'success', 'info'];
    const gauges = [];
    classes.forEach(c => {
        const g = new Gauge({
            className: c
        });
        gauges.push(g);
    });
    return gauges;
}

function main(ui) {
    const link = new WSLink({
        conCallback: (ws) => { },
        datCallback: (ws, evt) => { },
        ledCallback: (ch, sts) => { },
        pswCallback: (ch, sts) => { },
        // adcCallback fires once per channel per broadcast cycle (every 500 ms)
        // Parameters: ch = channel id (0–3), val = raw ADC value (0–1023),
        //             dif = change since last broadcast, dir = "inc" or "dec"
        adcCallback: (ch, val, dif, dir) => {
            UpdateGauge(ch, val);
        }
    });
    init(link, ui);
}
