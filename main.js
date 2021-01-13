const canvas = document.getElementById("board");
const ctx = canvas.getContext('2d');

ctx.canvas.width = cols * block_size;
ctx.canvas.height = rows * block_size;

ctx.scale(block_size, block_size);

let board = new Board();

function play(){
    board.reset();
    let figure = new Figure(ctx);
    figure.draw();

    board.figure = figure;
};

