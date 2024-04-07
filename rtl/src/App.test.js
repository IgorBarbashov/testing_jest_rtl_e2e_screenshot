import {render, screen} from '@testing-library/react';
import App from './App';

test('App component', () => {
    render(<App />);
    const helloWorldElement = screen.getByText(/hello world/i);
    const buttonElement = screen.getByRole('button');
    const inputElement = screen.getByPlaceholderText(/enter value/i);
    expect(helloWorldElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();

    expect(inputElement).toMatchSnapshot();

    screen.debug();
});