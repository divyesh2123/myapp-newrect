import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';


export default function TutorialForm() {

   const [tutorial,settutorial] = useState({
    title : "",
    description : "",
    published : false
    })

    const notify = () => toast("added!");

    const handleSubmit = (e)=> {
        
        e.preventDefault();

        axios.post("https://frail-plum-crayfish.cyclic.app/api/tutorials",tutorial)
        .then(y=> {
            notify();
            console.log(y);
        })

    }

    const handler = (e)=> {

        if(e.target.type != "checkbox")
        {

        settutorial({...tutorial,[e.target.name] : e.target.value});
        }
        else
        {settutorial({...tutorial,[e.target.name] : e.target.checked});

        }


    }
  return (
    <div>
        
        <form onSubmit={handleSubmit}>

            <input type='text' name='title'  value={tutorial.title} onChange={handler}/>
            <input type='text'  name ='description' value={tutorial.description} onChange={handler}/>
            <input type='checkbox' name='published' checked={tutorial.published} onChange={handler}/>

            <input type='submit' value="save" />
        </form>



    </div>
  )
}
