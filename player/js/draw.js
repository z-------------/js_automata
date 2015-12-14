automaton.draw = function() {
    console.log("draw()");

    var ctx = automaton.canvas.ctx;

    var cellSize = JSA_GRID_SIZE;
    var canvWidth = automaton.size.width * cellSize;
    var canvHeight = automaton.size.height * cellSize;

    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, canvWidth, canvHeight);

    /* draw cells */
    for (i in automaton.cells) {
        var cell = automaton.cells[i];

        if (cell) {
            ctx.fillStyle = "#000000";

            var col = i % automaton.size.width;
            var row = Math.floor(i / automaton.size.width);

            ctx.fillRect(col * cellSize, row * cellSize, cellSize, cellSize);
        }
    }

    /* draw gridlines */
    for (var c = 0; c < automaton.size.width; c++) { // no pun intended
        ctx.strokeStyle = "#9E9E9E"; // material grey 500

        ctx.beginPath();
        ctx.moveTo(c * cellSize, 0);
        ctx.lineTo(c * cellSize, canvHeight);
        ctx.stroke();
    }

    for (var r = 0; r < automaton.size.width; r++) {
        ctx.strokeStyle = "#9E9E9E";

        ctx.beginPath();
        ctx.moveTo(0, r * cellSize);
        ctx.lineTo(canvWidth, r * cellSize);
        ctx.stroke();
    }
};
