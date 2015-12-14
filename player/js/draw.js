automaton.draw = function() {
    console.log("draw()");

    var ctx = automaton.canvas.ctx;

    var cellSize = JSA_GRID_SIZE;
    var canvWidth = automaton.size.width * cellSize;
    var canvHeight = automaton.size.height * cellSize;

    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, canvWidth, canvHeight);

    for (i in automaton.cells) {
        var cell = automaton.cells[i];

        if (cell) {
            ctx.fillStyle = "#000000";

            var col = i % automaton.size.width;
            var row = Math.floor(i / automaton.size.width);

            ctx.fillRect(col * cellSize, row * cellSize, cellSize, cellSize);
        }
    }
};
