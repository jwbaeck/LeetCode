/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
function minWindow(s, t) {
  if (s.length < t.length) return "";

  const requiredCount = new Map();

  for (const char of t) {
    requiredCount.set(char, (requiredCount.get(char) || 0) + 1);
  }

  let left = 0;
  let matchedCount = 0;
  let minLength = Infinity;
  let minStart = 0;

  for (let right = 0; right < s.length; right++) {
    const rightChar = s[right];

    if (requiredCount.has(rightChar)) {
      if (requiredCount.get(rightChar) > 0) {
        matchedCount++;
      }

      requiredCount.set(
        rightChar,
        requiredCount.get(rightChar) - 1
      );
    }

    while (matchedCount === t.length) {
      const windowLength = right - left + 1;

      if (windowLength < minLength) {
        minLength = windowLength;
        minStart = left;
      }

      const leftChar = s[left];

      if (requiredCount.has(leftChar)) {
        requiredCount.set(
          leftChar,
          requiredCount.get(leftChar) + 1
        );

        if (requiredCount.get(leftChar) > 0) {
          matchedCount--;
        }
      }

      left++;
    }
  }

  return minLength === Infinity
    ? ""
    : s.slice(minStart, minStart + minLength);
}
