automaton.step = function() {
    if (automaton.rawStepScript) {
        var w = automaton.size.width;
        var h = automaton.size.height;

        var newCells = new Array(w * h);

        (function(){
            for (var i = 0; i < newCells.length; i++) {
                var cell = {};

                /* neighbors */
                cell.neighbors = function(dirs) {
                    var result = [];

                    var indexes = {
                        "leftup": i - (w + 1),
                        "up": i - w,
                        "rightup": i - (w - 1),
                        "left": i - 1,
                        "right": i + 1,
                        "leftdown": i + (w - 1),
                        "down": i + w,
                        "rightdown": i + (w + 1)
                    };

                    var availableDirs = Object.keys(indexes);

                    // delete empty cells (i.e. ones that go off the grid)
                    if (i < w) { // first row
                        delete indexes["leftup"];
                        delete indexes["up"];
                        delete indexes["rightup"];
                    }
                    if (i >= w * h - w) { // last row
                        delete indexes["leftdown"];
                        delete indexes["down"];
                        delete indexes["rightdown"];
                    }
                    if (i % w === 0) { // first col
                        delete indexes["leftup"];
                        delete indexes["left"];
                        delete indexes["leftdown"];
                    }
                    if ((i + 1) % w === 0) { // last col
                        delete indexes["rightup"];
                        delete indexes["right"];
                        delete indexes["rightdown"];
                    }

                    var chosenDirs = [];

                    if (dirs && dirs.length > 0) {
                        var validDirs = dirs.filter(function(dir) {
                            return availableDirs.indexOf(dir) !== -1;
                        });
                        chosenDirs = validDirs;
                    } else {
                        chosenDirs = availableDirs;
                    }

                    for (dir of chosenDirs) {
                        if (typeof indexes[dir] !== "undefined") {
                            result.push(automaton.cells[indexes[dir]]);
                        }
                    }

                    return result;
                };

                /* isAlive */
                cell.isAlive === !!automaton.cells[i];

                /* live */
                cell.begin = function() {
                    newCells[i] = true;
                };

                /* die */
                cell.die = function() {
                    newCells[i] = false;
                };

                /* run the script */
                eval(automaton.rawStepScript);

                if (typeof newCells[i] === "undefined") {
                    newCells[i] = !!automaton.cells[i]; // use previous state if not set
                }
            }

            automaton.cells = newCells;
        }());
    } else {
    }
};
