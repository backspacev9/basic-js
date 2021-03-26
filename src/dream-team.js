const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {

  if(members == false) return false;
  if(members == null) return false; 
  if(members == undefined) return false; 
  if(!Array.isArray(members)) return false; 
  str = '';
  arr = [];
  members.forEach(element => {
    if (typeof(element) == 'string'){
      arr.push(element.trim().toUpperCase());
    }
    
  });
  members = arr.sort();
  for(let i = 0;i < members.length;i++) {
    if (typeof(members[i]) == 'string'){
      str += members[i][0];
    }
  }
  return str.toUpperCase();
};
