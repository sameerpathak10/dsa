class Graph2 {
    private adjacencyMatrix: number[][];
    private vertices: number;

    constructor(vertices: number) {
        this.vertices = vertices;
        this.adjacencyMatrix = Array.from({ length: vertices }, () => Array(vertices).fill(0));
    }

    // Add an edge between two vertices (undirected)
    public addEdge(vertex1: number, vertex2: number): void {
        this.adjacencyMatrix[vertex1][vertex2] = 1;
        this.adjacencyMatrix[vertex2][vertex1] = 1;
    }

    // Add an edge from vertex1 to vertex2 (directed)
    public addDirectedEdge(vertex1: number, vertex2: number): void {
        this.adjacencyMatrix[vertex1][vertex2] = 1;
    }

    // Print the graph
    public printGraph(): void {
        for (let i = 0; i < this.vertices; i++) {
            const row = this.adjacencyMatrix[i].map((val, idx) => (val ? idx : null)).filter((idx) => idx !== null);
            console.log(`${i} -> ${row.join(', ')}`);
        }
    }

    // Depth First Search (DFS)
    public depthFirstSearch(startVertex: number): void {
        const visited = new Array(this.vertices).fill(false);
        this.DFSHelper(startVertex, visited);
    }

    private DFSHelper(vertex: number, visited: boolean[]): void {
        visited[vertex] = true;
        console.log(vertex);

        for (let i = 0; i < this.vertices; i++) {
            if (this.adjacencyMatrix[vertex][i] === 1 && !visited[i]) {
                this.DFSHelper(i, visited);
            }
        }
    }

    // Breadth First Search (BFS)
    public breadthFirstSearch(startVertex: number): void {
        const visited = new Array(this.vertices).fill(false);
        const queue: number[] = [];

        visited[startVertex] = true;
        queue.push(startVertex);

        while (queue.length > 0) {
            const vertex = queue.shift()!;
            console.log(vertex);

            for (let i = 0; i < this.vertices; i++) {
                if (this.adjacencyMatrix[vertex][i] === 1 && !visited[i]) {
                    visited[i] = true;
                    queue.push(i);
                }
            }
        }
    }
}

// Example usage:
const graph2 = new Graph2(4);

graph2.addEdge(0, 1);
graph2.addEdge(0, 2);
graph2.addEdge(1, 2);
graph2.addEdge(2, 3);

graph2.printGraph();
// Output:
// 0 -> 1, 2
// 1 -> 0, 2
// 2 -> 0, 1, 3
// 3 -> 2

console.log("DFS:");
graph2.depthFirstSearch(0);
// Output: 0 1 2 3

console.log("BFS:");
graph2.breadthFirstSearch(0);
// Output: 0 1 2 3
