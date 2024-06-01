import React, { memo } from 'react'

const TaskComponent = ({saveData,data}) => {
    console.log('Task component called');
  return (
    <div>
     
    <button onClick={saveData}>Save Data</button>
    <table border={'2'}>
        <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Age</td>
            
        </tr>
        {
            data && data.map((i,index)=>{
                return (
                    <tr>
                        <td>{index+1}</td>
                        <td>{i.name}</td>
                        <td>{i.age}</td>
                       
                    </tr>
                )
            })
        }
    </table>
    </div>
  )
}

export default memo(TaskComponent)
