const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(x) {
  if(!x) return false  
  if(typeof x !== "string") return false  
  if(!isFinite(x)) return false
  if(Number(x) <= 0) return false
  if(Number(x) >= 15) return false

  x= Number(x);
  let y = (Math.log(MODERN_ACTIVITY/x))/(0.693/HALF_LIFE_PERIOD); 
  
    return Math.ceil(y);
};
