const repeatString = function(string, repeat) {
    let word = "";
    if (repeat>=0) {
        for (let i=0; i<repeat; i++) {
            word = word + string;
        }
        return word;
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = repeatString;
