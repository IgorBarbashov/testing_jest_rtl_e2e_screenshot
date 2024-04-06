const mapArrOfIntegersToString = require('./mapArrOfIntegersToString');

describe('mapArrOfIntegersToString function', () => {
    it('should return original array of numbers', () => {
        const given = [5, 7, 8];
        const expected = ['5', '7', '8'];
        expect(mapArrOfIntegersToString(given)).toEqual(expected);
    });

    it('should don\'t handle decimal numbers', () => {
        const given = [5, 7.7, 8];
        const expected = ['5', '8'];
        expect(mapArrOfIntegersToString(given)).toEqual(expected);
    });

    it('should don\'t handle not numbers', () => {
        const given = [undefined, 7.7, 'fgh', NaN, 9];
        const expected = ['9'];
        expect(mapArrOfIntegersToString(given)).toEqual(expected);
    });

    it('should correctly handle empty array', () => {
        const given = [];
        const expected = [];
        expect(mapArrOfIntegersToString(given)).toEqual(expected);
    });

    it('should correctly handle array with negative numbers', () => {
        const given = [1, -6, -5];
        const expected = ['1', '-6', '-5'];
        expect(mapArrOfIntegersToString(given)).toEqual(expected);
    });

    it('negative test', () => {
        const given = [1, -6, -5];
        const expected = ['1', '-6', '5'];
        expect(mapArrOfIntegersToString(given)).not.toEqual(expected);
    });
});