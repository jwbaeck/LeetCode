/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
function getPermutation(n, k) {
  const nums = [];
  const factorial = Array(n + 1).fill(1);

  for (let i = 1; i <= n; i++) {
    nums.push(i);
  }

  for (let i = 1; i <= n; i++) {
    factorial[i] = factorial[i - 1] * i;
  }

  k--;

  let result = "";

  for (let i = n; i >= 1; i--) {
    const blockSize = factorial[i - 1];

    const index = Math.floor(k / blockSize);

    result += nums[index];

    nums.splice(index, 1);

    k %= blockSize;
  }

  return result;
}
