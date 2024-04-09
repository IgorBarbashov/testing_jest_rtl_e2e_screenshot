import counterReducer, {decrement, increment} from "./counterReducer";

describe('Counter reducer', () => {
    test('increment', () => {
        expect(counterReducer({value: 10}, increment())).toEqual({value: 11});
    });

    test('decrement', () => {
        expect(counterReducer({value: 99}, decrement())).toEqual({value: 98});
    });

    test('un-initialized state', () => {
        expect(counterReducer(undefined, increment())).toEqual({value: 1});
        expect(counterReducer(undefined, decrement())).toEqual({value: -1});
    });
});