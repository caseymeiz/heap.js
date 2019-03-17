module.exports = function () {
    var defaults = {
        tree : [],

        compareFunction : function (firstEl, secondEl) {
            return secondEl - firstEl;
        }
    }

    function PriorityQueue (compareFunction) {
        this.compareFn = compareFunction || defaults.compareFunction;
    }

    PriorityQueue.prototype = {
        constructor : PriorityQueue,

        decreaseKey : function (index, new_key) {},

        delete : function (index) {},

        extractMin : function () {},

        insert : function (element) {},

        union : function () {}
    }

    return PriorityQueue
}()