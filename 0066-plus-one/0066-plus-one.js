/**
 * @param {number[]} digits
 * @return {number[]}
 */
function plusOne(digitArray) {
  for (let currentIndex = digitArray.length - 1; currentIndex >= 0; currentIndex--) {
    if (digitArray[currentIndex] < 9) {
      digitArray[currentIndex] += 1;

      return digitArray;
    }

    digitArray[currentIndex] = 0;
  }

  digitArray.unshift(1);
  
  return digitArray;
}
