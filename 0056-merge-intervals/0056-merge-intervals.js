/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
function merge(intervals) {
  if (intervals.length <= 1) return intervals;

  intervals.sort((a, b) => a[0] - b[0]);

  const result = [];
  let currentInterval = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    const nextInterval = intervals[i];
    const currentEnd = currentInterval[1];
    const nextStart = nextInterval[0];
    const nextEnd = nextInterval[1];

    if (nextStart <= currentEnd) {
      currentInterval[1] = Math.max(currentEnd, nextEnd);
    } else {
      result.push(currentInterval);
      currentInterval = nextInterval;
    }
  }

  result.push(currentInterval);

  return result;
}
