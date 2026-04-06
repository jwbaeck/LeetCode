/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search(nums, target) {
  let leftIndex = 0;
  let rightIndex = nums.length - 1;

  while (leftIndex <= rightIndex) {
    const middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (nums[middleIndex] === target) {
      return middleIndex;
    }

    if (nums[leftIndex] <= nums[middleIndex]) {
      if (nums[leftIndex] <= target && target < nums[middleIndex]) {
        rightIndex = middleIndex - 1;
      } else {
        leftIndex = middleIndex + 1;
      }
    }

    else {
      if (nums[middleIndex] < target && target <= nums[rightIndex]) {
        leftIndex = middleIndex + 1;
      } else {
        rightIndex = middleIndex - 1;
      }
    }
  }

  return -1;
}
