function missingNumber(nums) {
  const length = nums.length;
  const rightNums = [];
  const sortedNums = [...nums].sort((a, b) => a - b);
  
  for (let i = 0; i <= length; i++) {
    rightNums.push(i);
  }
  
  for (let i = 0; i < rightNums.length; i++) {
    if (sortedNums[i] !== rightNums[i]) {
      return rightNums[i];
    }
  }
}