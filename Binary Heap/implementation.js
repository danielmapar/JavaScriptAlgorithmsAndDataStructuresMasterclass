class MaxBinaryHeap {

    constructor() {
        this.values = [];
    }

    add(value) {
        this.values.push(value);

        let index = this.values.length - 1;

        while(index > 0) {
            let child = this.values[index];
            let fatherIndex = Math.floor((index-1)/2);
            let father = this.values[fatherIndex]
            if (father < child) {
                this.values[fatherIndex] = child;
                this.values[index] = father;
                index = fatherIndex;
                continue;
            }
            break;
        }
    }

    extractMax() {
        if (this.values.length === 0) return;
        if (this.values.length === 1) {
            return this.values.pop();
        }
        let lastElement = this.values[this.values.length-1];

        this.values[0] = lastElement;
        this.values.pop();
        
        let index = 0;
        while(index < this.values.length) {
            let leftChildIndex = Math.floor(index * 2) + 1;
            let rightChildIndex = leftChildIndex + 1;

            if (leftChildIndex >= this.values.length) break;

            // Checking largest child to swap
            let indexToCompare = leftChildIndex;
            if (rightChildIndex < this.values.length && 
                this.values[leftChildIndex] < this.values[rightChildIndex]) {
                indexToCompare = rightChildIndex;
            }

            if (this.values[index] < this.values[indexToCompare]) {
                let swap = this.values[index];
                this.values[index] = this.values[indexToCompare];
                this.values[indexToCompare] = swap;
                index = indexToCompare;
                continue;
            }
            break;
        }
    }

    

    toString() {
        return this.values;
    }

}


let mbh = new MaxBinaryHeap();
//            100
//        39       41
//    18     27  12    33 
mbh.add(41)
mbh.add(39)
mbh.add(33)
mbh.add(18)
mbh.add(27)
mbh.add(12)
mbh.add(100)
console.log(mbh.toString());

//            41
//        39       33
//    18     27  12    1       
let mbh2 = new MaxBinaryHeap();
mbh2.add(41)
mbh2.add(39)
mbh2.add(33)
mbh2.add(18)
mbh2.add(27)
mbh2.add(12)
mbh2.add(1)
console.log(mbh2.toString());
//            39
//        27       33
//    18     1  12         
mbh2.extractMax()
console.log(mbh2.toString());