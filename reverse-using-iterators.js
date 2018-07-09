// The intent of this file is to reverse the string using iterators (for, foreach)
const reverse = (inputstring) => {
  var outputstring='';
  for(var i=inputstring.length;i>0;i--){
    outputstring+=inputstring[i-1];
  }
  return outputstring;
};

module.exports = reverse;
