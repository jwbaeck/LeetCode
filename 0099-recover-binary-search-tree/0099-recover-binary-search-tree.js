/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {

    const nodes = [];

    const inorder = (node) => {

        if (!node) return;

        inorder(node.left);

        nodes.push(node);

        inorder(node.right);

    };

    inorder(root);

    const sortedValues = nodes

        .map((node) => node.val)

        .sort((a, b) => a - b);

    nodes.forEach((node, index) => {

        node.val = sortedValues[index];

    });

};
