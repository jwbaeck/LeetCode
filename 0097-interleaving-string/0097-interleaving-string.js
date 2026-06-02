/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
function isInterleave(s1, s2, s3) {
  const len1 = s1.length;
  const len2 = s2.length;

  if (len1 + len2 !== s3.length) return false;

  const dp = Array(len2 + 1).fill(false);

  dp[0] = true;

  for (let j = 1; j <= len2; j++) {
    dp[j] = dp[j - 1] && s2[j - 1] === s3[j - 1];
  }

  for (let i = 1; i <= len1; i++) {
    dp[0] = dp[0] && s1[i - 1] === s3[i - 1];

    for (let j = 1; j <= len2; j++) {
      const s3Index = i + j - 1;

      const fromS1 = dp[j] && s1[i - 1] === s3[s3Index];
      const fromS2 = dp[j - 1] && s2[j - 1] === s3[s3Index];

      dp[j] = fromS1 || fromS2;
    }
  }

  return dp[len2];
}
