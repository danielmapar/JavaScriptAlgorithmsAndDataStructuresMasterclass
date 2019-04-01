# Binary Heaps

* Min Heap
    * The parent always smaller than the children
    * No right/left child rule like a BST

* Max Binary Heap
    * The parent are always larger than the children
    * No right/left child rule like a BST
    * ![max_binary_heap](./max_binary_heap.PNG)
    * Each parent has at most two nodes
    * The binary head always takes the least amount of space. All the children of each node are as full as they can be and **left children are filled out first** (different from a BST, which can end up with a list like structure depending on the values)

* Binary Heaps are used to implement **Priority Queues**, which are very commonly used data structures.
* They are also used quite a bit, with **graph traversal algorithms**

* ![max_binary_heap_in_a_list](./max_binary_heap_in_a_list.PNG)
* ![max_binary_heap_index](./max_binary_heap_index.PNG)
    * `100` on index `0`
    * `19` on index `1`

* ![max_binary_heap_in_a_list_reverse](./max_binary_heap_in_a_list_reverse.PNG)

* ![max_binary_heap_bubble_up](./max_binary_heap_bubble_up.PNG)


* Whenever we remove from a Max Binary Heap we remove the root (the highest value). On that note, it means 
removing the min value for the Min Binary Heap.

* ![max_binary_heap_remove](./max_binary_heap_remove.PNG)
    * bubble down
    * Extract the first entry from the array and push the last entry to the first position

* Priority Queue

    * A data structure where each element has a priority. Elements with higher priorities are served before elements with lower priorities.

* ![priority_queue_naive](./priority_queue_naive.PNG)

* Big O

    * Insertion - `O(log N)`
    * Removal - `O(log N)`
    * Search - `O(N)`

* ![recap](./recap.PNG)