/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
function solve(board) {
  const rows = board.length;
  const cols = board[0].length;

  function dfs(row, col) {
    if (
      row < 0 ||
      row >= rows ||
      col < 0 ||
      col >= cols ||
      board[row][col] !== "O"
    ) {
      return;
    }

    board[row][col] = "#";

    dfs(row - 1, col);
    dfs(row + 1, col);
    dfs(row, col - 1);
    dfs(row, col + 1);
  }

  for (let row = 0; row < rows; row++) {
    dfs(row, 0);
    dfs(row, cols - 1);
  }

  for (let col = 0; col < cols; col++) {
    dfs(0, col);
    dfs(rows - 1, col);
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (board[row][col] === "O") {
        board[row][col] = "X";
      } else if (board[row][col] === "#") {
        board[row][col] = "O";
      }
    }
  }
}
