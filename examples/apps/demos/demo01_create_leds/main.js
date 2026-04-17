// Demo 01 — Create LED Widgets (UI only, no simulator commands)
// Purpose: learn how to create Led widgets and change their state in the browser.
// Three examples show progressively more complex patterns.
// Switch between examples by uncommenting the desired call in init().

function init(link) {

    // example1(link); // two LEDs created manually
    // example2(link); // four LEDs created with a loop
    example3(link);    // four LEDs with automatic toggling

}

function example1(link) {

    // 1) Create a red LED — clicking it reads and inverts its own status
    const led1 = new Led({
        type: 'red',            // available types: red, green, yellow, orange, cyan, violet, blue, white
        label: 'Light 1',       // text displayed below the LED widget
        callback: () => {       // called when the user clicks the LED
            const sts = led1.getStatus();   // read current on/off state
            led1.setStatus(!sts);           // invert and apply
        }
    });

    // 2) Create a yellow LED — clicking it calls toggleStatus directly
    const led0 = new Led({
        type: 'yellow',
        label: 'Light 0',
        callback: () => {
            led0.toggleStatus(); // shorthand for get + invert + set
        }
    });
}

function example2(link) {

    // Create four LEDs using a loop — each LED toggles itself when clicked
    const types  = ['red', 'green', 'yellow', 'white'];
    const labels = ['LED #3', 'LED #2', 'LED #1', 'LED #0'];
    let uid = 0;
    types.forEach(type => {
        let led = new Led({
            type:  type,
            uid:   uid,
            label: labels[uid],
            callback: (led, evt) => {
                led.toggleStatus(); // the callback receives the LED object itself
            }
        });
        led.setTextColor('#f80'); // change the label text color
        uid++;
    });
}

function example3(link) {

    // Create four LEDs, alternate their initial state, then toggle all automatically
    const types  = ['red', 'green', 'yellow', 'white'];
    const labels = ['LED #3', 'LED #2', 'LED #1', 'LED #0'];
    let uid = 0;
    const leds = [];
    types.forEach(type => {
        let led = new Led({
            type:  type,
            uid:   uid,
            label: labels[uid],
        });
        led.setTextColor('#f80');
        if (uid % 2) {
            led.toggleStatus(); // odd-indexed LEDs start in the ON state
        }
        leds.push(led);
        uid++;
    });

    // Toggle all LEDs every 500 ms — no simulator involved, purely UI animation
    setInterval(() => {
        leds.forEach(led => {
            led.toggleStatus();
        });
    }, 500);
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
