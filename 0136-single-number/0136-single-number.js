function singleNumber(nums) {
  if (nums.length === 1) {
    return nums[0];
  }
  
  const appearRecords = {};
  
  for (const num of nums) {
    if (!appearRecords[num]) {
      appearRecords[num] = 1; 
    } else {
      appearRecords[num] += 1;
    }
  }
  
  for (const num of nums) {
    if (appearRecords[num] === 1) {
      return num;
    }
  }
}