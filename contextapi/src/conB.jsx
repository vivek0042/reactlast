import react, { useContext, useEffect, useState } from 'react'
import {firstname,lastname} from './App'
const Conb=(props)=>{
  const fname=useContext(firstname);
  const lname=useContext(lastname);
  const[num,setnum]=useState(0);
  // now we use effect for add and alert at same time
  useEffect(()=>{
    alert("i'm clicked")
    document.title=`you clicked me ${num}`
  });

  return(
    <>
      {/* <firstname.Consumer>
        {(fname)=>{
            return(
                <lastname.Consumer>
                    {(lname)=>{
                        return(
                            <h1>My name is {fname}{lname}</h1>
                        )
                    }
                    }
                </lastname.Consumer>
            )
        }}
      </firstname.Consumer>
       */}
       <h1>My name is {fname} {lname}</h1>
       <button onClick={()=>{setnum(num+1)}}>add ho raha hai{num}</button>
        
        
    </>
  )

}
export default Conb
