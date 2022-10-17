const { NotImplementedError } = require('../extensions/index.js');

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
  if (domains.length === 0) {
    return {}
  }

  const arr = domains.map((item) => {
    return item.split('.').reverse();
  })

  let resultArr = []
  for (let i = 0; i < arr.length; i++) {
    resultArr = [...resultArr, arr[i].reduce((acc, item, index) => {
      if (index === 0) {
        return [...acc, `.${item}`]
      }
      return [...acc, acc[index - 1] + `.${item}`]
    }, [])]
  }

  const obj = {};

  resultArr.map((item) => {
    obj[item] = 1
  })

  const resultFinal = [].concat(...resultArr).reduce((acc, el) => {
    acc[el] = (acc[el] || 0) + 1;
    return acc;
  }, {})

  return resultFinal
}
module.exports = {
  getDNSStats
};
