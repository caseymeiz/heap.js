module.exports = function () {
    var defaults = {
        tree : [],

        compareFunction : function (firstEl, secondEl) {
            return secondEl - firstEl;
        }
    }

    function BinaryHeap (complete_tree, compareFunction) {
        this.compareFn = compareFunction || defaults.compareFunction;
        this.size = 0;
        if (complete_tree) {
            this.buildHeap(complete_tree)
        } else {
            this.tree = defaults.tree;
        }
    }

    BinaryHeap.prototype = {
        constructor : BinaryHeap,

        decreaseKey : function (index, new_key) {},

        delete : function (index) {},

        extractMin : function () {
            if (this.size === 0) {
                return null;
            }

            var min = this.tree[0];
            this.size = this.size - 1;

            if (this.size === 0) {
                return min;
            }

            this.tree[0] = this.tree[this.size];

            this.tree[this.size] = min;

            this.siftDown(this, 0);

            return min;
        },

        insert : function (element) {
            this.tree[this.size] = element;
            this.size = this.size + 1;
            this.siftUp(this, this.size - 1);
        },

        union : function () {},

        siftDown : function (heap, index) {
            var left_child = leftChildIndex(index);
            var right_child = rightChildIndex(index);
            var follow = index;

            // console.log('index ' + index + ' -> ' +heap.tree[index]);
            // console.log('left ' +left_child +' -> '+heap.tree[left_child]);
            // console.log('right ' +right_child +' -> '+heap.tree[right_child]);

            if (heap.size > left_child && heap.compareFn(heap.tree[follow], heap.tree[left_child]) < 0) {
                follow = left_child;
            }

            if (heap.size > right_child && heap.compareFn(heap.tree[follow], heap.tree[right_child]) < 0) {
                follow = right_child;
            }

            if (follow !== index) {
                var temp = heap.tree[follow];
                heap.tree[follow] = heap.tree[index];
                heap.tree[index] = temp;
                heap.siftDown(heap, follow);
            }

        },

        siftUp : function (heap, index) {
            var parent = parentIndex(index);
            var follow = index;

            if (index !== 0 && heap.compareFn(heap.tree[follow], heap.tree[parent]) > 0) {
                follow = parent;
            }

            if (follow !== index) {
                var temp = heap.tree[follow];
                heap.tree[follow] = heap.tree[index];
                heap.tree[index] = temp;
                heap.siftUp(heap, follow);
            }
        },

        sort : function () {
            var arr = [];
            var min = this.extractMin();
            while(min !== null) {
                arr.push(min)
                min = this.extractMin();
            }
            return arr;
        },

        buildHeap (tree) {
            this.tree = tree;
            this.size = tree.length;
            for (var i = Math.floor(tree.length/2); i >= 0; i--) {
                this.siftDown(this, i);
            }
        }
    }


    function parentIndex (currentIndex) {
        return Math.floor(currentIndex/2);
    }

    function rightChildIndex (currentIndex) {
        return 2*currentIndex + 2;
    }

    function leftChildIndex (currentIndex) {
        return 2*currentIndex + 1
    }



    return BinaryHeap
}()