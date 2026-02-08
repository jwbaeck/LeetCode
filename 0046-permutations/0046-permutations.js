/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function permute(nums) {
  const results = [];
  const currentPermutation = [];
  const isUsed = Array(nums.length).fill(false);

  function backtrack() {
    if (currentPermutation.length === nums.length) {
      results.push([...currentPermutation]);
      
      return;
    }

    for (let index = 0; index < nums.length; index++) {
      if (isUsed[index]) continue;

      isUsed[index] = true;
      currentPermutation.push(nums[index]);

      backtrack();

      currentPermutation.pop();
      isUsed[index] = false;
    }
  }

  backtrack();

  return results;
}
