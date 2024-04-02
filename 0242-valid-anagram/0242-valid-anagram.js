function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  
  const sElements = s.split("").sort();
  const tElements = t.split("").sort();
  const isSame = (array1, array2) => {
    return JSON.stringify(array1) === JSON.stringify(array2);
  };
  
  return isSame(sElements, tElements);
}