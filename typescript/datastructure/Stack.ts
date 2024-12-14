class Stack<T> {
    private items: T[] = [];

    // Push an element onto the stack
    public push(element: T): void {
        this.items.push(element);
    }

    // Remove and return the top element from the stack
    public pop(): T | undefined {
        return this.items.pop();
    }

    // Peek at the top element without removing it
    public peek(): T | undefined {
        return this.items[this.items.length - 1];
    }

    // Check if the stack is empty
    public isEmpty(): boolean {
        return this.items.length === 0;
    }

    // Get the size of the stack
    public size(): number {
        return this.items.length;
    }

    // Print the stack elements
    public print(): void {
        console.log(this.items.join(' '));
    }
}

// Example usage:
const stack = new Stack<number>();
stack.push(10);
stack.push(20);
stack.push(30);
stack.print(); // Output: 10 20 30
console.log(stack.pop()); // Output: 30
console.log(stack.peek()); // Output: 20
console.log(stack.size()); // Output: 2
console.log(stack.isEmpty()); // Output: false
stack.print(); // Output: 10 20
