const asyncFn = (cb, delay) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(cb(9));
        }, delay);
    });
};

module.exports = asyncFn;