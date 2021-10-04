/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
export default function renameFiles(names) {
  let namesCounts = {}
  return names.reduce((acc, name, i) => {
    if (name in namesCounts) {
      namesCounts[name] = namesCounts[name] + 1 || 1
      acc.push(`${name}(${namesCounts[name]})`)
    } else {
      if (acc.includes(name)) {
        namesCounts[`${name}(${1})`] = 0
        acc.push(`${name}(${1})`)
      } else {
        namesCounts[name] = 0
        acc.push(name)
      }
    }
    return acc
  }, [])
}
