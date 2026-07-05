/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
function fullJustify(words, maxWidth) {
  const result = [];
  let i = 0;

  while (i < words.length) {
    let lineLength = words[i].length;
    let j = i + 1;

    while (j < words.length && lineLength + 1 + words[j].length <= maxWidth) {
      lineLength += 1 + words[j].length;
      j++;
    }

    const lineWords = words.slice(i, j);
    const isLastLine = j === words.length;
    const wordLengthSum = lineWords.reduce((sum, word) => sum + word.length, 0);
    const gaps = lineWords.length - 1;
    let line = "";

    if (isLastLine || gaps === 0) {
      line = lineWords.join(" ");
      line += " ".repeat(maxWidth - line.length);
    } else {
      const totalSpaces = maxWidth - wordLengthSum;
      const spaceEach = Math.floor(totalSpaces / gaps);
      const extraSpaces = totalSpaces % gaps;

      for (let k = 0; k < lineWords.length; k++) {
        line += lineWords[k];

        if (k < gaps) {
          line += " ".repeat(spaceEach + (k < extraSpaces ? 1 : 0));
        }
      }
    }

    result.push(line);
    
    i = j;
  }

  return result;
}
