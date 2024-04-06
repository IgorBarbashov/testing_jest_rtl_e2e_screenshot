const square = require('./square');

describe('square function', () => {
    it('should return original array of numbers', () => {
        expect(square(2)).toBe(4);
        expect(square(2)).toBeLessThan(7);
        expect(square(2)).toBeGreaterThan(-1);
        expect(square(2)).not.toBeUndefined();
    });
});