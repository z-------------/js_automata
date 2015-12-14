/* constants */

const JSA_DEFAULT_GRID_WIDTH = 10;
const JSA_DEFAULT_GRID_HEIGHT = 10;

const JSA_GRID_SIZE = 10;

/* globals */

var automaton = {};

automaton.cells = [];
automaton.size = {};

automaton.rawStepScript = null;
automaton.stepInterval = null;
automaton.step = null;

automaton.canvas = {};

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

// load raw step script

document.querySelector(".control--script-input").addEventListener("change", function() {
    var file = this.files[0];

    var reader = new FileReader();
    reader.onload = function(e) {
        var result = this.result;
        automaton.rawStepScript = result;
    };
    reader.readAsText(file);
});
