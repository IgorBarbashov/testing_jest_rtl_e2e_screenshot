const validateValue = require('./validateValue');

describe('validateValue function', () => {
    it('should return true for correct value', () => {
        expect(validateValue(50)).toBeTruthy();
    });

    it('should return false for value less 0', () => {
        expect(validateValue(-15)).toBeFalsy();
    });

    it('should return false for greater 100', () => {
        expect(validateValue(125)).toBeFalsy();
    });

    it('should return false for corner value 0', () => {
        expect(validateValue(0)).toBeTruthy();
    });

    it('should return false for corner value 100', () => {
        expect(validateValue(100)).toBeTruthy();
    });
});