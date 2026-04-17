// Demo 05 — LED Indicators with Button Control
// Purpose: combine LED indicator widgets with control buttons.
// Clicking a button toggles the LED on the simulator, then reads the new state
// back and updates the LED indicator on screen to reflect the actual simulator state.

function init(link, ui) {
    example1(link, ui);
    // example2(link); // reserved for future use
}

function example1(link, ui) {
    leds = createLeds(link);
    ui.Utils.newLine(); // push buttons to a new row below the LED indicators
    btns = createControlButtons(link, leds);
}

// Create four LED indicator widgets (display only, not clickable)
function createLeds(link) {
    const types  = ['red', 'green', 'yellow', 'violet'];
    const labels = ['LED #3', 'LED #2', 'LED #1', 'LED #0'];
    let uid = 0;
    const leds = [];
    types.forEach(type => {
        let led = new Led({
            type:  type,
            uid:   3-uid,   // uid 3, 2, 1, 0 from left to right
            label: labels[uid],
        });
        led.setTextColor('#fff');
        uid++;
        leds.push(led);
    });
    return leds;
}

// Create four control buttons — each button toggles one LED and reads back the result
function createControlButtons(link, leds) {

    const classes = ['success', 'info', 'primary', 'danger'];
    const labels  = ['Toggle LED #3', 'Toggle LED #2', 'Toggle LED #1', 'Toggle LED #0'];
    let uid = 0;
    const buttons = [];
    labels.forEach(label => {
        const button = new Button({
            text     : label,
            uid      : 3-uid,
            className: classes[uid],
            iconLeft : 'lightbulb-o',
            iconRight: 'none',
            callback : (btn) => {
                const id = btn.uid;
                link.ledInv(id);                    // send toggle command to the simulator

                link.ledGet(id, (uid, sts, err) => { // then read the actual state back
                    console.log(id, sts);
                    leds[3-id].setStatus(sts);       // update the indicator to match simulator
                });
            }
        });
        uid++;
        buttons.push(button);
    });
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
