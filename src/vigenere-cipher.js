const CustomError = require("../extensions/custom-error");
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase().split('');
class VigenereCipheringMachine {
  constructor(status) {
    this.status = status;
  }

  charPositions() {

  }

  encrypt(message, key) {
    let charPos = {};
    message = message.toLowerCase().split('');
    key = key.toLowerCase().split('');
    let str = [];
    let KeyStr = [];
    let resCode = [];
    let resStr = [];

    for (let i = 0; i < message.length; i++) {
      if (/[a-z]/.test(message[i])) {
        str.push(message[i]);
      } else {
        charPos[i] += message[i];
        charPos[i] = charPos[i].substring(charPos[i].length - 1);
      }
    }

    let j = 0;
    let j2 = 1;
    for (let i = 0; i < str.length; i++) {
      if (i == key.length * j2) {
        j = 0;
        j2 = j2 + 1;
      } else { }
      KeyStr.push(key[j]);
      j = j + 1;

    }

    for (let i = 0; i < str.length; i++) {
      resCode.push((alphabet.indexOf(str[i]) + alphabet.indexOf(KeyStr[i])) % 26);
      resStr.push(alphabet[resCode[i]]);
      // console.log(str[i]+' : '+KeyStr[i]+' : '+resCode[i]);
    }

    console.log(str + '\n' + KeyStr + '\n' + resCode + '\n' + key.length);

    for (const [key, value] of Object.entries(charPos)) {
      resStr.splice(key, 0, value);
    }

    if (this.status == false) {
      return resStr = resStr.reverse().join('').toUpperCase();
    } else { return resStr = resStr.join('').toUpperCase(); }

  }

  decrypt(message, key) {
    let charPos = {};
    message = message.toLowerCase().split('');
    key = key.toLowerCase().split('');
    let str = [];
    let KeyStr = [];
    let resCode = [];
    let resStr = [];

    for (let i = 0; i < message.length; i++) {
      if (/[a-z]/.test(message[i])) {
        str.push(message[i]);
      } else {
        charPos[i] += message[i];
        charPos[i] = charPos[i].substring(charPos[i].length - 1);
      }
    }

    let j = 0;
    let j2 = 1;
    for (let i = 0; i < str.length; i++) {
      if (i == key.length * j2) {
        j = 0;
        j2 = j2+1;
      }
      KeyStr[i] = key[j];
      j = j + 1;
     

      resCode.push(((((alphabet.indexOf(str[i]) - alphabet.indexOf(KeyStr[i])) % 26) + 26) % 26));
      resStr.push(alphabet[resCode[i]]);
    }

    for (const [key, value] of Object.entries(charPos)) {

      resStr.splice(key, 0, value);
    }

    if (this.status == false) {
      return resStr = resStr.reverse().join('').toUpperCase();
    } else { return resStr = resStr.join('').toUpperCase(); }

  }
}

module.exports = VigenereCipheringMachine;
