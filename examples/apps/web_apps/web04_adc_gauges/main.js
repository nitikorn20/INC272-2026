// Web App 04 — ADC Gauges
// Purpose: display live ADC readings from all four channels using gauge widgets.
// Data arrives automatically via adcCallback (simulator broadcasts every 500 ms).

/*
// Simple version: one gauge monitoring ADC channel 2 only.
function main() {

    const gauge1 = new Gauge({
        max: 1023,
        ticksMajor: 200,
        ticksMinor: 40,
        className: "info"
    });

    const link = new WSLink({

        adcCallback: (uid, val, delta, dir, err) => {
            if(err == null) {
                // let percent = val*100/1023; // scale 0–1023 to 0–100
                // gauge1.setValue(percent);
                if(uid == 2) {          // respond only to channel 2
                    gauge1.setValue(val);
                }
            }
        }
    });
}
*/

function main() {
    //              0           1         2        3   — gauge color per channel
    const cls = ["success", "warning", "info", "danger"];
    const gauges = [];

    // Create four gauges, one per ADC channel (uid 3, 2, 1, 0 left to right)
    cls.map( (c, i) => {

        const gauge = new Gauge({
            min: 0,
            max: 1023,          // ADC range: 0–1023 (10-bit)
            ticksMajor: 200,
            ticksMinor: 40,
            className: c,
            uid: 3-i            // i=0 → uid=3, i=1 → uid=2, i=2 → uid=1, i=3 → uid=0
        });
        gauges.push(gauge);
    });

    const link = new WSLink({

        // adcCallback fires each time the simulator broadcasts an ADC value.
        // Parameters: uid = channel id, val = current value (0–1023),
        //             delta = change since last broadcast, dir = "inc" or "dec"
        adcCallback: (uid, val, delta, dir, err) => {
            if(err == null) {
                let idx = 3-uid; // map channel uid back to gauges array index
                gauges[idx].setValue(val);
            }
        }
    });

    // adcSetAutoDetection: trigger adcCallback only when the value changes by
    // more than `delta` within `interval` ms. Uncomment to reduce update frequency.
    // link.adcSetAutoDetection(0, 5, 1000); // channel, delta threshold, interval ms
    // link.adcSetAutoDetection(1, 5, 1000);
    // link.adcSetAutoDetection(2, 5, 1000);
    // link.adcSetAutoDetection(3, 5, 1000);
}
