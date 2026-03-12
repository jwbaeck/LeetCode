/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1, validLength1, nums2, validLength2) {
  let index1 = validLength1 - 1;
  let index2 = validLength2 - 1;
  let mergedIndex = validLength1 + validLength2 - 1;

  while (index1 >= 0 && index2 >= 0) {
    if (nums1[index1] > nums2[index2]) {
      nums1[mergedIndex] = nums1[index1];
      index1--;
    } else {
      nums1[mergedIndex] = nums2[index2];
      index2--;
    }

    mergedIndex--;
  }

  while (index2 >= 0) {
    nums1[mergedIndex] = nums2[index2];
    index2--;
    mergedIndex--;
  }
}
