/*
    CONWAY'S GAME OF LIFE
    en.wikipedia.org/wiki/Conway%27s_Game_of_Life
*/

var liveNeighbors = cell.neighbors().filter(function(neighbor) {
    return neighbor === true;
});

if (liveNeighbors.length < 2) {
    cell.die();
} else if (liveNeighbors.length === 3) {
    cell.begin();
} else if (liveNeighbors.length > 3) {
    cell.die();
}
