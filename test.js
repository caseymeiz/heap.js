var Heap = require('./heap.js')


var heap = new Heap();

heap.tree = [0, 0, 3, 2];

heap.sift_down(1);

console.log(heap.tree);