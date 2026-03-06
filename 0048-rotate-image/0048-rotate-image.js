/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix) {
  const n = matrix.length;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const tmp = matrix[i][j];

      matrix[i][j] = matrix[j][i];
      matrix[j][i] = tmp;
    }
  }

  for (let i = 0; i < n; i++) {
    let l = 0, r = n - 1;

    while (l < r) {
      const tmp = matrix[i][l];
      
      matrix[i][l] = matrix[i][r];
      matrix[i][r] = tmp;

      l++;
      r--;
    }
  }
}
