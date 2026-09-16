/**
 * @param {number[]} nums
 * @return {number[]}
 */
function singleNumber(nums) {
  let xor = 0;

  for (const num of nums) {
    xor ^= num;
  }

  const diffBit = xor & -xor;

  let a = 0;
  let b = 0;

  for (const num of nums) {
    if (num & diffBit) {
      a ^= num;
    } else {
      b ^= num;
    }
  }

  return [a, b];
}
