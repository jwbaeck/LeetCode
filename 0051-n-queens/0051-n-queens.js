/**
 * @param {number} n
 * @return {string[][]}
 */
function solveNQueens(n) {
  const result = [];
  const board = Array.from({ length: n }, () => Array(n).fill("."));

  const columns = new Set();
  const diagonals1 = new Set();
  const diagonals2 = new Set();

  function backtrack(row) {
    if (row === n) {
      result.push(board.map((row) => row.join("")));
      return;
    }

    for (let col = 0; col < n; col++) {
      const diagonal1 = row - col;
      const diagonal2 = row + col;

      if (
        columns.has(col) ||
        diagonals1.has(diagonal1) ||
        diagonals2.has(diagonal2)
      ) {
        continue;
      }

      board[row][col] = "Q";

      columns.add(col);
      diagonals1.add(diagonal1);
      diagonals2.add(diagonal2);

      backtrack(row + 1);

      board[row][col] = ".";
      
      columns.delete(col);
      diagonals1.delete(diagonal1);
      diagonals2.delete(diagonal2);
    }
  }

  backtrack(0);

  return result;
}
