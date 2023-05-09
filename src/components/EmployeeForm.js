import React, { useEffect, useState } from 'react'

export default function EmployeeForm(props) {
    const {list,setlist,edi,setedi} = props;

    useEffect(()=> {

        setData(list[edi])

    },[props])

   const [data,setData] = useState({
        firstname: "",
        lastname : ""
    })

    const handle = (e)=> {

        setData({...data,[e.target.name] : e.target.value});



    }

    const submitData = (e)=> {

        e.preventDefault();
        let d = [...list];
        d.push(data);
        setlist(d);
    }
  return (
    <div>
            <form onSubmit={submitData}>

                <input type='text' name='firstname'  onChange={handle} value={data.firstname}/>
                <input type='text' name='lastname'  onChange={handle} value={data.lastname} />

                <input type='submit'  value="save"/>


            </form>

    </div>
  )
}
