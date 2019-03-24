/*
Implement a function called countUniqueValues, which accepts a sorted array,
and counts the unique values in the array. There can be negative numbers in the array,
but it will always be sorted.
*/

console.log(countUniqueValues([1,1,1,1,1,1,2,2]));
console.log(countUniqueValues([1,2,3]));
console.log(countUniqueValues([1,1,1,2,2,3]));
console.log("-------------------")
console.log(countUniqueValuesPointer([1,1,1,1,1,1,2,2]));
console.log(countUniqueValuesPointer([1,2,3]));
console.log(countUniqueValuesPointer([1,1,1,2,2,3]));

function countUniqueValues(sortedArray) {
    let totalUniqueValues = 0;
    const uniqueLookup = {};
    if (sortedArray.length === 0) return totalUniqueValues;

    sortedArray.forEach(currentValue => {
        if (currentValue in uniqueLookup) return;
        uniqueLookup[currentValue] = true;
        totalUniqueValues++;
    });

    return totalUniqueValues;
}


function countUniqueValuesPointer(sortedArray) {
    let uniqueValues = 0;
    if (sortedArray.length === 0) return uniqueValues;

    sortedArray.forEach((currentValue, index) => {
        let previousValue = null;
        if (index > 0) previousValue = sortedArray[index-1];
        if (previousValue !== currentValue) uniqueValues++;
    });

    return uniqueValues;
}
