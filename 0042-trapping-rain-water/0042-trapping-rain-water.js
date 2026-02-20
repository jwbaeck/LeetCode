/**
 * @param {number[]} height
 * @return {number}
 */
function trap(heights) {
  let leftIndex = 0;
  let rightIndex = heights.length - 1;
  let maxLeftHeight = 0;
  let maxRightHeight = 0;
  let totalWater = 0;

  while (leftIndex < rightIndex) {
    if (heights[leftIndex] <= heights[rightIndex]) {
      maxLeftHeight = Math.max(maxLeftHeight, heights[leftIndex]);
      totalWater += maxLeftHeight - heights[leftIndex];
      leftIndex++;
    } else {
      maxRightHeight = Math.max(maxRightHeight, heights[rightIndex]);
      totalWater += maxRightHeight - heights[rightIndex];
      rightIndex--;
    }
  }

  return totalWater;
}
