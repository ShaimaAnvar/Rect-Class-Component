import React,{createContext} from 'react'
import ClassB from './ClassB'

const july= createContext();
const ClassA = () => {
  return (
    <july.Provider value={'shaimas'}>
        <ClassB/>
    </july.Provider>
    
  )
}

export default ClassA
export { july }
