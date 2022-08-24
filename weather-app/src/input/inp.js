import React, {useState, useRef, useMemo} from 'react';

import '../App.css';


function Input({setCitiesList}) {
    const [inputvalue, setInputValue] = useState();
    const [someValue, setSomeValue] = useState(0);
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

    const onSomeClick = () => {
        setSomeValue((someValue) => someValue + 1)
    }
    const oldInpValue  = useMemo(() =>`${inputvalue}_${Math.random()}`, [inputvalue])
    console.log(`---------------------------------------------------`)
    console.log(`inputValue`, inputvalue);
    console.log(`oldInpValue`, oldInpValue)
    console.log(`someValue`, someValue);
    return (
        <div className="InputWrap">
            <input className='Input' onClick={onSomeClick} onChange={handleonChange} value={inputvalue} ref={inpRef}/>
            <button className='Button'onClick={handleOnClick}>+</button>
        </div>
    );
}

export {Input};