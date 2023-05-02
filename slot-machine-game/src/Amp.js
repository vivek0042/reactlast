import react, { useState } from 'react'

const Amp=()=>{
    const state=useState();
    let [count,setCount]=useState(20);   //this is state for updating count value.
 const IncNum=()=>{
        setCount(count+1);            
    }
return(
        <>
            <h1>{count} </h1>
            <button onClick={IncNum}>Click Me</button>
        </>
    )
}
export default Amp;