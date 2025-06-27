const repeatString = function(string, num) {
    // Return "ERROR" if we get an invalid input
    if (num < 0) {
        return "ERROR"
    }

    // Continue as normal
    let returnString = ""
    for (let i = 0; i < num; i++) {
        returnString += string
    }
    return returnString
};

// Do not edit below this line
module.exports = repeatString;
