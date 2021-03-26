const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed ) {
  let count = 2 ** disksNumber - 1;
  let sec = Math.floor(count * 3600 / turnsSpeed);
  let obj = {'turns': count, 'seconds':sec} 
  return obj;
};
