/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
  if (!strs || strs.length === 0) return "";

  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    const current = strs[i];

    while (!current.startsWith(prefix)) {
      prefix = prefix.slice(0, -1);
      if (prefix === "") return "";
    }
  }

  return prefix;
}
