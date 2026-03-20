/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(stockPrices) {
  let totalProfit = 0;

  for (let dayIndex = 1; dayIndex < stockPrices.length; dayIndex++) {
    const yesterdayPrice = stockPrices[dayIndex - 1];
    const todayPrice = stockPrices[dayIndex];

    if (todayPrice > yesterdayPrice) {
      totalProfit += todayPrice - yesterdayPrice;
    }
  }

  return totalProfit;
}
