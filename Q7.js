function prefixToInfix(prefixExp) {
    let stack = [];
  
    // loop through the prefix expression in reverse order
    for (let i = prefixExp.length - 1; i >= 0; i--) {
      let char = prefixExp.charAt(i);
  
      // if the character is an operand, push it onto the stack
      if (isOperand(char)) {
        stack.push(char);
      } else { // if the character is an operator, pop two operands from the stack and push the expression onto the stack
        let operand1 = stack.pop();
        let operand2 = stack.pop();
        let expr = `(${operand1}${char}${operand2})`;
        stack.push(expr);
      }
    }
  
    
    return stack.pop();
  }
  
  function isOperand(char) {
    e
    return /[a-zA-Z0-9]/.test(char);
  }
  const prefixExp = "+*345";
  const infixExp = prefixToInfix(prefixExp);
  console.log(infixExp); 
    