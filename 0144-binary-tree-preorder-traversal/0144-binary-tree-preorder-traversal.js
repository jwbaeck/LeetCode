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
 * @return {number[]}
 */
function preorderTraversal(rootNode) {
  const result = [];

  function traverse(currentNode) {
    if (currentNode === null) {
      return;
    }

    result.push(currentNode.val);
    
    traverse(currentNode.left);
    traverse(currentNode.right);
  }

  traverse(rootNode);

  return result;
}
