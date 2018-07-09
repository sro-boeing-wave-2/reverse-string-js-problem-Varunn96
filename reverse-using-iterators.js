// The intent of this file is to reverse the string using iterators (for, foreach)
const reverse = (inputstring) => {
  let outputstring = '';
  for (let i = inputstring.length; i > 0; i - 1) {
    outputstring += inputstring[i - 1];
  }
  return outputstring;
};

module.exports = reverse;
