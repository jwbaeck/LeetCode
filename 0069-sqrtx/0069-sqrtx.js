/**
 * @param {number} x
 * @return {number}
 */
function mySqrt(number) {
  if (number < 2) {
    return number;
  }

  let min = 1;
  let max = number;
  let answer = 0;

  while (min <= max) {
    const middle = Math.floor((min + max) / 2);
    const squaredValue = middle * middle;

    if (squaredValue === number) {
      return middle;
    }

    if (squaredValue < number) {
      answer = middle;
      min = middle + 1;
    } else {
      max = middle - 1;
    }
  }

  return answer;
}
