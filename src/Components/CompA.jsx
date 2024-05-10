import React, { useContext } from 'react';
import { mycontext } from '../App';
import CompB from './CompB';

const CompA = () => {
    const[ContextValue,setContextValue]=useContext(mycontext)
    const handleSubmit =()=>{
        setContextValue(val=>val+1)
    }
    return (
        <div>
            <h1>Component A</h1>
            <h1>the value :{ContextValue}</h1>
            <button onClick={handleSubmit}>Click</button>
            <CompB />
        </div>
    );
};

export default CompA;