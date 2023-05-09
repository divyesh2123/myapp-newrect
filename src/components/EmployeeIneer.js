import React from 'react'

export default function EmployeeIneer(props) {

    
    console.log(props.ind);
  return (
    <tr><td>{props.mydata.firstname}</td><td>{props.mydata.lastname}</td>
    <td><button onClick={()=>props.del(props.ind)}>Delete</button></td>
    <td><button onClick={()=>props.edit(props.ind)}>Edit</button></td>
    </tr>
  )
}
