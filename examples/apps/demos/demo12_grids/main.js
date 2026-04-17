// Demo 12 — Grid Layout (UI only, no simulator)
// Purpose: learn how to use the Grids widget to arrange other widgets in rows and columns.
// Buttons are used as placeholder children — any widget type can be placed in a grid cell.
// Switch between examples by uncommenting the desired call in init().

// Create a set of buttons with different Bootstrap color classes
function createButtons() {
    const classes = ['dark', 'success', 'info', 'primary', 'danger', 'secondary'];
    const buttons = [];
    classes.map(c => {
        buttons.push(new Button({className: c, text: c}));
    });
    return buttons;
}

// Create a Grids widget with the given number of rows and columns
function createGrids(r, c) {
    const grids = new Grids({
        rows: r,
        cols: c
    });
    return grids;
}

function example1() {

    // 3×2 grid: widgets placed manually using explicit row and column indices
    const buttons = createButtons();
    const grids   = createGrids(3, 2);

    grids.addChildTo(0, 0, buttons[0]); // row 0, col 0
    grids.addChildTo(0, 1, buttons[1]); // row 0, col 1
    grids.addChildTo(1, 0, buttons[2]);
    grids.addChildTo(1, 1, buttons[3]);
    grids.addChildTo(2, 0, buttons[4]);
    grids.addChildTo(2, 1, buttons[5]);
}

function example2() {

    // 3×2 grid: same result as example1, but placed using nested for-loops
    const classes = ['dark', 'success', 'info', 'primary', 'danger', 'secondary'];
    const buttons = createButtons();

    const Rows = 3;
    const Cols = 2;
    const grids = createGrids(Rows, Cols);
    let bi = 0;
    for (let r = 0; r < Rows; r++) {
        for (let j = 0; j < Cols; j++) {
            grids.addChildTo(r, j, buttons[bi++]); // fill row by row
        }
    }
}

function example3() {

    // 13×8 grid: large grid filled with 104 buttons cycling through color classes
    const Rows = 13;
    const Cols = 8;
    const grids = createGrids(Rows, Cols);

    const NB = Rows * Cols; // total number of cells

    const classes = ['dark', 'success', 'info', 'primary', 'danger', 'secondary'];
    const buttons = [];
    for (let i = 0; i < NB; i++) {
        // let k = Math.floor(Math.random()*classes.length); // random color variant
        let k = i % classes.length; // cycle through colors in order
        buttons.push(new Button({className: classes[k], text: classes[k]}));
    }

    let bi = 0;
    for (let r = 0; r < Rows; r++) {
        for (let j = 0; j < Cols; j++) {
            grids.addChildTo(r, j, buttons[bi++]);
        }
    }
}

function init(link, ui) {
    // example1(); // manual placement
    example2();    // loop-based placement
    // example3(); // large grid stress test
}

function main(ui) {
    const link = new WSLink({
        pswCallback: (ch, sts) => { },
        adcCallback: (ch, val, dif, dir) => { }
    });
    init(link, ui);
}
