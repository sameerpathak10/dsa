
//Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


function isPalindrome(head: ListNode | null): boolean {

    let str1 = '', ptr1: ListNode = head, ptr2: ListNode = null;
    //printList(ptr1);
    while (ptr1) {
        //console.log(`ptr1.val:${ptr1.val}`);
        str1 += ptr1.val;
        let temp = ptr2;
        ptr2 = ptr1;//new ListNode(ptr1.val);
        ptr2.next = temp;
        ptr1 = ptr1.next;

    }
    let str2 = '';
    //printList(ptr2);
    while (ptr2) {
        console.log(`ptr2.val:${ptr2.val}`);
        str2 += ptr2.val;
        ptr2 = ptr2.next;
    }
    console.log(`str1:${str1} === str2:${str2}`);
    return str1 === str2;

};

function printList(head: ListNode | null): void {
    let temp = head;
    while (temp) {
        console.log(`-->${temp.val}`);
        temp = temp.next;
    }
}

const test = new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(1))));
//printList(test);
isPalindrome(test);