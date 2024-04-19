// Feel free to add new properties and methods to the class.
interface MinMaxItems {
    min: number,
    max: number
  }
  
  export class MinMaxStack {
    minMaxStack : MinMaxItems[]
    stack : number[]
  
    constructer() {
      this.minMaxStack = []
      this.stack = []
    }
    
    peek() {
      // Write your code here.
      return this.stack[this.stack.length -1];
    }
  
    pop() {
      // Write your code here.
      this.minMaxStack.pop()
      return this.stack.pop()
    }
  
    push(number: number) {
      // Write your code here.
      let newMinMaxNumber = { min: number, max : number}
      console.log('this',this, this.minMaxStack)
      if(this.minMaxStack?.length){
        const lastMinMax = this.minMaxStack[this.minMaxStack.length -1]
        newMinMaxNumber.min = Math.min(lastMinMax.min, number)
        newMinMaxNumber.max = Math.max(lastMinMax.max, number)
      }
      this.minMaxStack.push(newMinMaxNumber)
      this.stack.push(number)
    }
  
    getMin() {
      // Write your code here.
      return this.minMaxStack[this.minMaxStack.length -1].min;
    }
  
    getMax() {
      // Write your code here.
      return this.minMaxStack[this.minMaxStack.length -1].max;
    }
  }
  const stack = new MinMaxStack()
  stack.push(5)