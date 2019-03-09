module.exports = function () {
    function BinaryHeap (comparitor, complete_tree) {
        this.comparitor = comparitor;
        this.heap = complete_tree;
    }

    BinaryHeap.prototype = {
        constructor: BinaryHeap,

        decreaseKey : function () {},

        delete : function () {},

        extractMin : function (),

        insert : function () {},

        union : function () {}
    }



    return BinaryHeap
}()