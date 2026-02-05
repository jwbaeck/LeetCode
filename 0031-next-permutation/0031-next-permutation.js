/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums) {
  let pivotIndex = nums.length - 2;

  while (pivotIndex >= 0 && nums[pivotIndex] >= nums[pivotIndex + 1]) {
    pivotIndex--;
  }

  if (pivotIndex >= 0) {
    let swapIndex = nums.length - 1;
    while (nums[swapIndex] <= nums[pivotIndex]) {
      swapIndex--;
    }
    swap(nums, pivotIndex, swapIndex);
  }

  reverse(nums, pivotIndex + 1, nums.length - 1);
}

function swap(arr, i, j) {
  const temp = arr[i];

  arr[i] = arr[j];
  arr[j] = temp;
}

function reverse(arr, left, right) {
  while (left < right) {
    swap(arr, left, right);
    
    left++;
    right--;
  }
}
