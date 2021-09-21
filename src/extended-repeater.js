/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  let res = ''
  let s = str === null ? 'null' : `${str}`

  let repeatTimes = options.repeatTimes ? options.repeatTimes : 0
  if (!!str && !repeatTimes) repeatTimes = 1
  let separator = options.separator ? options.separator : '+'
  if (repeatTimes === 1) separator = ''

  let addition = options.addition
  if (addition === null) addition = 'null'
  addition = typeof addition !== 'undefined' ? `${addition}` : ''

  let additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 0
  if (!!addition && !additionRepeatTimes) additionRepeatTimes = 1

  let additionSeparator = options.additionSeparator ? options.additionSeparator : '|'
  if (additionRepeatTimes === 1) additionSeparator = ''

  if (repeatTimes > 0) {
    for (let i = 0; i < repeatTimes; i++) {
      res += i === 0 ? s : separator + s
      if (additionRepeatTimes > 0) {
        for (let j = 0; j < additionRepeatTimes; j++) {
          res += j === 0 ? addition : additionSeparator + addition
        }
      }
    }
  }

  return res
}
