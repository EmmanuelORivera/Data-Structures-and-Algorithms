// How would you implement a queue data structure in which the elements are added at the back
// and removed from the front, using a linked list?

class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class Queue {
  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }

  enqueue(data) {
    const newNode = new Node(data)

    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.size++
  }

  isEmpty() {
    return this.size === 0
  }
  dequeue() {
    if (this.isEmpty()) {
      return null
    }

    const removedNode = this.head
    if (this.size === 1) {
      this.head = null
      this.tail = null
    } else {
      this.head = this.head.next
    }
    this.size--
    return removedNode.data
  }
  getSize() {
    return this.size
  }
}

const myQueue = new Queue()
myQueue.enqueue('apple')
myQueue.enqueue('bannana')
myQueue.enqueue('cherry')

console.log(myQueue.getSize()) //3
console.log(myQueue.dequeue()) //apple
console.log(myQueue.getSize()) //2
console.log(myQueue.dequeue()) //bannana
console.log(myQueue.getSize()) //1
console.log(myQueue.dequeue()) //cherry
console.log(myQueue.getSize()) //0
console.log(myQueue.dequeue()) //null
console.log(myQueue.isEmpty()) //true
