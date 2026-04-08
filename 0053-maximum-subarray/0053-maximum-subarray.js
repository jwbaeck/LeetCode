/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray(nums) {
  let currentSubarraySum = nums[0];
  let maximumSubarraySum = nums[0];

  for (let index = 1; index < nums.length; index++) {
    const currentNumber = nums[index];

    currentSubarraySum = Math.max(currentNumber, currentSubarraySum + currentNumber);
    maximumSubarraySum = Math.max(maximumSubarraySum, currentSubarraySum);
  }

  return maximumSubarraySum;
}
