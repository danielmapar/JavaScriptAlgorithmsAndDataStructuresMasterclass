/**
 Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.

get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

Follow up:
Could you do both operations in O(1) time complexity?

Example:

LRUCache cache = new LRUCache( 2 capacity  );

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // returns 1
cache.put(3, 3);    // evicts key 2
cache.get(2);       // returns -1 (not found)
cache.put(4, 4);    // evicts key 1
cache.get(1);       // returns -1 (not found)
cache.get(3);       // returns 3
cache.get(4);       // returns 4
 */

var Node = function(key, value) {
    this.key = key;
    this.value = value;
    this.next = null
    this.prev = null
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.head = new Node(0, 0)
    this.tail = new Node(0, 0)
    this.head.next = this.tail
    this.head.prev = null
    this.tail.next = null
    this.tail.prev = this.head
    this.count = 0
    this.capacity = capacity
    this.map = {}
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (this.map[key] !== undefined) {
        let node = this.map[key]
        let result = node.value
        this.deleteNode(node)
        this.addToHead(node)
        return result
    }
    return -1;
};

LRUCache.prototype.addToHead = function(node) {
    node.next = this.head.next
    node.next.prev = node
    node.prev = this.head
    this.head.next = node 
}

LRUCache.prototype.deleteNode = function(node) {
    //console.log(node)
    node.next.prev = node.prev
    node.prev.next = node.next
    //node = null
}


/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.map[key] !== undefined) {
        let node = this.map[key]
        node.value = value
        this.deleteNode(node)
        this.addToHead(node)
    } else {
        let node = new Node(key, value)
        this.map[key] = node
        if (this.count < this.capacity) {
            this.addToHead(node)
            this.count++
        } else {
            delete this.map[this.tail.prev.key]
            this.deleteNode(this.tail.prev)
            this.addToHead(node)
        }
        
    }
    
    
    
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */