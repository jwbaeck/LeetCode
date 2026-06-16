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
 * @return {number[][]}
 */
function pathSum(root, targetSum) {
  const result = [];

  function dfs(node, sum, path) {
    if (node === null) return;

    path.push(node.val);
    sum += node.val;

    if (node.left === null && node.right === null) {
      if (sum === targetSum) {
        result.push([...path]);
      }
    }

    dfs(node.left, sum, path);
    dfs(node.right, sum, path);

    path.pop();
  }

  dfs(root, 0, []);

  return result;
}
