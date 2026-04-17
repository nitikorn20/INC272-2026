// Web App 06 — Knob and PWM Control
// Purpose: use four knobs to control the PWM duty ratio on four channels.
// Turning a knob sends a pwmDutyRatio command to the simulator.
// PWM setup (frequency) is done once after the WebSocket connection is established.

/*
// Simple version: one knob controlling PWM channel 1 only.
function main() {
    const link = new WSLink();
    link.pwmFrequency(1, 10); // Set PWM channel 1 frequency to 10 Hz
    const knob0 = new Knob({
        className: "warning",
        min      : 0,
        max      : 100,
        value    : 20,  // initial knob position
        uid      : 0,
        callback: function(uid, value, error) {
            link.pwmDutyRatio(1, value/100); // convert 0–100 to duty ratio 0.0–1.0
        }
    });
}
*/

// ready() is called after the WebSocket connection is confirmed (via conCallback).
// PWM frequency must be set before duty ratio commands are sent.
function ready(link) {
    const cls = ["success","warning","info","danger"];
    link.pwmFrequency(0, 10); // Set PWM channel 0 frequency to 10 Hz
    cls.map((c, i) => {
        new Knob({
            className: c,
            uid: 3-i,   // i=0 → uid=3, i=1 → uid=2, i=2 → uid=1, i=3 → uid=0
            min: 1,
            max: 99,    // knob range 1–99, converted to duty ratio 0.01–0.99
            callback : (id, val, err) => {
                link.pwmDutyRatio(id, val/100); // send duty ratio to simulator
                console.log(id, val, err);
            }
        });
    });
}

function main() {
    const link = new WSLink({
        conCallback: () => {
            ready(link); // initialise knobs only after the connection is open
        }
    });
}
