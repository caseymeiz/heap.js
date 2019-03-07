var BinaryArrayTree = require('./binaryarraytree.js');


var Heap = function (){

	var heap = {};

	var tree = [null];

	heap.insert = function (value) {
		tree.set_size(data.size() + 1);
		sift_up(data, value);
	}


	heap.data = function () {
		return data.to_string();
	}


	heap.delete = function (index) {
		data.swap(index, data.size())
		data.set_size(data.size() - 1);

		if (data.get(index) > data.get(Math.floor(index/2))) {
			sift_up(data, index);
		} else {
			sift_down(data, index);
		}
	}


	function build_heap (tree) {
		for (var i = Math.floor(tree.size()/2); i >= 1; i--) {
			sift_down(tree, i);
		}
	}

	function sift_down (tree, index) {
		var left_index = 2 * index;
		var right_index = (2 * index) + 1;
		var follow = index;

		if (tree.in_range(left_index) && tree.get(follow) < tree.get(left_index)) {
			follow = left_index;
		}

		if (tree.in_range(right_index) && tree.get(follow) < tree.get(right_index)) {
			follow = right_index;
		}

		if (follow !== index) {
			tree.swap(follow, index);
			sift_down(tree, follow);
		}
	}


	function sift_up (tree, value) {
		var index = tree.size();
		tree.set(index, value);
		var parent_index = Math.floor(index/2);
		while (tree.in_range(parent_index) && tree.get(parent_index) < tree.get(index)) {
			tree.swap(parent_index, index);			
			index = parent_index;
			parent_index = Math.floor(index/2);
		}
	}

	return heap;	
}



module.exports = Heap;