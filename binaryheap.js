module.exports = function () {
    var defaults = {
        tree : [],

        compareFunction : function (firstEl, secondEl) {
            return secondEl - firstEl;
        }
    }

    function BinaryHeap (complete_tree, compareFunction) {
        this.tree = complete_tree || defaults.tree;
        this.compareFn = compareFunction || defaults.compareFunction;
    }

    BinaryHeap.prototype = {
        constructor : BinaryHeap,

        decreaseKey : function (index, new_key) {},

        delete : function (index) {},

        extractMin : function () {},

        insert : function (element) {},

        union : function () {},

        siftDown : function (heap, index) {
            var left_child = leftChild(index);
            var right_child = rightChild(index);
            var follow = index;

            if (heap.size > left_child && heap.compareFn(heap.tree[follow], heap.tree[left_child]) > 0) {
                follow = left_index;
            }

            if (heap.size > right_child && heap.compareFn(heap.tree[follow], heap.tree[right_child]) > 0) {
                follow = right_child;
            }

            if (follow !== index) {
                var temp = heap.tree[follow];
                heap.tree[follow] = heap.tree[index];
                heap.tree[index] = temp;
                sift_down(heap, follow);
            }
        }
    }

    function siftUp (heap, index) {

    }



    function parentIndex (currentIndex) {
        return (currentIndex)/2;
    }

    function rightIndex(currentIndex) {
        return 2*currentIndex + 1;
    }

    function leftIndex(currentIndex) {
        return 2*(currentIndex - 1) + 1
    }

    function buildHeap (tree) {
        for (var i = Math.floor(tree.length/2); i >= 1; i--) {
            sift_down(tree, i);
        }
    }

    return BinaryHeap
}()