const arr = [
  { id: 1, name: 'John', hobbies: ['reading', 'swimming'] },
  { id: 2, name: 'Jane', hobbies: ['hiking', 'cooking'] },
  { id: 1, address: { city: 'New York', country: 'USA' } },
  { id: 2, address: { city: 'Paris', country: 'France' } },
  { id: 3, name: 'Bob', hobbies: ['coding', 'running'] },
  { id: 1, hobbies: ['gym'] },
]

console.log(arr)

const mergedArr = Object.values(
  // {'1':{ id: 1, name: 'John', hobbies: ['reading', 'swimming'] }}
  //   and it is going to merge the rest of the data
  arr.reduce((acc, cur) => {
    // console.log({ cur })
    // console.log({ acc })
    const { id, ...rest } = cur
    // console.log({ rest })
    acc[id] = acc[id] ? { ...acc[id], ...rest } : { id, ...rest }
    return acc
  }, {})
)
console.log(mergedArr)

async function duplicate(num) {
  return num * 2
}
