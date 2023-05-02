import react,{useState} from 'react'
import './Accordian.css'

const Myaccordian=({Question,expert})=>{
    const[show,setShow]=useState(false)
    return(
        <>


            <div className='main-heading'>
                
                <button className='button1' onClick={()=>setShow(!show)}>{show?"➖":"➕"}</button>
                <h3>{Question}</h3>
                
            </div> 
            {show && <p>{expert}</p> }
        </>
    )
}
export default Myaccordian