class Stack {
    constructor() {
      this.items = [];
      this.minStack = [];
    }
  
    push(element) {
      this.items.push(element);
  
      // update the minimum value in the auxiliary stack
      if (this.minStack.length === 0 || element <= this.minStack[this.minStack.length - 1]) {
        this.minStack.push(element);
      }
    }
  
    pop() {
      if (this.items.length === 0) {
        return "Underflow";
      }
  
      // remove the top element from the auxiliary stack if it's the minimum value
      let topElement = this.items.pop();
      if (topElement === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop();
      }
  
      return topElement;
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    getMin() {
      if (this.minStack.length === 0) {
        return "Stack is empty";
      }
  
      return this.minStack[this.minStack.length - 1];
    }
  }
  
  let stack = new Stack();
  stack.push(5);
  stack.push(2);
  stack.push(7);
  stack.push(1);
  stack.push(8);
  
  console.log("Minimum value in the stack: " + stack.getMin()); 
  