function backspaceCompare(s, t) {
  function makeNewString(string) {
    const stack = [];
    
    for (const letter of string) {
      if (letter !== "#") {
        stack.push(letter);
      } else if (stack.length > 0) {
        stack.pop();
      }
    }
    
    return stack.join("");
  }

  return makeNewString(s) === makeNewString(t);
}