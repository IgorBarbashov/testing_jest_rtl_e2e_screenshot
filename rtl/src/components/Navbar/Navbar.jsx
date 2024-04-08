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

        </>
    );
};

export default Navbar;