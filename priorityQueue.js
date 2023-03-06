// A FIFO priority queue
const priorityQueue = []
function comparePriority(a, b) {
  return a.priority - b.priority
}

priorityQueue.push({ value: 'A', priority: 2 })
priorityQueue.push({ value: 'B', priority: 1 })
priorityQueue.push({ value: 'C', priority: 3 })

priorityQueue.sort(comparePriority)

const firstElement = priorityQueue.shift()
const secondElement = priorityQueue.shift()

console.log(firstElement)
console.log(secondElement)
