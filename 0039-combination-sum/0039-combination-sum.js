/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationSum(candidates, target) {
  const results = [];
  candidates.sort((a, b) => a - b);

  function backtrack(startIndex, remainingSum, currentCombination) {
    if (remainingSum === 0) {
      results.push([...currentCombination]);
      return;
    }

    for (let index = startIndex; index < candidates.length; index++) {
      const candidate = candidates[index];

      if (candidate > remainingSum) break;

      currentCombination.push(candidate);

      backtrack(index, remainingSum - candidate, currentCombination);

      currentCombination.pop();
    }
  }

  backtrack(0, target, []);
  
  return results;
}
