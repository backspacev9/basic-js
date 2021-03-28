const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let i = 0;
    for (let element of arr) {
        if (Array.isArray(element)){
            i += Math.max(i,this.calculateDepth(element));
        }
    }
    return i+1;
    }
  }
