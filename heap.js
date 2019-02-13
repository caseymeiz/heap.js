var ArrayTree = require('./arraytree.js');


var Heap = function (){

	var heap = {};

	heap.tree = [];

	heap.size = 0;

	heap.build_heap = function () {

	}

	heap.sort = function () {

	}

	heap.sift_up = function () {

	}

	heap.sift_down = function (index) {
		var left = 2 * index;
		var right = (2 * index) + 1;
		var follow = null;

		if (heap.size >= left && heap.tree[index] < heap.tree[left]) {
			follow = left;
		}

		if (heap.size >= right && heap.tree[index] < heap.tree[right]) {
			follow = right;
		}

		if (follow !== null) {
			var temp = heap.tree[follow];
			heap.tree[follow] = heap.tree[index];
			heap.tree[index] = temp;
			heap.sift_down(follow);
		}
	}

	return heap;	
}



module.exports = Heap;