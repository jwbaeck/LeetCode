function maxProfit(prices) {
  let profit = 0;
  let minimumNum = prices[0];
  
  for (let i = 1; i < prices.length; i++) {
    minimumNum = Math.min(minimumNum, prices[i - 1]);
    profit = Math.max(prices[i] - minimumNum, profit);
  }
  
  return profit;
}