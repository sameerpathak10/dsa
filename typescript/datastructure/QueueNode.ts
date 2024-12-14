class QueueNode<T> {
    public value: T;
    public next: QueueNode<T> | null = null;

    constructor(value: T) {
        this.value = value;
    }
}

class QueueN<T> {
    private front: QueueNode<T> | null = null;
    private rear: QueueNode<T> | null = null;
    private _size: number = 0;

    // Enqueue an element at the end of the queue
    public enqueue(value: T): void {
        const newNode = new QueueNode(value);
        if (this.rear === null) {
            this.front = newNode;
            this.rear = newNode;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
        this._size++;
    }

    // Dequeue an element from the front of the queue
    public dequeue(): T | undefined {
        if (this.front === null) return undefined;
        const dequeuedNode = this.front;
        this.front = this.front.next;
        if (this.front === null) {
            this.rear = null;
        }
        this._size--;
        return dequeuedNode.value;
    }

    // Peek at the front element without removing it
    public peek(): T | undefined {
        return this.front?.value;
    }

    // Check if the queue is empty
    public isEmpty(): boolean {
        return this.front === null;
    }

    // Get the size of the queue
    public size(): number {
        return this._size;
    }

    // Print the queue elements
    public print(): void {
        let currentNode = this.front;
        const elements: T[] = [];
        while (currentNode !== null) {
            elements.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(elements.join(' '));
    }
}

// Example usage:
const queue1 = new QueueN<number>();
queue1.enqueue(10);
queue1.enqueue(20);
queue1.enqueue(30);
queue1.print(); // Output: 10 20 30
console.log(queue1.dequeue()); // Output: 10
console.log(queue1.peek()); // Output: 20
console.log(queue1.size()); // Output: 2
console.log(queue1.isEmpty()); // Output: false
queue1.print(); // Output: 20 30

