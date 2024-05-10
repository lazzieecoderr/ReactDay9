import React, { useContext } from 'react';
import { mycontext } from '../App';

const ComC = () => {
    const[ContextValue,setContextValue]=useContext(mycontext)
    const handleSubmit =()=>{
        setContextValue(val=>val-1)
    }
    return (
        <div>
            <h1>Component C</h1>
            <h1>the value :{ContextValue}</h1>
            <button onClick={handleSubmit}>Click</button>
        </div>
    );
};

export default ComC;