import React, {useEffect, useState} from 'react';
import Navbar from "./components/Navbar/Navbar";
import AppRouter from "./router/AppRouter";

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
                <Navbar />
                <AppRouter />
            </div>
        </>

    );
};

export default App;