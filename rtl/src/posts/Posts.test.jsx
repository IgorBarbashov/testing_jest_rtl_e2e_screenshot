import {render, screen} from '@testing-library/react';
import Posts from "./Posts";
import axios from "axios";

jest.mock('axios');

describe('Posts component', () => {
    let mockResponse;

    beforeEach(() => {
        mockResponse = {
            data: [
                { "id": 1, "title": "sunt aut facere repellat" },
                { "id": 2, "title": "qui est esse" },
                { "id": 3, "title": "ea molestias quasi" },
                { "id": 4, "title": "eum et est occaecati" }
            ]
        };
    });

    afterEach(() => {
        jest.clearAllMocks()
    });

    test('should render posts list', async () => {
        axios.get.mockReturnValue(mockResponse);
        render(<Posts />);
        const posts = await screen.findAllByTestId("post-item");
        expect(posts.length).toBe(4);
        expect(axios.get).toBeCalledTimes(1);
        screen.debug();
    });
});