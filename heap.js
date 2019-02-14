var ArrayTree = require('./arraytree.js');


var Heap = function (){

	var heap = {};

	heap.tree = [];

	heap.size = function () {
		return this.tree.length;
	}


	heap.sift_down = function (index) {
		var left = 2 * index;
		var right = (2 * index) + 1;
		var follow = index;

		if (heap.size() >= left && heap.tree[follow] < heap.tree[left]) {
			follow = left;
		}

		if (heap.size() >= right && heap.tree[follow] < heap.tree[right]) {
			follow = right;
		}

		if (follow !== index) {
			var temp = heap.tree[follow];
			heap.tree[follow] = heap.tree[index];
			heap.tree[index] = temp;
			heap.sift_down(follow);
		}
	}

	return heap;	
}



module.exports = Heap;