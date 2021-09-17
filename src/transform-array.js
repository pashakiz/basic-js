import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
export default function transform(arr) {
  if (!Array.isArray(arr))
    throw Error("'arr' parameter must be an instance of the Array!")

  let len = arr.length

  const DISCARD_NEXT = '--discard-next'
  const DISCARD_PREV = '--discard-prev'
  const DOUBLE_NEXT  = '--double-next'
  const DOUBLE_PREV  = '--double-prev'

  let out = []

  for (let i = 0; i < len; i++) {
    switch (arr[i]) {
      case DOUBLE_NEXT:
        if (i + 1 < len)
          out.push(arr[i+1])
        break

      case DOUBLE_PREV:
        if (out.length > 0)
          out.push(arr[i-1])
        break

      case DISCARD_NEXT:
        if (arr[i+2] == DOUBLE_PREV || arr[i+2] == DISCARD_PREV)
          i++
        i++
        break

      case DISCARD_PREV:
        if (out.length > 0)
          out.pop()
        break

      default:
        out.push(arr[i])
    }
  }

  return out
}
