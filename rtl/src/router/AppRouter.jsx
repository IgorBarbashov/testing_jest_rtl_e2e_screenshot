import React from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from "../pages/MainPage";
import AboutPage from "../pages/AboutPage";
import Posts from "../components/Posts/Posts";
import PostDetailsPage from "../components/Posts/PostDetailsPage";
import NotFoundPage from "../pages/NotFoundPage";
import HelloWorld from "../components/HelloWorld/HelloWorld";
import PostsForTest from "../components/PostsE2E/PostsForTest";

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/hello-world' element={<HelloWorld />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/posts' element={<Posts />} />
            <Route path='/posts-test' element={<PostsForTest />} />
            <Route path='/posts/:id' element={<PostDetailsPage />} />
            <Route path='*' element={<NotFoundPage />} />
        </Routes>
    );
};

export default AppRouter;