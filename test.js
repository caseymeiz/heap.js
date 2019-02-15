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


console.log('-------------');

var heap3 = new Heap();

heap3.tree = [null, 1, 9, 2, 8, 3, 7];

heap3.build_heap();

console.log(heap3.tree);