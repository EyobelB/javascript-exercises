const reverseString = function(inputString) {
    stringToBuild = ""
    for (let i = 0; i < inputString.length; i++) {
        stringToBuild += inputString[inputString.length - 1 - i]
    }
    return stringToBuild
};

// Do not edit below this line
module.exports = reverseString;
