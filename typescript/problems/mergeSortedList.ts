/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     } 
 .

 * }
 */
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}
function mergeTwoLists2(list1: ListNode | null, list2: ListNode | null): ListNode | null {

    let mergedList: ListNode | null = new ListNode(0);
    let currentNode = mergedList;

    if (list1 === null && list2 === null)
        return null;
    else if (list1 === null)
        return list2;
    else if (list2 === null)
        return list1;

    while (list1 !== null && list2 !== null) {

        if (list1?.val < list2?.val) {

            let newNode = new ListNode(list1.val);
            currentNode.next = newNode;
            currentNode = currentNode.next;
            list1 = list1?.next;
        } else {

            let newNode = new ListNode(list2.val);
            currentNode.next = newNode;
            currentNode = currentNode.next;
            list2 = list2?.next;
        }
    }

    while (list1 != null) {

        let newNode = new ListNode(list1.val);
        currentNode.next = newNode;
        currentNode = currentNode.next;
        list1 = list1.next;
    }

    while (list2 != null) {

        let newNode = new ListNode(list2.val);
        currentNode.next = newNode;
        currentNode = currentNode.next;
        list2 = list2.next;
    }

    return mergedList.next;
};
// Function to print linked list for verification
function printList(head: ListNode | null) {
    let current = head;
    const values: number[] = [];
    while (current) {
        values.push(current.val);
        current = current.next;
    }
    //  console.log(`length:${values.length}`);
    if (values.length > 0)
        console.log(values.join(" -> "));
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (!list1) {
        return list2
    }

    if (!list2) {
        return list1
    }

    if (list1.val <= list2.val) {
        list1.next = mergeTwoLists(list1.next, list2)

        return list1
    } else {
        list2.next = mergeTwoLists(list1, list2.next)

        return list2
    }
};
const list1: ListNode = new ListNode(-9, new ListNode(3));
const list2: ListNode = new ListNode(5, new ListNode(7));
console.log(`list1: ${printList(list1)}`);
console.log(`list2: ${printList(list2)}`);
const list3 = mergeTwoLists(list1, list2);

console.log(`list3: ${printList(list3)}`);

