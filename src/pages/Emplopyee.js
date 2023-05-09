import React, { useState } from 'react'
import EmployeeForm from '../components/EmployeeForm'
import EmployeeList from '../components/EmployeeList'

export default function Emplopyee() {
    
  const [data,setData] =  useState([])

  const [edit,setedit] = useState(-1); 


  const removeItem = (index)=> {

    let p = [...data];
    p.splice(index,1);

    setData(p);

  }
  return (
    <>

    <EmployeeForm list={data}  setlist={setData} edi={edit} setedi={setedit}></EmployeeForm>
    <EmployeeList list={data} remove={removeItem} setedi={setedit}></EmployeeList>
    </>
  )
}
