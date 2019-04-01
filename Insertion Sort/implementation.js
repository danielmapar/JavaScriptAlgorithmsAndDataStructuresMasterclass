console.log(insertionSort([1,4,100,330,3,1]))

// O(N^2)
// Good for a live algorithm (since one side is sorted)
function insertionSort(array) {
    if (array.length <= 1) return array;

    for(let i = 1; i < array.length; i++) {
        let currentVal = array[i];
        for (var j = i - 1; j > -1 && array[j] > currentVal; j--) {
            array[j+1] = array[j];
        }
        array[j+1] = currentVal;
    }
    return array;
}