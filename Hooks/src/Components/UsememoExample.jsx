import React,{useState  } from 'react'

const UsememoExample = () => {
    const [name,setName] = useState("")
    const [age,setAge] = useState("")
    const [id,setId] = useState("")
    const [data,setData] = useState([])
    //Insert
    const saveData = ()=>{
        setData([
            ...data,{
                name:name,
                age:age
            }
        ])
        setName('')
        setAge('')
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
        setName(data1[0].name)
        setAge(data1[0].age)
        setId(id)
    }
    const updateData = ()=>{
        let data1 = data.map((i,index)=>{
                if(index == id){
                    i.name = name
                    i.age = age
                }
                return i;
        })
        setData(data1)
    }
  return (
    <>
    <div>
      <h3>User Form</h3>
      Name: <input type='text' name='name' value={name} onChange={(e)=>setName(e.target.value)}/>
      <br /><br />
      Age: <input type='age' name='age' value={age} onChange={(e)=>setAge(e.target.value)}/>
      <br /><br />
    <button onClick={id? updateData : saveData}>{id ? "Update Data":"Save Data"}</button>
    </div>
    <table border={'2'}>
        <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Age</td>
            <td>Action</td>
        </tr>
        {
            data && data.map((i,index)=>{
                return (
                    <tr>
                        <td>{index+1}</td>
                        <td>{i.name}</td>
                        <td>{i.age}</td>
                        <td><button onClick={()=>editData(index)}>Edit</button> <button onClick={()=>delData(index)}>Delete</button></td>
                    </tr>
                )
            })
        }
    </table>
    </>
  )
}

export default UsememoExample
