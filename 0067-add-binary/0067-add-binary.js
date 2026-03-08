/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
function addBinary(a, b) {
  let indexA = a.length - 1;
  let indexB = b.length - 1;
  let carry = 0;
  const digitsReversed = [];

  while (indexA >= 0 || indexB >= 0 || carry) {
    let sum = carry;

    if (indexA >= 0) sum += a.charCodeAt(indexA--) - 48;
    if (indexB >= 0) sum += b.charCodeAt(indexB--) - 48;

    const currentDigit = sum & 1;
    carry = sum >> 1;

    digitsReversed.push(String(currentDigit));
  }

  return digitsReversed.reverse().join("");
}
