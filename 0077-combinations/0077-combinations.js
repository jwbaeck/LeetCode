/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
function combine(maxNumber, selectCount) {
  const result = [];
  const currentCombination = [];

  function backtrack(startNumber) {
    if (currentCombination.length === selectCount) {
      result.push([...currentCombination]);
      
      return;
    }

    for (let number = startNumber; number <= maxNumber; number++) {
      currentCombination.push(number);
      backtrack(number + 1);
      currentCombination.pop();
    }
  }

  backtrack(1);

  return result;
}
