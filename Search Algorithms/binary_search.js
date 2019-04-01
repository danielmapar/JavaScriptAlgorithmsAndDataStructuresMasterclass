function binarySearch(array, value){

    if (array.length === 0) return -1;

    let leftPointer = 0;
    let rightPointer = array.length - 1;

    // O(log n)
    // 10 / 2 = 5
    // 5 / 2 = 2.5
    // 2.5 / 2 = 1.25
    // 1.25 / 2 = xx
    // log2 10 = 3.something
    while(leftPointer < rightPointer) {
        let middlePointer = Math.round((leftPointer + rightPointer) / 2)
        //console.log(middlePointer)
        if(array[middlePointer] === value) return middlePointer;

        if (array[middlePointer] < value) leftPointer = middlePointer;
        else rightPointer = middlePointer;
    }

    return -1;
}


console.log(binarySearch([1,2,3,4,5], 2))
console.log(binarySearch([1,2,3,4,5], 3))
console.log(binarySearch([1,2,3,4,5], 5))
console.log(binarySearch([1,2,3,4,5], 6))