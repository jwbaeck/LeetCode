/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationSum2(candidates, target) {
  const result = [];
  const currentCombination = [];

  candidates.sort((a, b) => a - b);

  function backtrack(startIndex, remainingTarget) {
    if (remainingTarget === 0) {
      result.push([...currentCombination]);

      return;
    }

    for (let currentIndex = startIndex; currentIndex < candidates.length; currentIndex++) {
      const currentNumber = candidates[currentIndex];

      if (currentIndex > startIndex && candidates[currentIndex] === candidates[currentIndex - 1]) {
        continue;
      }

      if (currentNumber > remainingTarget) {
        break;
      }

      currentCombination.push(currentNumber);

      backtrack(currentIndex + 1, remainingTarget - currentNumber);
      
      currentCombination.pop();
    }
  }

  backtrack(0, target);

  return result;
}
