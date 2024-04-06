function containsDuplicate(nums) {
  const appearRecords = {};
  
  for (const num of nums) {
    if (!appearRecords[num]) {
      appearRecords[num] = 1;
    } else {
      appearRecords[num] += 1;
    }
  }
  
  const appearCounts = Object.values(appearRecords);
  
  for (const appearCount of appearCounts) {
    if (appearCount >= 2) {
      return true;
    }
  }
  
  return false;
}