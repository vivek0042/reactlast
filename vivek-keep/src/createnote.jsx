import react, { useState } from 'react'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const Createnote=(props)=>{
    const[note,setnote]=useState({
        title:"",
        content:""
    });
    const press=()=>{                           {/*now when we reach pass we only call that passnote */}
        props.passnote(note);
        setnote({
            title:"",
            content:"",
        })
    };


    const inputEvent=(event)=>{
        const value=event.target.value;
        const name=event.target.name

        setnote((prevalue)=>{
          return{

            ...prevalue,
            [name]:value,
          };
        })

    }
    return(
        <>
        <div className='main_notes'>
            <form>
                <input type="text" name="title" value={note.title} onChange={inputEvent} placeholder='Title' autoComplete='off'/>
                <textarea rows="" columns="" name="content" value={note.content} onChange={inputEvent} placeholder="please enter your note"></textarea>
                <Button onClick={press}>                     {/*In this when we click this button then we go for press function. */}
                   <AddIcon/>

                </Button>
            </form>
        </div>

        </>
    )
}
export default Createnote