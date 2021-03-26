const CustomError = require("../extensions/custom-error");
function isDate(value) {
  switch (typeof value) {
      case 'number':
          return true;
      case 'string':
          return !isNaN(Date.parse(value));
      case 'object':
          if (value instanceof Date) {
              return !isNaN(value.getTime());
          }
      default:
          return false;
  }
}
module.exports = function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  if (!isDate(date)) return 'Error'
  let m = date.getMonth();
  switch(m) {

  case 11:  
  case 0: 
  case 1:
    return 'winter';
    break;

  case 2:  
  case 3: 
  case 4:
    return 'spring';
    break;

  case 5:  
  case 6: 
  case 7:
    return 'summer';
    break;

  case 8:  
  case 9: 
  case 10:
    return 'autumn';
    break;

  default:
    break;
}
};
