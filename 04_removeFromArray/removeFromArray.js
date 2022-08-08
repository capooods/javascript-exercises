const removeFromArray = function(givenArray, numRemove) {
    for (let i=1; i<=arguments.length+1; i++) {
        let index = givenArray.indexOf(arguments[i]);
        if (index > -1) {
            givenArray.splice(index, 1);
        }
    }
    
    return givenArray;
};

// Do not edit below this line
module.exports = removeFromArray;
