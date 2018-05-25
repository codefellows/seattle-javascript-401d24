'use strict';

class Stack {

  constructor() {
    this.storage = new Array();
  }

  push(item)  {
    this.storage.unshift(item);
  }

  pop() {
    return this.storage.shift();
  }
}

module.exports = Stack;

