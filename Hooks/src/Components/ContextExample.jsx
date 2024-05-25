import React, { createContext, useContext } from 'react'
const userContext = createContext()
const ContextExample = (props) => {
  return (
    <div>
      <h3>First Component</h3>
      <h3>Name is -- {props.name}</h3>
      <userContext.Provider value={props.name}>
      <Compnent2 />
      </userContext.Provider>
      
      
    </div>
  )
}

const Compnent2 = ()=>{
    return (
        <div>
            <h3>Second component </h3>
            <Compnent3 />
        </div>
    )
}
const Compnent3 = ()=>{
    return (
        <div>
            <h3>Third component </h3>
            <Compnent4  />
        </div>
    )
}
const Compnent4 = ()=>{
    let finalName = useContext(userContext)
    return (
        <div>
            <h3>Fourth component </h3>
            <h4>FInal Name is - {finalName}</h4>
        </div>
    )
}

export default ContextExample
