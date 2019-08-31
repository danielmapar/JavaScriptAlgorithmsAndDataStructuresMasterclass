/*
Given a 2D board and a list of words from the dictionary, find all words in the board.

Each word must be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.

 

Example:

Input: 
board = [
  ['o','a','a','n'],
  ['e','t','a','e'],
  ['i','h','k','r'],
  ['i','f','l','v']
]
words = ["oath","pea","eat","rain"]

Output: ["eat","oath"]
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

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    if (board.length === 0) return []
        
    const trie = new Trie()
    words.forEach(word => trie.insert(word))    
    
    function bfs(line, column) {
        let queue = [
            { line, column, value: board[line][column] }
        ]
        
        let word = ""
        const boardLookup = {}
        while(queue.length > 0) {
            let {line, column, value} = queue.shift()
            let tempWord = word + value
            if (trie.searchPrefix(tempWord)) {
                word += value
                boardLookup[line+"-"+column] = null
                
                if (line-1 >= 0 && boardLookup[(line-1)+"-"+column] !== null) queue.push({line: line-1, column, value: board[line-1][column]})
                if (line+1 < board.length && boardLookup[(line+1)+"-"+column] !== null) queue.push({line: line+1, column, value: board[line+1][column]})
                if (column-1 >= 0 && boardLookup[line+"-"+(column-1)] !== null) queue.push({line, column: column-1, value: board[line][column-1]})
                if (column+1 < board[0].length && boardLookup[line+"-"+(column+1)] !== null) queue.push({line, column: column+1, value: board[line][column+1]})
            }
        }
        return word
    }
    
    let foundWords = new Set()
    for (let line = 0; line < board.length; line++) {
        for (let column = 0; column < board[0].length; column++) {
            let possibleWord = bfs(line, column)
            if (trie.search(possibleWord)) foundWords.add(possibleWord)
        }
    }
    
    return [...foundWords.values()]
};