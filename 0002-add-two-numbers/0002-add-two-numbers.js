/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
  const dummy = new ListNode(0);
  let tail = dummy;

  let p = l1, q = l2;
  let carry = 0;

  while (p !== null || q !== null || carry !== 0) {
    const x = p ? p.val : 0;
    const y = q ? q.val : 0;

    const sum = x + y + carry;
    carry = Math.floor(sum / 10);

    tail.next = new ListNode(sum % 10);
    tail = tail.next;

    if (p) p = p.next;
    if (q) q = q.next;
  }

  return dummy.next;
}
