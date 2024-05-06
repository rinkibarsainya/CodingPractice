/*
The "number of islands" problem is a classic algorithmic challenge that involves finding the number of distinct "islands" in a given 2D matrix of binary values, where 1 represents land and 0 represents water.
 An island is defined as a group of adjacent land cells connected either vertically or horizontally (not diagonally).
*/

function numIslands(grid: number[][]): number {
    if (!grid || grid.length === 0) {
        return 0;
    }

    let numberOfIslands = 0;
    const rows = grid.length;
    const cols = grid[0].length;

    for (let i = 0; i < rows; i++) {
        console.log('----inside first loop i---', i)
        for (let j = 0; j < cols; j++) {
            console.log('----inside second loop j ----', j, 'grid[i][j]', grid[i][j])
            if (grid[i][j] === 1) {
                console.log('found Island', grid[i][j])
                dfs(grid, i, j);
                numberOfIslands++;
                console.log('number of Islands ==>', numberOfIslands)
            }
        }
    }

    return numberOfIslands;
}

function dfs(grid: number[][], row: number, col: number): void {
    const rows = grid.length;
    const cols = grid[0].length;

    //console.log('grid[row][col]',row ,col)

    if (row < 0 || col < 0 || row >= rows || col >= cols || grid[row][col] === 0) {
        return;
    }

    // Mark the cell as visited by setting it to 0
    grid[row][col] = 0;
    // console.log('row + 1, col', row + 1, col)
    // console.log('row - 1, col', row - 1, col)
    // console.log('row, col + 1', row, col + 1)
    // console.log('row, col -1', row, col - 1)
    console.log('DFS call marke visited',row, col, 'grid[row][col]',grid[row][col] )

    // Visit all adjacent cells
    dfs(grid, row + 1, col);
    dfs(grid, row - 1, col);
    dfs(grid, row, col + 1);
    dfs(grid, row, col - 1);
};


// Example usage
const exampleGrid: number[][] = [
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1]
];

console.log(numIslands(exampleGrid));  // Output: 3
