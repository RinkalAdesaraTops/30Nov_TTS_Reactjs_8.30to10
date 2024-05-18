import React, { useState } from 'react'

export const FunctionalComponent = () => {
    const [name,setName] = useState("RInkal")
  return (
    <>
    <div>FunctionalComponent</div>
    <h3>My functional Component -- {name}</h3>
    <button onClick={()=>setName("Test")}>SetName</button>
    </>
  )
}
