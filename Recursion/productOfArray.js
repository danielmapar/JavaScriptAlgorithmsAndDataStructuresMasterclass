// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(arr) {
    if (arr.length === 0) return 1;
    let prod = arr[0];
    return prod * productOfArray(arr.slice(1));
}