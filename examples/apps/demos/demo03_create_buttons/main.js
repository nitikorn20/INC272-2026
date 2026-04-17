// Demo 03 — Create Button Widgets (UI only, no simulator commands)
// Purpose: learn how to create Button widgets and handle click events.
// Callbacks only log to the browser console — no simulator communication yet.
// See demo04 for buttons that send commands to the simulator.

function init(link) {

    // example1(link); // one button
    example2(link);    // four buttons
}

function example1(link) {

    // One button: clicking it logs the button's uid to the console
    const button = new Button({
        text     : 'Toggle LED #0',
        uid      : 0,
        className: 'success',       // Bootstrap color class: success, info, primary, danger, etc.
        iconLeft : 'lightbulb-o',   // FontAwesome icon name for the left side
        iconRight: 'none',          // 'none' hides the right icon
        callback : (btn) => {
            console.log(btn.uid);   // btn is the Button object; btn.uid identifies which button was clicked
        }
    });
}

function example2(link) {

    // Four buttons created with a loop — each logs its own uid when clicked
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
                console.log(btn.uid);
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
