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
function postorderTraversal(rootNode) {
  const result = [];

  function traverse(currentNode) {
    if (currentNode === null) {
      return;
    }

    traverse(currentNode.left);
    traverse(currentNode.right);
    
    result.push(currentNode.val);
  }

  traverse(rootNode);

  return result;
}
