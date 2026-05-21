/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
function sortedListToBST(head) {
  if (!head) return null;

  function buildTree(start, end) {
    if (start === end) return null;

    let slow = start;
    let fast = start;

    while (fast !== end && fast.next !== end) {
      slow = slow.next;
      fast = fast.next.next;
    }

    const root = new TreeNode(slow.val);

    root.left = buildTree(start, slow);
    root.right = buildTree(slow.next, end);

    return root;
  }

  return buildTree(head, null);
}
