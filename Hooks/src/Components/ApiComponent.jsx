import React, { useEffect, useState } from 'react'
import useUrl from './useUrl'
import axios from 'axios'

const ApiComponent = () => {
    const [data,setData] = useState([])
    const [catData,setCatData] = useState([])
    // const data = useUrl('https://fakestoreapi.com/products')
  //  const  catData = useUrl('https://fakestoreapi.com/products/categories')
  useEffect(()=>{
    fetchData()
    categoryData()
 },[])
   const fetchData = ()=>{
      axios.get('https://fakestoreapi.com/products')
      .then((res)=>setData(res.data))
      console.log('fetch data called..');     

   }
   const categoryData = ()=>{
    axios.get('https://fakestoreapi.com/products/categories')
    .then((res)=>setCatData(res.data))
 }
  
   const getCategory = (e)=>{
      let cat = e.target.value
      if(cat !== ''){
        axios.get('https://fakestoreapi.com/products/category/'+cat)
        .then((res)=>setData(res.data))        
      } else {
        fetchData();
      }
   }
   const getPriceOrder = (e)=>{
    let order = e.target.value
    let sortedData = [...data];
      if(order==1){
        //asc
        sortedData.sort((a,b)=>{
          return a.price-b.price
        })  
            
      } else if(order == 2){
        //desc
        sortedData.sort((a,b)=>{
          return b.price-a.price
        })
      } else {
        fetchData()
      }
      setData(sortedData)
      
   }
  return (
    <div>
      <h3>Api Component</h3>
      <select name='category' onChange={getCategory}>
        <option value=''>--Select Category--</option>
            {
                catData.map((i,index)=>{
                    return <option value={i}>{i}</option>
                })
            }
      </select> 
      
      <select name='priceorder' onChange={getPriceOrder}>
        <option value=''>--Select Order--</option>
        <option value="1">Asc</option>
        <option value="2">Desc</option>
      </select> 
      <br /><br />
      <table border={'2'}>
        <tr>
            <td>Id</td>
            <td>Title</td>
            <td>Category</td>
            <td>Price</td>
            <td>Description</td>
            <td>Image</td>
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

                    </tr>
                )
            })
        }
      </table>
    </div>
  )
}

export default ApiComponent
