import {getCounterValue} from "./getCounterValue";

describe('Get counter value', () => {
    it('should return initial value if state is empty', () => {
        expect(getCounterValue({})).toBe(0);
    });

    it('should return filled state value', () => {
        expect(getCounterValue({
            counter: {value: 88}
        })).toBe(88);
    });
});