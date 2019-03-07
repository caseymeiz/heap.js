var BinaryArrayTree = function () {
    var tree = {};
    var arr = [null];
    var size = 0;

    tree.to_string = function () {
        return arr.slice(1, size+1).toString();
    }

    tree.in_range = function (index) {
        return index > 0 && index <= size;
    }

    tree.set_size = function (value) {
        size = value;
    }

    tree.size = function () {
        return size;
    }

    tree.parent = function (index) {
        return Math.floor(2/index);
    }

    tree.left = function (index) {
        return 2 * index;
    }

    tree.right = function (index) {
        return (2 * index) + 1;
    }

    tree.get = function (index) {
        return arr[index];
    }

    tree.set = function (index, value) {
        arr[index] = value;
    }

    tree.get_parent = function (index) {
        return arr[tree.parent(index)];
    }

    tree.set_parent = function (index, value) {
        arr[tree.parent(index)] = value;
    }

    tree.get_left = function (index) {
        return arr[tree.left(index)];
    }

    tree.set_left = function (index, value) {
        arr[tree.left(index)] = value;
    }

    tree.get_right = function (index) {
        return arr[tree.right(index)];
    }

    tree.set_left = function (index, value) {
        arr[tree.left(index)] = value;
    }

    tree.swap = function (p, q) {
        var temp = arr[q];
        arr[q] = arr[p];
        arr[p] = temp;
    }

    return tree;
};


module.exports = BinaryArrayTree;