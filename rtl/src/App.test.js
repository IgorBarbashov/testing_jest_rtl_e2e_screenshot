import {render, screen} from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
    render(<App />);
    const helloWorldElement = screen.getByText(/hello world/i);
    const buttonElement = screen.getByRole('button');
    const inputElement = screen.getByPlaceholderText(/enter value/i);
    expect(helloWorldElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();

    screen.debug();
});