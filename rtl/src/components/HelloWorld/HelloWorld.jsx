import React, {useState} from 'react';

const HelloWorldPage = () => {
    const [value, setValue] = useState('');
    const [visible, setVisible] = useState(false);

    const onChange = (e) => {
        setValue(e.target.value);
    }

    const onClick = () => {
        value === 'hello' && setVisible(prev => !prev);
    }

    return (
        <div>
            <input id="search" type="text" value={value} onChange={onChange} />
            <button id="toggle" onClick={onClick}>Toggle</button>
            {visible && <h1 id="hello">HELLO WORLD</h1>}

        </div>
    );
};

export default HelloWorldPage;