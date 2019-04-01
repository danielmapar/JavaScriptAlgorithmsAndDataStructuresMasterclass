// O(n + m)

console.log(merge([1,2,3,4,5], [2,3,4,5,6,7,8]))
console.log(merge([100], [2,3,4,5,6,7,8]))

function merge(array1, array2) {
    let result = []

    let i = 0;
    let j = 0;

    while(i < array1.length && j < array2.length) {
        if(array1[i] < array2[j]) {
            result.push(array1[i]);
            ++i;
        } else {
            result.push(array2[j]);
            ++j;
        }
    }

    while(i < array1.length) {
        result.push(array1[i])
        ++i;
    }

    while(j < array2.length) {
        result.push(array2[j])
        ++j;
    }

    return result;
}

console.log(mergeSort([1,100,500, 900, 200,2,3,9]))
function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let middle = Math.floor(arr.length/2)
    let array1 = mergeSort(arr.slice(0, middle))
    let array2 = mergeSort(arr.slice(middle))
    return merge(array1, array2);
}