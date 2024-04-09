import userEvent from "@testing-library/user-event";
import Counter from "./Counter";
import {renderWithRedux} from "../../tests/helpers/renderWithRedux";
import {renderTestApp} from "../../tests/helpers/renderTestApp";

describe('Counter Component', () => {
    test('render initial state value', async () => {
        const {getByTestId} = renderWithRedux(<Counter />, {
            counter: {value: 222}
        });

        const incrementBtn = getByTestId('counter-increment-button');
        expect(getByTestId('counter-value')).toHaveTextContent(/^222$/);
        userEvent.click(incrementBtn);
        expect(getByTestId('counter-value')).toHaveTextContent(/^223$/);
    });
});