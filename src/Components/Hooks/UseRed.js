import React, { useReducer } from 'react'

const reducer = (state,action)=>{
  console.log(state,action);
  return state+1;
}
const UseRed = () => {
  const [state, dispatch]=useReducer(reducer,0)
  return (
    <div>
      <h2>{state}</h2>
      <button onClick={()=>dispatch({type:'started Incrementation'})}>Increment</button>
    </div>
  )
}

export default UseRed