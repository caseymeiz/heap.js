
var BinaryHeap = require('./binaryheap.js')

var heap = new BinaryHeap([], (x,y) => x-y);

heap.insert(4);
heap.insert(1);
heap.insert(3);
heap.insert(2);
heap.insert(-1);

console.log(heap.tree)
console.log(heap.sort());

var h = new BinaryHeap([3,2,-1,1,2,4]);

console.log(h.tree)
console.log(h.sort())