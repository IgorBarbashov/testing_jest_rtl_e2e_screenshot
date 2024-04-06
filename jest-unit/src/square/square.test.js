const square = require('./square');

describe('Math.pow in the square function', () => {

    it('should\'t be called with argument = 1 ', () => {
        const spyMathPow = jest.spyOn(Math, 'pow');
        square(1);
        expect(spyMathPow).not.toBeCalled();
    });

    it('should be called with argument != 1', () => {
        const spyMathPow = jest.spyOn(Math, 'pow');
        square(2);
        expect(spyMathPow).toBeCalled();
    });

    it('should be called once with argument = 1', () => {
        const spyMathPow = jest.spyOn(Math, 'pow');
        square(2);
        expect(spyMathPow).toBeCalledTimes(1);
    });
});