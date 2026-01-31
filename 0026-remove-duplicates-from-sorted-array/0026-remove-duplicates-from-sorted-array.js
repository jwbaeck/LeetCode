/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
  if (nums.length === 0) return 0;

  let writeIndex = 1;

  for (let readIndex = 1; readIndex < nums.length; readIndex++) {
    if (nums[readIndex] !== nums[writeIndex - 1]) {
      nums[writeIndex] = nums[readIndex];
      writeIndex++;
    }
  }

  return writeIndex;
}
