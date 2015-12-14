/* constants */

const JSA_DEFAULT_GRID_WIDTH = 70;
const JSA_DEFAULT_GRID_HEIGHT = 35;

const JSA_GRID_SIZE = 10;

/* globals */

var automaton = {};

automaton.cells = [];
automaton.size = {};

automaton.rawStepScript = null;
automaton.stepTimeout = null;
automaton.step = null;
automaton.draw = null;

automaton.canvas = {};
