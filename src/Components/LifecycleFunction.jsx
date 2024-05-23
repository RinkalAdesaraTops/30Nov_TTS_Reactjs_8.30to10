import React,{useState,useEffect} from 'react'

const LifecycleFunction = (props) => {
    const [name,setName] = useState("Rinkal")
    useEffect(() => {
        setTimeout(()=>{
            setName("Testingg")
        },3000)       
        console.log('use effect called...');
    })
  return (
    <div>
      <h3>Function based Lifecycle</h3>
        <h4>Name is -- {name}</h4>
    </div>
  )
}

export default LifecycleFunction
