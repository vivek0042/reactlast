import react from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { PropaneSharp } from '@mui/icons-material';

const Note=(props)=>{
    const deli=()=>{
        props.deleteitem(props.id)

    }
   
    return(
        <>
        <div className='note'>
            <h1>{props.title}</h1>
            <br/>
            <p>{props.content}</p>
            <button onClick={deli}>
                <DeleteOutlineIcon className='del'/>
            </button>    

        </div>

        </>
    )
}
export default Note