// ListNode
class ListNode {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head
  }

  // get the size of the linked list
  size() {
    let size = 0
    let currentNode = this.head
    console.log({ currentNode })

    while (currentNode) {
      size++
      currentNode = currentNode.next
    }
    return size
  }
  getFirst() {
    return this.head
  }
  getLast() {
    let currentNode = this.head

    while (currentNode && currentNode.next) {
      currentNode = currentNode.next
    }
    return currentNode
  }
  clear() {
    this.head = null
  }
  // add a node to the end of a linked list.
  add(data) {
    const newNode = new ListNode(data)

    if (!this.head) {
      this.head = newNode
    } else {
      let currentNode = this.head

      while (currentNode.next) {
        currentNode = currentNode.next
      }
      currentNode.next = newNode
    }
  }
}

let node1 = new ListNode(2)
let node2 = new ListNode(5)
let node3 = new ListNode(41)
node1.next = node2
node2.next = node3

let list = new LinkedList(node1)

// console.log(node1)
// console.log(node2)
console.log(list.size())
console.log(list.getFirst())
console.log(list.getLast())
// clear linked list
console.log(list.clear())
console.log(list.size())
// add new value at the end
console.log(list.add(9))
console.log(list)
