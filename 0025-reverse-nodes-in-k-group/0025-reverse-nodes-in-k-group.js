/**
 * // Definition for singly-linked list.
 * function ListNode(val, next) {
 *   this.val = val === undefined ? 0 : val;
 *   this.next = next === undefined ? null : next;
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
function reverseKGroup(head, k) {
  if (!head || k === 1) return head;

  const dummy = new ListNode(0);

  dummy.next = head;

  let groupPrev = dummy;

  while (true) {
    const kthNode = getKthNode(groupPrev, k);

    if (!kthNode) break;

    const groupNext = kthNode.next;
    let prev = groupNext;
    let current = groupPrev.next;

    while (current !== groupNext) {
      const nextNode = current.next;

      current.next = prev;
      prev = current;
      current = nextNode;
    }

    const newGroupEnd = groupPrev.next;
    
    groupPrev.next = kthNode;
    groupPrev = newGroupEnd;
  }

  return dummy.next;
}

function getKthNode(startNode, k) {
  let current = startNode;

  while (current && k > 0) {
    current = current.next;
    k--;
  }

  return current;
}
