// Demo 02 — Control LEDs via the Simulator
// Purpose: learn how to read and write LED state on the simulator using ledGet and ledWrt.
// Clicking an LED widget sends commands to the simulator and updates the display.
// Compare with demo01 where the browser changed LED state locally without any simulator command.

function init(link) {

    // example1(link); // one LED
    example2(link);    // four LEDs
}

function example1(link) {

    // One LED: click to read current state from simulator, invert it, then write back
    const targetId = 0;
    const led = new Led({
        type:  'white',
        label: 'LED #0',
        uid:   targetId,
        callback: () => {

            // ledGet sends: adc,0 → simulator returns current LED state
            link.ledGet(targetId, (uid, sts, err) => {
                if (!err) {
                    let status = !sts;          // invert the current state
                    console.log(status);
                    link.ledWrt(targetId, status); // send the new state to the simulator
                    led.setStatus(status);         // update the browser widget to match
                }
            });
        }
    });
}

function example2(link) {

    // Four LEDs: each click reads the current simulator state, then writes the inverted value
    const types  = ['red', 'green', 'yellow', 'white'];
    const labels = ['LED #3', 'LED #2', 'LED #1', 'LED #0'];
    let uid = 0;
    types.forEach(type => {
        let led = new Led({
            type:  type,
            uid:   3-uid,       // uid 3, 2, 1, 0 from left to right
            label: labels[uid],
            callback: (targetLed, evt) => {

                link.ledGet(targetLed.uid, (uid, sts, err) => { // read current state from simulator
                    if (!err) {
                        let status = sts;
                        link.ledWrt(targetLed.uid, !status); // write the inverted state
                        led.setStatus(status);               // update display with the pre-inversion state
                    }
                });
            }
        });
        led.setTextColor('#08f');
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
