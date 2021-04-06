const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.queue = new ListNode();
    this.now = this.queue;
  }

  get size() {
    return this.now.length;
  }

  enqueue(element) {
    this.now.value = element;
    this.now.next = new ListNode();
    this.now = this.now.next;
  }

  dequeue() {
    const result = this.queue.value;
    this.queue.value = this.queue.next.value;
    this.queue.next = this.queue.next.next;
    return result;
  }
}

module.exports = Queue;
