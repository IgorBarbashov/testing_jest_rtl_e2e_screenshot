import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCounterValue} from "../../srore/selectors/getCounterValue/getCounterValue";
import {decrement, increment} from "../../srore/reducers/counterReducer";

const CounterTest = () => {
    const dispatch = useDispatch();
    const value = useSelector(getCounterValue);

    const onIncrement = () => {
        dispatch(increment());
    };

    const onDecrement = () => {
        dispatch(decrement());
    };

    return (
        <div>
            <h1>{value}</h1>
            <button onClick={onIncrement}>Increment</button>
            <button onClick={onDecrement}>Decrement</button>
        </div>
    );
};

export default CounterTest;