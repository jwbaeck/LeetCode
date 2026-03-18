/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
function sortedArrayToBST(numbers) {
  function buildBalancedTree(startIndex, endIndex) {
    if (startIndex > endIndex) {
      return null;
    }

    const middleIndex = Math.floor((startIndex + endIndex) / 2);
    const rootNode = new TreeNode(numbers[middleIndex]);

    rootNode.left = buildBalancedTree(startIndex, middleIndex - 1);
    rootNode.right = buildBalancedTree(middleIndex + 1, endIndex);

    return rootNode;
  }

  return buildBalancedTree(0, numbers.length - 1);
}
