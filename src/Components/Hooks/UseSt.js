
import React, {useState} from 'react';
function UseSt(){
    const [count,setCount]= useState(5);
    const Incrementer = ()=>setCount(count+5)
    return(
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={Incrementer}>Increment</button>
        </div>
    );
}
export default UseSt