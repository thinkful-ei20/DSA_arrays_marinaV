
const Memory = require('./memory');

const memory = new Memory();
console.log(memory);

class Array {
  constructor() {
    this.length = 0;
    this._capacity = 0
    this.ptr = memory.allocate(this.length)
  }

  push(value) {


    this.length += 1;

  }

  _resize(size) {
    const oldPtr = this.ptr;
    this.ptr = memory.allocate(size);
    if (this.ptr === null) {
      throw new Error('Out of memory');
    }
    memory.copy(oldPtr, this.ptr, this.length);
    memory.free(oldPtr);
    this._capacity(size);



  }

};



// class Array {
//   constructor() {
//     this.length = 0;
//     this._capacity = 0;
//     this.ptr = memory.allocate(this.length);
//   }
//
//   push(value) {
//     if (this.length >= this._capacity) {
//       this._resize((this.length + 1) * Array.SIZE_RATIO);
//     }
//
//     memory.set(this.ptr + this.length, value);
//     this.length++;
//   }
//
//   pop() {
//     if (this.length == 0) {
//       throw new Error('Index error');
//     }
//     const value = memory.get(this.ptr + this.length - 1);
//     this.length--;
//     return value;
//   }
//
//   get(index) {
//     if (index < 0 || index >= this.length) {
//       throw new Error('Index error');
//     }
//     return memory.get(this.ptr + index);
//   }
//
//   insert(index, value) {
//     if (index < 0 || index >= this.length) {
//       throw new Error('Index error');
//     }
//
//     if (this.length >= this._capacity) {
//       this._resize((this.length + 1) * Array.SIZE_RATIO);
//     }
//
//     memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
//     memory.set(this.ptr + index, value);
//     this.length++;
//   }
//
//   remove(index) {
//     if (index < 0 || index >= this.length) {
//       throw new Error('Index error');
//     }
//     memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
//     this.length--;
//   }
//
//   _resize(size) {
//     const oldPtr = this.ptr;
//     this.ptr = memory.allocate(size);
//     if (this.ptr === null) {
//       throw new Error('Out of memory');
//     }
//     memory.copy(this.ptr, oldPtr, this.length);
//     memory.free(oldPtr);
//     this._capacity = size;
//   }
// }
//
// function main(){
//
//   Array.SIZE_RATIO = 3;
//
//   //create an instance of the array class
//   let arr = new Array();
//
//   //add an item to the array
//   arr.push(3);
//
//   console.log(arr);
// }
//
// main();

// Array.SIZE_RATIO = 3;

//
// class Array {
//   constructor() {
//     this.length = 0;
//     this.ptr = memory.allocate(this.length);
//   }
//
//   _resize(size) {
//     const oldPtr = this.ptr;
//     this.ptr = memory.allocate(size);
//     if (this.ptr === null) {
//       throw new Error('Out of memory');
//     }
//     memory.copy(this.ptr, oldPtr, this.length);
//     memory.free(oldPtr);
//   }
//
//   push(value) {
//     this._resize(this.length + 1);
//     memory.set(this.ptr + this.length, value);
//     this.length++;
//   }
//
// }