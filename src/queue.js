const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.firstNode = null;
  }

  getUnderlyingList() {
    return this.firstNode;
  
  }

  enqueue(value) {

    const newNode = new ListNode(value);
    let currentNode = this.firstNode;

    if (!this.firstNode) {
      this.firstNode = newNode;

    } else {

      while (currentNode.next) {
        currentNode = currentNode.next
      }
      currentNode.next = newNode;
    }
    }


  dequeue() {

    if (!this.firstNode) {return null};

    let value = this.firstNode.value;
    this.firstNode = this.firstNode.next;
    
    return value;
  }
}

module.exports = {
  Queue
};
