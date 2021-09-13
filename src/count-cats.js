import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats(matrix) {
  if (!matrix || matrix.length === 0)
    return 0
  return matrix.reduce((acc, row) => acc.concat(row)).reduce((acc, val) => val === '^^' ? ++acc : acc, 0)
}
