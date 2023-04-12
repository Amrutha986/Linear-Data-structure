function firstNonRepeatedChar(str) {
    let charCount = {};
  
    // count the occurrences of each character
    for (let i = 0; i < str.length; i++) {
      let char = str.charAt(i);
      charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
    }
  
    // find the first non-repeated character
    for (let i = 0; i < str.length; i++) {
      let char = str.charAt(i);
      if (charCount[char] === 1) {
        return char;
      }
    }
  
    return null;
  }

  const str = "abaccddeeff";
const firstNonRepeated = firstNonRepeatedChar(str);
console.log(firstNonRepeated); 

  