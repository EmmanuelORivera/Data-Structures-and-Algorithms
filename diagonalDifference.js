// Input Example
// 11 2 4
// 4 5 6
// 10 8 -12
function diagonalDifference(arr) {
  let sumLeft = 0
  let sumRight = 0

  for (let i = 0; i < arr.length; i++) {
    sumLeft += arr[i][i]
    sumRight += arr[i][arr.length - i - 1]
  }

  return Math.abs(sumLeft - sumRight)
}
