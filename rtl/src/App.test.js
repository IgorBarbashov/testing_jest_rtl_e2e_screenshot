import {render, screen} from '@testing-library/react';
import App from './App';

describe('App component', () => {
    test('should render fields', () => {
        render(<App />);
        const helloWorldElement = screen.getByText(/hello world/i);
        const buttonElement = screen.getByRole('button');
        const inputElement = screen.getByPlaceholderText(/enter value/i);
        expect(helloWorldElement).toBeInTheDocument();
        expect(buttonElement).toBeInTheDocument();
        expect(inputElement).toBeInTheDocument();

        screen.debug();
    });

    test('should correctly render field input', () => {
        render(<App />);
        const inputElement = screen.getByPlaceholderText(/enter value/i);
        expect(inputElement).toMatchSnapshot();
    });

    test('negative test', () => {
        render(<App />);
        const inputElement = screen.queryByText(/try to find me/i);
        expect(inputElement).not.toBeInTheDocument();
        expect(inputElement).toBeNull();
    });
});