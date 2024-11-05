/*
'''
Implement a basic queue class using an array as the underlying storage. Queues have two critical methods, enqueue() and dequeue() to add and remove an item from the queue, respectively. You'll also need a constructor for your class, and for convenience, add a size() method that returns the current size of the queue. All of these methods should run in O(1) time!

Remember, a queue is a first-in, first-out (or last-in, last-out) data structure!

Using an array is one way to implement a queue. For this first array implementation, we'll cap the capacity of the queue.
 

EXAMPLE(S)
const q = new ArrayQueue(10)
console.log(q.size()) == 0
q.enqueue(2)
q.enqueue(3)
console.log(q.size()) == 2
console.log(q.dequeue()) == 2
console.log(q.size()) == 1
console.log(q.dequeue()) == 3
 

FUNCTION SIGNATURE
class ArrayQueue {
  constructor(capacity) {
    this.capacity = capacity;
    // more code needed here!
  }

  enqueue(newValue) {}

  dequeue() {}

  size() {}
}
'''
Target Runtime for Methods: O(1)


Hints
Use two indices, one for the start and one for the end of the portion of the array that is being used. Look out for the situation where the data wraps around the end of the array, as well as the need to increase capacity.


*/

class ArrayQueue {
    constructor(capacity) {
      this.capacity = capacity;
      this.array = new Array(capacity).fill(undefined)
      this.start = 0
      this.end = -1
      this.count = 0
    }
  
    enqueue(newValue) {
      if (this.capacity === this.count){
        this.increaseCapacity()
      }
  
      this.array[count] = newValue
      this.count++
    }
  
    dequeue() {
      if (this.count === 0) {
        console.log('is empty');
      }

      // store the 0th element
      const temp = this.array[0]
      
      // set it as undefined
      this.array[0] = undefined

      for (let i = 0; i < this.array.length; i++) {
        // once we hit undefined at the back of the array the loop can be exited
        if(this.array[i+1] === undefined) break;

        // shift all elements to the left the replace the last one that was removed
        [this.array[i], this.array[i+1]] = [this.array[i+1], this.array[i]]
      }
      

      return temp
    }
  
    size() {
      return this.count;
    }
  
    increaseCapacity() {
      const newArray = new Array(this.capacity * 2).fill(undefined);
  
      for (let i = 0; i < this.array.length; i++) {
        newArray[i] = this.array[i]
      }
  
      this.array = newArray
  
      this.capacity = this.array.length
    }
  }
  
  
  
  const q = new ArrayQueue(2);
  console.log(q.size(), 0) // 0
  q.enqueue(2);
  q.enqueue(3);
  console.log(q.size(), 2) // 2
  console.log(q.dequeue(), 2); // 2
  console.log(q.size(), 1) // 1
  console.log(q.dequeue(), 3); // 3
  console.log(q.size(), 0);
  q.enqueue(10);
  q.enqueue(11);
  console.log(q.dequeue(), 10);
  q.enqueue(12);
  console.log(q.dequeue(), 11);
  console.log(q.dequeue(), 12);
  console.log(q.size(), 0);
  // Test resizing
  q.enqueue(20);
  q.enqueue(21);
  console.log(q.dequeue(), 20);
  console.log(q);
  q.enqueue(22);
  q.enqueue(23);
  console.log(q);