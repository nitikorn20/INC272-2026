// Web App 02 — Buttons and LED Control
// Purpose: create four toggle buttons, each controlling one LED (LED 0–3).
// Clicking a button sends a toggle command to the simulator.

/*
// Simple version: separate ON and OFF buttons for one LED.
function main() {

    const link = new WSLink();

    const btn0 = new Button({
        text: "LED1 ON",
        className: "danger",
        iconLeft: "lightbulb-o",
        iconRight: "none",
        uid: 0,
        callback: () => {
            // LED1 - ON
            link.ledSet(1);
        }
    });

    const btn1 = new Button({
        text: "LED1 OFF",
        className: "secondary",
        iconLeft: "lightbulb-o",
        iconRight: "none",
        uid: 1,
        callback: () => {
            // LED1 - OFF
            link.ledClr(1);
        }
    });
}
*/

function main(){

    const link = new WSLink();

    // Button labels and Bootstrap color classes, ordered LED3 → LED0 (displayed left to right)
    const btnTexts = ["LED3",    "LED2",   "LED1",    "LED0"];
    const clsNames = ["success", "danger", "primary", "secondary"];

    btnTexts.map( (s, i) => {
        new Button({
            text: s,
            uid:  3-i,          // i=0 → uid=3, i=1 → uid=2, i=2 → uid=1, i=3 → uid=0
            className: clsNames[i],
            iconLeft: "lightbulb-o",
            iconRight: "none",
            callback: (b) => {
                link.ledInv(b.uid); // Toggle the LED matching this button's uid
            }
        });
    } );

    // Alternative ways to write the same loop — shown for reference:

    // forEach version:
    // let id = 3;
    // btnTexts.forEach(txt => {
    //     new Button({
    //         text: txt,
    //         uid:  id,
    //         callback: (b) => {
    //             link.ledInv(b.uid);
    //         }
    //     });
    //     id--;
    // });

    // for-loop version:
    // for(let i=0; i<btnTexts.length; i++) {
    //     new Button({
    //         text: btnTexts[i],
    //         uid: 3-i, // 3,2,1,0
    //         callback: (b) => {
    //             let id = b.uid;
    //             link.ledInv(id);
    //         }
    //     })
    // }
}
