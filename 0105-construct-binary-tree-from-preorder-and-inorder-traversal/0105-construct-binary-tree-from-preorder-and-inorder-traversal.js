/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
function buildTree(preorder, inorder) {
  const inorderIndexMap = new Map();

  for (let index = 0; index < inorder.length; index += 1) {
    inorderIndexMap.set(inorder[index], index);
  }

  let preorderIndex = 0;

  function buildSubtree(leftBoundary, rightBoundary) {
    if (leftBoundary > rightBoundary) {
      return null;
    }

    const rootValue = preorder[preorderIndex];
    preorderIndex += 1;

    const rootNode = new TreeNode(rootValue);
    const rootInorderIndex = inorderIndexMap.get(rootValue);

    rootNode.left = buildSubtree(leftBoundary, rootInorderIndex - 1);
    rootNode.right = buildSubtree(rootInorderIndex + 1, rightBoundary);

    return rootNode;
  }

  return buildSubtree(0, inorder.length - 1);
}
