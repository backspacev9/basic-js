const CustomError = require("../extensions/custom-error");

module.exports = function repeater(/* str, options */) {
  let str2='';

    for (let i = 0; i <options.additionRepeatTimes; i++ ){
        str2 += options.addition +options.additionSeparator;
    }
   str2 = str2.slice(0,str2.length-options.additionSeparator.length)
    for (let i = 0; i <options.repeatTimes; i++ ){
        str = str+ str2.substr(0) + String(options.separator);
    }
    str  = str.slice(0,str.length-options.separator.length)

    for (const [key, value] of Object.entries(options)) {
      console.log(key+' : '+ value);
    }

    return str;
};
  