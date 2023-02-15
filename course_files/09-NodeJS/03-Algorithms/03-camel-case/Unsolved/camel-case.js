/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-syntax */
// Write code to create a function that accepts a string and returns the string in camelCase

const camelCase = function (str) {
  // OG String: let the force be with you
  // CamelCase: letTheForceBeWithYou

  // Break up the string into individual words
  const words = str.split(' ');
  const upperCasedWords = [];

  for (const word of words) {
    const upperCasedWord = word[0].toUpperCase() + word.substring(1);
    upperCasedWords.push(upperCasedWord);
  }

  let camelCasedString = upperCasedWords.join('');
  return camelCasedString[0].toLowerCase() + camelCasedString.substring(1);
};
