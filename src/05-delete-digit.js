/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const result = [];
  for (let i = 0; i < `${n}`.length; i++) {
    const arr = `${n}`.split('');
    arr.splice(arr.indexOf(`${n}`[i]), 1);
    result.push(+arr.join(''));
  }
  return result.sort((a, b) => b - a)[0];
}

module.exports = deleteDigit;
