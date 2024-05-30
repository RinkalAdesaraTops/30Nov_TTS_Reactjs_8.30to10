import React, { useState } from 'react'

const CRUDExample = () => {
    const [id,setId] = useState("")
    const [data,setData] = useState([])
    const [info,setInfo] = useState({
        name:"",
        age:"",
        course:""
    })
    const handleChange = (e)=>{
        const {name,value} = e.target
        // let name = e.target.name
        // let value = e.target.value
        setInfo({
            ...info,
            [name]:value
        })
    }
    const saveData = ()=>{
        setData([
            ...data,
            info
        ])
        console.log(data);
        setInfo({
            name:"",
            age:"",
            course:""
        })
        
    }
    //Delete Data
    const delData = (id)=>{
        let data1 = data.filter((i,index)=>{
            return index!=id;
        })
        setData(data1)
    }

    //Edit Data
    const editData = (id)=>{
        let data1 = data.filter((i,index)=>{
            return index==id;
        })
        console.log(data1);
        info.name = data1[0].name
        info.age = data1[0].age
        info.course = data1[0].course
        setId(id)
    }
    const updateData = ()=>{
        let data1 = data.map((i,index)=>{
                if(index == id){
                    i.name = info.name
                    i.age = info.age
                    i.course = info.course
                }
                return i;
        })
        setData(data1)
        setId("")
        setInfo({
            name:"",
            age:"",
            course:""
        })
    }
  return (
    <>
    <div>
        <h3>Crud Example</h3>
        <h3>User Form</h3>
      Name: <input type='text' name='name' value={info.name} onChange={handleChange}/>
      <br /><br />
      Age: <input type='number' name='age' value={info.age} onChange={handleChange}/>
      <br /><br />
      Course: <input type='text' name='course' value={info.course} onChange={handleChange}/>
      <br /><br />
    <button onClick={id? updateData : saveData}>{id ? "Update Data":"Save Data"}</button>
    </div>
    <table border={'2'}>
    <tr>
        <td>Id</td>
        <td>Name</td>
        <td>Age</td>
        <td>Course</td>
        <td>Action</td>
    </tr>
    {
        data && data.map((i,index)=>{
            return (
                <tr>
                    <td>{index+1}</td>
                    <td>{i.name}</td>
                    <td>{i.age}</td>
                    <td>{i.course}</td>
                    <td><button onClick={()=>editData(index)}>Edit</button> <button onClick={()=>delData(index)}>Delete</button></td>
                </tr>
            )
        })
    }
</table>
</>
  )
}

export default CRUDExample
