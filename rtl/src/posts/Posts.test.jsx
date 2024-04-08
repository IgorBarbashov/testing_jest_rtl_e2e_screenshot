import {render, screen} from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import {MemoryRouter, Route, Routes} from "react-router-dom";
import axios from "axios";
import Posts from "./Posts";
import PostDetailsPage from "./PostDetailsPage";
import React from "react";

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

    test('should render posts list', async () => {
        render(<MemoryRouter><Posts /></MemoryRouter>);
        const posts = await screen.findAllByTestId("post-item");
        expect(posts.length).toBe(4);
        expect(axios.get).toBeCalledTimes(1);
        screen.debug();
    });

    test('should render post details page', async () => {
        render(
            <MemoryRouter initialEntries={['/posts']}>
                <Routes>
                    <Route path='/posts' element={<Posts />} />
                    <Route path='/posts/:id' element={<PostDetailsPage />} />
                </Routes>
            </MemoryRouter>
        );

        const posts = await screen.findAllByTestId("post-item");
        userEvent.click(posts[0]);
        expect(screen.getByTestId('post-details-page')).toBeInTheDocument();
    });
});