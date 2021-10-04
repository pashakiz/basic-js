/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  return domains.reduce((acc, item, i) => {
  let vArr = item.split('.')
  let val = vArr.reverse().join('.')
  acc['.'+val] = acc['.'+val] + 1 || 1

  while (vArr.length > 1) {
    vArr.pop()
    val = vArr.join('.')
    acc['.'+val] = acc['.'+val] + 1 || 1
  }

  return acc
  }, {})
}
