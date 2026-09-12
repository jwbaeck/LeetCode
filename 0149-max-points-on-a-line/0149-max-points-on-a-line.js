/**
 * @param {number[][]} points
 * @return {number}
 */
function maxPoints(points) {
  const n = points.length;

  if (n <= 2) return n;

  let answer = 0;

  function gcd(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);

    while (b !== 0) {
      [a, b] = [b, a % b];
    }

    return a;
  }

  for (let i = 0; i < n; i++) {
    const slopes = new Map();
    let samePoint = 1;
    let maxOnLine = 0;

    for (let j = i + 1; j < n; j++) {
      let dx = points[j][0] - points[i][0];
      let dy = points[j][1] - points[i][1];

      if (dx === 0 && dy === 0) {
        samePoint++;
        continue;
      }

      const divisor = gcd(dx, dy);

      dx /= divisor;
      dy /= divisor;

      if (dx < 0) {
        dx = -dx;
        dy = -dy;
      }

      if (dx === 0) {
        dy = 1;
      }

      if (dy === 0) {
        dx = 1;
      }

      const key = `${dy}/${dx}`;

      const count = (slopes.get(key) || 0) + 1;
      slopes.set(key, count);

      maxOnLine = Math.max(maxOnLine, count);
    }

    answer = Math.max(answer, maxOnLine + samePoint);
  }

  return answer;
}
