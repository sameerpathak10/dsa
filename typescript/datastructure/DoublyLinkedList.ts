class DoublyListNode<T> {
    public value: T;
    public next: DoublyListNode<T> | null = null;
    public prev: DoublyListNode<T> | null = null;

    constructor(value: T) {
        this.value = value;
    }
}

class DoublyLinkedList<T> {
    private head: DoublyListNode<T> | null = null;
    private tail: DoublyListNode<T> | null = null;
    private size: number = 0;

    // Add a new node at the end of the list
    public append(value: T): void {
        const newNode = new DoublyListNode(value);
        if (this.tail === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.size++;
    }

    // Add a new node at the beginning of the list
    public prepend(value: T): void {
        const newNode = new DoublyListNode(value);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.size++;
    }

    // Remove a node by its value
    public remove(value: T): void {
        if (this.head === null) return;

        let currentNode = this.head;

        while (currentNode !== null && currentNode.value !== value) {
            currentNode = currentNode.next;
        }

        if (currentNode !== null) {
            if (currentNode.prev !== null) {
                currentNode.prev.next = currentNode.next;
            } else {
                this.head = currentNode.next;
            }

            if (currentNode.next !== null) {
                currentNode.next.prev = currentNode.prev;
            } else {
                this.tail = currentNode.prev;
            }

            this.size--;
        }
    }

    // Get the size of the linked list
    public getSize(): number {
        return this.size;
    }

    // Print all values in the linked list (forward direction)
    public printForward(): void {
        let currentNode = this.head;
        while (currentNode !== null) {
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
    }

    // Print all values in the linked list (backward direction)
    public printBackward(): void {
        let currentNode = this.tail;
        while (currentNode !== null) {
            console.log(currentNode.value);
            currentNode = currentNode.prev;
        }
    }

    // Find a node by its value
    public find(value: T): DoublyListNode<T> | null {
        let currentNode = this.head;
        while (currentNode !== null) {
            if (currentNode.value === value) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return null;
    }
}

// Example usage:
const list = new DoublyLinkedList<number>();
list.append(10);
list.append(20);
list.prepend(5);
list.printForward(); // Output: 5 10 20
list.printBackward(); // Output: 20 10 5
console.log(list.getSize()); // Output: 3
list.remove(10);
list.printForward(); // Output: 5 20
console.log(list.find(20)); // Output: DoublyListNode { value: 20, next: null, prev: <reference to node with value 5> }
