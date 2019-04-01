/*
Write a function called maxSubarraySum which accepts and array 
of integers and a number called n. The function should calculate the maximum sum of n
consecutive elements in the array.
*/

console.log(maxSubarraySum([2,6,9,2,1,8,5,6,3], 3))

function maxSubarraySum(array, number) {
    if(number > array.length) return null;

    let currentSubarraySum = 0;
    let maxSubarraySum = -Infinity;
    let count = 0;
    // O(n)
    // Sliding windows is about subtracting the beginning and adding to the end
    array.forEach((element, index) => {
        currentSubarraySum += element;
        count++;
        if (count === number) {
            maxSubarraySum = Math.max(currentSubarraySum, maxSubarraySum);
            currentSubarraySum = currentSubarraySum - array[index - (number-1)];
            count = number - 1;
        }
    });
    return maxSubarraySum;
}