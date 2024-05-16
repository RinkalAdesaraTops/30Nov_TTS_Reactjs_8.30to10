import React,{Fragment} from 'react'

const Second = (props) => {
    const listData = props.myarray.map((i,index)=>{
                        return <li key={index}>{i}</li>
                    })
   
  return (
    
    <>
    <div>Second</div>
    <h3>My Second Component</h3>
    <h4>My Name is :  {props.myname} -- {props.id}</h4>
    <ul>
        {listData}
    </ul>
    </>
  )
}

export default Second
