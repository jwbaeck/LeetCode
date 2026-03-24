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
function flatten(rootNode) {
  function flattenTree(currentNode) {
    if (currentNode === null) {
      return null;
    }

    const leftTailNode = flattenTree(currentNode.left);
    const rightTailNode = flattenTree(currentNode.right);

    if (currentNode.left !== null) {
      const originalRightNode = currentNode.right;

      currentNode.right = currentNode.left;
      currentNode.left = null;
      leftTailNode.right = originalRightNode;
    }

    if (rightTailNode !== null) {
      return rightTailNode;
    }

    if (leftTailNode !== null) {
      return leftTailNode;
    }

    return currentNode;
  }

  flattenTree(rootNode);
}
