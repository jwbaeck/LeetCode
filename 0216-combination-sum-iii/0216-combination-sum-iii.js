/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
function combinationSum3(k, n) {
  const result = [];

  function backtrack(start, path, sum) {
    if (path.length === k) {
      if (sum === n) {
        result.push([...path]);
      }
      
      return;
    }

    for (let num = start; num <= 9; num++) {
      if (sum + num > n) break;

      path.push(num);

      backtrack(num + 1, path, sum + num);

      path.pop();
    }
  }

  backtrack(1, [], 0);

  return result;
}
