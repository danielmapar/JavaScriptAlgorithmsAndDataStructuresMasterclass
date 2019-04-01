
console.log(selectionSort([2, 5, 100, 1, -1, 3, 143,2]))

// currentIndex = 0
// minElementIndex = 1
// i = 2



// O(N^2)
// less swaps compared to bubble sort
function selectionSort(array) {

    if (array.length === 0) return array;

    let minElementIndex = 0;
    let currentIndex = 0;
    for(let i = currentIndex; i < array.length; i++) {
        if (array[i] < array[minElementIndex]) {
            minElementIndex = i;
        }
        if (i+1 === array.length) {
            let swap = array[minElementIndex];
            array[minElementIndex] = array[currentIndex];
            array[currentIndex] = swap;
            i = ++currentIndex;
            minElementIndex = i;
        }
    }

    return array;
}