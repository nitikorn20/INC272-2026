// Demo 04 — Control LEDs via Buttons
// Purpose: connect Button widgets to simulator LED commands.
// Clicking a button sends a toggle command to the simulator — no UI indicator is shown.
// See demo05 for buttons combined with LED indicator feedback.

function init(link) {

    // example1(link); // one button controlling LED 0
    example2(link);    // four buttons controlling LEDs 0–3
}

function example1(link) {

    // One button: clicking it toggles LED 0 on the simulator
    const button = new Button({
        text     : 'Toggle LED #0',
        uid      : 0,
        className: 'success',
        iconLeft : 'lightbulb-o',
        iconRight: 'none',
        callback : (btn) => {
            link.ledInv(btn.uid); // send toggle command to the simulator for LED 0
        }
    });
}

function example2(link) {

    // Four buttons: each button toggles the LED matching its uid
    const classes = ['success', 'info', 'primary', 'danger'];
    const labels  = ['Toggle LED #3', 'Toggle LED #2', 'Toggle LED #1', 'Toggle LED #0'];
    let uid = 0;
    labels.forEach(label => {
        const button = new Button({
            text     : label,
            uid      : 3-uid,       // uid 3, 2, 1, 0 from left to right
            className: classes[uid],
            iconLeft : 'lightbulb-o',
            iconRight: 'none',
            callback : (btn) => {
                link.ledInv(btn.uid); // toggle the LED matching this button's uid
            }
        });
        uid++;
    });
}

function main() {
    const link = new WSLink({
        conCallback: (ws) => { },
        datCallback: (ws, evt) => { },
        ledCallback: (ch, sts) => { },
        pswCallback: (ch, sts) => { },
        adcCallback: (ch, val, dif, dir) => { }
    });
    init(link);
}
