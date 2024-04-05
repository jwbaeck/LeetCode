function majorityElement(nums) {
  const neededCounts = nums.length / 2;
  const records = {};
  
  for (const element of nums) {
    if (!records[element]) {
      records[element] = 1;
    } else {
      records[element] += 1;
    }
  }
  
  const keys = Object.keys(records);
  
  for (const key of keys) {
    if (records[key] > neededCounts) {
      return Number(key);
    }
  }
}