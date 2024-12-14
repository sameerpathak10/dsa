class Queue<T> {
    private items: T[] = [];

    // Enqueue an element at the end of the queue
    public enqueue(element: T): void {
        this.items.push(element);
    }

    // Dequeue an element from the front of the queue
    public dequeue(): T | undefined {
        return this.items.shift();
    }

    // Peek at the front element without removing it
    public peek(): T | undefined {
        return this.items[0];
    }

    // Check if the queue is empty
    public isEmpty(): boolean {
        return this.items.length === 0;
    }

    // Get the size of the queue
    public size(): number {
        return this.items.length;
    }

    // Print the queue elements
    public print(): void {
        console.log(this.items.join(' '));
    }
}

// Example usage:
const queue = new Queue<number>();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.print(); // Output: 10 20 30
console.log(queue.dequeue()); // Output: 10
console.log(queue.peek()); // Output: 20
console.log(queue.size()); // Output: 2
console.log(queue.isEmpty()); // Output: false
queue.print(); // Output: 20 30
