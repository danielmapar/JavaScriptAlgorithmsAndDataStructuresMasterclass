class Graph{
    constructor(){
        this.adjacencyList = {};
    }
    DFSRecursive(vertex) {
        const visitedVertex = {};
        const result = [];

        let traverse = (vertex) => {
            result.push(vertex);
            if (this.adjacencyList[vertex].length === 0) return;
            visitedVertex[vertex] = true;
            this.adjacencyList[vertex].forEach(neighborVertex => {
                if (visitedVertex[neighborVertex] === undefined)
                    traverse(neighborVertex);
            })
        }
        traverse(vertex);
        return result;
    }

    DFSIterative(firstVertex) {
        let stack = [];
        stack.push(firstVertex);
        
        let visited = {};
        visited[firstVertex] = true;

        let results = [];
        
        while (stack.length > 0) {
            let vertex = stack.pop();
            results.push(vertex);
            
            this.adjacencyList[vertex].forEach(adjacentVertex => {
                if (!visited[adjacentVertex]) {
                    visited[adjacentVertex] = true;
                    stack.push(adjacentVertex);
                }
            });
        }
        return results;
    }

    BFSIterative(firstVertex) {
        let queue = [];
        queue.push(firstVertex);
        
        let visited = {};
        visited[firstVertex] = true;

        let results = [];
        
        while (queue.length > 0) {
            let vertex = queue.shift();
            results.push(vertex);
            
            // To go from right to left
            // this.adjacencyList[vertex].slice().reverse()
            // slice --> makes copy of array
            this.adjacencyList[vertex].forEach(adjacentVertex => {
                if (!visited[adjacentVertex]) {
                    visited[adjacentVertex] = true;
                    queue.push(adjacentVertex);
                }
            });
        }
        return results;
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2) {
        this.addVertex(vertex1);
        this.adjacencyList[vertex1].push(vertex2);
        this.addVertex(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    removeEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1])
            this.adjacencyList[vertex1] = 
            this.adjacencyList[vertex1].filter(vertex => vertex !== vertex2)
        if (this.adjacencyList[vertex2])
            this.adjacencyList[vertex2] = 
            this.adjacencyList[vertex2].filter(vertex => vertex !== vertex1)
    }

    removeVertex(vertex) {
        let edges = this.adjacencyList[vertex];
        delete this.adjacencyList[vertex];
        edges.forEach(adjacentVertex => {
            this.removeEdge(vertex, adjacentVertex);
        });
    }

}


let g = new Graph();
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

// |---- A -----|
// B            C ------ J
// |            |
// D ---------- E 
// |            |
// |----- F ----|


g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B", "D")
g.addEdge("C", "E")
g.addEdge("D", "E")
g.addEdge("D", "F")
g.addEdge("E", "F")

console.log(g)

console.log(g.DFSRecursive("A"))
console.log(g.DFSIterative("A"))
console.log(g.BFSIterative("A"))

/**
 * Graph {
  adjacencyList:
   { A: [ 'B', 'C' ],
     B: [ 'A', 'D' ],
     C: [ 'A', 'E' ],
     D: [ 'B', 'E', 'F' ],
     E: [ 'C', 'D', 'F' ],
     F: [ 'D', 'E' ] } }
 */
// ['A', 'C', 'E', 'F', 'D', 'B']
