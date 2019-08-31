/**
 * 
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
 */

 /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let lookup = {}
    for(let i = 0; i < nums.length; i++) {
        let num = nums[i]
        if (lookup[num] === undefined) lookup[num] = []
        lookup[num].push(i)
        
        if (lookup[target-num] !== undefined) {
            
            if ((target-num) === num) {
                if (lookup[num].length === 1) continue
                else return [lookup[num][0], lookup[num][1]]
            } 
            
            return [lookup[target-num][0], i]
        }    
    }
    
    
};