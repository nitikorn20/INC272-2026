// Demo 06 — LED Monitor with Continuous Polling
// Purpose: continuously read LED states from the simulator using a round-robin polling loop.
// Buttons toggle LEDs; a background interval polls each LED in turn and keeps the
// indicators in sync — even if the state changes from another source.

function init(link, ui) {
    example1(link, ui);
}

function example1(link, ui) {
    leds = createLeds(link);
    ui.Utils.newLine(); // push buttons to a new row below the LED indicators
    btns = createControlButtons(link, leds);

    // Round-robin polling: poll one LED per interval tick, cycling through 0→1→2→3→0…
    // At 250 ms per poll and 4 LEDs, each LED is updated every 1000 ms.
    let targetId = 0;
    setInterval(() => {
        link.ledGet(targetId, (uid, sts, err) => { // request current state from simulator
            leds[3-uid].setStatus(sts);            // update the matching indicator
        });
        targetId = (targetId + 1) % 4; // advance to next channel: 0,1,2,3,0,1,2,3,...
    }, 250);
}

// Create four LED indicator widgets (display only)
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

// Create four control buttons — clicking toggles the corresponding LED on the simulator
function createControlButtons(link, leds) {

    const classes = ['success', 'info', 'primary', 'danger'];
    const labels  = ['Toggle LED #3', 'Toggle LED #2', 'Toggle LED #1', 'Toggle LED #0'];
    let uid = 0;
    const buttons = [];
    labels.forEach(label => {
        const button = new Button({
            text     : label,
            uid      : 3-uid,   // uid 3, 2, 1, 0 from left to right
            className: classes[uid],
            iconLeft : 'lightbulb-o',
            iconRight: 'none',
            callback : (btn) => {
                const id = btn.uid;
                link.ledInv(id); // toggle the LED — the polling loop will pick up the new state
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
