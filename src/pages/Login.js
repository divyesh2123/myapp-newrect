import React, { useState } from 'react'

import axios from 'axios';
import { jsx } from '@emotion/react';

export default function Login() {

   const [data,setData]  = useState({

        "email" : "",
        "password" : ""

    })

    const submitData = (e)=> {

        e.preventDefault();

        axios.post("https://real-pear-fly-kilt.cyclic.app/accounts/authenticate",data)
        .then(y=> {

            localStorage.setItem("userItem", JSON.stringify(y.data));

          

        
        })

    }

    const onChange = (e)=> {


        setData({...data,[e.target.name] : e.target.value});

    }

  return (
    <div>
        <form onSubmit={submitData}>

                <input type='text' name='email' onChange={onChange} />

                  <input type='password' name='password'  onChange={onChange}/>

                  <input type='submit' value="Save" />


        </form>
    </div>
  )
}
