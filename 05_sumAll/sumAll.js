const sumAll = function(initial, final) {
    if ((initial >= 0 && final >= 0) && (typeof initial === "number" && typeof final === "number")) {
        let total = 0;
        if (initial <= final) {
            for (i=initial; i<=final; i++) {
                total = total + i;
            }
            return total;
        } else {
            for (i=final; i<=initial; i++) {
                total = total + i;
            }
            return total;
        }
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
