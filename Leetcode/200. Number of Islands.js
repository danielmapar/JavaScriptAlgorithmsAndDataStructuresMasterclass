/*
Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

Input:
11110
11010
11000
00000

Output: 1
Example 2:

Input:
11000
11000
00100
00011

Output: 3
*/
/**
 * @param {character[][]} grid
 * @return {number}
 */

var numIslands = function(grid) {
    
    var dfs = function(line, column) {
        if (line < 0 || line >= grid.length) return 
        if (column < 0 || column >= grid[0].length) return 
        if (grid[line][column] === '0') return 
        
        grid[line][column] = '0'
        
        dfs(line-1, column)
        dfs(line+1, column)
        dfs(line, column-1)
        dfs(line, column+1)
    }
    
    if (grid.length === 0) return 0
    if (grid[0].length === 0) return 0
    
    const lines = grid.length;
    const columns = grid[0].length;
    let counter = 0
    for (let line = 0; line < lines; line++) {
        for (let column = 0; column < columns; column++) {
            if (grid[line][column] === '1') {
                dfs(line, column)
                ++counter;
            }
        }
    }
    return counter;
    
};