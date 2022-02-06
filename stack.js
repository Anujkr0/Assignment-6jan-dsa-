class Stack {
    constructor() {
        this.items = [];
    }
    
   
 
    add(element) {
        return this.items.push(element);
    }
    
    
    remove() {
        if(this.items.length > 0) {
            return this.items.pop();
        }
    }
    
    peek() {
        return this.items[this.items.length - 1];
    }
    
   
}

let stack = new Stack();
stack.add(1);
stack.add(7);
stack.add(8);
stack.add(10);
console.log("Add Element")
console.log(stack.items);

stack.remove();
console.log("Remove Last Element")
console.log(stack.items);
console.log("View Last Element")
console.log(stack.peek());
