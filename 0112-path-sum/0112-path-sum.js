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
 * @param {number} targetSum
 * @return {boolean}
 */
function hasPathSum(root, targetSum) {
  if (!root) return false;

  if (!root.left && !root.right) {
    return root.val === targetSum;
  }

  const remain = targetSum - root.val;

  return (
    hasPathSum(root.left, remain) ||
    hasPathSum(root.right, remain)
  );
}
