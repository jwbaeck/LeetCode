/**
 * @param {string} s
 * @return {string[][]}
 */
function partition(s) {
  const result = [];
  const currentPath = [];

  function isPalindrome(leftIndex, rightIndex) {
    while (leftIndex < rightIndex) {
      if (s[leftIndex] !== s[rightIndex]) {
        return false;
      }

      leftIndex += 1;
      rightIndex -= 1;
    }

    return true;
  }

  function backtrack(startIndex) {
    if (startIndex === s.length) {
      result.push([...currentPath]);

      return;
    }

    for (let endIndex = startIndex; endIndex < s.length; endIndex += 1) {
      if (!isPalindrome(startIndex, endIndex)) {
        continue;
      }

      const substring = s.slice(startIndex, endIndex + 1);
      currentPath.push(substring);

      backtrack(endIndex + 1);

      currentPath.pop();
    }
  }

  backtrack(0);
  
  return result;
}
