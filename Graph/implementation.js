class Graph{
    constructor(){
        this.adjacencyList = {};
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


let graph = new Graph();
graph.addVertex("Tokyo")
graph.addVertex("Dallas")
graph.addEdge("Tokyo", "Dallas")
//graph.removeEdge("Tokyo", "Dallas")
graph.removeVertex("Dallas")
console.log(graph)