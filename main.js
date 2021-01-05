const canvas = document.getElementById('board');
const ctx = getContext('2d');

ctx.canvas.width = cols * block_size;
ctx.canvas.height = rows * block_size;

ctx.scale(block_size, block_size);