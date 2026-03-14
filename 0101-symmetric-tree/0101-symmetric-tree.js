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
 * @return {boolean}
 */
function isSymmetric(rootNode) {
  function isMirror(leftNode, rightNode) {
    if (leftNode === null && rightNode === null) {
      return true;
    }

    if (leftNode === null || rightNode === null) {
      return false;
    }

    if (leftNode.val !== rightNode.val) {
      return false;
    }

    const isOuterSame = isMirror(leftNode.left, rightNode.right);
    const isInnerSame = isMirror(leftNode.right, rightNode.left);

    return isOuterSame && isInnerSame;
  }

  return isMirror(rootNode.left, rootNode.right);
}
