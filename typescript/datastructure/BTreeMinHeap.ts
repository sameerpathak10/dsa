class MinHeap {
    private heap: number[] = [];
    public insert(value: number): void {
        this.heap.push(value);
        this.heapifyUp();
    }

    public extractMin(): number | undefined {
        if (this.heap.length == 0) return undefined;
        if (this.heap.length == 1) return this.heap.pop();

        let min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return min;
    }
    private heapifyUp(): void {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index] >= this.heap[parentIndex])
                break;
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
        }
    }
    private heapifyDown() {
       
        let index = 0;
        while (2 * index + 1 < this.heap.length) {
            let samllest = 2 * index + 1;
            if (2 * index + 2 < this.heap.length && this.heap[2 * index + 2] < this.heap[2 * index + 1])
                samllest = 2 * index + 2;
            if (this.heap[index] <= this.heap[samllest])
                break;
            [this.heap[index], this.heap[samllest]] = [this.heap[samllest], this.heap[index]];
            index = samllest;
        }
    }
    // Get the minimum value without removing it 
    public peek(): number | undefined { 
        return this.heap[0]; 
    }
}

const minHeap = new MinHeap(); 
minHeap.insert(10); minHeap.insert(5); 
minHeap.insert(20); minHeap.insert(1); 
console.log(minHeap.extractMin()); // Output: 1 
console.log(minHeap.peek()); // Output: 5