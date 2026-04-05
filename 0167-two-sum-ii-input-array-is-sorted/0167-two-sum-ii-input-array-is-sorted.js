/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
function twoSum(numbers, target) {
  let leftIndex = 0;
  let rightIndex = numbers.length - 1;

  while (leftIndex < rightIndex) {
    const sumOfTwoNumbers = numbers[leftIndex] + numbers[rightIndex];

    if (sumOfTwoNumbers === target) {
      return [leftIndex + 1, rightIndex + 1];
    }

    if (sumOfTwoNumbers < target) {
      leftIndex += 1;
    } else {
      rightIndex -= 1;
    }
  }
}
