class Graph<T> {
    private adjacencyList: Map<T, T[]> = new Map();

    // Add a vertex to the graph
    public addVertex(vertex: T): void {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }

    // Add an edge between two vertices (undirected)
    public addEdge(vertex1: T, vertex2: T): void {
        if (!this.adjacencyList.has(vertex1)) {
            this.addVertex(vertex1);
        }
        if (!this.adjacencyList.has(vertex2)) {
            this.addVertex(vertex2);
        }
        this.adjacencyList.get(vertex1)!.push(vertex2);
        this.adjacencyList.get(vertex2)!.push(vertex1);
    }

    // Add an edge from vertex1 to vertex2 (directed)
    public addDirectedEdge(vertex1: T, vertex2: T): void {
        if (!this.adjacencyList.has(vertex1)) {
            this.addVertex(vertex1);
        }
        if (!this.adjacencyList.has(vertex2)) {
            this.addVertex(vertex2);
        }
        this.adjacencyList.get(vertex1)!.push(vertex2);
    }

    // Print the graph
    public printGraph(): void {
        for (let [vertex, edges] of this.adjacencyList.entries()) {
            console.log(`${vertex} -> ${edges.join(', ')}`);
        }
    }

    // Depth First Search (DFS)
    public depthFirstSearch(startVertex: T): void {
        const visited = new Set<T>();
        this.DFSHelper(startVertex, visited);
    }

    private DFSHelper(vertex: T, visited: Set<T>): void {
        visited.add(vertex);
        console.log(vertex);

        const neighbors = this.adjacencyList.get(vertex);
        if (neighbors) {
            for (let neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    this.DFSHelper(neighbor, visited);
                }
            }
        }
    }

    // Breadth First Search (BFS)
    public breadthFirstSearch(startVertex: T): void {
        const visited = new Set<T>();
        const queue: T[] = [startVertex];

        visited.add(startVertex);
        while (queue.length > 0) {
            const vertex = queue.shift()!;
            console.log(vertex);

            const neighbors = this.adjacencyList.get(vertex);
            if (neighbors) {
                for (let neighbor of neighbors) {
                    if (!visited.has(neighbor)) {
                        visited.add(neighbor);
                        queue.push(neighbor);
                    }
                }
            }
        }
    }
}

// Example usage:
const graph = new Graph<number>();

graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addEdge(1, 2);
graph.addEdge(2, 3);
graph.addEdge(3, 1);

graph.printGraph();
// Output:
// 1 -> 2, 3
// 2 -> 1, 3
// 3 -> 2, 1

console.log("DFS:");
graph.depthFirstSearch(1);
// Output: 1 2 3

console.log("BFS:");
graph.breadthFirstSearch(1);
// Output: 1 2 3
