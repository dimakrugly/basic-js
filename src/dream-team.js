const { NotImplementedError } = require('../extensions/index.js');

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
function createDreamTeam(arr) {
if (Array.isArray(arr)){
let work = [];
    for (let i = 0; i<arr.length;i++){
        if (typeof arr[i] != "string") {
            continue;
        }
        work[i] = arr[i].trim();
    }
 const arrTeam = work.map((item) => {return item[0]});
 const team = arrTeam.sort().join('').toUpperCase().trim();

 return team;
}
return false;

}
module.exports = {
  createDreamTeam
};

