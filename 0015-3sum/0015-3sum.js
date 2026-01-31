/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
  const sortedNums = nums.slice().sort((a, b) => a - b);
  const triplets = [];
  const n = sortedNums.length;

  for (let first = 0; first < n - 2; first++) {
    const firstVal = sortedNums[first];

    if (first > 0 && firstVal === sortedNums[first - 1]) continue;

    if (firstVal > 0) break;

    let left = first + 1;
    let right = n - 1;

    while (left < right) {
      const sum = firstVal + sortedNums[left] + sortedNums[right];

      if (sum === 0) {
        triplets.push([firstVal, sortedNums[left], sortedNums[right]]);

        const leftVal = sortedNums[left];
        const rightVal = sortedNums[right];

        while (left < right && sortedNums[left] === leftVal) left++;
        while (left < right && sortedNums[right] === rightVal) right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return triplets;
}
