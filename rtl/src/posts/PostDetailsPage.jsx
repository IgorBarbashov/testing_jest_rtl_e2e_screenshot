import React from 'react';
import {useParams} from "react-router-dom";

const PostDetailsPage = () => {
    const {id} = useParams();

    return (
        <div data-testid="post-details-page">
            {`Post ${id} details`}
        </div>
    );
};

export default PostDetailsPage;