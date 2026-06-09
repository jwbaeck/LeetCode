/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  let firstRowHasZero = false;
  let firstColHasZero = false;

  for (let col = 0; col < n; col++) {
    if (matrix[0][col] === 0) {
      firstRowHasZero = true;
      
      break;
    }
  }

  for (let row = 0; row < m; row++) {
    if (matrix[row][0] === 0) {
      firstColHasZero = true;
      
      break;
    }
  }

  for (let row = 1; row < m; row++) {
    for (let col = 1; col < n; col++) {
      if (matrix[row][col] === 0) {
        matrix[row][0] = 0;
        matrix[0][col] = 0;
      }
    }
  }

  for (let row = 1; row < m; row++) {
    if (matrix[row][0] === 0) {
      for (let col = 1; col < n; col++) {
        matrix[row][col] = 0;
      }
    }
  }

  for (let col = 1; col < n; col++) {
    if (matrix[0][col] === 0) {
      for (let row = 1; row < m; row++) {
        matrix[row][col] = 0;
      }
    }
  }

  if (firstRowHasZero) {
    for (let col = 0; col < n; col++) {
      matrix[0][col] = 0;
    }
  }

  if (firstColHasZero) {
    for (let row = 0; row < m; row++) {
      matrix[row][0] = 0;
    }
  }
}
