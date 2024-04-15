function climbStairs(n) {
  if (n === 1) {
    return 1;
  }

  let firstOccasion = 1;
  let secondOccasion = 2;

  for (let i = 3; i <= n; i++) {
    let thirdOccasion = firstOccasion + secondOccasion;
    firstOccasion = secondOccasion;
    secondOccasion = thirdOccasion;
  }

  return secondOccasion;
}