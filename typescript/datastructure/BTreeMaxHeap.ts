class MaxHeap {
    private heap: number[] = [];

    // Insert a value into the heap
    public insert(value: number): void {
        this.heap.push(value);
        this.heapifyUp();
    }

    // Remove and return the maximum value from the heap
    public extractMax(): number | undefined {
        if (this.heap.length === 0) return undefined;
        if (this.heap.length === 1) return this.heap.pop();

        const max = this.heap[0];
        this.heap[0] = this.heap.pop()!;
        this.heapifyDown();
        return max;
    }

    // Heapify up to maintain max-heap property
    private heapifyUp(): void {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index] <= this.heap[parentIndex]) 
                break;
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
        }
    }

    // Heapify down to maintain max-heap property
    private heapifyDown(): void {
        let index = 0;
        while (2 * index + 1 < this.heap.length) {
            let largest = 2 * index + 1;
            if (2 * index + 2 < this.heap.length && this.heap[2 * index + 2] > this.heap[largest]) {
                largest = 2 * index + 2;
            }
            if (this.heap[index] >= this.heap[largest]) 
                break;
            [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
            index = largest;
        }
    }

    // Get the maximum value without removing it
    public peek(): number | undefined {
        return this.heap[0];
    }
}

// Example usage:
const maxHeap = new MaxHeap();
maxHeap.insert(10);
maxHeap.insert(15);
maxHeap.insert(20);
maxHeap.insert(17);
console.log(maxHeap.extractMax()); // Output: 20
console.log(maxHeap.peek()); // Output: 17
