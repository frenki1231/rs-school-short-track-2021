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
function getDNSStats(domains) {
  const result = {};
  const arr = domains.map((str) => str.split('.'));
  const newArr = arr.map((str) => str.map((value, index, strArr) => {
    const newStr = strArr.reduce((sum, a, indexA) => {
      let suz;
      if (index <= indexA) {
        suz = `${sum}${a}/`;
        return suz;
      }
      return '';
    }, '');
    return newStr.split('/').reverse().join('.');
  }));
  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < newArr[i].length; j++) {
      if (Object.prototype.hasOwnProperty.call(result, newArr[i][j])) {
        result[newArr[i][j]]++;
      } else {
        result[newArr[i][j]] = 1;
      }
    }
  }
  return result;
}

module.exports = getDNSStats;
