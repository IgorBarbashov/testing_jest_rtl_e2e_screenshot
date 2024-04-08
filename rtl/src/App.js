import React from 'react';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import MainPage from "./pages/MainPage";

const App = () => {
    return (
        <BrowserRouter>
            <Link to='/' data-testid='main-link'>main</Link>
            {' '}
            <Link to='/about' data-testid='about-link'>about</Link>
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/about' element={<AboutPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;

// import React, {useState, useEffect} from 'react';
//
// const App = () => {
//     const [data, setData] = useState(null);
//     const [toggle, setToggle] = useState(false);
//     const [value, setValue] = useState('');
//
//     const onClick = () => setToggle(prev => !prev);
//     const onChange = (e) => setValue(e.target.value);
//
//     useEffect(() => {
//         const stid = setTimeout(() => {
//             setData({});
//         }, 100);
//         return () => clearTimeout(stid);
//     }, []);
//
//     return (
//         <div>
//             {<h2 data-testid="input-header">{value}</h2>}
//             {data && <div>data</div>}
//             {toggle && <div data-testid="toggle-elem">toggle</div>}
//             <h1>Hello world</h1>
//             <button data-testid="toggle-btn" onClick={onClick}>click me</button>
//             <input
//                 style={{color: 'red'}}
//                 type="text"
//                 placeholder="enter value"
//                 onChange={onChange}
//             />
//         </div>
//     );
// };
//
// export default App;