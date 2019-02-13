var Heap = require('./heap.js')


var heap = new Heap();

heap.tree = [0, 0, 2, 3, 1];

heap.size = 4

heap.sift_down(1);

console.log(heap.tree);