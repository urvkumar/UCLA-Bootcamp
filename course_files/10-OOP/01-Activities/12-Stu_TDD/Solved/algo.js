function Algo() {}

Algo.prototype.reverse = function(str) {
    // "Hello World!""
    // Reverse: "!dlroW olleH"

    let reverseString = '';
    for(var i = str.length - 1; i >= 0; i--) {
        reverseString += str[i];
    }
    return reverseString;
};

Algo.prototype.isPalindrome = function(str) {};

Algo.prototype.capitalize = function(str) {};

module.exports = Algo;
