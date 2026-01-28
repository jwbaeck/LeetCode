/**
 * @param {number[]} height
 * @return {number}
 */
function maxArea(height) {
  let leftIndex = 0;
  let rightIndex = height.length - 1;

  let maximumWaterArea = 0;

  while (leftIndex < rightIndex) {
    const leftHeight = height[leftIndex];
    const rightHeight = height[rightIndex];

    const containerWidth = rightIndex - leftIndex;
    const containerHeight = Math.min(leftHeight, rightHeight);
    const currentWaterArea = containerWidth * containerHeight;

    if (currentWaterArea > maximumWaterArea) {
      maximumWaterArea = currentWaterArea;
    }

    if (leftHeight <= rightHeight) {
      leftIndex += 1;
    } else {
      rightIndex -= 1;
    }
  }

  return maximumWaterArea;
}
