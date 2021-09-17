import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  let buf = ''
  let count = 1
  let out = []

  for (let i = 0; i < str.length; i++) {

    if (str[i] === str[i+1]) {
      buf = str[i]
      count++
      continue
    }

    if (count > 1)
      out.push(count)

    out.push(str[i])
    count = 1
    buf = ''

  }

  return out.join('')
}
