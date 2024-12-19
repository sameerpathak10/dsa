class PriorityQueue2<T> {
    private heap: { value: T; priority: number }[] = [];

    public enqueue(value: T, priority: number): void {
        const newNode = { value, priority };
        this.heap.push(newNode);
        this.heapifyUp();
    }

    public dequeue(): T | undefined {
        if (this.heap.length === 0) return undefined;
        if (this.heap.length === 1) return this.heap.pop()!.value;

        const root = this.heap[0];
        this.heap[0] = this.heap.pop()!;
        this.heapifyDown();
        return root.value;
    }

    public isEmpty(): boolean {
        return this.heap.length === 0;
    }

    private heapifyUp(): void {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index].priority >= this.heap[parentIndex].priority) break;
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
        }
    }

    private heapifyDown(): void {
        let index = 0;
        while (2 * index + 1 < this.heap.length) {
            let smallest = 2 * index + 1;
            if (2 * index + 2 < this.heap.length && this.heap[2 * index + 2].priority < this.heap[smallest].priority) {
                smallest = 2 * index + 2;
            }
            if (this.heap[index].priority <= this.heap[smallest].priority) break;
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }
}

class Graph3 {
    private adjacencyList: Map<string, { node: string; weight: number }[]> = new Map();

    public addVertex(vertex: string): void {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }

    public addEdge(vertex1: string, vertex2: string, weight: number): void {
        this.adjacencyList.get(vertex1)!.push({ node: vertex2, weight });
        this.adjacencyList.get(vertex2)!.push({ node: vertex1, weight });
    }

    public dijkstra(start: string): Map<string, number> {
        const distances = new Map<string, number>();
        const pq = new PriorityQueue2<string>();
        const previous = new Map<string, string | null>();

        for (let vertex of this.adjacencyList.keys()) {
            if (vertex === start) {
                distances.set(vertex, 0);
                pq.enqueue(vertex, 0);
            } else {
                distances.set(vertex, Infinity);
                pq.enqueue(vertex, Infinity);
            }
            previous.set(vertex, null);
        }

        while (!pq.isEmpty()) {
            const currentVertex = pq.dequeue();
            if (currentVertex === undefined) break;

            for (let neighbor of this.adjacencyList.get(currentVertex)!) {
                const alt = distances.get(currentVertex)! + neighbor.weight;
                if (alt < distances.get(neighbor.node)!) {
                    distances.set(neighbor.node, alt);
                    previous.set(neighbor.node, currentVertex);
                    pq.enqueue(neighbor.node, alt);
                }
            }
        }

        return distances;
    }

    public printGraph(): void {
        for (let [vertex, edges] of this.adjacencyList.entries()) {
            console.log(`${vertex} -> ${edges.map(e => `${e.node} (${e.weight})`).join(', ')}`);
        }
    }
}

// Example usage:
const graph3 = new Graph3();
graph3.addVertex("A");
graph3.addVertex("B");
graph3.addVertex("C");
graph3.addVertex("D");
graph3.addVertex("E");

graph3.addEdge("A", "B", 4);
graph3.addEdge("A", "C", 2);
graph3.addEdge("B", "C", 5);
graph3.addEdge("B", "D", 10);
graph3.addEdge("C", "E", 3);
graph3.addEdge("D", "E", 4);

graph3.printGraph();
// Output:
// A -> B (4), C (2)
// B -> A (4), C (5), D (10)
// C -> A (2), B (5), E (3)
// D -> B (10), E (4)
// E -> C (3), D (4)

const distances = graph3.dijkstra("A");
console.log(distances);
// Output: Map { 'A' => 0, 'B' => 4, 'C' => 2, 'D' => 9, 'E' => 5 }
