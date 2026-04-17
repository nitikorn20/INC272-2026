// Demo 07 — Create Gauge Widgets (UI only, no simulator)
// Purpose: learn how to create Gauge widgets and update their values.
// Random values are used so the gauges animate without needing a simulator connection.
// See demo08 to connect gauges to live ADC data from the simulator.

function init(link, ui) {

    // example1(link, ui); // one gauge
    example2(link, ui);    // four gauges
}

function example1(link, ui) {

    // One gauge updated with a random value every second
    const g = new Gauge({
        className: 'success' // Bootstrap color class
    });

    setInterval(() => {
        g.setValue(Math.random() * 100); // setValue accepts 0–100 by default
    }, 1000);
}

function example2(link, ui) {

    // Four gauges, one per color, all updated with independent random values
    const classes = ['danger', 'warning', 'success', 'info'];
    const gauges = [];
    classes.forEach(c => {
        const g = new Gauge({
            className: c
        });
        gauges.push(g);
    });

    setInterval(() => {
        gauges.forEach(g => {
            g.setValue(Math.random() * 100); // update each gauge independently
        });
    }, 1000);
}

function main(ui) {
    const link = new WSLink({
        conCallback: (ws) => { },
        datCallback: (ws, evt) => { },
        ledCallback: (ch, sts) => { },
        pswCallback: (ch, sts) => { },
        adcCallback: (ch, val, dif, dir) => { }
    });
    init(link, ui);
}
