import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <Link to='/' data-testid='main-link'>main</Link>
            {' '}
            <Link to='/about' data-testid='about-link'>about</Link>
            {' '}
            <Link to='/posts' data-testid='posts-link'>posts</Link>
            {' '}
            <Link to='/hello-world' data-testid='hello-world'>hello world</Link>
        </>
    );
};

export default Navbar;