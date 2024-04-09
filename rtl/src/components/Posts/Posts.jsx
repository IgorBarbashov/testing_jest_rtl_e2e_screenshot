import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";

const Posts = () => {
    const [posts, setPosts] = useState([]);

    const loadPosts = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(response.data);
    };

    useEffect(() => {
        loadPosts();
    }, []);

    return (
        <div data-testid="posts-page">
            {posts.map(post => (
                <div key={post.id}>
                    <Link
                        data-testid="post-item"
                        to={`/posts/${post.id}`}
                    >
                        {`${post.id} - ${post.title}`}
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default Posts;