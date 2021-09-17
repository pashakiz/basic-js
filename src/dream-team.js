import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  if (!Array.isArray(members) || members.length <= 0)
    return false

  let letters = members.reduce((acc, name, i) => {
    if (typeof name === 'string')
      acc.push(name.trim().slice(0,1).toUpperCase())
    return acc
  }, [])

  return letters.sort().join('')
}
