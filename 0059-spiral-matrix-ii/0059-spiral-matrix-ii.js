/**
 * @param {number} n
 * @return {number[][]}
 */
function generateMatrix(n) {
  const matrix = Array.from({ length: n }, () => Array(n).fill(0));

  let top = 0;
  let bottom = n - 1;
  let left = 0;
  let right = n - 1;

  let num = 1;

  while (top <= bottom && left <= right) {
    for (let col = left; col <= right; col++) {
      matrix[top][col] = num++;
    }

    top++;

    for (let row = top; row <= bottom; row++) {
      matrix[row][right] = num++;
    }
    right--;

    if (top <= bottom) {
      for (let col = right; col >= left; col--) {
        matrix[bottom][col] = num++;
      }

      bottom--;
    }

    if (left <= right) {
      for (let row = bottom; row >= top; row--) {
        matrix[row][left] = num++;
      }
      
      left++;
    }
  }

  return matrix;
}
