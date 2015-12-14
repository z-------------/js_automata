/* clear function */

automaton.clear = function() {
    for (i in automaton.cells) {
        delete automaton.cells[i]; // left with an array of undefineds
    }
};

/* controls */

document.querySelector(".control--step").addEventListener("click", function() {
    automaton.step();
    automaton.draw();
});

document.querySelector(".control--random-fill").addEventListener("click", function() {
    for (var i = 0; i < automaton.cells.length; i++) {
        automaton.cells[i] = [false, true][Math.round(Math.random())];
    }
    automaton.draw();
});

document.querySelector(".control--script-input").addEventListener("change", function() {
    var file = this.files[0];

    var reader = new FileReader();
    reader.onload = function(e) {
        var result = this.result;
        automaton.rawStepScript = result;
    };
    reader.readAsText(file);
});

/* let's go */

automaton.size.width = JSA_DEFAULT_GRID_WIDTH;
automaton.size.height = JSA_DEFAULT_GRID_HEIGHT;

automaton.cells = new Array(automaton.size.width * automaton.size.height);

automaton.canvas.elem = document.querySelector("#canvas");
automaton.canvas.ctx = automaton.canvas.elem.getContext("2d");

automaton.canvas.elem.width = automaton.size.width * JSA_GRID_SIZE;
automaton.canvas.elem.height = automaton.size.height * JSA_GRID_SIZE;

automaton.draw();
