import React from 'react'

const Compnent1 = (props) => {
  return (
    <div>
      <h3>Username is - {props.name}</h3>
      <Compnent2 name={props.name}/>
    </div>
  )
}
const Compnent2 = (props)=>{
    return (
        <div>
            <h3>Second component </h3>
            <Compnent3 name={props.name}/>
        </div>
    )
}
const Compnent3 = (props)=>{
    return (
        <div>
            <h3>Third component </h3>
            <Compnent4 name={props.name} />
        </div>
    )
}
const Compnent4 = (props)=>{
    return (
        <div>
            <h3>Fourth component </h3>
            <h4>FInal Name is - {props.name}</h4>
        </div>
    )
}

export default Compnent1
