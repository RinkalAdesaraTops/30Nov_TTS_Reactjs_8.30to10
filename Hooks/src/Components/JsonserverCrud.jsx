import React,{useEffect, useState} from 'react'
import axios from 'axios'

const JsonserverCrud = () => {
  const [data,setData] = useState({
    name:"",
    age:"",
    salary:"",
    id:""
  })
  const [userData,setUserData] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:8000/users')
    .then((res)=>setUserData(res.data))
  })
  const handleChange = (e)=>{
    //let arr = ["sfdf","rtuyut","fjskdfh","eritueri"]
    // let [a,b,c,d] = arr
    // let [a,...b] = arr
    //e.target.value -- e.target.name
    // const {name,value} = e.target
    let n = e.target.name
    let v = e.target.value
    setData({
      ...data,
      [n]:v
    })
  }
  const saveData = (e)=>{
    e.preventDefault();
    axios.post('http://localhost:8000/users',data)
    .then((res)=>console.log(res))

    setData({
      name:"",
      age:"",
      salary:""
    })
  }
  const delData = (id)=>{
    axios.delete('http://localhost:8000/users/'+id)
    .then((res)=>console.log(res))
  }
  const editData = (id)=>{
    axios.patch('http://localhost:8000/users/'+id)
    .then((res)=>setData({
        name:res.data.name,
        age:res.data.age,
        salary:res.data.salary,
        id:res.data.id
    }))
  }
  return (
    <div>
      <h3>User Information</h3>
      <form action="#" method="post" onSubmit={ id ? updateData :saveData}>
        Name: <input type="text" name="name" id="" value={data.name} onChange={handleChange}/> 
        Age: <input type="number" name="age" id="" value={data.age} onChange={handleChange}/> 
        Salary: <input type="number" name="salary" id="" value={data.salary} onChange={handleChange}/> 
        <input type="submit" value={ id!=='' ? "Update Data":"Save Data" } />
      </form>
      <br />
      <table>
        <tr>
          <td>Id</td>
          <td>Name</td>
          <td>Age</td>
          <td>Salary</td>
          <td>Action</td>
        </tr>
        {
          userData.map((i)=>{
            return (
              <tr>
                <td>{i.id}</td>
                <td>{i.name}</td>
                <td>{i.age}</td>
                <td>{i.salary}</td>
                <td><button onClick={()=>editData(i.id)}>Edit</button><button onClick={()=>delData(i.id)}>Delete</button></td>
              </tr>
            )
          })
        }
      </table>
    </div>
  )
}

export default JsonserverCrud
