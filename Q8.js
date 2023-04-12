function checkBrackets(code) {
    let stack = [];
  
    // loop through the code characters
    for (let i = 0; i < code.length; i++) {
      let char = code.charAt(i);
  
      // if the character is an opening bracket, push it onto the stack
      if (isOpenBracket(char)) {
        stack.push(char);
      } else if (isCloseBracket(char)) { // if the character is a closing bracket, pop the last opening bracket from the stack
        if (stack.length === 0) {
          // if the stack is empty, there is no matching opening bracket for this closing bracket, so the code is invalid
          return false;
        } else {
          let lastOpenBracket = stack.pop();
          if (!areMatchingBrackets(lastOpenBracket, char)) {
            // if the last opening bracket on the stack doesn't match the current closing bracket, the code is invalid
            return false;
          }
        }
      }
    }
  
    // if the stack is not empty after processing all characters, there are some opening brackets that are not closed
    return stack.length === 0;
  }
  
  function isOpenBracket(char) {
    // returns true if the character is an opening bracket, false otherwise
    return /[({\[]/.test(char);
  }
  
  function isCloseBracket(char) {
    // returns true if the character is a closing bracket, false otherwise
    return /[)}\]]/.test(char);
  }
  
  function areMatchingBrackets(open, close) {
    // returns true if the open and close brackets match, false otherwise
    return (open === '(' && close === ')') ||
           (open === '{' && close === '}') ||
           (open === '[' && close === ']');
  }

  
  const code1 = 'function add(a, b) { return a + b; }';
console.log(checkBrackets(code1)); 

const code2 = 'if (x > 0) { console.log("Positive"); } else { console.log("Negative");';
console.log(checkBrackets(code2)); 