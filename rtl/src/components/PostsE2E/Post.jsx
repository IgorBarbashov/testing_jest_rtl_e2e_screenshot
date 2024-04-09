import React from 'react';

const Post = ({post, onDelete}) => {
    return (
        <div>
            {post.title}
            <button id="post-delete" onClick={() => onDelete(post.id)}>delete</button>
        </div>
    );
};

export default Post;
