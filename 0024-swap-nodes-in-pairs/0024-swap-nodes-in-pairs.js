/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function swapPairs(head) {
  const dummyHead = new ListNode(0, head);
  let prevPairTail = dummyHead;

  while (prevPairTail.next !== null && prevPairTail.next.next !== null) {
    const firstNode = prevPairTail.next;
    const secondNode = firstNode.next;
    const nextPairHead = secondNode.next;

    prevPairTail.next = secondNode;
    secondNode.next = firstNode;
    firstNode.next = nextPairHead;
    prevPairTail = firstNode;
  }

  return dummyHead.next;
}
