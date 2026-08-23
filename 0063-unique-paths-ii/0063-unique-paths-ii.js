/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
function uniquePathsWithObstacles(grid) {
  const m = grid.length;
  const n = grid[0].length;

  const dp = Array.from({ length: m }, () => Array(n).fill(0));

  if (grid[0][0] === 1) return 0;

  dp[0][0] = 1;

  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (grid[row][col] === 1) {
        dp[row][col] = 0;
        continue;
      }

      if (row === 0 && col === 0) continue;

      const fromTop = row > 0 ? dp[row - 1][col] : 0;
      const fromLeft = col > 0 ? dp[row][col - 1] : 0;

      dp[row][col] = fromTop + fromLeft;
    }
  }

  return dp[m - 1][n - 1];
}
