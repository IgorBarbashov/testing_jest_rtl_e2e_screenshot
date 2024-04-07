import React, {useState, useEffect} from 'react';

const App = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        const stid = setTimeout(() => {
            setData({});
        }, 100);
        return () => clearTimeout(stid);
    }, []);

    return (
        <div>
            {data && <div>data</div>}
            <h1>Hello world</h1>
            <button>click me</button>
            <input
                style={{color: 'red'}}
                type="text"
                placeholder="enter value"
            />
        </div>
    );
};

export default App;