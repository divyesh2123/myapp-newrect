import React from 'react'
import EmployeeIneer from './EmployeeIneer';

export default function EmployeeList(props) {
    const {list,remove,setedi} = props;
  return (
    <table><tbody>{
        
            list?.map((value,index)=> {

                return (<EmployeeIneer mydata = {value}
                      del={remove} ind={index} edit={setedi}></EmployeeIneer>)
            })
        } </tbody></table>
  )
}
