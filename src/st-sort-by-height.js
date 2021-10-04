/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
  let res = []
  let sorted = arr.slice().sort((a, b) => a - b).filter(v => v !== -1)
  for (let i = 0; i < arr.length; i++) {
    arr[i] === -1 ? res.push(-1) : res.push(sorted.shift())
  }
  return res
}
