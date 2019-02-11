var ArrayTree = function () {
    var tree = [];

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
        return tree[index];
    }

    tree.set = function (index, value) {
        tree[index] = value;
    }

    tree.get_parent = function (index) {
        return tree[parent(index)];
    }

    tree.set_parent = function (index, value) {
        tree[parent(index)] = value;
    }

    tree.get_left = function (index) {
        return tree[left(index)];
    }

    tree.set_left = function (index, value) {
        tree[left(index)] = value;
    }

    tree.get_right = function (index) {
        return tree[right(index)];
    }

    tree.set_left = function (index, value) {
        tree[left(index)] = value;
    }

    tree.exchange = function (p, q) {
        var temp = tree[q];
        tree[q] = tree[p];
        tree[p] = temp;
    }

    return tree;
};


module.exports = ArrayTree;