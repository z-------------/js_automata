automaton.size.width = JSA_DEFAULT_GRID_WIDTH;
automaton.size.height = JSA_DEFAULT_GRID_HEIGHT;

automaton.cells = new Array(automaton.size.width * automaton.size.height);

automaton.canvas.elem = document.querySelector("#canvas");
automaton.canvas.ctx = automaton.canvas.elem.getContext("2d");

automaton.canvas.elem.width = automaton.size.width * JSA_GRID_SIZE;
automaton.canvas.elem.height = automaton.size.height * JSA_GRID_SIZE;

automaton.draw();
