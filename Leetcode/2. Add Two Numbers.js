/**
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
 * 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    
    if (l1 === null && l2 === null) return null
    
    let l1Head = l1;
    
    let moveToNext = 0
    while (true) {
        let total = l1.val + l2.val + moveToNext
        if (moveToNext === 1) moveToNext = 0
        if (total < 10) {
            l1.val = total
        } else  {
            l1.val = total - 10
            moveToNext = 1
        }
        if (l1.next === null) break
        if (l2.next === null) break
        
        l1 = l1.next
        l2 = l2.next
    }
    
    while(l1.next !== null) {
        l1 = l1.next
        let total = l1.val + moveToNext
        if (moveToNext === 1) moveToNext = 0
        if (total < 10) {
            l1.val = total
        } else  {
            l1.val = total - 10
            moveToNext = 1
        }
        
    }
    
    while(l2.next !== null) {
        l1.next = l2.next
        l1 = l1.next
        let total = l1.val + moveToNext
        if (moveToNext === 1) moveToNext = 0
        if (total < 10) {
            l1.val = total
        } else  {
            l1.val = total - 10
            moveToNext = 1
        }
        l2 = l2.next
    }
    
    if (moveToNext === 1) {
        l1.next = new ListNode(1)
    } 
    
    
    return l1Head;
    
    
};