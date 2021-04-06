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
function renameFiles(names) {
  const result = [];
  for (let i = 0; i < names.length; i++) {
    let n = 1;
    let name = names[i];
    if (result.includes(name)) {
      name += `(${n})`;
    }
    while (result.includes(name)) {
      let newName;
      if (n < 10) {
        newName = name.split('').splice(name.length - 6, 3).join('');
      } else {
        newName = name.split('').splice(name.length - 7, 4).join('');
      }
      n++;
      newName += `(${n})`;
      name = newName;
    }
    result.push(name);
  }
  return result;
}

module.exports = renameFiles;
