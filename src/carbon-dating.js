import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY = 15
const HALF_LIFE_PERIOD = 5730
const K = 0.693 / HALF_LIFE_PERIOD
//const K = Math.log(2) / HALF_LIFE_PERIOD

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */

const isValidVal = (v) => (0 < v && v < MODERN_ACTIVITY)

export default function dateSample(sampleActivity) {
  const x = parseFloat(sampleActivity)

  if (typeof sampleActivity !== 'string')
    return false

  if (sampleActivity === '' || Number.isNaN(x))
    return false

  if (!isValidVal(x))
    return false

  return Math.ceil(Math.log(MODERN_ACTIVITY / x) / K)
}
