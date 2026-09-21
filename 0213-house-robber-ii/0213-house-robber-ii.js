/**
 * @param {number[]} nums
 * @return {number}
 */
function rob(nums) {
  const n = nums.length;

  if (n === 1) return nums[0];

  function robRange(start, end) {
    let prev2 = 0;
    let prev1 = 0;

    for (let i = start; i <= end; i++) {
      const current = Math.max(
        prev1,
        prev2 + nums[i]
      );

      prev2 = prev1;
      prev1 = current;
    }

    return prev1;
  }

  return Math.max(
    robRange(0, n - 2),
    robRange(1, n - 1)
  );
}
