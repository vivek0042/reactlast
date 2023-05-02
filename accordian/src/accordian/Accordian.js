import react ,{useState} from 'react'
import {question} from './Api'
import Myaccordian from './Myaccordian'
import './Accordian.css'

const Accordian=()=>{
    const[data,setdata]=useState(question)
    return(
        <div className='main'>
        
        <section>
           <h1>All student expertise</h1>
            {
                data.map((curElement)=>{
                    const {id}=curElement
                    return <Myaccordian key={id}{...curElement}/>;
                })
            }
        </section>    
        </div>  
    )
}
export  default Accordian