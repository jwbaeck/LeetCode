/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function findMedianSortedArrays(nums1, nums2) {
  if (nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1);

  const smaller = nums1;
  const larger = nums2;
  const smallerLen = smaller.length;
  const largerLen = larger.length;

  let leftIndex = 0;
  let rightIndex = smallerLen;

  const leftPartitionSize = Math.floor((smallerLen + largerLen + 1) / 2);

  while (leftIndex <= rightIndex) {
    const partitionSmaller = Math.floor((leftIndex + rightIndex) / 2);
    const partitionLarger = leftPartitionSize - partitionSmaller;

    const smallerLeftMax =
      partitionSmaller === 0 ? -Infinity : smaller[partitionSmaller - 1];
    const smallerRightMin =
      partitionSmaller === smallerLen ? Infinity : smaller[partitionSmaller];

    const largerLeftMax =
      partitionLarger === 0 ? -Infinity : larger[partitionLarger - 1];
    const largerRightMin =
      partitionLarger === largerLen ? Infinity : larger[partitionLarger];

    if (smallerLeftMax <= largerRightMin && largerLeftMax <= smallerRightMin) {
      const maxOfLeft = Math.max(smallerLeftMax, largerLeftMax);

      if (((smallerLen + largerLen) & 1) === 1) return maxOfLeft;

      const minOfRight = Math.min(smallerRightMin, largerRightMin);
      return (maxOfLeft + minOfRight) / 2;
    }

    if (smallerLeftMax > largerRightMin) {
      rightIndex = partitionSmaller - 1;
    } else {
      leftIndex = partitionSmaller + 1;
    }
  }

  return 0;
}
