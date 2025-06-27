const sumAll = function(int1, int2) {
    let returnSum = 0;

    // Add some error checking code
    if (!Number.isInteger(int1) || !Number.isInteger(int2)) {
        return "ERROR";
    }
    else if (int1 < 0 || int2 < 0) {
        return "ERROR";
    }

    if (int1 <= int2) {
        for (let i = int1; i <= int2; i++) {
            returnSum += i;
        }
    }
    else {
        for (let i = int2; i <= int1; i++) {
            returnSum += i;
        }
    }

    return returnSum;
    
};

// Do not edit below this line
module.exports = sumAll;
