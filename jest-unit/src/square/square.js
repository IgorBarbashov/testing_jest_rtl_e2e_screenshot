const square = (n) => {
    if (n === 1) {
        return n;
    }

    return Math.pow(n, 2);
};

module.exports = square;