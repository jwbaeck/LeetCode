/**
 * @param {number[]} nums
 * @return {number}
 */
function maximumGap(nums) {
  const n = nums.length;

  if (n < 2) return 0;

  let minNum = Infinity;
  let maxNum = -Infinity;

  for (const num of nums) {
    minNum = Math.min(minNum, num);
    maxNum = Math.max(maxNum, num);
  }

  if (minNum === maxNum) return 0;

  const bucketSize = Math.max(1, Math.floor((maxNum - minNum) / (n - 1)));
  const bucketCount = Math.floor((maxNum - minNum) / bucketSize) + 1;
  const buckets = Array.from({ length: bucketCount }, () => ({
    min: Infinity,
    max: -Infinity,
    used: false,
  }));

  for (const num of nums) {
    const index = Math.floor((num - minNum) / bucketSize);

    buckets[index].min = Math.min(buckets[index].min, num);
    buckets[index].max = Math.max(buckets[index].max, num);
    buckets[index].used = true;
  }

  let maxGap = 0;
  let previousMax = minNum;

  for (const bucket of buckets) {
    if (!bucket.used) continue;

    maxGap = Math.max(maxGap, bucket.min - previousMax);
    previousMax = bucket.max;
  }

  return maxGap;
}
