function isValid(s) {
  const stack = [];

  for (const char of s) {
    if (char === "(") {
      stack.push(")");
    } else if (char === "{") {
      stack.push("}");
    } else if (char === "[") {
      stack.push("]");
    } else {
      if (stack.pop() !== char) {
        return false;
      }
    }
  }
  
  const result = stack.length === 0;

  return result;
}