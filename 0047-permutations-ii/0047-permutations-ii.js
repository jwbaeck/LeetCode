/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function permuteUnique(nums) {
  const sortedNums = nums.slice().sort((a, b) => a - b);
  const uniquePermutations = [];
  const currentPermutation = [];
  const isUsed = new Array(sortedNums.length).fill(false);

  function backtrack() {
    if (currentPermutation.length === sortedNums.length) {
      uniquePermutations.push(currentPermutation.slice());
      
      return;
    }

    for (let index = 0; index < sortedNums.length; index++) {
      if (isUsed[index]) continue;

      if (
        index > 0 &&
        sortedNums[index] === sortedNums[index - 1] &&
        !isUsed[index - 1]
      ) {
        continue;
      }

      isUsed[index] = true;
      currentPermutation.push(sortedNums[index]);

      backtrack();

      currentPermutation.pop();
      isUsed[index] = false;
    }
  }

  backtrack();

  return uniquePermutations;
}
