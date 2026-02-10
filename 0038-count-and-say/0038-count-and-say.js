/**
 * @param {number} n
 * @return {string}
 */
function countAndSay(n) {
  let current = "1";

  for (let step = 2; step <= n; step++) {
    let next = "";
    let runCount = 1;

    for (let index = 1; index <= current.length; index++) {
      if (index < current.length && current[index] === current[index - 1]) {
        runCount++;
      } else {
        next += String(runCount) + current[index - 1];
        runCount = 1;
      }
    }

    current = next;
  }

  return current;
}
