import React, { useEffect, useState } from 'react'
import axios from 'axios'

const AxiosApi = () => {
    const [data,setData] = useState([])
    useEffect(()=>{
       axios.get('https://fakestoreapi.com/products')
       .then((res)=>setData(res.data))
    })
    const delData = (id)=>{
        axios.delete('https://fakestoreapi.com/products/'+id)
        .then((res)=>console.log(res))
    }
  return (
    <div>
      <h3>Axios API Example</h3>
      <table border={'2'}>
        <tr>
            <td>Id</td>
            <td>Title</td>
            <td>Category</td>
            <td>Price</td>
            <td>Description</td>
            <td>Image</td>
            <td>Action</td>
        </tr>
        {
            data && data.map((i)=>{
                return (
                    <tr>
                        <td>{i.id}</td>
                        <td>{i.title}</td>
                        <td>{i.category}</td>
                        <td>{i.price}</td>
                        <td>{i.description}</td>
                        <td><img src={i.image} height={'50px'} width={'50px'}/></td>
                        <td><button onClick={()=>delData(i.id)}>Delete</button></td>
                    </tr>
                )
            })
        }
      </table>
    </div>
  )
}

export default AxiosApi
