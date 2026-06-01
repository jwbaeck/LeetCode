/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *   this.val = val === undefined ? null : val;
 *   this.left = left === undefined ? null : left;
 *   this.right = right === undefined ? null : right;
 *   this.next = next === undefined ? null : next;
 * }
 */

/**
 * @param {Node} root
 * @return {Node}
 */
function connect(root) {
  if (!root) return null;

  const queue = [root];

  while (queue.length > 0) {
    const levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      const currentNode = queue.shift();

      if (i < levelSize - 1) {
        currentNode.next = queue[0];
      } else {
        currentNode.next = null;
      }

      if (currentNode.left) {
        queue.push(currentNode.left);
      }

      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
  }

  return root;
}
