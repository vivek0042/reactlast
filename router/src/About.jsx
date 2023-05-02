import react from 'react'
import { useState } from 'react'
import finalPropsSelectorFactory from 'react-redux/es/connect/selectorFactory';
import './App.css'
// import resume from './resume.jsx'
import Sresult from './sresult';

const About=()=>{
    const[num,setnum]=useState("");
    const inputEvent=(event)=>{
        setnum(event.target.value);
        console.log(event.target.value)

    }
    return(
        <>
        <div className='in'>
            Search:<input type='text ' placeholder='search anything' value={num} onChange={inputEvent}></input>
            <Sresult name1={num}/>
        </div> 

        </>


    )
}
export default About