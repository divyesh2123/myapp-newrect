import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Display() {


   const [data,setData] = useState([])

   useEffect(()=> {

    axios.get("https://frail-plum-crayfish.cyclic.app/api/tutorials?page=1&size=2")
    .then(y=> {
        setData(y.data.tutorials);
    })

   })

  return (
    <div>{

        data.map((value)=> {

            return(<div>{value.title}</div>)

        })
        
        
        }</div>
  )
}
