/**
 * @param {number[][]} grid
 * @return {number}
 */
function minPathSum(grid) {
  const rowCount = grid.length;
  const colCount = grid[0].length;

  const dp = Array.from({ length: rowCount }, () => Array(colCount).fill(0));

  dp[0][0] = grid[0][0];

  for (let col = 1; col < colCount; col++) {
    dp[0][col] = dp[0][col - 1] + grid[0][col];
  }

  for (let row = 1; row < rowCount; row++) {
    dp[row][0] = dp[row - 1][0] + grid[row][0];
  }

  for (let row = 1; row < rowCount; row++) {
    for (let col = 1; col < colCount; col++) {
      dp[row][col] = Math.min(dp[row - 1][col], dp[row][col - 1]) + grid[row][col];
    }
  }

  return dp[rowCount - 1][colCount - 1];
}
