import React, {useState, useMemo} from 'react'

const UseMem = () => {
    const [add, setAdd] = useState(0);
    const [sub, setSub] = useState(50);
    const incementation = ()=>setAdd(add+1)
    //const decrementation = ()=>setSub(sub-1)
    const mul = useMemo(function multiply(){
        console.log('i am running in console');
        return add*10;
    },[add])

  return (
    <div>
        <h1>Math</h1>
        {mul}
        <p>{add}</p>
        <button onClick={incementation}>Incrememt</button>
        <p>{sub}</p>
        <button onClick={()=>setSub(sub-1)}>Decrememt</button>
    </div>
  )
}

export default UseMem