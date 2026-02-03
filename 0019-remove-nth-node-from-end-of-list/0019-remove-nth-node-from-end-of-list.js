/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function removeNthFromEnd(head, n) {
  const dummyHead = new ListNode(0, head);
  let fastPointer = dummyHead;

  for (let step = 0; step < n; step++) {
    fastPointer = fastPointer.next;
  }

  let slowPointer = dummyHead;

  while (fastPointer.next !== null) {
    fastPointer = fastPointer.next;
    slowPointer = slowPointer.next;
  }

  slowPointer.next = slowPointer.next.next;

  return dummyHead.next;
}
