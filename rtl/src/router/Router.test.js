import {render, screen} from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import {MemoryRouter} from "react-router-dom";
import App from '../App';
import {Provider} from "react-redux";
import {createReduxStore} from "../store/store";

describe('Router test', () => {
    test('should go through links', () => {
        render(
            <Provider store={createReduxStore()}>
                <MemoryRouter initialEntries={['/']}>
                    <App />
                </MemoryRouter>
            </Provider>
        );

        const mainLink = screen.getByTestId('main-link');
        const aboutLink = screen.getByTestId('about-link');

        userEvent.click(aboutLink);
        expect(screen.getByTestId('about-page')).toBeInTheDocument();
        userEvent.click(mainLink);
        expect(screen.getByTestId('main-page')).toBeInTheDocument();
    });

    test('should go through not exist link', () => {
        render(
            <MemoryRouter initialEntries={['/not-exist-link']}>
                <App />
            </MemoryRouter>
        );
        expect(screen.getByTestId('not-found-page')).toBeInTheDocument();
    });
});