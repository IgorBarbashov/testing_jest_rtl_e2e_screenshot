import React from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from "../pages/MainPage";
import AboutPage from "../pages/AboutPage";
import Posts from "../posts/Posts";
import PostDetailsPage from "../posts/PostDetailsPage";
import NotFoundPage from "../pages/NotFoundPage";

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/posts' element={<Posts />} />
            <Route path='/posts/:id' element={<PostDetailsPage />} />
            <Route path='*' element={<NotFoundPage />} />
        </Routes>
    );
};

export default AppRouter;