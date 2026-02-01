/**
 * @param {string} digits
 * @return {string[]}
 */
function letterCombinations(digits) {
  if (digits.length === 0) return [];

  const digitToLetters = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz",
  };

  const results = [];

  /**
   * @param {number} digitIndex
   * @param {string} current
   */
  function backtrack(digitIndex, current) {
    if (digitIndex === digits.length) {
      results.push(current);
      return;
    }

    const digit = digits[digitIndex];
    const letters = digitToLetters[digit];

    for (const letter of letters) {
      backtrack(digitIndex + 1, current + letter);
    }
  }

  backtrack(0, "");

  return results;
}
