/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
function isSameTree(firstTree, secondTree) {
  if (firstTree === null && secondTree === null) {
    return true;
  }

  if (firstTree === null || secondTree === null) {
    return false;
  }

  if (firstTree.val !== secondTree.val) {
    return false;
  }

  const isLeftSame = isSameTree(firstTree.left, secondTree.left);
  const isRightSame = isSameTree(firstTree.right, secondTree.right);

  return isLeftSame && isRightSame;
}
