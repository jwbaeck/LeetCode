/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
function isScramble(s1, s2) {
  const memo = new Map();

  function check(str1, str2) {
    const key = `${str1},${str2}`;

    if (memo.has(key)) {
      return memo.get(key);
    }

    if (str1 === str2) {
      memo.set(key, true);
      return true;
    }

    const sorted1 = str1.split("").sort().join("");
    const sorted2 = str2.split("").sort().join("");

    if (sorted1 !== sorted2) {
      memo.set(key, false);
      return false;
    }

    const length = str1.length;

    for (let splitIndex = 1; splitIndex < length; splitIndex++) {
      const noSwap =
        check(
          str1.slice(0, splitIndex),
          str2.slice(0, splitIndex)
        ) &&
        check(
          str1.slice(splitIndex),
          str2.slice(splitIndex)
        );

      if (noSwap) {
        memo.set(key, true);
        return true;
      }

      const swap =
        check(
          str1.slice(0, splitIndex),
          str2.slice(length - splitIndex)
        ) &&
        check(
          str1.slice(splitIndex),
          str2.slice(0, length - splitIndex)
        );

      if (swap) {
        memo.set(key, true);
        return true;
      }
    }

    memo.set(key, false);
    
    return false;
  }

  return check(s1, s2);
}
