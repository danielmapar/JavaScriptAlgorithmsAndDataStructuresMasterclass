/**
 * 
Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.

Example:

Input:
[
  1->4->5,
  1->3->4,
  2->6
]
Output: 1->1->2->3->4->4->5->6
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
        
    if (lists.length === 0) {
        return lists
    }
    
    let merge = function(list1, list2) {
        
        let head = null;
        if(list1.val < list2.val) {
            head = new ListNode(list1.val);
            list1 = list1.next
        } else {
            head = new ListNode(list2.val);
            list2 = list2.next
        }
        let lastNode = head
                    
        while(list1 !== null && list2 !== null) {            
            if(list1.val < list2.val) {
                lastNode.next = new ListNode(list1.val);
                list1 = list1.next
            } else {
                lastNode.next = new ListNode(list2.val);
                list2 = list2.next
            }
            lastNode = lastNode.next;
        }
        
        while(list1 !== null) { 
            lastNode.next = new ListNode(list1.val);
            list1 = list1.next
            lastNode = lastNode.next;
        }
        
        while(list2 !== null) { 
            lastNode.next = new ListNode(list2.val);
            list2 = list2.next
            lastNode = lastNode.next;
        }

        return head;
    }

    let outputList = lists.pop();
    while (outputList === null) {
        outputList = lists.pop();
    }
        
    while(lists.length > 0) {
        const list = lists.pop()
        if (list === null) continue
        outputList = merge(outputList, list)
    }
    return outputList;
};