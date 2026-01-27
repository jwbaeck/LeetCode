/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  const lastSeenIndexByCharacter = new Map();

  let windowStartIndex = 0;
  let longestLength = 0;

  for (let windowEndIndex = 0; windowEndIndex < s.length; windowEndIndex += 1) {
    const currentCharacter = s[windowEndIndex];

    if (lastSeenIndexByCharacter.has(currentCharacter)) {
      const lastSeenIndex = lastSeenIndexByCharacter.get(currentCharacter);

      if (lastSeenIndex >= windowStartIndex) {
        windowStartIndex = lastSeenIndex + 1;
      }
    }

    lastSeenIndexByCharacter.set(currentCharacter, windowEndIndex);

    const currentWindowLength = windowEndIndex - windowStartIndex + 1;
    if (currentWindowLength > longestLength) {
      longestLength = currentWindowLength;
    }
  }

  return longestLength;
}
