const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str.length===0) {
    return '';
  }
 const arr = str.split('').reduce((acc, item) => {
   return (acc)
 },[]);

}

module.exports = {
  encodeLine
};

// const arr = str.split('');
// const resultFinal = arr.reduce((acc, el) => {
//   acc[el] = (acc[el] || 0) + 1;
//   return acc;
// }, {})
// console.log(resultFinal);
// let res = ''
// for (const [key, value] of Object.entries(resultFinal)) {
//   if(value === 1){
//     res = res.concat(key)
//   } else {
//     res = res.concat(`${value}${key}`)
//   }
// }
// console.log(res);
// return res;