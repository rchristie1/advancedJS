class myArray {
    constructor() {
      this.length = 0;
      this.data = {}
    }
  
    get(index) {
      return this.data[index]
    }
  
    push(item) { // O(1)
      this.data[this.length] = item;
      this.length++;
      return this.length;
    }
  
    pop(){ // O(1)
      const lastItem = this.data[this.length-1];
      delete this.data[this.length - 1];
      this.length--;
      return lastItem;
    }
  
    delete(index) { // O(n)
      const item = this.data[index];
      this.shiftItems(index); // shift the items in the arr when a delete happens
    }
  
    shiftItems(index) { // O(n)
      for(let i = index; i < this.length - 1; i++) {
        // shift the items to the left by 1 after deletion
        this.data[i] = this.data[i+1]
      }
      // remove the last item in the arr or it just gets moved to the back 
      delete this.data[this.length-1]; 
      //decrease the length of the arr
      this.length--; 
    }
  }
  
  const newArray = new myArray();
  newArray.push('item 1');
  newArray.push('item 2');
  newArray.push('item 3');
  newArray.pop()
  newArray.push('item 4');
  newArray.delete(1)
  console.log(newArray);
  