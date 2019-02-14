var ArrayTree = require('./arraytree.js');


var Heap = function (){

	var heap = {};

	heap.tree = [null];

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


	heap.sift_up = function (value) {
		var index = heap.size();
		heap.tree[index] = value;
		var parent = Math.floor(index/2);
		while (parent >= 1 && heap.tree[parent] < heap.tree[index]) {
			let temp = heap.tree[parent];
			heap.tree[parent] = heap.tree[index];
			heap.tree[index] = temp;
			
			index = parent;
			parent = Math.floor(index/2);
		}
	}

	return heap;	
}



module.exports = Heap;