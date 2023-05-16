import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function Comments() {

    const [data,setData] = useState([]);
    useEffect(()=> {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(y=> {
            setData(y.data);
        })

    },[])

    console.log(data);
  return (
    <div>Comments</div>
  )
}
