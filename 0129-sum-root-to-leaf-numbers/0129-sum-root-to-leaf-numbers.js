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
function sumNumbers(rootNode) {
  function calculatePathSum(currentNode, currentNumber) {
    if (currentNode === null) {
      return 0;
    }

    const nextNumber = currentNumber * 10 + currentNode.val;

    const isLeafNode =
      currentNode.left === null && currentNode.right === null;

    if (isLeafNode) {
      return nextNumber;
    }

    const leftPathSum = calculatePathSum(currentNode.left, nextNumber);
    const rightPathSum = calculatePathSum(currentNode.right, nextNumber);

    return leftPathSum + rightPathSum;
  }

  return calculatePathSum(rootNode, 0);
}
