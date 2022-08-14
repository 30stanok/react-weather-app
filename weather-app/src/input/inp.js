import React, {useState, useRef} from 'react';

import '../App.css';


function Input({setCitiesList}) {
    const [inputvalue, setInputValue] = useState();
    const inpRef = useRef(null);

    const handleonChange = (e) => {
        setInputValue(e.target.value);
        return 0;
    }

    const handleOnClick = (e) => {
        setCitiesList((currentArray) => [...currentArray, inputvalue]);
        inpRef.current.focus();
        setInputValue('');
    }

    return (
        <div className="InputWrap">
            <input className='Input' onChange={handleonChange} value={inputvalue} ref={inpRef}/>
            <button className='Button'onClick={handleOnClick}>+</button>
        </div>
    );
}

export {Input};