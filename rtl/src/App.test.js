import {render, screen, fireEvent} from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import {MemoryRouter} from "react-router-dom";
import App from './App';
import {renderTestApp} from "./tests/helpers/renderTestApp";
import Navbar from "./components/Navbar/Navbar";
import React from "react";

describe('App component', () => {
    test('should render fields', () => {
        renderTestApp(<App />);
        const testAppElement = screen.getByText(/test app/i);
        const buttonElement = screen.getByTestId('toggle-btn');
        const inputElement = screen.getByPlaceholderText(/enter value/i);
        expect(testAppElement).toBeInTheDocument();
        expect(buttonElement).toBeInTheDocument();
        expect(inputElement).toBeInTheDocument();

        // screen.debug();
    });

    test('should correctly render field input', () => {
        renderTestApp(<App />);
        const inputElement = screen.getByPlaceholderText(/enter value/i);
        expect(inputElement).toMatchSnapshot();
    });

    test('negative test', () => {
        renderTestApp(<App />);
        const inputElement = screen.queryByText(/try to find me/i);
        expect(inputElement).not.toBeInTheDocument();
        expect(inputElement).toBeNull();
    });

    test('async test', async () => {
        renderTestApp(<App />);
        // screen.debug();
        const inputElement = await screen.findByText(/data/i);
        expect(inputElement).toBeInTheDocument();
        expect(inputElement).toHaveStyle({color: 'red;'});
        // screen.debug();
    });

    test('click event', async () => {
        renderTestApp(<App />);
        const btn = screen.getByTestId("toggle-btn");
        expect(screen.queryByTestId("toggle-elem")).toBeNull();
        fireEvent.click(btn);
        expect(screen.queryByTestId("toggle-elem")).toBeInTheDocument();
        fireEvent.click(btn);
        expect(screen.queryByTestId("toggle-elem")).toBeNull();
    });

    test('change event', async () => {
        renderTestApp(<App />);
        const inputElement = screen.getByPlaceholderText(/enter value/i);
        expect(screen.queryByTestId("input-header")).toContainHTML('');
        expect(inputElement.value).toBe('');
        fireEvent.input(inputElement, {target: {value: 'usder'}});
        expect(screen.queryByTestId("input-header")).toContainHTML('usder');
        expect(inputElement.value).toBe('usder');
        fireEvent.change(inputElement, {target: {value: 'iwuerh'}});
        expect(screen.queryByTestId("input-header")).toContainHTML('iwuerh');
        expect(inputElement.value).toBe('iwuerh');
    });

    test('userEvent tests', async () => {
        renderTestApp(<App />);
        const inputElement = screen.getByPlaceholderText(/enter value/i);
        expect(screen.queryByTestId("input-header")).toContainHTML('');
        expect(inputElement.value).toBe('');
        userEvent.type(inputElement, '76678678');
        expect(screen.queryByTestId("input-header")).toContainHTML('76678678');
        expect(inputElement.value).toBe('76678678');
    });
});