var Heap = require('./heap.js')


var heap = new Heap();

heap.tree = [null, 0, 3, 2];

heap.sift_down(1);

console.log(heap.tree);

console.log('-------------');

var heap2 = new Heap();

heap2.sift_up(2);
heap2.sift_up(3);
heap2.sift_up(1);

console.log(heap2.tree);