/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
function exist(board, word) {
  const m = board.length;
  const n = board[0].length;

  function dfs(row, col, index) {
    if (index === word.length) return true;

    if (
      row < 0 ||
      row >= m ||
      col < 0 ||
      col >= n ||
      board[row][col] !== word[index]
    ) {
      return false;
    }

    const temp = board[row][col];
    
    board[row][col] = "#";

    const found =
      dfs(row + 1, col, index + 1) ||
      dfs(row - 1, col, index + 1) ||
      dfs(row, col + 1, index + 1) ||
      dfs(row, col - 1, index + 1);

    board[row][col] = temp;

    return found;
  }

  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (dfs(row, col, 0)) {
        return true;
      }
    }
  }

  return false;
}
