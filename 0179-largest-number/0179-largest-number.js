/**
 * @param {number[]} nums
 * @return {string}
 */
function largestNumber(nums) {
  const result = nums
    .map(String)
    .sort((a, b) => (b + a).localeCompare(a + b))
    .join("");

  return result[0] === "0" ? "0" : result;
}
