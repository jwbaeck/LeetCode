/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
function connect(root) {
  if (root === null) {
    return null;
  }

  let currentLevelStartNode = root;

  while (currentLevelStartNode.left !== null) {
    let currentNode = currentLevelStartNode;

    while (currentNode !== null) {
      currentNode.left.next = currentNode.right;

      if (currentNode.next !== null) {
        currentNode.right.next = currentNode.next.left;
      }

      currentNode = currentNode.next;
    }

    currentLevelStartNode = currentLevelStartNode.left;
  }

  return root;
}
