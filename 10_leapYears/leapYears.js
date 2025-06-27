const leapYears = function(year) {
    // Take in a year and start creating the conditions
    if (year % 2 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true;
            }
            else {
                return false;
            }
        }
        
        else {
            return true;
        }
    }

    else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
