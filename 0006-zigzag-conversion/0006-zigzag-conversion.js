/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
function convert(s, numRows) {
  if (numRows === 1 || s.length <= numRows) return s;

  const rows = Array.from({ length: numRows }, () => []);
  let r = 0;
  let dir = 1;

  for (const ch of s) {
    rows[r].push(ch);

    if (r === 0) dir = 1;
    else if (r === numRows - 1) dir = -1;

    r += dir;
  }

  return rows.map(arr => arr.join("")).join("");
}