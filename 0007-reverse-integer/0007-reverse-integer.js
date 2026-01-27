/**
 * @param {number} x
 * @return {number}
 */
function reverse(x) {
  const INT32_MIN = -2147483648;
  const INT32_MAX = 2147483647;

  let remainingNumber = x;
  let reversedNumber = 0;

  while (remainingNumber !== 0) {
    const lastDigit = remainingNumber % 10;

    remainingNumber = Math.trunc(remainingNumber / 10);

    if (
      reversedNumber > Math.trunc(INT32_MAX / 10) ||
      (reversedNumber === Math.trunc(INT32_MAX / 10) && lastDigit > 7)
    ) {
      return 0;
    }

    if (
      reversedNumber < Math.trunc(INT32_MIN / 10) ||
      (reversedNumber === Math.trunc(INT32_MIN / 10) && lastDigit < -8)
    ) {
      return 0;
    }

    reversedNumber = reversedNumber * 10 + lastDigit;
  }

  return reversedNumber;
}
