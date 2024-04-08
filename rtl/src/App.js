import React, {useEffect, useState} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import MainPage from "./pages/MainPage";
import NotFoundPage from "./pages/NotFoundPage";
import Posts from "./posts/Posts";
import PostDetailsPage from "./posts/PostDetailsPage";

const App = () => {
    const [data, setData] = useState(null);
    const [toggle, setToggle] = useState(false);
    const [value, setValue] = useState('');

    const onClick = () => setToggle(prev => !prev);
    const onChange = (e) => setValue(e.target.value);

    useEffect(() => {
        const stid = setTimeout(() => {
            setData({});
        }, 100);
        return () => clearTimeout(stid);
    }, []);

    return (
        <>
            <div>
                {<h2 data-testid="input-header">{value}</h2>}
                {data && <div>data</div>}
                {toggle && <div data-testid="toggle-elem">toggle</div>}
                <h1>Hello world</h1>
                <button data-testid="toggle-btn" onClick={onClick}>click me</button>
                <input
                    style={{color: 'red'}}
                    type="text"
                    placeholder="enter value"
                    onChange={onChange}
                />
            </div>
            <div>
                <Link to='/' data-testid='main-link'>main</Link>
                {' '}
                <Link to='/about' data-testid='about-link'>about</Link>
                {' '}
                <Link to='/posts' data-testid='posts-link'>posts</Link>
                <Routes>
                    <Route path='/' element={<MainPage />} />
                    <Route path='/about' element={<AboutPage />} />
                    <Route path='/posts' element={<Posts />} />
                    <Route path='/posts/:id' element={<PostDetailsPage />} />
                    <Route path='*' element={<NotFoundPage />} />
                </Routes>
            </div>
        </>

    );
};

export default App;