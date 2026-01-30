/**
 * @param {string} s
 * @return {number}
 */
function romanToInt(roman) {
  const valueBySymbol = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;
  let previousValue = 0;

  for (let i = roman.length - 1; i >= 0; i--) {
    const symbol = roman[i];
    const currentValue = valueBySymbol[symbol];

    if (currentValue < previousValue) {
      total -= currentValue;
    } else {
      total += currentValue;
      previousValue = currentValue;
    }
  }

  return total;
}
