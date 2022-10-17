import React,{ useContext } from 'react'
import { july } from './ClassA'

const ClassC = () => {
    const name=useContext(july);
  return (
    <div>
        <h1>Hello {name} </h1>
    </div>
  )
}

export default ClassC