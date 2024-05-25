import React from 'react'
import { useNavigate } from 'react-router-dom'

export const About = () => {
  const navigate = useNavigate()
  return (
    <>
    <div>About Page</div>
    <button onClick={()=>navigate(-1)}>Back</button>
    </>
  )
}
