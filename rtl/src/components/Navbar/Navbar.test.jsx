import React from "react";
import Navbar from "./Navbar";
import {renderWithRouter} from "../../tests/helpers/renderWithRouter";
import {screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe('Navbar component', () => {
    test('should render navbar links and go through main-link', async () => {
        renderWithRouter(<Navbar />, '/about');
        userEvent.click(screen.getByTestId('main-link'));
        expect(screen.getByTestId('main-page')).toBeInTheDocument();
    });

    test('should render navbar links and go through about-link', async () => {
        renderWithRouter(<Navbar />);
        userEvent.click(screen.getByTestId('about-link'));
        expect(screen.getByTestId('about-page')).toBeInTheDocument();
    });

    test('should render navbar links and go through posts-link', async () => {
        renderWithRouter(<Navbar />);
        userEvent.click(screen.getByTestId('posts-link'));
        expect(screen.getByTestId('posts-page')).toBeInTheDocument();
    });
});