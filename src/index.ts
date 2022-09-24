/**
 * The program makes the user guess the random number
 *
 * By:      Michael Clermont
 * Version: 1.0
 * Since:   2022-11-25
 */

import promptSync from 'prompt-sync'

/**
 * The function calculates the length of the wood
 *
 * @param {number} height  - height number
 * @param {number} width  - weight number
 * @returns {number} Return value
 */
function lengthCalculator(height: number, width: number): number {
  const volume = 144
  const length = volume / height / width
  return length
}

const prompt = promptSync()
try {
  const widthString = prompt('Enter the width(inch): ')
  const widthNumber = parseInt(widthString)
  const heightString = prompt('Enter the height(inch): ')
  const heightNumber = parseFloat(heightString)
  if (isNaN(+widthNumber) || isNaN(+heightNumber)) {
    throw new Error()
  }
  const woodLength = lengthCalculator(heightNumber, widthNumber)
  console.log(`The wood should be ${woodLength} inch(es) long.`)
} catch (e) {
  console.log('\nThat is not a number.')
}

console.log('\nDone.')
