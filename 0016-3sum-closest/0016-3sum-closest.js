/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function threeSumClosest(nums, target) {
  nums.sort((a, b) => a - b);

  let best = nums[0] + nums[1] + nums[2];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let l = i + 1;
    let r = nums.length - 1;

    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];

      if (Math.abs(sum - target) < Math.abs(best - target)) {
        best = sum;
      }

      if (sum === target) return target;
      if (sum < target) {
        l++;

        while (l < r && nums[l] === nums[l - 1]) l++;
      } else {
        r--;
        while (l < r && nums[r] === nums[r + 1]) r--;
      }
    }
  }

  return best;
}