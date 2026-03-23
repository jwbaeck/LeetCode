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
 * @return {number[][]}
 */
function levelOrder(rootNode) {
  if (rootNode === null) {
    return [];
  }

  const result = [];
  const queue = [rootNode];

  while (queue.length > 0) {
    const currentLevelSize = queue.length;
    const currentLevelValues = [];

    for (let count = 0; count < currentLevelSize; count++) {
      const currentNode = queue.shift();

      currentLevelValues.push(currentNode.val);

      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }

      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }

    result.push(currentLevelValues);
  }

  return result;
}
