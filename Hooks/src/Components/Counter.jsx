import React, { useEffect, useRef, useState } from 'react'

const Counter = () => {
    // let a=useRef(1)
    const [count,setCount] = useState(0)
    const [data,setData] = useState([])
    const addCounter = ()=>{
        setCount(count+1)
        // a.current=a.current+1
        // console.log(a);

    }
    useEffect(()=>{
      fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setData(json))
          
    })
  return (
    <>
    <div>
        <h3>Counter Example</h3>
        <h4>Counter is -- {count}</h4>
        <button onClick={addCounter}>Click</button>
        {/* <h4>A is -- {a.current}</h4> */}
    </div>
    <table>
      <tr>
        <td>Id</td>
        <td>Title</td>
        <td>Price</td>
      </tr>
      {
        data && data.map((i)=>{ 
          return(
            <tr>
        <td>{i.id}</td>
        <td>{i.title}</td>
        <td>{i.price}</td>
      </tr>
          )
        })
      }

    </table>
    </>
  )
}

export default Counter
