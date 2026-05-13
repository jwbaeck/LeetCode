/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
function buildTree(inorder, postorder) {
  const inorderIndexMap = new Map();

  for (let i = 0; i < inorder.length; i++) {
    inorderIndexMap.set(inorder[i], i);
  }

  let postorderIndex = postorder.length - 1;

  function build(left, right) {
    if (left > right) return null;

    const rootValue = postorder[postorderIndex];
    
    postorderIndex--;

    const root = new TreeNode(rootValue);
    const inorderRootIndex = inorderIndexMap.get(rootValue);

    root.right = build(inorderRootIndex + 1, right);
    root.left = build(left, inorderRootIndex - 1);

    return root;
  }

  return build(0, inorder.length - 1);
}
