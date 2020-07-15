const Memory = require('./memory');
const memory = new Memory();

class Array {
  constructor() {
    this.length = 0;
    this._capacity = 0;
    this.ptr = memory.allocate(this.length);
  }
  //Creates a push method to add memory block to the end of the array
  push(value) {
    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }

    //Sets the pointer plus length to equal value
    memory.set(this.ptr + this.length, value);
    this.length++;
  }
  _resize(size) {
    //Sets oldPtr to the currently targeted ptr
    const oldPtr = this.ptr;
    //Allocates new memory space at the end of the line
    this.ptr = memory.allocate(size);
    //Checks if there is no memory
    if (this.ptr === null) {
      throw new Error('Out of memory');
    }
    //If there is space, create new memory allocation with new data
    memory.copy(this.ptr, oldPtr, this.length);
    //Delete old memory allocation
    memory.free(oldPtr);
    this._capacity = size;
  }

  get(index) {
    //Checks if index it out of memory address length or 0
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    //Returns memory at the pointer + index value
    return memory.get(this.ptr + index);
  }
  pop() {
    //Checks if value is -
    if (this.length == 0) {
      throw new Error('Index error');
    }
    //Sets the total value to everything but the last
    const value = memory.get(this.ptr + this.length - 1);
    //

    //Changes this object length
    this.length--;
    return value;
  }

  insert(index, value) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    //If the length is greater than capacity of the memory block, resize it to the length + 1 of the current object, multiplied by the SIZE_RATIO
    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }
    //Copy the current block
    memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
    memory.set(this.ptr + index, value);
    this.length++;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    memory.copy(
      this.ptr + index,
      this.ptr + index + 1,
      this.length - index - 1
    );
    this.length--;
  }
}
Array.SIZE_RATIO = 3;

module.exports = Array;
