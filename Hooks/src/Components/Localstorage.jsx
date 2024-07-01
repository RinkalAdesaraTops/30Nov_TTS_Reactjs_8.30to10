import React from 'react'

const Localstorage = () => {
    const [data,setData] = useState({
        name:'',
        age:''
    })
    const [allInfo,setAllInfo] = useState([])
    const handleChange = (e)=>{
        const {name,value} = e.target
        setData({
            ...data,
            [name]:value
        })
    }
    const saveData = ()=>{
        setAllInfo([
            ...allInfo,
            data
        ])
        localStorage.setItem('userInfo',JSON.stringify(allInfo))
        //let data1 =JSON.parse(localStorage.getItem('userInfo'))
    }
  return (
    <div>
      Name: <input type="text" name="name" id="" value={data.name} onChange={handleChange}/>
      age: <input type="number" name="age" id="" value={data.age} onChange={handleChange}/>
      <button onClick={saveData}>Save</button>
    </div>
  )
}

export default Localstorage
