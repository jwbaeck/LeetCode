function isPalindrome(x) {
  const string = x.toString();
  const reversedString = string.split("").reverse().join("");
  const result = string === reversedString;
  
  return result;
}