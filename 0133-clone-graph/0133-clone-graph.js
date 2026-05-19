/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
function cloneGraph(node) {
  if (!node) return null;

  const visited = new Map();

  function dfs(currentNode) {
    if (visited.has(currentNode)) {
      return visited.get(currentNode);
    }

    const copiedNode = new Node(currentNode.val);
    
    visited.set(currentNode, copiedNode);

    for (const neighbor of currentNode.neighbors) {
      copiedNode.neighbors.push(dfs(neighbor));
    }

    return copiedNode;
  }

  return dfs(node);
}
