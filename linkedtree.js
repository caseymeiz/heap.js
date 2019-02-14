

var LinkedTree = function () {
    root = {
        left = null,
        right = null,
        parent = null,
        key = null
    }

    root.swap_left = function () {
        var temp = root.left.key;
        root.left.key = root.key;
        root.key = temp;
    }

    return root;
}