const asyncFn = require('./asyncFn');

describe('asyncFn function', () => {
    it('should return correct value', async () => {
        const actual = await asyncFn(n => n + n, 1000);
        expect(actual).toBe(18)
    });
});