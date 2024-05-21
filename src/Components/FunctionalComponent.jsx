import React, { useState } from 'react'

export const FunctionalComponent = () => {
    const [name,setName] = useState("RInkal")
    const [count,setCount] = useState(0)
  return (
    <>
      <div>FunctionalComponent</div>
      <h3>My functional Component -- {name}</h3>
      <button onClick={()=>setName("Test")}>SetName</button>
      <h3>Counter is - {count}</h3>
      <button onClick={()=>setCount(count+1)}>Add</button>
    </>
  )
}
