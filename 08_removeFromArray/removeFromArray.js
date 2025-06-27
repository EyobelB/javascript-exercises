const removeFromArray = function(array, ...numsToRemove) {
    for (let num of numsToRemove) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === num) {
                array.splice(i, 1);
                i--;
            }
        }
    }
    console.log(array);
    return array;

};

// Do not edit below this line
module.exports = removeFromArray;
