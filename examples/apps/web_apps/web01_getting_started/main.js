// Web App 01 — Getting Started
// Purpose: verify that the browser-to-simulator connection works.
// Connects to the simulator and toggles LED 0 automatically every 500 ms.
// No UI widgets are used — open the browser console to confirm there are no errors.

function main(ui) {

    const link = new WSLink(); // Connect to ws://127.0.0.1:3000/ecclab

    // Alternatives to ledInv (toggle):
    // link.ledSet(0);  — turn LED 0 on
    // link.ledClr(0);  — turn LED 0 off

    setInterval(function(){
        link.ledInv(0); // Toggle LED 0 on/off every 500 ms
    }, 500);

}
