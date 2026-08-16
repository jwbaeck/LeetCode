/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
function wordBreak(s, wordDict) {
  const wordSet = new Set(wordDict);
  const memo = new Map();

  function dfs(start) {
    if (start === s.length) {
      return [""];
    }

    if (memo.has(start)) {
      return memo.get(start);
    }

    const sentences = [];

    for (let end = start + 1; end <= s.length; end++) {
      const word = s.slice(start, end);

      if (!wordSet.has(word)) continue;

      const restSentences = dfs(end);

      for (const rest of restSentences) {
        sentences.push(word + (rest ? " " + rest : ""));
      }
    }

    memo.set(start, sentences);
    
    return sentences;
  }

  return dfs(0);
}
