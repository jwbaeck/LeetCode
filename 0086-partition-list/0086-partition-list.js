/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.next = (next === undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
function partition(head, x) {
    const smallerDummy = new ListNode(0);
    const greaterOrEqualDummy = new ListNode(0);
    let smallerTail = smallerDummy;
    let greaterOrEqualTail = greaterOrEqualDummy;
    let currentNode = head;

    while (currentNode) {
        if (currentNode.val < x) {
            smallerTail.next = currentNode;
            smallerTail = smallerTail.next;
        } else {
            greaterOrEqualTail.next = currentNode;
            greaterOrEqualTail = greaterOrEqualTail.next;
        }

        currentNode = currentNode.next;
    }

    greaterOrEqualTail.next = null;
    smallerTail.next = greaterOrEqualDummy.next;

    return smallerDummy.next;
}
