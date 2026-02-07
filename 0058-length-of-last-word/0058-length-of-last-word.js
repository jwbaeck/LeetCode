/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLastWord(s) {
  let index = s.length - 1;

  while (index >= 0 && s[index] === " ") index--;

  let lastWordLength = 0;
  
  while (index >= 0 && s[index] !== " ") {
    lastWordLength++;
    index--;
  }

  return lastWordLength;
}
