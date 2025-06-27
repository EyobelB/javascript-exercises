const palindromes = function (startingString) {
    returnString = "";
    for (let i = startingString.length - 1; i >= 0; i--) {
        returnString += startingString[i];
    } 
    if (startingString === returnString) {
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = palindromes;
