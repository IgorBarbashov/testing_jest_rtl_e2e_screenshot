import {render} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {Provider} from "react-redux";
import Counter from "./Counter";
import {createReduxStore} from "../../srore/store";

describe('Counter Component', () => {
    test('render initial state value', async () => {
        const {getByTestId} = render(
            <Provider store={createReduxStore({counter: {value: 222}})}>
                <Counter />
            </Provider>
        );
        const incrementBtn = getByTestId('counter-increment-button');
        expect(getByTestId('counter-value')).toHaveTextContent(/^222$/);
        userEvent.click(incrementBtn);
        expect(getByTestId('counter-value')).toHaveTextContent(/^223$/);
    });
});