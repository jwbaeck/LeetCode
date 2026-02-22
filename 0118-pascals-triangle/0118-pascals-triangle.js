/**
 * @param {number} numRows
 * @return {number[][]}
 */
function generate(numRows) {
  const triangle = [];
  
  if (numRows <= 0) return triangle;

  for (let rowIndex = 0; rowIndex < numRows; rowIndex++) {
    const row = new Array(rowIndex + 1).fill(1);

    for (let colIndex = 1; colIndex < rowIndex; colIndex++) {
      row[colIndex] = triangle[rowIndex - 1][colIndex - 1] + triangle[rowIndex - 1][colIndex];
    }

    triangle.push(row);
  }

  return triangle;
}
