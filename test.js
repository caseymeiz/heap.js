var Heap = require('./heap.js')


var heap = new Heap();



heap.insert(1);
heap.insert(2);
heap.insert(3);
heap.insert(4);

heap.insert(1);
heap.insert(2);
heap.insert(3);
heap.insert(4);


console.log(heap.data());

heap.delete(1);

console.log(heap.data());

heap.delete(6);

console.log(heap.data());