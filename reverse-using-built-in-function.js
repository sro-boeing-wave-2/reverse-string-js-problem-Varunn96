// The intent of this file is to reverse
// the string using built in functions.
const reverse = (inputstring) => {
  const splitstring = inputstring.split('');
  const revstring = splitstring.reverse();
  const outputstring = revstring.join('');
  return outputstring;
};

module.exports = reverse;
