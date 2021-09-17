import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  if (s1.length === 0 || s2.length === 0)
    return 0

  let s2Keys = {}
  let count = 0

  for (let i = 0; i < s2.length; i++) {
    let current = s2[i]

    if (s2Keys[current] >= 0)
      s2Keys[current]++

    if (s2Keys[current] === undefined)
      s2Keys[current] = 1
  }

  for (let i = 0; i < s1.length; i++) {
    const current = s1[i]

    if (s2Keys[current] > 0) {
      s2Keys[current]--
      count++
    }
  }

  return count
}
