// The intent of this file is to reverse the string using iterators (for, foreach)
const reverse = (inputstring) => {
  let outputstring = '';
  for (let i = inputstring.length - 1; i >= 0; i -= 1) {
    outputstring += inputstring[i];
  }
  return outputstring;
};

module.exports = reverse;
