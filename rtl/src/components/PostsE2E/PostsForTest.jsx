import React, {useEffect, useState} from 'react';
import Post from "./Post";

const PostsForTest = () => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => {
                setTimeout(() => {
                    setPosts(json)
                    setIsLoading(false)
                }, 1000)
            })
    }, [])

    const onDelete = (id) => {
        setPosts(posts.filter(post => post.id !== id))
    }

    return (
        <div>
            {isLoading && <h1 id="posts-loading">Идет загрузка...</h1>}
            {posts.length && (
                <div id="posts-list">
                    {posts.map(post => (
                        <Post onDelete={onDelete} post={post} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default PostsForTest;
