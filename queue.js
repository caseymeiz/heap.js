module.exports = function () {

    function Queue () {
    }

    PriorityQueue.prototype = {
        constructor : PriorityQueue,

        add : function (element) {
            console.log('Must Impement');
        },

        addAll : function (elements) {
            console.log('Must Impement');
        }

        element : function () {
            console.log('Must Impement');
        },

        remove : function () {
            console.log('Must Impement');
        }
    }

    return Queue
}()