class PriorityQueue {
    constructor(){
        this.values = [];
    }
    enqueue(val, priority){
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }
    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            if(element.priority >= parent.priority) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    dequeue(){
        const min = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }
    sinkDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true){
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild,rightChild;
            let swap = null;

            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if(
                    (swap === null && rightChild.priority < element.priority) || 
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                   swap = rightChildIdx;
                }
            }
            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

class Node {
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
}

class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1,vertex2, weight){
        this.adjacencyList[vertex1].push({node:vertex2,weight});
        this.adjacencyList[vertex2].push({node:vertex1, weight});
    }

    djikstra(startVertex, endVertex) {
        if (startVertex === endVertex) return;
        
        const queue = new PriorityQueue();
        queue.enqueue(startVertex, 0);

        const visited = [];

        const routeMap = {
            [startVertex]: null,
        }
        const costMap = {
            [startVertex]: 0,
        };

        while(queue.values.length > 0) {
            const visitingVertex = queue.dequeue().val;
            if (visited.indexOf(visitingVertex) >= 0) continue;

            visited.push(visitingVertex);

            this.adjacencyList[visitingVertex].forEach(adjacentVertex => {
                if (costMap[adjacentVertex.node] === undefined) costMap[adjacentVertex.node] = Infinity;
                if (routeMap[adjacentVertex.node] === undefined) routeMap[adjacentVertex.node] = visitingVertex;
                const costOfCurrentVertex = costMap[visitingVertex];
                const costOfAdjacentVertex = adjacentVertex.weight;
                const totalPathCost = costOfCurrentVertex + costOfAdjacentVertex;
 
                if (totalPathCost < costMap[adjacentVertex.node]) {
                    costMap[adjacentVertex.node] = totalPathCost;
                    routeMap[adjacentVertex.node] = visitingVertex;
                    queue.enqueue(adjacentVertex.node, totalPathCost); 
                }
            })
        }

        console.log("Cost Map: ", costMap)
        console.log("Route Map: ", routeMap)
        console.log("Visited Vertex: ", visited)

        let shortestPath = [endVertex]
        let vertex = routeMap[endVertex]
        while(vertex) {
            shortestPath.push(vertex);
            vertex = routeMap[vertex];
        }

        return shortestPath.reverse();
    }
}


const wg = new WeightedGraph()

wg.addVertex("A");
wg.addVertex("B");
wg.addVertex("C");
wg.addVertex("D");
wg.addVertex("E");
wg.addVertex("F");

wg.addEdge("A", "B", 4);
wg.addEdge("A", "C", 2);
wg.addEdge("C", "D", 2);
wg.addEdge("C", "F", 4);
wg.addEdge("F", "E", 1);
wg.addEdge("B", "E", 3);
wg.addEdge("D", "E", 3);
wg.addEdge("D", "F", 1);

console.log(wg.djikstra("A", "E"));