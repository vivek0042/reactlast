import react from 'react'
import './App.css'
// import finalPropsSelectorFactory from 'react-redux/es/connect/selectorFactory'
import DeleteIcon from '@mui/icons-material/Delete';

const Todolist=(props)=>{
    
    return(
        <>
        <div className='list'>
                <button onClick={()=>{props.onSelect(props.id)}}><DeleteIcon/></button>
                <li>{props.text}</li>
        </div>        
        </>
    )
}
export default Todolist