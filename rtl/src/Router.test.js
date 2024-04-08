import {render, screen, fireEvent} from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import App from './App';

describe('Router test', () => {
    test('should go through links', () => {
        render(<App />);
        const mainLink = screen.getByTestId('main-link');
        const aboutLink = screen.getByTestId('about-link');

        userEvent.click(aboutLink);
        expect(screen.getByTestId('about-page')).toBeInTheDocument();
        userEvent.click(mainLink);
        expect(screen.getByTestId('main-page')).toBeInTheDocument();
    });
});