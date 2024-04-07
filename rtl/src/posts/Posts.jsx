import React, {useEffect, useState} from 'react';
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
        <div>
            {posts.map(post => (
                <div
                    key={post.id}
                    data-testid="post-item"
                >
                    {post.title}
                </div>
            ))}
        </div>
    );
};

export default Posts;