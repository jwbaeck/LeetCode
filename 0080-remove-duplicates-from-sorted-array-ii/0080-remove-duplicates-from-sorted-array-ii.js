/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
  let insertIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (insertIndex < 2 || nums[i] !== nums[insertIndex - 2]) {
      nums[insertIndex] = nums[i];
      insertIndex++;
    }
  }

  return insertIndex;
}
