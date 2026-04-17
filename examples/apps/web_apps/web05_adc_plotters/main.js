// Web App 05 — ADC Plotters
// Purpose: plot live ADC readings from all four channels on a single time-series chart.
// Uses polling (adcGet) instead of automatic telemetry — the app requests each
// channel value explicitly every 1000 ms, then plots all four together.

/*
// Simple version: one plotter with random data on channel 1 only.
// Values below min (e.g. -50) hide that channel's line on the plotter.
function main() {

    const p1 = new Plotter({
        min    : 0,
        max    : 100,
        samples: 20,
        step   : 5
    });

    p1.clear();

    setInterval( () => {
        let v0 = Math.random()*100;
        p1.addPoint([-50, v0, -50, -50]); // channel order: [0, 1, 2, 3]
        // channel 0: red   channel 1: green
        // channel 2: blue  channel 3: yellow
    }, 200 );
}
*/

function main() {
    const p1 = new Plotter({
        min: 0,
        max: 100,   // values are scaled from 0–1023 to 0–100 before plotting
    });
    p1.clear();

    const link = new WSLink();
    let data = [];  // collects one value per channel before each plot update

    setInterval( () => {
        // Poll all four ADC channels in sequence.
        // Note: `id` here is an implicit global variable — use `let id` in your own code.
        for(id = 0; id < 4; id++) {
            link.adcGet(id, (uid, value, error) => {
                if(error == null) {
                    data[uid] = value * 100 / 1023; // scale to 0–100
                    // Plot only after all four channel values have been collected
                    if(data.length >= 4) {
                        p1.addPoint(data); // data = [ch0, ch1, ch2, ch3]
                        data = [];
                    }
                }
            });
        }
    }, 1000); // poll interval: 1000 ms
}
