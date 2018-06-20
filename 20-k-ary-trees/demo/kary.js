'use strict';

// Import/Require your queue here

class KAryNode {
  constructor(value = null) {
    this.value = value;
    this.children = [];
  }

  appendChild(value) {
    const nodeToAppend =  new KAryNode(value);
    this.children.push(nodeToAppend);
  }
}

class KAryTree {
  constructor (root) {
    this.root = root;
  }

  breathFirstTraversal() {
    if(!this.root) {
      return null;
    }

    return this.breathFirstTraversalHelper(this.root);
  }

  // Vinicio - change this name as neccesary.
  breathFirstTraversalHelper(root) {
    // Vinicio - This is a pseudocode help for your homework
    // const queue = ....;  --> BFT
    // const stack = ...; --> DFT
    // while the queue is not empty
    // dequeue one element
    // enqueue all its children into queue
    // print/visit the node you just dequeued
  }
}