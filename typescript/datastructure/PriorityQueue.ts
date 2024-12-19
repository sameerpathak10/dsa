class PriorityQueue<T> {

    public heap: { value: T, priority: number }[] = [];

    public enqueue(value: T, priority: number): void {
        const newNode = { value, priority };
        this.heap.push(newNode);
        this.heapifyUp();
    }
    public dequeue(): { value: T, priority: number } | undefined {
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
            let parentIndex = Math.floor((1 - index) / 2);
            if (this.heap[index] >= this.heap[parentIndex])
                break;
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
        }
    }
    private heapifyDown(): void {
        let index = 0;
        while (2 * index + 1 < this.heap.length) {
            let smallest = 2 * index + 1;
            if (2 * index + 2 < this.heap.length && this.heap[2 * index + 2] < this.heap[smallest])
                smallest = 2 * index + 2;
            if (this.heap[index] <= this.heap[smallest])
                break;
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }
    public peek() {
        return this.heap[0];
    }
    public isEmpty() {
        return this.heap.length == 0;
    }
    public size() {
        return this.heap.length;
    }
}