//given a normal string of words and turn it into a percent-encoded string by replacing all whitespace with %20.

//we will convert the stringes into an array, run splice method to add %20 to spaces then convert array back to string using join method.
//we can't use splice on strings as strings are immutable.

const urlEncode = function (text) {
  let trimString = text.trim(); //targetting cases with white spaces at the before or after text in a string

  let stringArray = trimString.split(''); //split() function to create an array from string using empty spaces as separator
  console.log(stringArray);
  for (let i = 0; i < stringArray.length; i++) {
    if (stringArray[i] === ' ') {
      stringArray.splice(i, 1, '%20'); //changing the content of the array by replacing white spaces with %20
    }
  }
  console.log(stringArray);
  return stringArray.join(''); //join() function concatenating string elements from the array, returning a new string
};

console.log(urlEncode('Lighthouse Labs'));
// console.log(urlEncode(" Lighthouse Labs "));
// console.log(urlEncode("blue is greener than purple for sure"));
