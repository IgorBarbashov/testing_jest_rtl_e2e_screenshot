import userEvent from "@testing-library/user-event";
import {renderTestApp} from "../../tests/helpers/renderTestApp";

describe('Counter Component', () => {
    test('render initial state value', async () => {
        const {getByTestId} = renderTestApp(null, {
            initialState: {
                counter: {value: 222}
            },
            initialRoute: '/'
        });

        const incrementBtn = getByTestId('counter-increment-button');
        expect(getByTestId('counter-value')).toHaveTextContent(/^222$/);
        userEvent.click(incrementBtn);
        expect(getByTestId('counter-value')).toHaveTextContent(/^223$/);
    });
});