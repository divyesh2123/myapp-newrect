import React, { useEffect, useState } from 'react'
import axios from 'axios';
import authFetch from '../axiosbase/intersepctor';

export default function Accounts() {

   const [data,setData]=  useState([]);

   useEffect(()=> {

    authFetch.get("/accounts")
    .then(y=> {

        console.log(y);
    });
   },[])
  return (
    <div>Accounts</div>
  )
}
