/*Watson gives Sherlock an array of integers.
His challenge is to find an element of the array such that the sum of all elements 
to the left is equal to the sum of all elements to the right.
arr=[5,6,8,11]
You will be given arrays of integers and must determine whether there is an element
that meets the criterion. If there is, return YES. Otherwise, return NO.
*/

function balancedSums(arr) {
  const sumArrayData = arr.reduce((acc, cur) => acc + cur, 0)
  let leftSide = 0

  for (let i = 0; i < arr.length; i++) {
    if (leftSide === sumArrayData - leftSide - arr[i]) {
      return 'YES'
    }
    leftSide += arr[i]
  }
  return 'NO'
}
console.log(balancedSums([5, 6, 8, 11])) // YES
console.log(balancedSums([1, 5, 9, 122])) // NO
