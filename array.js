const Memory = require('./memory');

class Array {
  constructor() {
    this.length = 0;
    this._capacity = 0;
    this.ptr = Memory.allocate(this.length);
  }
  //Creates a push method to add Memory block to the end of the array
  push(value) {
    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }

    //Sets the pointer plus length to equal value
    Memory.set(this.ptr + this.length, value);
    this.length++;
  }
  _resize(size) {
    //Sets oldPtr to the currently targeted ptr
    const oldPtr = this.ptr;
    //Allocates new Memory space at the end of the line
    this.ptr = Memory.allocate(size);
    //Checks if there is no Memory
    if (this.ptr === null) {
      throw new Error('Out of Memory');
    }
    //If there is space, create new Memory allocation with new data
    Memory.copy(this.ptr, oldPtr, this.length);
    //Delete old Memory allocation
    Memory.free(oldPtr);
    this._capacity = size;
  }

  get(index) {
    //Checks if index it out of Memory address length or 0
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    //Returns Memory at the pointer + index value
    return Memory.get(this.ptr + index);
  }
  pop() {
    //Checks if value is -
    if (this.length == 0) {
      throw new Error('Index error');
    }
    //Sets the total value to everything but the last
    const value = Memory.get(this.ptr + this.length - 1);
    //

    //Changes this object length
    this.length--;
    return value;
  }

  insert(index, value) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    //If the length is greater than capacity of the Memory block, resize it to the length + 1 of the current object, multiplied by the SIZE_RATIO
    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }
    //Copy the current block
    Memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
    Memory.set(this.ptr + index, value);
    this.length++;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    Memory.copy(
      this.ptr + index,
      this.ptr + index + 1,
      this.length - index - 1
    );
    this.length--;
  }
}
Array.SIZE_RATIO = 3;

module.exports = Array;
