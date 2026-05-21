/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
function generateTrees(n) {
  if (n === 0) return [];

  function buildTrees(start, end) {
    if (start > end) return [null];

    const trees = [];

    for (let rootValue = start; rootValue <= end; rootValue++) {
      const leftTrees = buildTrees(start, rootValue - 1);
      const rightTrees = buildTrees(rootValue + 1, end);

      for (const leftTree of leftTrees) {
        for (const rightTree of rightTrees) {
          const root = new TreeNode(rootValue);

          root.left = leftTree;
          root.right = rightTree;

          trees.push(root);
        }
      }
    }

    return trees;
  }

  return buildTrees(1, n);
}
