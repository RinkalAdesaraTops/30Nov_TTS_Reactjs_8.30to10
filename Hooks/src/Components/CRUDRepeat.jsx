import React, { useState } from 'react'

const CRUDRepeat = () => {
    const [data,setData] = useState({
        ename:'',
        salary:'',
        designation:''
    })
    const [empData,setEmpData] = useState([])
    const [id,setId] = useState('')
    const handleChange = (e)=>{
        const {name,value} = e.target
        setData({
            ...data,
            [name]:value
        })
    }
    const saveData = (e)=>{
        e.preventDefault();
        setEmpData([
            ...empData,
            data
        ])

        setData({
            ename:'',
            salary:'',
            designation:''
        })
    }
    const delData = (id)=>{
        let data1 = empData.filter((i,index)=>{
            return index!=id
        })
        setEmpData(data1)
    }
    const editData = (id)=>{
        let data1 = empData.filter((i,index)=>{
            return index==id
        })
        let info = data1[0]
        setData({
            ename:info.ename,
            salary:info.salary,
            designation:info.designation
        })
        setId(id)
    }
    const updateData = (e)=>{
        e.preventDefault();
        let finalResult = empData.map((i,index)=>{
            if(index == id){
                i.ename = data.ename
                i.salary = data.salary
                i.designation = data.designation
            }
            return i;
        })
        setEmpData(finalResult)
        setData({
            ename:'',
            salary:'',
            designation:''
        })
        setId('')
    }
  return (
    <div>
      <h3>Employee - CRUD Example</h3>
      <form action='#' onSubmit={id?updateData :saveData}>
        Name:<input type='text' name='ename' value={data.ename} onChange={handleChange}/>
        Salary:<input type='text' name='salary' value={data.salary} onChange={handleChange}/>
        Designation:<input type='text' name='designation' value={data.designation} onChange={handleChange}/>
        <button type='submit'>{ id ? "Update Data": "Save Data"}</button>
      </form>

      <table>
        <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Salary</td>
            <td>Designation</td>
            <td>Action</td>
        </tr>
        {
            empData.map((i,index)=>{
                return(
                    <tr>
                        <td>{index+1}</td>
                        <td>{i.ename}</td>
                        <td>{i.salary}</td>
                        <td>{i.designation}</td>
                        <td>
                        <button onClick={()=>editData(index)}>Edit</button>
                            <button onClick={()=>delData(index)}>Delete</button></td>                    
                    </tr>
                )
            })
        }
      </table>
    </div>
  )
}

export default CRUDRepeat
