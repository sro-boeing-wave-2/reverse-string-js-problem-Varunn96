// The intent of this file is to reverse
// the string using built in functions.
const reverse = (inputstring) => {
  var splitstring=inputstring.split('');
  var revstring=splitstring.reverse();
  var outputstring=revstring.join('');
  return outputstring;
};

module.exports = reverse;
