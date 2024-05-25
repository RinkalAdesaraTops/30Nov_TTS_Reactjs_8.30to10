import React, { useRef, useState } from 'react'

const Counter = () => {
    let a=useRef(1)
    const [count,setCount] = useState(0)
    const addCounter = ()=>{
        setCount(count+1)
        a.current=a.current+1
        console.log(a);

    }
  return (
    <div>
        <h3>Counter Example</h3>
        <h4>Counter is -- {count}</h4>
        <button onClick={addCounter}>Click</button>
        <h4>A is -- {a.current}</h4>
    </div>
  )
}

export default Counter
