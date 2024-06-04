import React, { useEffect, useState } from 'react'
import useUrl from './useUrl'

const ApiComponent = () => {
    const data = useUrl('https://fakestoreapi.com/products')
   const  catData = useUrl('https://fakestoreapi.com/products/categories')
   console.log(catData);
  return (
    <div>
      <h3>Api Component</h3>
      <select name='category'>
        <option>--Select Category--</option>
            {
                catData.map((i,index)=>{
                    return <option>{i}</option>
                })
            }
      </select> <br /><br />
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
