console.log(same([1,2,3], [4,1,9]))
console.log(same([1,2,3], [1,9]))
console.log(same([1,2,1], [4,4,1]))
 
// O(n)
function same(array, arraySquared) {
    if (array.length !== arraySquared.length) return false;
    let squared = {};
    // O(n)
    array.forEach(value => {
        let squaredValue = value ** 2;
        if (!(squaredValue in squared)) squared[squaredValue] = 0;
        squared[squaredValue] += 1
    });
    // O(n)
    arraySquared.forEach(value => {
        if (value in squared) {
            squared[value] -= 1;
            if (squared[value] === 0) delete squared[value];
        }
    });
    // O(n)
    return Object.keys(squared).length === 0;
}

// O(N^2)
function sameProf(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;

    // O(n)
    for (let i = 0; i <= arr1.length; i++) {
        // O(n) --> indexOf will loop through the second array
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if (correctIndex === -1) {
            return false;
        }
        // O(n) -> method adds/removes items to/from an array, and returns the removed item(s).
        arr2.splice(correctIndex, 1);
    }
    return true;
}