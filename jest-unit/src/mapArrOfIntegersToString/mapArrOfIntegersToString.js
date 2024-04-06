const mapArrOfIntegersToString = (arr) => {
    return arr.filter(Number.isInteger).map(String);
};

module.exports = mapArrOfIntegersToString;