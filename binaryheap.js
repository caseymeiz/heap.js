module.exports = function () {

    function BinaryHeap (complete_tree, compareFunction) {
        this.tree = complete_tree || defaults.tree;
        this.compareFunction = compareFunction || defaults.compareFunction;
    }

    BinaryHeap.prototype = {
        constructor : BinaryHeap,

        decreaseKey : function (index, new_key) {},

        delete : function (index) {},

        extractMin : function () {},

        insert : function (element) {},

        union : function () {}
    }

    var defaults = {
        tree : [],

        compareFunction : function (firstEl, secondEl) {
            return secondEl - firstEl;
        }
    }

    function siftUp (heap, index) {

    }

    function siftDown (haep, index) {

    }

    function parentIndex (currentIndex) {
        return (currentIndex)/2;
    }

    function rightIndex(currentIndex) {
        return 2*currentIndex + 1;
    }

    function leftIndex(currentIndex) {
        return 2*(currentIndex - 1) +1
    }

    function buildHeap (tree) {
        for (var i = Math.floor(tree.length/2); i >= 1; i--) {
            sift_down(tree, i);
        }
    }

    return BinaryHeap
}()