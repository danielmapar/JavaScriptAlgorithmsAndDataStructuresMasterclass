/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {

    let min = 0;
    let max = nums.length - 1;

    while(min <= max) {
        let middle = Math.floor((min+max) / 2);

        if (nums[middle] == target)
            return middle;
        
        
        if (nums[min] <= nums[middle]) {
            if(nums[min] <= target && target < nums[middle]) {
                max = middle - 1;
            } else {
                min = middle + 1;
            }
        } else {
            if(nums[middle] < target && target <= nums[max]) {
                min = middle + 1;
            } else {
                max = middle - 1;
            }
        }
        
    }
    
    return -1;
    
};