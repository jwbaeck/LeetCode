function twoSum(nums, target) {
  const result = [null, null];
  
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        result[0] = i;
        result[1] = j;
      }
    }
  }
  
  return result;
}