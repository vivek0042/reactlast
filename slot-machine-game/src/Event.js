import react, { useState } from 'react'

const Event=()=>{
    const purple="#8e44ad"
    // now we use state
    const state=useState()
    const[bg,setbg]=useState(purple);
    const[name,setname]=useState("Click Me")

    const bgChange=()=>{
        let newbg="#34495e"
        setbg(newbg);
        let newName="Ouch"
        setname(newName);
    }

    return(
        <>
            <div style={{backgroundColor:bg}}> 
                <div style={{backgroundColor:bg}}>              
                    <button onClick={bgChange}>{name}</button>
                </div>  
            </div>
        </>    
    )
}

export default Event