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
 * @return {number}
 */
function minDepth(root) {
  if (!root) return 0;

  const left = minDepth(root.left);
  const right = minDepth(root.right);

  return 1 + (
    left === 0 || right === 0
      ? left + right
      : Math.min(left, right)
  );
}
