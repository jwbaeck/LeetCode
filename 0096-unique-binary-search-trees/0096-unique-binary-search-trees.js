/**
 * @param {number} n
 * @return {number}
 */
function numTrees(n) {
  const uniqueTreeCount = new Array(n + 1).fill(0);

  uniqueTreeCount[0] = 1;
  uniqueTreeCount[1] = 1;

  for (let totalNodes = 2; totalNodes <= n; totalNodes += 1) {
    for (let rootValue = 1; rootValue <= totalNodes; rootValue += 1) {
      const leftSubtreeNodeCount = rootValue - 1;
      const rightSubtreeNodeCount = totalNodes - rootValue;

      uniqueTreeCount[totalNodes] +=
        uniqueTreeCount[leftSubtreeNodeCount] *
        uniqueTreeCount[rightSubtreeNodeCount];
    }
  }

  return uniqueTreeCount[n];
}
