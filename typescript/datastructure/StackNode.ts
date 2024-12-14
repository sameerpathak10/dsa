class StackNode<T> {
    public value: T;
    public next: StackNode<T> | null = null;

    constructor(value: T) {
        this.value = value;
    }
}

class StackN<T> {
    private top: StackNode<T> | null = null;
    private _size: number = 0;

    // Push a new element onto the stack
    public push(value: T): void {
        const newNode = new StackNode(value);
        newNode.next = this.top;
        this.top = newNode;
        this._size++;
    }

    // Remove and return the top element from the stack
    public pop(): T | undefined {
        if (this.top === null) return undefined;
        const poppedNode = this.top;
        this.top = this.top.next;
        this._size--;
        return poppedNode.value;
    }

    // Peek at the top element without removing it
    public peek(): T | undefined {
        return this.top?.value;
    }

    // Check if the stack is empty
    public isEmpty(): boolean {
        return this.top === null;
    }

    // Get the size of the stack
    public size(): number {
        return this._size;
    }

    // Print the stack elements
    public print(): void {
        let currentNode = this.top;
        const elements: T[] = [];
        while (currentNode !== null) {
            elements.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(elements.join(' '));
    }
}

// Example usage:
const stack1 = new StackN<number>();
stack.push(10);
stack.push(20);
stack.push(30);
stack.print(); // Output: 30 20 10
console.log(stack.pop()); // Output: 30
console.log(stack.peek()); // Output: 20
console.log(stack.size()); // Output: 2
console.log(stack.isEmpty()); // Output: false
stack.print(); // Output: 20 10
