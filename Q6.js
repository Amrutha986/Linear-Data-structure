function postfixToPrefix(postfixExp) {
    let stack = [];
  
    // loop through the postfix expression
    for (let i = 0; i < postfixExp.length; i++) {
      let char = postfixExp.charAt(i);
  
      // if the character is an operand, push it onto the stack
      if (isOperand(char)) {
        stack.push(char);
      } else { // if the character is an operator, pop two operands from the stack and push the expression onto the stack
        let operand1 = stack.pop();
        let operand2 = stack.pop();
        let expr = char + operand2 + operand1;
        stack.push(expr);
      }
    }
  
    // the prefix expression is the only element left on the stack
    return stack.pop();
  }
  
  function isOperand(char) {
    // returns true if the character is an operand (a letter or digit), false otherwise
    return /[a-zA-Z0-9]/.test(char);
  }
  
  const postfixExp = "34*5+";
const prefixExp = postfixToPrefix(postfixExp);
console.log(prefixExp); 