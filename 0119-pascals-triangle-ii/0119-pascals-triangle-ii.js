/**
 * @param {number} rowIndex
 * @return {number[]}
 */
function getRow(rowIndex) {
  let currentRow = [1];

  for (let currentLevel = 1; currentLevel <= rowIndex; currentLevel++) {
    const nextRow = [1];

    for (let currentIndex = 1; currentIndex < currentRow.length; currentIndex++) {
      const leftParent = currentRow[currentIndex - 1];
      const rightParent = currentRow[currentIndex];

      nextRow.push(leftParent + rightParent);
    }

    nextRow.push(1);
    
    currentRow = nextRow;
  }

  return currentRow;
}
