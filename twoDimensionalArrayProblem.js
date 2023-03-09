/*
The function gridChallenge() takes an array of strings grid as input. 
The first loop sorts each row in alphabetical order by splitting each string into an array of characters, 
sorting the array with the sort() method, and joining the characters back into a string with the join('') method.

The second loop checks if each column is sorted in alphabetical order.
We iterate over the columns by looping over the indices of the characters in the first row of the grid.
For each column, we compare the characters in the same column of each row, starting from the second row.
If we find a character that is less than the corresponding character in the previous row, we know that the
columns are not sorted in alphabetical order, so we return 'NO'.
If we iterate over all columns without finding any out-of-order characters, we know that the columns are 
sorted in alphabetical order, so we return 'YES'.*/

function gridChallenge(grid) {
  // Sort each row in alphabetical order
  for (let i = 0; i < grid.length; i++) {
    grid[i] = grid[i].split('').sort().join('')
  }

  // Check if columns are sorted in alphabetical order
  for (let j = 0; j < grid[0].length; j++) {
    for (let i = 1; i < grid.length; i++) {
      if (grid[i][j] < grid[i - 1][j]) {
        return 'NO'
      }
    }
  }
  return 'YES'
}

console.log(gridChallenge(['mpxz', 'abcd', 'wlmf'])) //NO
console.log(gridChallenge(['abc', 'hjk', 'mpq', 'rtv'])) //YES
