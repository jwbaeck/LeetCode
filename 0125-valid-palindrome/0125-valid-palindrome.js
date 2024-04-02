function isPalindrome(s) {
  const trimmedString = s.replaceAll(" ", "");
  const lowerString = trimmedString.toLowerCase();
  
  const isEnglish = (string) => {
    const regExp = /[a-zA-Z]/g;
    
    if (regExp.test(string)) {
      return true
    } else {
      return false;
    }
  };
  
  const isNumber = (string) => {
    const regExp = /[0-9]/g;
    
    if (regExp.test(string)) {
      return true
    } else {
      return false;
    }
  };
  
  let stringWithoutSection = "";
  
  for (const element of lowerString) {
    if (isEnglish(element)) {
      stringWithoutSection += element;
    }
    
    if (isNumber(element)) {
      stringWithoutSection += element;
    }
  }
  
  let reversedString = "";
  
  for (let i = stringWithoutSection.length - 1; i >= 0; i--) {
    reversedString += stringWithoutSection[i];
  }
  
  const result = stringWithoutSection === reversedString;
  
  return result;
}