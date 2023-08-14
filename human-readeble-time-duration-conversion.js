// Explanation:
// If the input seconds is equal to 0, the function returns the string 'now', indicating an immediate reference.

// The algorithm defines constants for the number of seconds in a day, an hour, and a minute.

// The time duration is divided into its constituent parts:

// days is the whole number of days in the time duration.
// modDays is the remaining seconds after subtracting the days.
// hours is the whole number of hours in the remaining time.
// modHours is the remaining seconds after subtracting the hours.
// minutes is the whole number of minutes in the remaining time.
// modSeconds is the remaining seconds after subtracting the minutes.
// The algorithm creates an empty array called units to store the components of the time duration (days, hours, minutes, seconds).

// For each component (days, hours, minutes, and seconds), the algorithm checks if it's greater than or equal to 1, and if so, it pushes a formatted string representation of the component to the units array. For example, if there are multiple days, it adds 'days', but if there's only one day, it adds 'day'.

// After adding the components to the units array, the algorithm joins the array elements with commas and spaces to form the initial message.

// If there are more than one elements in the units array, the algorithm modifies the message to replace the last comma with 'and', ensuring the desired format. This is done by finding the last comma's index using lastIndexOf, and then concatenating the substrings before and after the comma with 'and' in between.

// Finally, the algorithm returns the formatted message describing the time duration in a more human-friendly way.

function solution(seconds) {
  if (seconds === 0) {
    return 'now'
  }

  const oneDayInSeconds = 86400
  const oneHourInSeconds = 3600
  const oneMinuteInSeconds = 60

  let days = Math.floor(seconds / oneDayInSeconds)
  let modDays = seconds % oneDayInSeconds

  let hours = Math.floor(modDays / oneHourInSeconds)
  let modHours = modDays % oneHourInSeconds

  let minutes = Math.floor(modHours / oneMinuteInSeconds)
  let modSeconds = modHours % oneMinuteInSeconds

  let units = []

  if (days >= 1) {
    units.push(`${days} ${days > 1 ? 'days' : 'day'}`)
  }
  if (hours >= 1) {
    units.push(`${hours} ${hours > 1 ? 'hours' : 'hour'}`)
  }
  if (minutes >= 1) {
    units.push(`${minutes} ${minutes > 1 ? 'minutes' : 'minute'}`)
  }
  if (modSeconds > 0) {
    units.push(`${modSeconds} ${modSeconds > 1 ? 'seconds' : 'second'}`)
  }

  let message = units.join(', ')

  if (units.length > 1) {
    const lastIndex = message.lastIndexOf(', ')
    message =
      message.substring(0, lastIndex) +
      ' and ' +
      message.substring(lastIndex + 2)
  }

  return message
}

console.log(solution(1231231)) // Output: 14 days, 6 hours and 31 seconds
console.log(solution(15731040)) // Output: 182 days, 1 hour and 44 minutes
