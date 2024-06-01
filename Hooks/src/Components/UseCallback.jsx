import React,{useCallback, useState} from 'react'
import TaskComponent from './TaskComponent'

const UseCallback = () => {
    const [count,setCount] = useState(0)
    const [info,setInfo] = useState({
      name:'',
      age:''
    })
    // const [name,setName] = useState("")
    // const [age,setAge] = useState("")
    const [data,setData] = useState([])
    const addCounter = ()=>{
        setCount(count+1)
    }
    const handleChange = (e)=>{
      const {name,value} = e.target
      setInfo({
        ...info,
        [name]:value
      })
     
    }
    const saveData = useCallback(()=>{
      setData(prevData => [
        ...prevData,
        info
      ]);
    }, [info]);
  return (
    <div>
      <h3>Use Callback Hooks</h3>
      <h3>Counter is -- {count}</h3>
      <button onClick={addCounter}>Add Count</button>
      <h3>User Form</h3>
      Name: <input type='text' name='name' value={info.name} onChange={handleChange}/>
      <br /><br />
      Age: <input type='age' name='age' value={info.age} onChange={handleChange}/>
      <br /><br />
      <TaskComponent saveData={saveData} data={data}/>
      
    </div>
  )
}

export default UseCallback
