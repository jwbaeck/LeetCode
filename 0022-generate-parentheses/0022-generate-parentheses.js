/**
 * @param {number} n
 * @return {string[]}
 */
function generateParenthesis(n) {
  const results = [];

  /**
   * @param {string} current
   * @param {number} openUsed   - number of '(' already placed
   * @param {number} closeUsed  - number of ')' already placed
   */
  function backtrack(current, openUsed, closeUsed) {
    if (current.length === 2 * n) {
      results.push(current);
      return;
    }

    if (openUsed < n) {
      backtrack(current + "(", openUsed + 1, closeUsed);
    }

    if (closeUsed < openUsed) {
      backtrack(current + ")", openUsed, closeUsed + 1);
    }
  }

  backtrack("", 0, 0);

  return results;
}
