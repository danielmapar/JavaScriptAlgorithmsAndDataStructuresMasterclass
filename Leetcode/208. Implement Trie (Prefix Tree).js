/**
 * Implement a trie with insert, search, and startsWith methods.

Example:

Trie trie = new Trie();

trie.insert("apple");
trie.search("apple");   // returns true
trie.search("app");     // returns false
trie.startsWith("app"); // returns true
trie.insert("app");   
trie.search("app");     // returns true
Note:

You may assume that all inputs are consist of lowercase letters a-z.
All inputs are guaranteed to be non-empty strings.
 * 
 */

var TrieNode = function() {
    this.links = {} //size R
    //R = 26
    this.isEnd = false
};

TrieNode.prototype.containsKey = function(char) {
    return this.links[char] !== undefined
};

TrieNode.prototype.get = function(char) {
    return this.links[char]
};

TrieNode.prototype.put = function(char, node) {
    return this.links[char] = node
};

TrieNode.prototype.setEnd = function() {
    this.isEnd = true
};

TrieNode.prototype.isEnd = function() {
    return this.isEnd
};

/**
 * Initialize your data structure here.
 */
var Trie = function() {
    this.root = new TrieNode()
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node = this.root
    for (let i = 0; i < word.length; i++) {
        const currentChar = word.charAt(i);
        if (!node.containsKey(currentChar)) {
            node.put(currentChar, new TrieNode());
        }
        node = node.get(currentChar);
    }
    node.setEnd()
};

Trie.prototype.searchPrefix = function(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
       const curLetter = word.charAt(i);
       if (node.containsKey(curLetter)) {
           node = node.get(curLetter);
       } else {
           return null;
       }
    }
    return node;
}

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    node = this.searchPrefix(word)
    return node !== null && node.isEnd;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    node = this.searchPrefix(prefix)
    return node !== null;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */