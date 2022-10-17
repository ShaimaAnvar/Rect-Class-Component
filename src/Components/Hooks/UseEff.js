

import React, {useState,useEffect} from 'react'

const UseEffect = () => {
    const [count,setCount]= useState(5);
    useEffect(
        ()=>{console.log('useeffect hook');}
    );
    const Incrementer = ()=>setCount(count+5)
    return(
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={Incrementer}>Increment</button>
        </div>
    );
}
export default UseEffect