console.log(sumZero([-3,-2,-1,0,1,2,3]))
console.log(sumZero([-2,0,1,3]))
console.log(sumZero([1,2,3]))

function sumZero(sortedArray) {
    if (sortedArray.length === 0) return undefined;

    let leftPointerIndex = 0;
    // 1
    let rightPointerIndex = sortedArray.length - 1;
    // 5

    let leftPointer = sortedArray[leftPointerIndex];
    // -3
    let rightPointer = sortedArray[rightPointerIndex];
    // 4

    // O(n / 2)
    while(leftPointerIndex !== rightPointerIndex) {
        if ((leftPointer + rightPointer) === 0) return [leftPointer, rightPointer];
        if (Math.abs(leftPointer) > rightPointer) leftPointer = sortedArray[++leftPointerIndex];
        if (Math.abs(leftPointer) < rightPointer) rightPointer = sortedArray[--rightPointerIndex];
    }

    return undefined;
}