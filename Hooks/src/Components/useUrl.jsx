import React, { useState,useEffect } from 'react'

const useUrl = (url) => {
    const [data,setData] = useState([])
        fetch(url)
        .then(res=>res.json())
        .then(json=>setData(json))

  return (
    data
  )
}

export default useUrl
