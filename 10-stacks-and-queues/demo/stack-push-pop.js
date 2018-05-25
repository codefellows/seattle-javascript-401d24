'use strict';

class Stack {

  constructor() {
    this.storage = new Array();
  }

  push(item)  {
    this.storage.push(item);
  }

  pop() {
    return this.storage.pop();
  }
}

module.exports = Stack;

