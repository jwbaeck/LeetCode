/**
 * @param {number[]} nums
 * @return {number}
 */
function singleNumber(nums) {
  let answer = 0;

  for (let i = 0; i < 32; i++) {
    let bitCount = 0;

    for (const num of nums) {
      bitCount += (num >> i) & 1;
    }

    if (bitCount % 3 !== 0) {
      answer |= (1 << i);
    }
  }

  return answer;
}
