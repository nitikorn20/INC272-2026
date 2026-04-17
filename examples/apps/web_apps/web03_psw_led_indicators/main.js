// Web App 03 — PSW LED Indicators
// Purpose: display push-switch states from the simulator as LED indicators.
// The simulator broadcasts PSW state changes automatically — no polling needed.
// pswCallback fires once per channel when the simulator toggles a switch.
// uid mapping: leds[3-ch] maps channel 0 → rightmost LED (display order right-to-left).

function main() {

    //                    0         1         2         3
    const labels = ["PSW #3", "PSW #2", "PSW #1", "PSW #0"];
    const colors = ["green", "yellow", "violet", "blue"];

    const leds = [];

    labels.map( (txt, idx) => {

        const led = new Led({
            label: txt,
            type: colors[idx],
            uid: 3-idx
        });

        leds.push(led);
    });

    // pswCallback fires automatically when the simulator broadcasts switch states.
    // The simulator toggles each PSW channel on its own at different intervals.
    const link = new WSLink({
        pswCallback: (ch, sts) => {
            leds[3-ch].setStatus(sts);
        }
    });

}
