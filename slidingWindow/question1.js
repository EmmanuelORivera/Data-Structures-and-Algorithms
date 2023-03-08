// Maximum sum subarray:
// Given an array of integers, find the contiguous subarray with the largest sum.
// For example, given the array [-2,1,-3,4,-1,2,1,-5,4] the maximum sum subarray is [4,-1,2,1] with a sum of 6

function slidingWindow(arr, l) {
  let sum = 0
  let max
  for (let i = 0; i < l; i++) {
    sum += arr[i]
    max = sum
  }

  for (let i = l; i < arr.length; i++) {
    sum = sum + arr[i] - arr[i - l]
    if (max < sum) max = sum
  }
  console.log(max)
}
slidingWindow([-2, 1, -3, 4, -1, 2, 1, -5, 4], 4)
