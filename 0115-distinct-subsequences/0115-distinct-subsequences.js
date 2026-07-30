/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
function numDistinct(s, t) {
  const dp = Array(t.length + 1).fill(0);

  dp[0] = 1;

  for (const char of s) {
    for (let i = t.length; i >= 1; i--) {
      if (char === t[i - 1]) {
        dp[i] += dp[i - 1];
      }
    }
  }

  return dp[t.length];
}
