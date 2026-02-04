/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
function strStr(haystack, needle) {
  if (needle.length === 0) return 0;

  const hayLen = haystack.length;
  const neeLen = needle.length;

  for (let startIndex = 0; startIndex <= hayLen - neeLen; startIndex++) {
    let matchIndex = 0;

    while (
      matchIndex < neeLen &&
      haystack[startIndex + matchIndex] === needle[matchIndex]
    ) {
      matchIndex++;
    }

    if (matchIndex === neeLen) return startIndex;
  }

  return -1;
}
