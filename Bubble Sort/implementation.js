console.log(bubbleSort([1,4,3,2,1,2,3]))
// swapped = true
// [1,3,4,2,1,2,3]

// best case O(n) --> already sorted data
// worst case O(n^2)
function bubbleSort(array) {

    let swapped = false;
    let size =  array.length - 1;
    for(let i = 0; i < size; i++) {
        let first = array[i];
        let next = array[i+1];
        if (first > next) {
            let swapVal = array[i+1];
            array[i+1] = array[i];
            array[i] = swapVal;
            swapped = true;
        }
        if (i+1 === size) {
            if (!swapped) return array;
            size = size - 1; // We know that the value in the end is the biggest 
            i = -1;
            swapped = false;
        }
    }
    return array;
}