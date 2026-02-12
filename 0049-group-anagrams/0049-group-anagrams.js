/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams(strs) {
  const groupsByKey = new Map();

  for (const word of strs) {
    const key = word.split("").sort().join("");

    if (!groupsByKey.has(key)) groupsByKey.set(key, []);
    
    groupsByKey.get(key).push(word);
  }

  return Array.from(groupsByKey.values());
}
