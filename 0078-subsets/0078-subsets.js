/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function subsets(nums) {
  const result = [];
  const current = [];

  function backtrack(startIndex) {
    result.push(current.slice());

    for (let i = startIndex; i < nums.length; i++) {
      current.push(nums[i]);
      backtrack(i + 1);
      current.pop();
    }
  }

  backtrack(0);
  
  return result;
}
