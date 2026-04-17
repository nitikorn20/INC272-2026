// Demo 09 — Create Plotter Widgets (UI only, no simulator)
// Purpose: learn how to create a Plotter widget and feed it data points.
// Random and synthetic values are used so the chart animates without a simulator.
// See demo10 to connect the plotter to live ADC data from the simulator.
// addPoint() takes an array of four values — one per channel [ch0, ch1, ch2, ch3].
// A value below the plotter's min (e.g. -50) hides that channel's line.

function init(link) {

    // example1(link); // one active channel
    // example2(link); // two active channels
    example3(link);    // four channels showing sine waves
}

function example1(link) {

    // One plotter with a single active channel (channel 0 = red line)
    const plotter = new Plotter({
        min: 0,
        max: 100,
        samples: 30, // number of data points visible at once
        step: 5      // horizontal pixel step between points
    });

    plotter.clear();
    setInterval(() => {
        let val = Math.random() * 100;
        plotter.addPoint([val, -50, -50, -50]); // -50 is below min → channel hidden
        // channel order: [ch0(red), ch1(green), ch2(blue), ch3(yellow)]
    }, 500);
}

function example2(link) {

    // One plotter with two active channels (ch0 and ch1)
    const plotter = new Plotter({
        min: 0,
        max: 100,
        samples: 30,
        step: 5
    });

    plotter.clear();
    setInterval(() => {
        let val0 = Math.random() * 100;
        let val1 = Math.random() * 100;
        plotter.addPoint([val0, val1, -50, -50]); // ch2 and ch3 hidden
    }, 500);
}

function example3(link) {

    // Four channels showing sine waves at increasing amplitudes
    const plotter = new Plotter({
        min: -3,
        max: +3,
        samples: 30,
        step: 5
    });

    plotter.clear();
    let t = 0.0;
    setInterval(() => {
        let s = Math.sin(Math.PI * 2 * 5 * t / 30); // sine wave, value range -1 to +1
        plotter.addPoint([s, s*1.5, s*2.0, s*2.5]);  // each channel scaled differently
        t += 0.5;
    }, 200);
}

function main(ui) {
    const link = new WSLink({
        conCallback: (ws) => { },
        datCallback: (ws, evt) => { },
        ledCallback: (ch, sts) => { },
        pswCallback: (ch, sts) => { },
        adcCallback: (ch, val, dif, dir) => { }
    });
    init(link);
}
