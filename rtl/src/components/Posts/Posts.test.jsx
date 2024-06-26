import {screen} from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import React from "react";
import axios from "axios";
import Posts from "./Posts";
import {renderTestApp} from "../../tests/helpers/renderTestApp";

jest.mock('axios');

describe('Posts component', () => {
    let mockResponse;

    beforeEach(() => {
        mockResponse = {
            data: [
                {"id": 1, "title": "sunt aut facere repellat"},
                {"id": 2, "title": "qui est esse"},
                {"id": 3, "title": "ea molestias quasi"},
                {"id": 4, "title": "eum et est occaecati"}
            ]
        };

        axios.get.mockReturnValue(mockResponse);
    });

    afterEach(() => {
        jest.clearAllMocks()
    });

    test('should render Posts list', async () => {
        renderTestApp(<Posts />);
        const posts = await screen.findAllByTestId("post-item");
        expect(posts.length).toBe(4);
        expect(axios.get).toBeCalledTimes(1);
        // screen.debug();
    });

    test('should render post details page', async () => {
        renderTestApp(null, {
            initialRoute: '/posts'
        });
        const posts = await screen.findAllByTestId("post-item");
        userEvent.click(posts[0]);
        expect(screen.getByTestId('post-details-page')).toBeInTheDocument();
    });
});