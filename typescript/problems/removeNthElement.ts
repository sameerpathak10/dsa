class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    // Create a dummy node that points to head
    const dummy = new ListNode(0);
    dummy.next = head;

    let fast: ListNode | null = dummy;
    let slow: ListNode | null = dummy;

    // Move fast pointer n steps ahead
    for (let i = 0; i < n; i++) {
        if (fast) fast = fast.next;
    }

    // Move both pointers until fast reaches the end
    while (fast && fast.next) {
        fast = fast.next;
        slow = slow.next;
    }

    // Remove the nth node from end
    if (slow && slow.next) {
        slow.next = slow.next.next;
    }

    // Return modified list starting from dummy's next
    return dummy.next;
}

// Example usage:
const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
const n = 2;
const updatedHead = removeNthFromEnd(head, n);

// Function to print linked list for verification
function printList(head: ListNode | null) {
    let current = head;
    const values: number[] = [];
    while (current) {
        values.push(current.val);
        current = current.next;
    }
    console.log(values.join(" -> "));
}

printList(updatedHead); // Output should be: 1 -> 2 -> 3 -> 5
