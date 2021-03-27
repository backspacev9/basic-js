const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [], 
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (arguments.length == 0) {
      this.chain.push(' ');
    } else if (value === null) {
        this.chain.push('null');
      } 
      else {
        this.chain.push(value);
      }
    return this;
  },
  removeLink(position) {
    if (position < 1 || 
        position > this.chain.length ||
        typeof(position) !== 'number' || 
        position !==parseInt(position)) {
        this.chain = [];
        throw new Error('Error');
    }
    this.chain.splice(position-1,1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    s = '( ' + this.chain.join(' )~~( ') + ' )';
    this.chain = [];
    return s;
  }

};

module.exports = chainMaker;
